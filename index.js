
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
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
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: global.config.keyJWT,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

var server = http.createServer(app);

//config update file
/** @namespace global.config */
app.use(cors(global.config.cors));
//get device name
app.use(device.capture());
//get IP device
app.use(requestIp.mw());
app.use(express.static(__dirname + '/public'));

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
app.all('/api/:act', [middleware.verifyToken, middleware.checkadmin], async function (request, response) {

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
            let controller = require('./app/admin/' + act + '/controller');
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
app.get('/craw', async (req, res) => {
    for (let i = 1; i <= 47; i++) {
        let code;
        if (i < 10) {
            code = '0' + i
        } else {
            code = i.toString()
        }

        let f = await axios.post('https://www.realnetpro.com/ajax/get_city_along_code.php', {
            'pref_code[]': code,
            'type': 'along'
        }, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        let a = f.data[code].along;
        let arr = []
        for (let element of a) {

            // let datainser = {
            //     code: element.Code,
            //     name: element.Name,
            //     province_code: i
            // }
            let datainser = {
                AlongCode: element.AlongCode,
                AlongName: element.AlongName,
                AlongNo: element.AlongNo,
                AlongShortName: element.AlongShortName,
                province_id: i
            }
            arr.push(datainser)
        }
        //   await global.db('along_code').insert(arr)
        await delay(2000)
    }
    res.json({
        f: 'a'
    })
})
app.get('/test', async (req, res) => {
    // let list = await global.db('building').select("id", 'address').where('province_id', 7).limit(20)

    // let list_city = await global.db('city_code').select("*").where('province_code', 7)
    // let listmoi = []
    // for (let el of list) {
    //     let list_trung = []
    //     for (let element of list_city) {
    //         if (el.address.includes(element.name)) {
    //             list_trung.push(element)
    //         }
    //     }
    //     listmoi.push({
    //         id: el.id,
    //         address: el.address,
    //         city: list_trung
    //     })
    // }
    // res.json({
    //     kq: listmoi
    // })

    let a = await global.db('building').select("*").where('id', 7)
    res.send(a[0].room)

})
app.get('/company', async (req, res) => {
    let a = await axios.get('https://www.realnetpro.com/ajax/company.php?pref_code=01&method=estate', {
        headers: {
            "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhTWFpbiI6eyJJZCI6MSwiZGlzcGxheV9uYW1lIjoiYWRtaW4xIn0sImlhdCI6MTY3OTU0NDQwNSwiZXhwIjoxNjc5NTQ4MDA1fQ.fr27oa0Br2rXTq35Ne44eWz49tGR5-R8K2FT7Rmmne8"
        }
    })
    if (!a.data) {
        res.json({
            ab: 'no'
        })
    } else {
        res.json({
            ab: a.data
        })
    }
})
app.get('/getdetail', async (req, res) => {
    let list = await global.db('building2').select("id", 'detail_id').where('province_id', 1)
    for (let el of list) {
        let id = el.detail_id.slice(el.detail_id.search('browsing_') + 9, el.detail_id.length)
        let url = `https://www.realnetpro.com/room_detail.php?id=1227034&type=room`;
        let html = await axios.get(url, {
            headers: {
                "cookie": `certification_key=392db865bc70fb93dd647f2d63f9fea7; _ga=GA1.1.148854057.1678875280; term20210802=13bc365d918820c75acefc62d4ed7c2f; term20210802d=1678875330; page_method=estate; update_date=-1; rental_cost1=-1; rental_cost2=-1; structured_date=-1; second_floor_more_flag=-1; open_room=all; page_type=building; ini_pref=01; ini_pref_name=%E5%8C%97%E6%B5%B7%E9%81%93; transportation_id=-1; mybox_mode=insert; setting_number=1; method=estate; cookie_map_e=34.68795997593356%2C135.5268492668065; lat1=34.78994915274278; lng1=135.32772206954087; lat2=34.58584499251636; lng2=135.72597646407212; pref_code=01; square_meter_l=-1; square_meter_h=-1; route_id=1011%2C1051; gr=03AFY_a8WMg-BzJDX9M4C1Jd3U3STAghc37cfu5szHbFnC13hEMjOOHoEQGqYdJFV6brxXTxmAFp_7-2OB586PULTesYtie4cMXZdaJM1hdh4JH-P20-Md_B4kY3l2WUInhWOB6iL1F5uN3cOJ39W623CWbHz0VLQXsfJg3wF01y4yDdbEvvk8pI0RWJlseHGxUyXp4g503J5G9tJdZjND0Cyp0EFlevUUPQWVWZdjv2yON5r0SPS5C0oJQSV922zodhkZUU2pJvc0Wy54pPhAC4ekS6eZeU35RUvMLjj9gnu40N-CP5A64U1y58KP0_dWAvlsH0j5qJao_5IZcJOdSGCQifzsFw8C05ZztHboW3uPdISMZCJK0DhJ-ReWZx9_sVOLdCMDxtb60snGc-ZWWdQnypGCt40KehkDQc4ICdAmtIjYfsTxFeJcL-EqmullFbNy5OsCzbgYWc1uHALEwBcQpK8Yec8D_nzI_NlkUd7w5v_rI-mcmzioQe6pwU5VAiFc6Mn9vzEZeY7s32PnW8dcS274-JnlyotOgs-ynWyjy4uQ3QCaBe65DMOIMm_fUa81qKrn7WRv; PHPSESSID=creoi21c8kjef6iktuhl0ifteh; certification_key=2f690f8c55f28f041a58a2efd4d37c8a; _ga_9FXQTNH0JJ=GS1.1.1679632009.36.1.1679632012.0.0.0`,
                'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69',
                "origin": 'https://www.realnetpro.com',
                "referer": "https://www.realnetpro.com/room_detail.php?id=5682631&type=room"
            }
        })
        //https://file.realnetpro.com/photo/0010570/building/x-large/b0000212975142250873301.jpg?1679626560
        //https://file.realnetpro.com/photo/0010570/building/x-large/b0000212975142250873301.jpg?1679626560
        if (html.data) {
            let $ = cheerio.load(html.data, { decodeEntities: false, xmlMode: true, lowerCaseTags: true })
            let listimage = $('.photo_list_box .image_list img')
            let list_img_url = ''
            for (let img of listimage) {
                let url = $(img).attr('src')
                list_img_url = list_img_url + ',' + url
            }
            let infor = $('.room_info .basic_table tr')
            let list_infor = []
            for (let el of infor) {
                let key = $(el).find('td.td_m').text()
                if (key) {
                    let value = $(el).find('td:nth-child(2)').text()
                    if (value) {
                        list_infor.push({
                            key: key.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' '),
                            value: value.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' ')
                        })
                    }
                }
            }
            let eq_user = $('.eq_user .room_info tr')
            let list_infor_user = []

            for (let el of eq_user) {
                let key = $(el).find('.eq_td_m').text()
                if (key) {
                    let values = $(el).find('.eq_td_con span')
                    let value = ''
                    for (let elem of values) {
                        let el = $(elem).text()
                        value = value + ',' + el
                    }
                    list_infor_user.push({
                        key: key.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' '),
                        value: value.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' ')
                    })

                }
            }
            if (list_infor.length > 0 && list_infor_user.length > 0) {

            }


        }
        break
    }
})
app.get('/thu', async (req, res) => {
    let arr = []
    for (let i = 1; i <= 20; i++) {
        let list = await global.db('building2').select("id", 'line').where('province_id', i).orderByRaw('RAND()').limit(50)
        let data = list.map(e => {
            return {
                build_id: e.id,
                khuyen_id: Math.floor(Math.random() * 2) ? 1 : 2,
                status: 1
            }
        })
        await global.db("khuyen_mai_build").insert(data)

    }
    console.log('end')
    res.json({
        a: "arr"
    })
})
async function abcd(id) {
    let arr = []
    let check
    let province_id = id
    //
    try {
        for (let j = 1; j <= 27; j++) {
            let code = ''
            if (j < 10) {
                code = '0' + j
            } else {
                code = j.toString()
            }
            for (let i = 0; i <= 4; i++) {
                let f = await axios.get('https://www.realnetpro.com/main.php?method=estate&display=building&page=' + i, {
                    headers: {
                        "cookie": `certification_key=1693e1328a04c29973ba89eb946e73e0; _ga=GA1.1.148854057.1678875280; term20210802=13bc365d918820c75acefc62d4ed7c2f; term20210802d=1678875330; open_room=five; page_type=building; PHPSESSID=88j654kh15cp7do92roncnaae4; certification_key=d381d632513ba0cffbea8fbfee1caebc; page_method=estate; transportation_id=-1; update_date=-1; rental_cost1=-1; rental_cost2=-1; structured_date=-1; second_floor_more_flag=-1; mybox_mode=insert; setting_number=1; ini_pref=${code}; ini_pref_name=%E7%A6%8F%E5%B3%B6; square_meter_l=-1; square_meter_h=-1; pref_code=${code}; gr=03AKH6MRHjjra8ridswtLESZleP889IQSbGaKZH2RYI5rLRNYSPTXTmzNqq81wuBRm2j67Np6-OTVguF2EWeMFlmwpS8LY3-0Lt5kms4eh1ThXnu5YBUzF5QXjtGc1FcFTg4fXBgDY8j2DKEKrk8QPpTDHEnr7WqSYANsZ8sC-XvLlBFZ1SPikOyntebRC_8rBEZs9k9PRP0Op42BKKprKkHfYjhPwp6-sPcY9-gouYAz2IKLjZtLhIchGcTWGP2Y2HthzPuMYAW1_vFlpF51cY-IdDdLFr0X88m_YFuOnHVWolUZ9VpmdCVWtMgosBbm2_L6SfqMpfTwnfoYylMghj6N-PKNrXEi6s6_d-0Ji81gKz7Q-U8Fb71E5IhU3SgiocGBnrujzIpE3IQE3N_4fMNRD075fafvQk1hZqb0M9dPpR8vEG2-BVU3Y01sIWnzGpH8ZEra7UfnabeCKvU4MVCESK6lfkquiyidSTwyqh7F5ByJ-mP1D1IRbiIa1wZl4exV-HnZhJgMqPL6_QmHlmqWgO1jzeCcdpJWM7NYsruf-uNLRLTA5OJh-AszAgNM6skNgwMxjwuZA; _ga_9FXQTNH0JJ=GS1.1.1679361330.21.1.1679361628.0.0.0`,
                        'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69',
                        "origin": 'https://www.realnetpro.com'
                    }
                });

                if (f.data) {

                    check = f.data
                    let $ = cheerio.load(f.data, { decodeEntities: false, xmlMode: true, lowerCaseTags: true });
                    let list = $('.main_contents .one_building')
                    if (list) {
                        check = $('div').hasClass('.main_contents')
                        for (let element of list) {
                            let name = $(element).find('.building_info .building_name').text()
                            let images = $(element).find('img.building_photo').attr('src')
                            let data = $(element).find('.building_info > div:nth-child(2)').text().trim()
                            let phone = $(element).find('.building_company').text()
                            let address = ''
                            let line = ''
                            let pdf = $(element).find('.building_data a').attr('href')
                            if (data && data.length > 5) {
                                let index = data.search('沿')
                                if (index != -1) {
                                    address = data.slice(3, index)
                                    line = data.slice(index + 3, data.length)
                                }


                            }
                            let rooms = $(element).find('.room_info_tr')
                            let arr_rooms = []
                            if (rooms) {
                                for (let el of rooms) {
                                    let id = $(el).find('.browsing_date').attr('id')
                                    let yeucau = $(el).find('td .specify_n').text()
                                    let layout = $(el).find('td .room_layout_image').attr('src')
                                    let st_td = $(el).find('td.st_td').text()
                                    let date = $(el).find('td:nth-child(6)').text()
                                    let dientich = $(el).find('td:nth-child(7)').text()
                                    let tien = $(el).find('td:nth-child(8)').text()
                                    let key_money = $(el).find('td:nth-child(9)').text()
                                    let datcoc = $(el).find('td:nth-child(10)').text()
                                    let qc = $(el).find('td:nth-child(11)').text()
                                    let infor_rooms = {
                                        id: id ? id.trim() : "",
                                        yeucau: yeucau ? yeucau.trim() : "",
                                        layout: layout ? layout.trim() : "",
                                        st_td: st_td ? st_td.trim() : "",
                                        date: date ? date.trim() : "",
                                        dientich: dientich ? dientich.trim() : "",
                                        tien: tien ? tien.trim() : "",
                                        key_money: key_money ? key_money.trim() : "",
                                        datcoc: datcoc ? datcoc.trim() : "",
                                        qc: qc ? qc.trim() : ""
                                    }
                                    arr_rooms.push(infor_rooms)
                                }
                            }
                            let real_id = "";
                            if (pdf) {
                                real_id = pdf.slice(pdf.search('id=') + 3, pdf.length)
                            }
                            let el = {
                                name: name ? name.trim() : '',
                                real_id: real_id,
                                address: address ? address.trim() : '',
                                line: line ? line.trim() : '',
                                infor: '',
                                phone: phone ? phone.trim() : '',
                                images: images ?? '',
                                province_id: code,
                                city_id: 'new',
                                town_id: 'new',
                                data: data,
                                pdf: pdf ?? '',
                                room: JSON.stringify(arr_rooms)
                            }
                            arr.push(el)
                        }
                    } else {
                        check = $('div').hasClass('.main_contents')

                        break;

                    }
                } else {
                    check = false
                    break;

                }
                await global.db('building').insert(arr)
                console.log(i, arr.length)
                arr = []
                await delay(5000)
            }
        }
    } catch (e) {
        console.log('loi ', e)
    }
    console.log('end')
    // await global.db('building').insert(arr)

}
app.get('*', async (req, res) => {
    res.render('index')
})

