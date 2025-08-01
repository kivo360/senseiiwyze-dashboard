module.exports = {
    version: 1.8,
    locale: {
        source: "en",
        targets: ["es", "fr", "de", "ja"]
    },
    buckets: {
        json: {
            include: ["src/messages/[locale].json"],
            exclude: []
        }
    },
    provider: {
        id: "groq",
        model: "qwen/qwen3-32b",
        prompt: "Translate the following text to the target language while maintaining meaning and context.",
        apiKey: process.env.GROQ_API_KEY
    }
};
