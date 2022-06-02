const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
// Json Body Middleware
app.use(express.json());
app.get('/', (req, res) => { res.send('Hello World!') });

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server started on port ${PORT}`)
})