async function town() {
    // https://www.realnetpro.com/ajax/town.php?city_code=02202
    for (let i = 7; i <= 20; i++) {
        let min = i * 250;
        let max = (i + 1) * 250;
        let cityList = await global.db('city_code').select('*').where('id', '>=', min).andWhere('id', '<', max).andWhere('id', '>', 1806)
        if (cityList.length > 0) {
            for (let el of cityList) {
                let f = await axios.get(`https://www.realnetpro.com/ajax/town.php?city_code=${el.code}`)
                if (f.data) {
                    let arr = f.data.map(e => {
                        return {
                            code: e.Code,
                            name: e.Name,
                            city_code: el.code
                        }
                    })
                    await global.db('town_code').insert(arr)
                }
                console.log('insert ', el.code)
                await delay(5000)
            }

        } else {
            break
        }
        console.log('next ', i)

    }
    console.log('end')
}

//certification_key=1693e1328a04c29973ba89eb946e73e0; _ga=GA1.1.148854057.1678875280; term20210802=13bc365d918820c75acefc62d4ed7c2f; term20210802d=1678875330; open_room=five; page_type=building; PHPSESSID=88j654kh15cp7do92roncnaae4; certification_key=d381d632513ba0cffbea8fbfee1caebc; page_method=estate; transportation_id=-1; update_date=-1; rental_cost1=-1; rental_cost2=-1; structured_date=-1; second_floor_more_flag=-1; mybox_mode=insert; setting_number=1; ini_pref=07; ini_pref_name=%E7%A6%8F%E5%B3%B6; square_meter_l=-1; square_meter_h=-1; pref_code=07; gr=03AKH6MRHjjra8ridswtLESZleP889IQSbGaKZH2RYI5rLRNYSPTXTmzNqq81wuBRm2j67Np6-OTVguF2EWeMFlmwpS8LY3-0Lt5kms4eh1ThXnu5YBUzF5QXjtGc1FcFTg4fXBgDY8j2DKEKrk8QPpTDHEnr7WqSYANsZ8sC-XvLlBFZ1SPikOyntebRC_8rBEZs9k9PRP0Op42BKKprKkHfYjhPwp6-sPcY9-gouYAz2IKLjZtLhIchGcTWGP2Y2HthzPuMYAW1_vFlpF51cY-IdDdLFr0X88m_YFuOnHVWolUZ9VpmdCVWtMgosBbm2_L6SfqMpfTwnfoYylMghj6N-PKNrXEi6s6_d-0Ji81gKz7Q-U8Fb71E5IhU3SgiocGBnrujzIpE3IQE3N_4fMNRD075fafvQk1hZqb0M9dPpR8vEG2-BVU3Y01sIWnzGpH8ZEra7UfnabeCKvU4MVCESK6lfkquiyidSTwyqh7F5ByJ-mP1D1IRbiIa1wZl4exV-HnZhJgMqPL6_QmHlmqWgO1jzeCcdpJWM7NYsruf-uNLRLTA5OJh-AszAgNM6skNgwMxjwuZA; _ga_9FXQTNH0JJ=GS1.1.1679361330.21.1.1679361628.0.0.0
//certification_key=1693e1328a04c29973ba89eb946e73e0; _ga=GA1.1.148854057.1678875280; term20210802=13bc365d918820c75acefc62d4ed7c2f; term20210802d=1678875330; open_room=five; page_type=building; PHPSESSID=88j654kh15cp7do92roncnaae4; certification_key=d381d632513ba0cffbea8fbfee1caebc; page_method=estate; ini_pref_name=%E5%AE%AE%E5%9F%8E; transportation_id=-1; update_date=-1; rental_cost1=-1; rental_cost2=-1; square_meter_l=-1; square_meter_h=-1; structured_date=-1; second_floor_more_flag=-1; mybox_mode=insert; setting_number=1; gr=03AFY_a8VqynB7WHCdxKmiJnzuKJCTu0f56UfY8AhH2p6EK5DSsCNblsZojE8hZgOikmTlaJ_O6GU9ExYU0Qdr2TR1Vw6irUAbMesQBPvD45tXkoDUKEQNOafKHEe0u2nPYC9PXd-Jl7kuLhVHvb4NK8Ue4NML2mIry0bV-KRRJVZYKnwZFJLa5JQjOIDFFCnduL_O1x93N5J02Buk5YX6QtS6KIgDhIBUe6u3KwIunTDCAeiwcAI6d8AtRyQSDj1-BoMmg0lzAMxFhcIV35EIjn6rxs4EC9L2fW9uxuTt4HG0HaJ2RkFC77FJdTah0SwkwCuTvcArvSHHn8e5VOA18UsF6rKaNeolUK0h_OLGVUa2AbQDRPITNlsV2gDATcDdX50Y6HINXF9hEq8H5OJ_i09cBESibdwxD_qahM7Ti6vlhSyBz-PWvv0m1hk1lcHE2THLKgRanAruf5WFnJR3AT9ih5D-uAA9EUFYWl5FvtnHjd7RWk2xTBB60u7pxrotbCHafALDF5_sZOBjCMSASEM4l0UdIx5Z7DfvNARM3VsWlv5Ni3UfzEGoWAbkSNz5Uy5jkrUAY-6u; pref_code=05; ini_pref=06; _ga_9FXQTNH0JJ=GS1.1.1679361330.21.1.1679361481.0.0.0
async function addbuildingtoVps() {
    for (let i = 24; i <= 27; i++) {
        let alist = await global.db('building2').select('*').where('province_id', i).andWhere('status', 1).andWhere('id', '>', 3276)
        for (let el of alist) {
            console.log(i, ' o ', el.id)
            delete el.id
            delete el.created_at
            delete el.updated_at
            let a = await axios.post('http://157.230.27.124:2021/api/build', {
                mod: 'add',
                list: el
            }, {
                headers: {
                    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhTWFpbiI6eyJJZCI6MSwiZGlzcGxheV9uYW1lIjoiYWRtaW4xIn0sImlhdCI6MTY3OTgwNTM4OCwiZXhwIjoxNjc5ODkxNzg4fQ.nNAka6rv3If8R8om010d6t5z5XPXONe56WMUlwk2mCM"
                }
            })
            if (!a.data) {
                console.log('errr')
                return
            }
            await delay(1000)

        }
        console.log('next')
    }
    console.log('end')
}

