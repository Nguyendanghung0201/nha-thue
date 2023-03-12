var listSymbol = ["BTCUSDT", "ETHUSDT", "BCHUSDT", "XRPUSDT", "EOSUSDT", "LTCUSDT",
    "TRXUSDT", "ETCUSDT", "LINKUSDT", "XLMUSDT", "ADAUSDT", "XMRUSDT", "DASHUSDT",
    "ZECUSDT", "XTZUSDT", "BNBUSDT", "ATOMUSDT", "ONTUSDT", "IOTAUSDT", "BATUSDT",
    "VETUSDT", "NEOUSDT", "QTUMUSDT", "IOSTUSDT", "THETAUSDT", "ALGOUSDT", "ZILUSDT",
    "KNCUSDT", "ZRXUSDT", "COMPUSDT", "OMGUSDT", "DOGEUSDT", "SXPUSDT", "LENDUSDT",
    "KAVAUSDT", "BANDUSDT", "RLCUSDT", "WAVESUSDT", "MKRUSDT", "SNXUSDT", "DOTUSDT",
    "DEFIUSDT", "YFIUSDT", "BALUSDT", "CRVUSDT", "TRBUSDT", "YFIIUSDT", "RUNEUSDT",
    "SUSHIUSDT", "SRMUSDT", "BZRXUSDT", "EGLDUSDT", "SOLUSDT", "ICXUSDT", "STORJUSDT"]
var binance_buy = document.getElementById('binance_buy');
var binance_sell = document.getElementById('binance_sell');
var binance_delta = document.getElementById('binance_delta');
var houbi_buy = document.getElementById('houbi_buy');
var houbi_sell = document.getElementById('houbi_sell');
var houbi_delta = document.getElementById('houbi_delta');
var total_buy = document.getElementById("total_buy");
var total_sell = document.getElementById("total_sell");
var total_delta = document.getElementById("total_delta");
var start_time = document.getElementById('start_time');
var end_time = document.getElementById('end_time');
var binance_buy_time = document.getElementById('binance_time_buy');
var binance_sell_time = document.getElementById('binance_time_sell');
var binance_delta_time = document.getElementById('binance_time_delta');
var houbi_time_buy = document.getElementById('houbi_time_buy');
var houbi_time_sell = document.getElementById('houbi_time_sell');
var houbi_delta_sell = document.getElementById('houbi_delta_sell');
var total_time_buy = document.getElementById('total_time_buy');
var total_time_sell = document.getElementById('total_time_sell');
var total_time_delta = document.getElementById('total_time_delta');
var start_time_search = document.getElementById('start_time_search');
var end_time_search = document.getElementById('end_time_search');
var init_start_time = 0;
var init_end_time = 0;
// search order history 
var binance_buy_cryto = document.getElementById('binance_buy_cryto');
var binance_sell_cryto = document.getElementById('binance_sell_cryto');
var binance_delta_cryto = document.getElementById('binance_delta_cryto');
var cryptocurrency = document.getElementById('cryptocurrency');
var crypto = document.getElementById('crypto');
var total_buy_cryto = document.getElementById('total_buy_cryto');
var total_sell_cryto = document.getElementById('total_sell_cryto');
var type_exchange = document.getElementById('type_exchange');

function init() {
    fetch('/get-search-time-trade-history')
        .then(res => res.json())
        .then(data => {
            if (data.status) {
                init_start_time = data.data[0]['min(`start_time`)'];
                init_end_time = data.data[0]['max(`end_time`)']
                let start_init = new Date(init_start_time);
                let end_init = new Date(init_end_time);
                // fetch to get .getUTCFullYear() +
                start_time.value = formatDate(start_init) //"yyyy-MM-ddThh:mm" 
                start_time.min = formatDate(start_init)
                start_time.max = formatDate(end_init)
                end_time.value = formatDate(start_init) //"yyyy-MM-ddThh:mm" 
                end_time.min = formatDate(start_init)
                end_time.max = formatDate(end_init)
            }
        })

}
init()

function formatDate(time) {
    let month = Number(time.getMonth()) + 1;
    let datetime_local = time.getFullYear().toString()
        + '-' + formatmonth(month)
        + '-' + formatmonth(time.getDate())
        + 'T' + formatmonth(time.getHours())
        + ':' + formatmonth(time.getMinutes())
    return datetime_local; //"yyyy-MM-ddThh:mm" 
}
function formatmonth(time) {
    return time >= 10 ? time.toString() : (`0${time}`)
}

