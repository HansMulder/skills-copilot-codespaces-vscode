// create webserver
const express = require('express');
const app = express();
const port = 3000;

// create comments array
const comments = [
    { username: 'Tammy', comment: 'lol that is so funny!'},
    { username: 'FishBoi', comment: 'Plz delete your account, Tammy'},
    { username: 'username', comment: 'I am a bot.'},
    { username: 'Tammy', comment: 'I am not a bot.'},
];

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    res.render('home');
});

// comments page
app.get('/comments', (req, res) => {
    res.render('comments', { comments: comments });
});

// listen on port 3000
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

//