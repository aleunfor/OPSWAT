const fetch = require('node-fetch')

module.exports = fetch(`${process.env.ENDPOINT}`, {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "apiKey": process.env.API_KEY
    }
}).then(res => {
    if (!res.ok) throw new Error("Error Response")
    return res.json()
}).then(res => {
    return res.hashes
})