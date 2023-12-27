
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const fs = require('fs')
const cors = require('cors');
var http = require('http');
var axios = require('axios');
const app = express();
const device = require('express-device');
const requestIp = require('request-ip');
const session = require('express-session');
require('./app/cors/global');

var cheerio = require("cheerio");
app.use(timeout(5 * 60 * 1000));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static('public'));
const path = require('path');
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: global.config.keyJWT,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));
const multer = require('multer');
const { cookie } = require('request-promise');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/public/uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + file.originalname
        cb(null, uniqueSuffix)
    }
})
let online = {
    value: 124,
    time: new Date().getTime()
}
const upload = multer({ storage: storage })
var server = http.createServer(app);

//config update file
/** @namespace global.config */
app.use(cors(global.config.cors));
//get device name
app.use(device.capture());
//get IP device
app.use(requestIp.mw());

app.use(function (err, req, res, next) {
    return res.send({ status: false, msg: "error", code: 700, data: err });
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.locals.token = req.session.token;
    next();
});
const delay = (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(), ms));

const url_dich = 'https://api-edge.cognitive.microsofttranslator.com/translate?from=ja&to=vi&api-version=3.0&includeSentenceLength=true'
app.use(express.static(__dirname + '/public'));

app.all('/client/:act', [middleware.verifyToken, middleware.check], async function (request, response) {

    let dataReponse = null;
    let dataError = null;
    try {

        let act = request.params.act.replace(/[^a-z0-9\_\-]/i, '').toLowerCase();
        let mod = (request.mod) ? request.mod : request.query.mod;
        let nameRole = request.body.userInfo ? request.body.userInfo.level : '';

        let authMethod = global.authMethod.check_function(request.method, act, mod, nameRole);
        /** @namespace request.files */

        request.body.files = request.files ? request.files : '';
        if (authMethod) {

            let controller = require('./app/modules/' + act + '/controller');
            if ((controller) && (controller[mod])) {
                let query = request.body;
                query.param = request.query;
                query.clientIp = request.clientIp;
                query.device = request.device;
                try {
                    dataReponse = await controller[mod](query);

                } catch (ex) {
                    console.log(ex);
                    dataReponse = { status: false, msg: "error", code: 700, data: [] };
                }
            } else {
                dataReponse = { status: false, msg: "error", code: 703, data: [] };
            }
        } else {
            dataReponse = { status: false, msg: "error", code: 701, data: [] };
        }
    } catch (sys) {
        console.log(sys)
        dataReponse = { status: false, msg: "error", code: 700, data: sys };
    }
    response.send(dataReponse)
});
app.post('/api/upload', upload.single('file'), [middleware.verifyToken, middleware.check], async (req, res) => {

    if (req.file  && req.body.userInfo) {
           let avt = req.file.filename
           await db("users").update('avatar',avt).where('Id',req.body.userInfo.Id)
   
        res.json({
            status: true, msg: "success", code: 0, data: req.file.filename
        })
    } else {
        res.json({
            status: false, msg: "error", code: 400, data: []
        })
    }

})
app.post('/apiupload', upload.single('single'), async function (request, response) {
    let dataReponse;
    try {
        const file = request.file

        if (!file) {
            return dataReponse = { status: false, msg: "error", code: 700, data: 'sys' };
        }
        let new_update = {
            url: file.filename

        }
        if (request.body.type == 'en') {
            const exp4 = JSON.stringify(new_update, null, 4);
            fs.writeFileSync(`./public/output/banneren.json`, exp4)
        }
        if (request.body.type == 'jp') {
            const exp4 = JSON.stringify(new_update, null, 4);
            fs.writeFileSync(`./public/output/bannerjp.json`, exp4)
        }
        if (request.body.type == 'vi') {
           
            const exp4 = JSON.stringify(new_update, null, 4);
            fs.writeFileSync(`./public/output/bannervi.json`, exp4)
        }

        dataReponse = {
            status: true,
            msg: "success",
            code: 0,
            data: file.filename
        }
    } catch (sys) {
        console.log(sys)
        dataReponse = { status: false, msg: "error", code: 700, data: sys };
    }
    response.send(dataReponse)
});
app.get('/banner/:id', async (req, res) => {
    let id = req.params.id
    let rawData = fs.readFileSync(`./public/output/bannervi.json`);

    if (id == 'en') {
        rawData = fs.readFileSync(`./public/output/banneren.json`);
    }
    if (id == 'jp') {
        rawData = fs.readFileSync(`./public/output/bannerjp.json`);
    }
    const data_last_update = JSON.parse(rawData);
    res.json({
        status: true,
        code: 0,
        data: data_last_update
    })
})
app.get('/online-curent', async (req, res) => {
    let current_time = new Date().getTime()
    if (current_time - online.time > 600000) {
        const min = -50;
        const max = 100;
        online = {
            value: 200 + Math.floor(Math.random() * (max - min + 1)) + min,
            time: current_time
        }
    }
    res.json({
        data: online.value,
        status: true,
        msg: "success",
        code: 0,
    })
})

app.post('/add-contact', async (req, res) => {
    let data_input = req.body
    let validate = await val.Form(data_input, {
        fullname: 'required',
        email: 'required',
        phone: 'required',
        data: 'required',
    });
    if (!validate.status) {
        return res.json({ status: false, msg: validate.error, code: 707, data: [] });
    }

    await db('inforcustom').insert(data_input)
    res.json({
        status: true,
        msg: "success",
        code: 0, data: []
    })

})
app.get('*', async (req, res) => {
    res.render('index')
})

server.listen(config.SPort, function () {
    console.log("API Init Completed in Port " + config.SPort);

})
