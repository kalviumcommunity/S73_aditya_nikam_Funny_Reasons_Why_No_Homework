const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.json({
        message: "Pong",
    });
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome </h1>");
});



app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
