var http = require('http');
var express = require('express');
var RED = require('node-red');
const Primus = require('primus');

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use('/', express.static('public'));

// Create a server
var server = http.createServer(app);


const primus = new Primus(server, {/* options */});

primus.on('connection', function (spark) {
    console.log('there is a connection');
});

// Create the settings object - see default settings.js file for other options
var settings = {
    userDir: './userDir',
    adminAuth: {
        type: 'credentials',
        users: [{
            username: 'admin',
            password: '$2a$08$qgbU/.vT74vjgh1kIJTEzehKQsph2T.CkrD9e/Efm/RgDm/1kqAMK',
            permissions: "*"
        }]
    },
    functionGlobalContext: {
        osModule: require('os'),
        cheerio: require('cheerio'),
        primus: primus
    },
    httpAdminRoot: '/admin',
    httpNodeRoot: '/api',
    httpStatic: './public',
    paletteCategories: ['logic', 'subflows', 'input', 'output', 'function', 'social', 'storage', 'analysis', 'advanced'],
};

RED.init(server,settings);

// Initialise the runtime with a server and settings

app.use(settings.httpAdminRoot,RED.httpAdmin);
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(1880);

RED.start();
