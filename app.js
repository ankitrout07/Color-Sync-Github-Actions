const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__current_dir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});