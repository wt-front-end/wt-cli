const express = require('express');
const config = require('./config');
const chatgpt = require('./chatapt');
const notes = require('./notes');
const terminal = require('./terminal');
var router = express.Router();

// config
router.get('/getJson', config.getJson);
router.get('/pwdCheck', config.pwdCheck);
router.get('/config', config.config);
// ai
router.post('/chatgpt', chatgpt);
// note
router.get('/notes/tree', notes.getTree);
// terminal
router.get('/cmd', terminal.cmd);
module.exports = router;