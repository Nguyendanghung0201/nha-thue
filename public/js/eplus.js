$(document).ready(function () {
    // đăng nhập
    $('.btn-signin').click(function() {
        $.ajax({
            method: 'POST',
            url: '/users',
            data: {
                mod: "login",
                username: $('input[name="username"]').val(),
                password: $('input[name="password"]').val(),
            },
            success: function(data) {
                if (data && data.status) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng nhập thành công',
                        showConfirmButton: false,
                        timer: 500
                    })
                    .then(function(data) {
                        if ($('input[name="redictFrom"]').val()) window.location.href = ($('input[name="redictFrom"]').val())
                        else window.location.href = "/"
                    })
                }
                else  
                Swal.fire(
                    'Thất bại',
                    `${data.code === 654 ? "Tên đăng nhập không chính xác" : data.code === 655 ? "Mật khẩu không chính xác" : data.code === 700 ? "Lỗi hệ thống. Vui lòng thử lại sau" : "Lỗi " + data.code}`,
                    'error'
                )
            }
        })
    })
    // call ajax update cài đặt thông báo telegram
    $('.update_settings').on('click', function () {
        $.ajax({
            type: 'POST',
            url: '/update_settings',
            data: $('#form_submit').serialize(),
            success: function (data) {
                if (data.update_success == 1) {
                    Swal.fire({
                        title: 'Thành công!',
                        text: 'Bạn đã cập nhật cấu hình thành công!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1000
                    }).then((result) => {
                        location.reload();
                    })
                }
                else {
                    Swal.fire(
                        'Thất bại!',
                        'Bạn đã cập nhật cấu hình thất bại. Vui lòng kiểm tra lại hệ thống.',
                        'error'
                    )
                }
            }
        })
    })
    // cập nhật thông tin người dùng
    $('.update_user').on('click', function() {
        $.ajax({
            type: 'PUT',
            url: '/users',
            data: {
                mod: "update_profile",
                display_name: $('input[name="fullname"]').val(),
                phone: $('input[name="phone"]').val(),
                gender: $('input[name="gender"]:checked').val()
            },
            success: function (data) {
                if (data && data.status) {
                    Swal.fire({
                        title: 'Thành công!',
                        text: 'Bạn đã cập nhật thông tin người dùng thành công!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1000
                    }).then((result) => {
                        location.reload();
                    })
                }
                else {
                    Swal.fire(
                        'Thất bại!',
                        `Bạn đã cập nhật cấu hình thất bại. ${data.code == 677 ? "Số điện thoại đã được sử dụng" : "Lỗi " + data.code}`,
                        'error'
                    )
                }
            }
        })
    })
    // đăng kí
    $('#kt_login_signup_submit').on('click', function() {
        if ($('input[name="fullname"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập tên người dùng',
                'error'
            )
        }
        else if ($('input[name="phone"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập số điện thoại',
                'error'
            )
        }
        else if ($('input[name="username"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập địa chỉ email',
                'error'
            )
        }
        else if ($('input[name="password"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập mật khẩu',
                'error'
            )
        }
        else if ($('input[name="re_password"]').val().length == 0 || $('input[name="re_password"]').val() !== $('input[name="password"]').val()) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng xác nhận lại mật khẩu',
                'error'
            )
        }
        else 
        $.ajax({
            type: 'POST',
            url: '/users',
            data: {
                mod: "register",
                display_name: $('input[name="fullname"]').val(),
                phone: $('input[name="phone"]').val(),
                gender: $('input[name="gender"]:checked').val(),
                username: $('input[name="username"]').val(),
                password: $('input[name="password"]').val(),
                re_password: $('input[name="re_password"]').val(),
                country: 1204
            },
            success: function (data) {
                if (data && data.status) {
                    Swal.fire({
                        title: 'Thành công!',
                        text: 'Bạn đã đăng kí thành công!',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1000
                    }).then((result) => {
                        window.location.href = "/login"
                    })
                }
                else {
                    Swal.fire(
                        'Thất bại!',
                        `Bạn đã đăng kí thất bại thất bại. ${data.code == 707 ? "Định dạng không chính xác. \n" + JSON.stringify(data.msg) : data.code== 660 ? "Địa chỉ email đã được sử dụng" : data.code == 677 ? "Số điện thoại đã được sử dụng" : data.code == 700 ? "Lỗi hệ thống" : "Lỗi " + data.code}`,
                        'error'
                    )
                }
            }
        })
    })
    // show okex thì hiển thị input pha... cho okex
    $('select[name="exchange_id"]').on('change', function() {
        if ($('select[name="exchange_id"]').val() == 3) {
            $('.okex').show()
        }
        else $('.okex').hide();
    })
    //  tạo bot
    $('.add_bot').on('click', function() {
        if ($('input[name="account_name"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập tên bot',
                'error'
            )
        }
        else if ($('select[name="exchange_id"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng chọn sàn giao dịch. Một bot chỉ được chọn duy nhất một sàn giao dịch',
                'error'
            )
        }
        else if ($('input[name="key_api"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập API KEY',
                'error'
            )
        }
        else if ($('input[name="key_secret"]').val().length == 0) {
            Swal.fire(
                'Thất bại!',
                'Vui lòng nhập SECRET KEY',
                'error'
            )
        }
        else {
            $.ajax({
                type: 'POST',
                url: '/list_bot_exchange',
                data: {
                    mod: "add_bot",
                    account_name: $('input[name="account_name"]').val(),
                    exchange_id: $('select[name="exchange_id"]').val(),
                    key_api: $('input[name="key_api"]').val(),
                    key_secret: $('input[name="key_secret"]').val(),
                    status: $('select[name="status"]').val(),
                    passphrase: $('input[name="passphrase"]').val().length != 0 ? $('input[name="passphrase"]').val() : ''
                },
                success: function (data) {
                    if (data && data.status) {
                        Swal.fire({
                            title: 'Thành công!',
                            text: 'Bạn đã tạo bot thành công!',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1000
                        }).then((result) => {
                            window.location.href = "/my_bot"
                        })
                    }
                    else {
                        Swal.fire(
                            'Thất bại!',
                            `Bạn đã tạo bot thất bại. ${data.code == 707 ? "Định dạng không chính xác. \n" + JSON.stringify(data.msg) : data.code== 501 ? "Một bot chỉ được sử dụng một sàn giao dịch" : data.code == 502 ? "Sàn giao dịch không chính xác" : data.code == 503 ? "Sàn Okex cần thêm trường Passphrase" : data.code == 504 ? "Khóa API không chính xác. " + JSON.stringify(data.data) : data.code == 700 ? "Lỗi hệ thống" : "Lỗi " + data.code}`,
                            'error'
                        )
                    }
                }
            })
        }
    })
    // ẩn cài đặt
    $('.btn_stop_setting').on("click", function() {
        Swal.fire({
            title: 'Ẩn cài đặt?',
            text: "Bạn có muốn hủy cài đặt này không!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: '/list_bot_exchange',
                    data: {
                        mod: "delete_setting",
                        id: $(this).data('id'),
                        exchange_id: $('#exchange_id').data('id')
                    },
                    success: function (data) {
                        if (data && data.status) {
                            Swal.fire(
                                'Thành công!',
                                'Bạn đã hủy thành công cài đặt',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            })
                        }
                        else Swal.fire(
                            'Thất bại!',
                            `Chỉnh sửa cài đặt thất bại. ${ data.code == 506 ? "Không tìm thấy cài đặt đang hoạt động" : 'Lỗi ' + data.code }`,
                            'error'
                        )
                    }
                })
            }
          })
    })
    // hiển thị cài đặt
    $('.btn_show_setting').on("click", function() {
        Swal.fire({
            title: 'Hiển thị cài đặt?',
            text: "Bạn có muốn hiển thị cài đặt này không!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: '/list_bot_exchange',
                    data: {
                        mod: "show_setting",
                        id: $(this).data('id'),
                        exchange_id: $('#exchange_id').data('id')
                    },
                    success: function (data) {
                        if (data && data.status) {
                            Swal.fire(
                                'Thành công!',
                                'Bạn đã cập nhật trạng thái cài đặt thành công',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            })
                        }
                        else Swal.fire(
                            'Thất bại!',
                            `Chỉnh sửa cài đặt thất bại. ${ data.code == 506 ? "Không tìm thấy cài đặt đang hoạt động" : (data.code == 507 ) ? "Mỗi đồng tiền chỉ được sử dụng một cài đặt" : 'Lỗi ' + data.code }`,
                            'error'
                        )
                    }
                })
            }
          })
    })
    $('.add_setting').on('click', function() {
        let quantity_buy = Number($('input[name="quantity_buy"]').val());
        let quantity_sell = Number($('input[name="quantity_sell"]').val());
        let type_vaolenh = Number($('select[name="type"]').val());
        let timing_min = Number($('input[name="timing_min"]').val());
        let timing_max = Number($('input[name="timing_max"]').val());
        let type_stoploss = Number($('select[name="type_stoploss"]').val());
        let ma = Number($('input[name="ma"]').val());
        let timeframe = $('select[name="timeframe"]').val();
        let trendline = $('select[name="trendline"]').val();
        let ticker = $('select[name="ticker"]').val();
        let chukivaolenh = Number($('input[name="time_stuffing"]').val());
        let solenhtoida = Number($('input[name="count_stuffing"]').val());

        if (isNaN(quantity_buy) || quantity_buy <= 0) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập số lượng mua`,
                'error'
            )
        }
        else if (isNaN(quantity_sell) || quantity_sell <= 0) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập số lượng bán`,
                'error'
            )
        }
        else if (type_vaolenh == 1 && (isNaN(timing_min) || timing_min <= 0 || isNaN(timing_max) || timing_max <=0 || timing_min >= timing_max)) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập thời gian timing, đơn vị tính bằng phút`,
                'error'
            )
        }
        else if ((isNaN(ma) || ma <= 0) && type_vaolenh == 0) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập đường Moving Average`,
                'error'
            )
        }
        else if (type_vaolenh == 2 && (chukivaolenh <= 0 || solenhtoida <=0)) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập chu kì nhồi lệnh và số lượng lệnh nhồi tối đa`,
                'error'
            )
        }
        else {
            $.ajax({
                type: 'POST',
                    url: '/list_bot_exchange',
                    data: {
                        mod: "add_setting",
                        account_exchange_id: $('#exchange_id').data('id'),
                        ticker: ticker,
                        quantity_buy: quantity_buy,
                        quantity_sell: quantity_sell,
                        type: type_vaolenh,
                        timing_min: (type_vaolenh == 1) ? timing_min : 0,
                        timing_max: (type_vaolenh == 1) ? timing_max : 0,
                        type_stoploss: type_stoploss,
                        ma_length: (type_stoploss == 0) ? ma : 0,
                        ma_timeframe: (type_stoploss == 0) ? timeframe : "",
                        trendline: (type_stoploss == 1) ? trendline : "",
                        time_stuffing: (type_vaolenh == 2) ? chukivaolenh : 0,
                        count_stuffing: (type_vaolenh == 2) ? solenhtoida : 0
                    },
                    success: function (data) {
                        if (data && data.status) {
                            Swal.fire(
                                'Thành công!',
                                'Bạn đã thêm mới cài đặt thành công',
                                'success'
                            ).then(() => {
                                window.location.href = "/my_bot/" + $('#exchange_id').data('id') ;
                            })
                        }
                        else Swal.fire(
                            'Thất bại!',
                            `Thêm cài đặt thất bại. ${ data.code == 707 ? "Định dạng không chính xác" : (data.code == 505 ) ? "Không tìm thấy bot vào lệnh" : (data.code == 507) ? "Mỗi bot chỉ được sử dụng một cấu hình cho một đồng tiền" : 'Lỗi ' + data.code }`,
                            'error'
                        )
                    }
            })
        }
    })
    // ẩn bot
    $('.btn_stop_bot').on("click", function() {
        Swal.fire({
            title: 'Ẩn bot?',
            text: "Bạn có muốn ẩn bot này không!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: '/list_bot_exchange',
                    data: {
                        mod: "delete_bot",
                        id: $(this).data('id'),
                    },
                    success: function (data) {
                        if (data && data.status) {
                            Swal.fire(
                                'Thành công!',
                                'Bạn đã hủy thành công bot',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            })
                        }
                        else Swal.fire(
                            'Thất bại!',
                            `Chỉnh sửa trạng thái botthất bại. ${ data.code == 506 ? "Không tìm thấy bot đang hoạt động" : 'Lỗi ' + data.code }`,
                            'error'
                        )
                    }
                })
            }
          })
    })
    // hiển thị bot
    $('.btn_show_bot').on("click", function() {
        Swal.fire({
            title: 'Hiển thị bot?',
            text: "Bạn có muốn hiển thị bot này không!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    url: '/list_bot_exchange',
                    data: {
                        mod: "show_bot",
                        id: $(this).data('id'),
                    },
                    success: function (data) {
                        if (data && data.status) {
                            Swal.fire(
                                'Thành công!',
                                'Bạn đã cập nhật trạng thái bot thành công',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            })
                        }
                        else Swal.fire(
                            'Thất bại!',
                            `Chỉnh sửa trạng thái bot thất bại. ${ data.code == 506 ? "Không tìm thấy bot đang hoạt động" : (data.code == 501 ) ? "Mỗi bot chỉ được sử dụng trên 1 sàn giao dịch" : 'Lỗi ' + data.code }`,
                            'error'
                        )
                    }
                })
            }
          })
    })
    // cập nhật cài đặt
    $('.update_setting').on('click', function() {
        let quantity_buy = Number($('input[name="quantity_buy"]').val());
        let quantity_sell = Number($('input[name="quantity_sell"]').val());
        let type_vaolenh = Number($('select[name="type"]').val());
        let timing_min = Number($('input[name="timing_min"]').val());
        let timing_max = Number($('input[name="timing_max"]').val());
        let type_stoploss = Number($('select[name="type_stoploss"]').val());
        let ma = Number($('input[name="ma"]').val());
        let timeframe = $('select[name="timeframe"]').val();
        let trendline = $('select[name="trendline"]').val();
        let chukivaolenh = Number($('input[name="time_stuffing"]').val());
        let solenhtoida = Number($('input[name="count_stuffing"]').val());

        if (isNaN(quantity_buy) || quantity_buy <= 0) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập số lượng mua`,
                'error'
            )
        }
        else if (isNaN(quantity_sell) || quantity_sell <= 0) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập số lượng bán`,
                'error'
            )
        }
        else if (type_vaolenh == 1 && (isNaN(timing_max) || timing_max <= 0 || timing_min <= 0 || isNaN(timing_min) || timing_min >= timing_max)) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập thời gian timing, đơn vị tính bằng phút`,
                'error'
            )
        }
        else if ((isNaN(ma) || ma <= 0) && type_stoploss == 0) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập đường Moving Average`,
                'error'
            )
        }
        else if (type_vaolenh == 2 && (chukivaolenh <= 0 || solenhtoida <=0)) {
            Swal.fire(
                'Thất bại!',
                `Vui lòng nhập chu kì nhồi lệnh và số lượng lệnh nhồi tối đa`,
                'error'
            )
        }
        else {
            $.ajax({
                type: 'POST',
                    url: '/list_bot_exchange',
                    data: {
                        mod: "update_setting",
                        account_exchange_id: $('#exchange_id').data('id'),
                        id_setting: $('#setting_id').data('id'),
                        quantity_buy: quantity_buy,
                        quantity_sell: quantity_sell,
                        type: type_vaolenh,
                        timing_min: (type_vaolenh == 1) ? timing_min : 0,
                        timing_max: (type_vaolenh == 1) ? timing_max : 0,
                        type_stoploss: type_stoploss,
                        ma_length: (type_stoploss == 0) ? ma : 0,
                        ma_timeframe: (type_stoploss == 0) ? timeframe : "",
                        trendline: (type_stoploss == 1) ? trendline : "",
                        time_stuffing: (type_vaolenh == 2) ? chukivaolenh : 0,
                        count_stuffing: (type_vaolenh == 2) ? solenhtoida : 0,
                        status: Number($('select[name="status"]').val())
                    },
                    success: function (data) {
                        if (data && data.status) {
                            Swal.fire(
                                'Thành công!',
                                'Bạn đã chỉnh sửa cài đặt thành công',
                                'success'
                            ).then(() => {
                                window.location.reload();
                            })
                        }
                        else Swal.fire(
                            'Thất bại!',
                            `Thêm cài đặt thất bại. ${ data.code == 707 ? "Định dạng không chính xác" : (data.code == 505 ) ? "Không tìm thấy bot vào lệnh" : (data.code == 507) ? "Mỗi bot chỉ được sử dụng một cấu hình cho một đồng tiền" : 'Lỗi ' + data.code }`,
                            'error'
                        )
                    }
            })
        }
    })
})