//price 
//years 
//area 
//date 
//fee 
//detail_id


async function phanload() {
    for (let i = 1; i <= 27; i++) {
        let list = await global.db('building').select("id", 'address').where('province_id', i)
        let list_city = await global.db('city_code').select("*").where('province_code', i)
        let listmoi = []
        for (let el of list) {
            let list_trung = []
            for (let element of list_city) {
                if (el.address.includes(element.name)) {
                    list_trung.push(element)
                }
            }
            console.log('next ', i, list_trung.length)
            if (list_trung.length === 0) {
                await global.db('building').update('city_category', 'no_city').where('id', el.id)
                continue
            }
            if (list_trung.length === 1) {
                await global.db('building').update({
                    'city_category': 'city',
                    'city_id': list_trung[0].id
                }).where('id', el.id)
                continue
            }
            if (list_trung.length > 1) {
                let string = list_trung.map(e => e.id).toString()

                await global.db('building').update('city_category', 'multi_city,' + string).where('id', el.id)
            }

            // listmoi.push({
            //     id: el.id,
            //     address: el.address,
            //     city: list_trung
            // })
        }
    }

}
async function phanloadtheonhaga() {
    for (let i = 1; i <= 27; i++) {
        let list = await global.db('building2').select("id", 'line').where('province_id', i)
        let list_city = await global.db('along_code').select("*").where('province_id', i)
        console.log(list_city.length)
        let listmoi = []
        for (let el of list) {
            let list_trung = []
            for (let element of list_city) {
                if (el.line.includes(element.AlongName)) {
                    list_trung.push(element)
                } else {
                    if (el.line.includes(element.AlongShortName)) {
                        list_trung.push(element)
                    }
                }

            }

            if (list_trung.length === 0) {
                await global.db('building2').update('along_category', 'no_along').where('id', el.id)
                console.log(el.id, ' khong tim thay')
                continue
            }
            if (list_trung.length === 1) {
                console.log(el.id, ' tim thay')
                await global.db('building2').update({
                    'along_category': 'along',
                    'along_id': list_trung[0].id
                }).where('id', el.id)
                continue
            }
            if (list_trung.length > 1) {
                let string = list_trung.map(e => e.id).toString()
                console.log(el.id, ' tim thay nheieu')
                await global.db('building2').update('along_category', 'multi_along,' + string).where('id', el.id)
            }

            // listmoi.push({
            //     id: el.id,
            //     address: el.address,
            //     city: list_trung
            // })
        }
        console.log('next ')
    }
    console.log('end')

}
async function getdetail() {

    for (let i = 12; i <= 27; i++) {
        let status = 'false'
        let list = await global.db('building2').select("id", 'detail_id').where('province_id', i).andWhere('id', '>', 1518)
        for (let room of list) {
            await delay(1000)
            let id = room.detail_id.slice(room.detail_id.search('browsing_') + 9, room.detail_id.length)
            let url = `https://www.realnetpro.com/room_detail.php?id=${id}&type=room`;
            let html = await axios.get(url, {
                headers: {
                    "cookie": `certification_key=392db865bc70fb93dd647f2d63f9fea7; _ga=GA1.1.148854057.1678875280; term20210802=13bc365d918820c75acefc62d4ed7c2f; term20210802d=1678875330; open_room=all; page_type=building; ini_pref=01; PHPSESSID=creoi21c8kjef6iktuhl0ifteh; certification_key=0803ffbbbfc5bb1660c5e2e31b2fbf47; _ga_9FXQTNH0JJ=GS1.1.1679733547.42.1.1679733559.0.0.0`,
                    'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69',
                    "origin": 'https://www.realnetpro.com',
                    "referer": "https://www.realnetpro.com/room_detail.php?id=5682631&type=room"
                }
            })
            if (html.data) {
                let $ = cheerio.load(html.data, { decodeEntities: false, xmlMode: true, lowerCaseTags: true })
                let listimage = $('.photo_list_box .image_list img')
                let list_img_url = ''
                for (let img of listimage) {
                    let url = $(img).attr('src')
                    list_img_url = list_img_url + ',' + url
                }
                let infor = $('.room_info .basic_table tr')
                let list_infor = []
                let fee = ''
                for (let el of infor) {
                    let key = $(el).find('td.td_m').text()
                    if (key) {
                        let value = $(el).find('td:nth-child(2)').text()
                        if (value) {
                            if (key.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' ') == '保証金 / 敷引・償却') {
                                fee = value.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' ')
                            }
                            list_infor.push({
                                key: key.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' '),
                                value: value.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' ')
                            })
                        }
                    }
                }
                let eq_user = $('.eq_user .room_info tr')
                let list_infor_user = []

                for (let el of eq_user) {
                    let key = $(el).find('.eq_td_m').text()
                    if (key) {
                        let values = $(el).find('.eq_td_con span')
                        let value = ''
                        for (let elem of values) {
                            let el = $(elem).text()
                            value = value + ',' + el
                        }
                        list_infor_user.push({
                            key: key.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' '),
                            value: value.trim().replace(/\n|\r/g, "").replace(/\s+/g, ' ')
                        })

                    }
                }
                if (list_infor.length > 0 && list_infor_user.length > 0) {
                    await global.db('building2').update({
                        "list_infor_user": JSON.stringify({ data: list_infor_user }),
                        "list_infor_room": JSON.stringify({ data: list_infor }),
                        "fee": fee,
                        "list_img_url": list_img_url

                    }).where('id', room.id)
                    status = 'true'
                    console.log('da up ', room.id)

                } else {
                    console.log('err ', room.id)
                }

            } else {
                return
            }
        }
    }
    console.log('end')
}
var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};


async function updatedata() {
    for (let i = 1; i <= 27; i++) {
        let alist = await global.db('building2').select('*').where('province_id', i).limit(20)

        download('https://file.realnetpro.com/photo/0044993/building/large/b0001117222167865303201.jpg', 'b0001117222167865303201.jpg', function () {
            console.log('done');
        });
        break
    }
}
// table.string('code', 255).notNullable();
// table.string('name', 255).notNullable();
// table.integer('city_code', 11).notNullable();
// let $ = cheerio.load(`<td class="building_info">
// <div class="building_name">
//     <font _mstmutation="1">
//         グランデール英II </font><input type="hidden" class="room_cnt" value="2">
// </div>
// <div>
//     住所：大阪市天王寺区南河堀町<br>
//     沿線：環状線「寺田町」徒歩4分
// </div> downloadimg
// <!--div>
// お問合せ先：サンプル不動産 ◯◯◯◯◯◯店
// </div-->
// </td>`, { decodeEntities: false, xmlMode: true, lowerCaseTags: true });
// let data = $('.building_info > div:nth-child(2)').text().trim();

server.listen(config.SPort, function () {
    console.log("API Init Completed in Port " + config.SPort);

})
