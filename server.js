const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to save a new leaderboard entry
app.post('/save-score', (req, res) => {
    const { name, score } = req.body;
    if (!name || !score) {
        return res.status(400).send('Name and score are required.');
    }
    const entry = `${name},${score}\n`;
    fs.appendFile('Leaderboard.txt', entry, (err) => {
        if (err) {
            return res.status(500).send('Failed to save score.');
        }
        res.send('Score saved!');
    });
});

app.get('/get-leaderboard', (req, res) => {
  fs.readFile('Leaderboard.txt', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading leaderboard');
    }
    const entries = data.trim().split('\n').map(line => {
      const [name, score] = line.split(',');
      return { name, score };
    });
    res.json(entries);
  });
});


app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});