const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBbxqBY2cV5maX - KNS2ahp9R7jpHwa2SR0');

// ...

const generateQuestions = async (req, res) => {
    try {

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "Genera una pregunta de cultura general y devuelve la respuesta en formato JSON con 4 alertantivas, de las cuales 1 debe ser la correcta, debe tener el siguiente modelo de ejemplo: { \r\n  \"pregunta\": \"¿Cuál es la capital del departamento de Cusco?\",\r\n  \"alternativas\": [\r\n    \"Arequipa\",\r\n    \"Huancayo\",\r\n    \"Cusco\",\r\n    \"Ica\"\r\n  ],\r\n  \"correcta\": \"Cusco\"\r\n}";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json(text);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    generateQuestions
}

