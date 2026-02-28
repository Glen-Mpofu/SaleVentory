const express = require("express") // -> Web App Framework for Node.js for building webservers and APIs
const app = express()
const cors = require("cors")
const port = process.env.PORT || 6698
const axios = require("axios")

//  this is for the .env file
require("dotenv").config();

// listening on on our port
app.listen(port, () => {
    console.log("Listening in on Port: " + port)
})

// setting the limit for the data being tranfered via JSON through the APIs
app.use(express.json({ limit: "20mb" }))

app.use(cors({
    origin: true,
    credentials: true
}))

app.get("/", async (req, res) => {
    console.log("Server is UP")
    res.send({ data: "server is up" })
})

app.post("/classifyImage", async (req, res) => {
    console.log(req.body)
    const image = req.body.image

    const prompt = `
        You are a Food Recognistion Ai. Please Analyze the image and respond ONLY with 
        a valid JSON. Do not include commentary, explanations.

        Identify the food as a generic item only: 
        "apple", "peach", "banana" etc
        
        Return a JSON using the exact structure:
        {
            name: "string"
        }
    `;

    const groqResponse = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: prompt },
                        {
                            type: "image_url",
                            image_url: { url: image }
                        }
                    ]
                }
            ]
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
            }
        }
    );

    const rawWithQuotes = groqResponse.data.choices[0].message.content
    //console.log(rawWithQuotes)
    const cleanedUp = rawWithQuotes
        .replace(/```json/gi, "")
        .replace(/```/g, "")
        .trim()
    let finalJson
    try {
        finalJson = JSON.parse(cleanedUp)
    } catch (error) {
        console.error("Failed to parse the message returned by the AI model: " + error)
        res.send({ status: "error", data: "Failed to parse the message returned by the AI model" })
    }

    console.log(finalJson)
    res.send({ status: "ok", data: finalJson })
})