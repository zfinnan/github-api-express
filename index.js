// modules
const express = require('express');
const axios = require('axios');


//  create the app
const app = express();

//  create a PORT
const PORT = process.env.PORT || 3000;

//  create an SEI route
app.get('/', (req, res) => {
    

    // Access API endpoint from Github
    axios.get('https://api.github.com/users/zfinnan')
    .then(response => {
        // print inside of terminal
        // console.log(response.data);
        const zachObject = {
            login: response.data.login,
            url: response.data.html_url,
            name : response.data.name
        };
        console.log(zachObject);

        res.send(zachObject);
    })
});

app.get('/nitishdayal', (req, res) => {
    

    // Access API endpoint from Github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        // print inside of terminal
        // console.log(response.data);
        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name : response.data.name
        };
        console.log(nitishObject);

        res.send(nitishObject);
    })
});

app.get('/coreywilson', (req, res) => {
    

    // Access API endpoint from Github
    axios.get('https://api.github.com/users/CoreyWilson319')
    .then(response => {
        // print inside of terminal
        // console.log(response.data);
        const coreyObject = {
            login: response.data.login,
            url: response.data.html_url,
            name : response.data.name
        };
        console.log(coreyObject);

        res.send(coreyObject);
    })
});

app.get('/tylerdance', (req, res) => {
    

    // Access API endpoint from Github
    axios.get('https://api.github.com/users/tylerdance')
    .then(response => {
        // print inside of terminal
        // console.log(response.data);
        const tylerObject = {
            login: response.data.login,
            url: response.data.html_url,
            name : response.data.name
        };
        console.log(tylerObject);

        res.send(tylerObject);
    })
});

app.get('/thomasgilbert', (req, res) => {
    

    // Access API endpoint from Github
    axios.get('https://api.github.com/users/tcgilbert')
    .then(response => {
        // print inside of terminal
        // console.log(response.data);
        const thomasObject = {
            login: response.data.login,
            url: response.data.html_url,
            name : response.data.name
        };
        console.log(thomasObject);

        res.send(thomasObject);
    })
});

app.get('/paulwilliams', (req, res) => {
    

    // Access API endpoint from Github
    axios.get('https://api.github.com/users/codebypaul')
    .then(response => {
        // print inside of terminal
        // console.log(response.data);
        const paulObject = {
            login: response.data.login,
            url: response.data.html_url,
            name : response.data.name
        };
        console.log(paulObject);

        res.send(paulObject);
    })
});



// Listen on a PORT
app.listen(PORT, () => {
    console.log(`You're vibing to the sounds on PORT ${PORT}`)
});