const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    req.send('Server is Running');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});