function change_Start_Time(event) {
    let start_time_sear = new Date(start_time.value).getTime()
    let end_time_sear = new Date(end_time.value).getTime();
    if (start_time_sear < init_start_time || init_end_time < end_time_sear || start_time_sear == end_time_sear) {
        alert('Khung thời gian chọn không hợp lệ. Vui lòng chọn ngày trong khoảng từ ' + new Date(init_start_time).toLocaleString() + " đến " + new Date(init_end_time).toLocaleString())
    } else {
        fetch('/search-time-trade-history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                startTime: start_time_sear,
                endTime: end_time_sear
            })
        }).then(json => json.json())
            .then(data => {
                
                if (data.data.length > 0) {
                    let total_buy = 0;
                    let total_sell = 0;
                    data.data.forEach(e => {
                        total_buy += e["sum(`total_buy`)"];
                        total_sell += e["sum(`total_sell`)"];
                        if (e.exchanges === 0) {
                            binance_buy_time.innerHTML = Math.floor(e["sum(`total_buy`)"]);
                            binance_sell_time.innerHTML = Math.floor(e["sum(`total_sell`)"]);
                            binance_delta_time.innerHTML = Math.floor(e["sum(`total_buy`)"]) - Math.floor(e["sum(`total_sell`)"]);
                        } else if (e.exchanges === 1) {
                            houbi_time_buy.innerHTML = Math.floor(e["sum(`total_buy`)"]);
                            houbi_time_sell.innerHTML = Math.floor(e["sum(`total_sell`)"]);
                            houbi_time_delta.innerHTML =  Math.floor(e["sum(`total_buy`)"]) - Math.floor(e["sum(`total_sell`)"]);
                        }
                    });
                    total_time_buy.innerHTML = Math.floor(total_buy);
                    total_time_sell.innerHTML = Math.floor(total_sell);
                    total_time_delta.innerHTML = Math.floor(total_buy) - Math.floor(total_sell);
                }
                else if (data && !data.status) alert("Lỗi " + data.code);
            })
    }

}

//  search order history follow crytocurrency
function change_Start_Search(event) {
    let start_time_sear = new Date(start_time_search.value).getTime()
    let end_time_sear = new Date(end_time_search.value).getTime();
    if((end_time_sear - start_time_sear)/ (60 *60 *1000) >24 * 8){
        alert('Khung thời gian chọn không hợp lệ. Vui lòng chọn khoảng thời gian tra cứu nhỏ hơn 8 ngày')
        return ;
    }
    if (start_time_sear >= end_time_sear) {
        alert('Khung thời gian chọn không hợp lệ. Vui lòng chọn ngày bắt đầu nhỏ hơn ngày kết thúc')
    } else {
        if (cryptocurrency.value) {
            let timerInterval
            Swal.fire({
                title: 'Load dữ liệu!',
                html: 'Dữ liệu đang được tải. vui lòng đợi sau <b></b> milliseconds.',
                timer: 7000,
                timerProgressBar: true,
                willOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                }
            })
            fetch('/get-markets-trades-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    startTime: start_time_sear,
                    endTime: end_time_sear,
                    cryptocurrency: cryptocurrency.value,
                    type_exchange: type_exchange.value
                })
            })
                .then(res => res.json())
                .then(data => {
                   
                    if (data.status) {
                        binance_buy_cryto.innerHTML = Math.floor(data.data.total_buyer_volume) + ' ' + data.data.cryptocurrency;
                        binance_sell_cryto.innerHTML = Math.floor(data.data.total_sell_volume) + ' ' + data.data.cryptocurrency;
                        binance_delta_cryto.innerHTML = (Math.floor(data.data.total_buyer_volume) - Math.floor(data.data.total_sell_volume)) + ' ' + data.data.cryptocurrency;
                        Swal.fire({
                            icon: 'success',
                            title: 'Load dữ liệu thành công',
                            showConfirmButton: false,
                            timer: 500
                        })
                    }
                    else alert("Lỗi " + data.code);
                })


        }
        else alert("Vui lòng chọn đồng tiền")
    }
}
var socket = io();

socket.on('server-send-trades', (data) => {
    binance_buy.innerHTML = Math.floor(data['binance'].buy);
    binance_sell.innerHTML = Math.floor(data['binance'].sell);
    binance_delta.innerHTML = Math.floor(data['binance'].buy) - Math.floor(data['binance'].sell);
    houbi_buy.innerHTML = Math.floor(data['houbi'].buy);
    houbi_sell.innerHTML = Math.floor(data['houbi'].sell);
    houbi_delta.innerHTML = Math.floor(data['houbi'].buy) - Math.floor(data['houbi'].sell);
    total_buy.innerHTML = Math.floor(data['binance'].buy) + Math.floor(data['houbi'].buy);
    total_sell.innerHTML = Math.floor(data['binance'].sell) + Math.floor(data['houbi'].sell);
    total_delta.innerHTML = Math.floor(data['binance'].buy) + Math.floor(data['houbi'].buy) - Math.floor(data['binance'].sell) - Math.floor(data['houbi'].sell);
})


