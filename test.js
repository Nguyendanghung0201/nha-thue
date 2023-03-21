/********************************************************/
/* åœ°å›³ã‚³ãƒ³ãƒˆãƒ­ãƒ¼ãƒ«ã®å®Ÿè£…
/*
/********************************************************/






var map_control = function (param) {
    var mc = this;

    // åŸºæœ¬ãƒ—ãƒ­ãƒ‘ãƒ†ã‚£
    this.map = {};
    this.geocoder = {};
    this.place = {};
    this.map_id = param.map_id;
    this.lat = param.lat;
    this.lng = param.lng;
    this.zoom = param.zoom;
    this.geocoding_zoom = 14;
    this.wheel = param.wheeltype;
    this.bounds = { ne: { lat: 0, lng: 0 }, sw: { lat: 0, lng: 0 } };
    this.map_option = {
        zoom: this.zoom,
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false,
        scrollwheel: this.wheel
    };

    this.street_view_id = "";
    if (param.street_view_id) {
        this.street_view_id = param.street_view_id;

    }
    this.street_view = {};
    this.street_view_option = {};

    if (param.style_option) {
        this.map_option.styles = param.style_option;

    }


    // ãƒžãƒƒãƒ—æ¤œç´¢ã®ãƒ—ãƒ­ãƒ‘ãƒ†ã‚£
    this.map_search_flag = 'N';
    this.api_url = "";
    this.search_param = {};
    this.cnt_current_data = 0;
    this.current_data = {};
    this.marker = {};
    this.solo_marker = {};
    this.place_list = {};
    this.place_marker = {};
    this.direction = {};
    this.direction_line = {};
    this.list_function = function () { };
    this.marker_function = function () { };
    this.icon = "";
    this.icon_size = 0;
    this.marker_label = 'N';
    this.zoom_level_limit = 'Y';
    this.limit_zoom_level = 10;
    this.seach_status = 'OUT';
    this.seach_mode = 'estate';
    if (param.seach_mode && param.seach_mode == 'parking') {
        this.seach_mode = 'parking';

    }
    if (param.map_search_flag && param.map_search_flag == 'Y') {
        this.map_search_flag = "Y";

        if (param.api_url && param.api_url != "") {
            this.api_url = param.api_url;

        }

    }
    if (param.icon && param.icon != "") {
        this.icon = param.icon;

        if (param.icon_size && param.icon_size > 0) {
            this.icon_size = param.icon_size;

        }

    }
    if (param.marker_label && param.marker_label == 'Y') {
        this.marker_label = "Y";

    }


    // ãƒ—ãƒ¬ã‚¤ã‚¹ä½¿ç”¨æ™‚ã®ãƒ—ãƒ­ãƒ‘ãƒ†ã‚£
    // ãƒ—ãƒ¬ã‚¤ã‚¹ä½¿ç”¨æ™‚ã¯ google maps api å‘¼ã³å‡ºã—ã® URL ã« &libraries=places ã®è¿½è¨˜ãŒå¿…è¦
    this.map_place_flag = 'N';
    if (param.map_place_flag && param.map_place_flag == 'Y') {
        this.map_place_flag = "Y";

    }


    // åœ°å›³ã®ç”Ÿæˆ
    this.map = new google.maps.Map(document.getElementById(this.map_id), this.map_option);
    this.geocoder = new google.maps.Geocoder();

    // 20180717 ãƒ­ã‚®ãƒ³ã‚°
    $.post("/ajax/gmap_logger.php", { "type": "www" });

    if (this.map_place_flag == 'Y') {
        this.place = new google.maps.places.PlacesService(this.map);

    }
    this.direction = new google.maps.DirectionsService();

    // åœ°å›³ã«ã‚¤ãƒ™ãƒ³ãƒˆã‚’ãƒã‚¤ãƒ³ãƒ‰
    /*
    google.maps.event.addListener( this.map, 'idle', function(){
        mc.map_area();
        mc.get_zoom();
        if( mc.map_search_flag == 'Y' ){
            mc.map_search();
        }
	
    });
    */

    /****************
	
    ã€€åœ°å›³æ“ä½œã§ã®æ¤œç´¢
	
    ****************/

    //åˆå›žè¡¨ç¤º(å…¨ã‚¿ã‚¤ãƒ«ã®èª­ã¿è¾¼ã¿å®Œäº†å¾Œç™ºç«);
    google.maps.event.addListenerOnce(this.map, "tilesloaded", function () {
        //console.log('ã‚¿ã‚¤ãƒ«');
        mc.map_area();
        mc.get_zoom();
        mc.map_search();
    });

    //åœ°å›³ã®ãƒ‰ãƒ©ãƒƒã‚°æ“ä½œå®Œäº†å¾Œã«ç™ºç«;
    google.maps.event.addListener(this.map, "dragend", function () {
        //console.log('ãƒ‰ãƒ©ãƒƒã‚°');
        mc.map_area();
        mc.get_zoom();
        mc.map_search();
    });

    //çŸ¢å°ã‚­ãƒ¼ã‚’æ”¾ã—ãŸã‚¿ã‚¤ãƒŸãƒ³ã‚°ã§ç™ºç«;
    document.getElementById(param.map_id).addEventListener('keyup', function (event) {
        var key_code_array = [40, 39, 38, 37];
        //console.log(event.keyCode);
        //console.log(key_code_array.indexOf(event.keyCode));
        if (key_code_array.indexOf(event.keyCode) != -1) {
            //console.log('çŸ¢å°æ¤œç´¢ç™ºç«');
            //mc.map_search_flag == 'Y';
            mc.map_area();
            mc.get_zoom();
            mc.map_search();
        }
    })

    google.maps.event.addListener(this.map, 'zoom_changed', function () {
        mc.map_area();
        mc.get_zoom();
        mc.map_search();
    });


}

// åœ°å›³ã®ã‚¿ã‚¤ãƒ«èª­ã¿è¾¼ã¿å¾Œã«æ¤œç´¢(å‘¼ã³å‡ºã—ç”¨ã€€ä¾‹:ã‚¸ã‚ªã‚³ãƒ¼ãƒ‡ã‚£ãƒ³ã‚°ã®æ¤œç´¢)
map_control.prototype.loaded_search = function () {
    var mc = this;
    google.maps.event.addListenerOnce(mc.map, "tilesloaded", function () {
        //console.log('ã‚¿ã‚¤ãƒ«');
        mc.map_area();
        mc.get_zoom();
        mc.map_search();
    });
}


// åœ°å›³ã®è¡¨ç¤ºç¯„å›²ï¼ˆå››éš…ã®åº§æ¨™ï¼‰ã‚’å–å¾—
map_control.prototype.map_area = function () {
    var cookie_lat = this.map.getCenter().lat();
    var cookie_lng = this.map.getCenter().lng();
    var bounds = this.map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    this.bounds.ne.lat = ne.lat();
    this.bounds.ne.lng = ne.lng();
    this.bounds.sw.lat = sw.lat();
    this.bounds.sw.lng = sw.lng();
    this.center_latlang = cookie_lat + ',' + cookie_lng;


    var center_latlang = cookie_lat + ',' + cookie_lng;
    $('#cookie_map').val(center_latlang);
    var map_param = { 'cookie_map_e': center_latlang }
    //$.post( this.api_url, map_param)
    //$('#cookie_lng').val(cookie_lng);
    //var center_latlang = cookie_lat+','+cookie_lng;
    //$.cookie('estate_center',center_latlang);

}


// ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«ã‚’å–å¾—
map_control.prototype.get_zoom = function () {
    zoomLevel = this.map.getZoom();
    this.zoom = zoomLevel;

}


// åœ°å›³ã®ä¸­å¤®åº§æ¨™ã‚’å¤‰æ›´
map_control.prototype.set_center = function (lat, lng) {
    this.lat = lat;
    this.lng = lng;
    this.map.setCenter(new google.maps.LatLng(this.lat, this.lng));

}


// ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«ã‚’å¤‰æ›´
map_control.prototype.set_zoom = function (zoom) {
    this.zoom = zoom;
    this.map.setZoom(this.zoom);

}


// ã‚¸ã‚ªã‚³ãƒ¼ãƒ‡ã‚£ãƒ³ã‚°ã«ã‚ˆã‚‹åœ°å›³ã®ç§»å‹•
map_control.prototype.geocoding = function (address) {
    var mc = this;

    this.geocoder.geocode(
        {
            address: address,
            language: 'ja'

        },
        function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                mc.set_zoom(mc.geocoding_zoom);
                mc.set_center(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                mc.loaded_search();
            }

        }

    );

}


// 20180225 ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«ã«ã‚ˆã‚‹åˆ¶é™ã®éš›ã®ã‚¢ã‚¯ã‚·ãƒ§ãƒ³
map_control.prototype.show_zoom_level_alert = function (callback) {
    if (!callback) {
        callback = function () { };

    }

    var txt = "åœ°å›³ã‚’æ‹¡å¤§ã™ã‚‹ã¨ç‰©ä»¶æƒ…å ±ãŒè¡¨ç¤ºã•ã‚Œã¾ã™";
    if (this.seach_mode == "parking") {
        txt = "åœ°å›³ã‚’æ‹¡å¤§ã™ã‚‹ã¨é§è»Šå ´æƒ…å ±ãŒè¡¨ç¤ºã•ã‚Œã¾ã™";
    }
    if (!$("div.map_zoom_alert")[0]) {
        $("<div />")
            .addClass("map_zoom_alert")
            .css({
                'background': '#ffffff',
                'border': '2px solid #ff0000',
                'border-radius': 5,
                'position': 'absolute',
                'top': '30%',
                'left': 0,
                'right': 0,
                'margin': 'auto',
                'width': 460,
                'height': 46,
                'line-height': '44px',
                'font-size': '16px',
                'text-align': 'center',
                'opacity': 0.0

            })
            .text(txt)
            .appendTo("div#" + this.map_id)
            .animate({ 'opacity': 0.9 }, 500);

    }

}
map_control.prototype.hide_zoom_level_alert = function (callback) {
    if (!callback) {
        callback = function () { };

    }


    $("div.map_zoom_alert")
        .animate({ 'opacity': 0.0 }, 500)
        .remove();

}




// ãƒ—ãƒ¬ã‚¤ã‚¹ã®å–å¾—ã¨ãƒªã‚¹ãƒˆåŒ–
map_control.prototype.get_place = function (key, callback) {
    var mc = this;

    var type = "";
    switch (key) {
        case "å°å­¦æ ¡":
            key = "å°å­¦æ ¡";
            type = "school";
            break;

        case "ä¸­å­¦æ ¡":
            key = "ä¸­å­¦";
            type = "school";
            break;

        case "è­¦å¯Ÿç½²":
            type = "police";
            break;

        case "éŠ€è¡Œ":
            type = "bank";
            break;

        case "éƒµä¾¿å±€":
            type = "post_office";
            break;

        case "ç¾Žå®¹å®¤":
            type = "hair_care";
            break;

        case "ãƒ¬ã‚¹ãƒˆãƒ©ãƒ³":
            type = "restaurant";
            break;

        case "ã‚«ãƒ•ã‚§":
            type = "cafe";
            break;

        case "æ›¸åº—":
            type = "book_store";
            break;

        case "ã‚¹ãƒ¼ãƒ‘ãƒ¼ãƒžãƒ¼ã‚±ãƒƒãƒˆ":
            type = "grocery_or_supermarket";
            key = "ã‚¹ãƒ¼ãƒ‘ãƒ¼"
            break;

        case "ã‚³ãƒ³ãƒ“ãƒ‹":
            type = "convenience_store";
            break;

        case "ä¸å‹•ç”£æ¥­":
            type = "real_estate_agency";
            //key	= "è³ƒè²¸ç‰©ä»¶"
            break;

        case "é§…":
            type = "station";
            break;

        case "ãƒã‚¹åœ":
            type = "bus_station";
            break;

        default:
            return false;
            break;

    }

    // æ¤œç´¢
    request = {
        location: new google.maps.LatLng(mc.lat, mc.lng),
        types: [type],
        keyword: key,
        rankBy: google.maps.places.RankBy.DISTANCE

    };
    mc.place.search(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
            // åˆæœŸåŒ–
            mc.place_list = {};
            mc.delete_place_marker();

            // ãƒªã‚¹ãƒˆåŒ–å‡¦ç†
            $.each(results, function () {
                var id = this.id;
                var name = this.name;
                var lat = this.geometry.location.lat();
                var lng = this.geometry.location.lng();
                mc.place_list[this.id] = {
                    'id': id,
                    'name': name,
                    'lat': lat,
                    'lng': lng

                };
                var marker_option = {
                    map: mc.map

                };

                marker_option.position = new google.maps.LatLng(lat, lng);
                mc.place_marker[id] = new google.maps.Marker(marker_option);

                // ãƒžãƒ¼ã‚«ãƒ¼ã«ã‚¯ãƒªãƒƒã‚¯ã‚¤ãƒ™ãƒ³ãƒˆã‚’è¿½åŠ 
                google.maps.event.addListener(mc.place_marker[id], 'click', function () {
                    $("div.place_list div").css({ 'background': 'none' });
                    $("div#" + id).css({ 'background': '#ffcccc' });
                    mc.draw_direction(lat, lng);

                });

            });
            callback();

        }

    });

}


// ã™ã¹ã¦ã®ãƒ—ãƒ¬ã‚¤ã‚¹ãƒžãƒ¼ã‚«ãƒ¼ã‚’å‰Šé™¤
map_control.prototype.delete_place_marker = function () {
    var mc = this;
    $.each(mc.place_marker, function () {
        this.setMap(null);

    });

};


// 2ç‚¹é–“ã®é †è·¯ã‚’è¡¨ç¤º
map_control.prototype.draw_direction = function (lat, lng) {
    var mc = this;

    mc.delete_direction();

    var request = {
        origin: new google.maps.LatLng(mc.lat, mc.lng),
        destination: new google.maps.LatLng(lat, lng),
        travelMode: google.maps.DirectionsTravelMode.WALKING

    };

    var latlng = lat + "-" + lng;
    mc.direction.route(request, function (result, status) {
        mc.direction_line[latlng] = new google.maps.DirectionsRenderer();
        mc.direction_line[latlng].setDirections(result);
        mc.direction_line[latlng].setMap(mc.map);

    });

}

map_control.prototype.delete_direction = function () {
    var mc = this;

    $.each(mc.direction_line, function () {
        this.setMap(null);

    });

}




// ã‚¹ãƒˆãƒªãƒ¼ãƒˆãƒ“ãƒ¥ãƒ¼
map_control.prototype.set_street_view = function () {
    var mc = this;

}




// ç‰©ä»¶ã‚’æ¤œç´¢ã—ã¦ãƒªã‚¹ãƒˆã«æ ¼ç´
map_control.prototype.map_search = function (callback) {
    if (!callback) {
        callback = this.list_function;

    }

    // 20180225 ã‚ºãƒ¼ãƒ ãƒ¬ãƒ™ãƒ«ã§æ¤œç´¢å‹•ä½œã‚’åˆ¶é™
    /*$( "<div />" )
            .css({
                'background'	: '#ffffff',
                'border'		: '2px solid #ff0000',
                'border-radius'	: 5,
                'position'		: 'absolute',
                'bottom'		: 10,
                'left'			: 10,
                'width'			: 150,
                'padding'		: '10px 20px'
        	
            })
            .text( "ZOOM : " + this.zoom )
            .appendTo( "div#" + this.map_id )*/
    if (this.zoom_level_limit == 'Y' && this.zoom <= this.limit_zoom_level) {
        this.show_zoom_level_alert();
        this.delete_full_marker();
        this.drop_full_data();
        $('#cnt').val(0);
        $('#num_room').text(0);
        return false;

    }
    this.hide_zoom_level_alert();

    // 20180225 æ¤œç´¢å‡¦ç†ä¸­ã®å†æ¤œç´¢ã‚’åˆ¶é™
    if (this.seach_status == 'IN') {
        return false;

    }


    // æ¤œç´¢æ¡ä»¶ã®è¨­å®š
    var param = {};
    param.cookie_map_e = this.center_latlang;
    param.lat1 = this.bounds.ne.lat;
    param.lng1 = this.bounds.sw.lng;
    param.lat2 = this.bounds.sw.lat;
    param.lng2 = this.bounds.ne.lng;

    if (this.search_param) {
        $.each(this.search_param, function (key) {
            param[key] = this;

        });

    }

    // æ¤œç´¢çµæžœã®å–å¾—
    var mc = this;
    mc.seach_status = 'IN';
    $.post(mc.api_url, param, function (dd) {
        mc.seach_status = 'OUT';
        mc.cnt_current_data = 0;

        if (dd && dd.match(/\[/)) {
            var data = $.parseJSON(dd);
            $.each(data, function () {
                var latlng = this.lat + "-" + this.lng;
                if (!mc.current_data[latlng] || mc.current_data[latlng]['cnt'] != this.cnt) {
                    mc.current_data[latlng] = this;
                    //console.log(mc.current_data[latlng]);

                    if (mc.marker[latlng]) {
                        mc.marker[latlng].setMap(null);
                        delete mc.marker[latlng];

                    }

                }
                mc.cnt_current_data++;

            });
            $('#cnt').val(0);
            $('#num_room').text(0);
            mc.drop_frameout_data();
            mc.plot_marker();

        } else {
            $('#cnt').val(0);
            $('#num_room').text(0);
            mc.drop_full_data();
            mc.delete_full_marker();

        }
        callback();

    });

};


// ç¾åœ¨æ¡ä»¶ã§å†æ¤œç´¢ã€å†æç”»
map_control.prototype.search = function () {
    this.delete_full_marker();
    this.drop_full_data();
    this.map_search();

}


// å–å¾—ã—ãŸç‰©ä»¶ã‚’ã™ã¹ã¦å‰Šé™¤
map_control.prototype.drop_full_data = function () {
    this.current_data = {};

};


// å–å¾—ã—ãŸç‰©ä»¶ã‹ã‚‰è¡¨ç¤ºç¯„å›²å¤–ã®ã‚‚ã®ã‚’å‰Šé™¤
map_control.prototype.drop_frameout_data = function () {
    var mc = this;
    $.each(mc.current_data, function () {
        // ãƒžãƒ¼ã‚«ãƒ¼ã®è¨­ç½®
        var latlng = this.lat + "-" + this.lng;
        var lat = this.lat;
        var lng = this.lng;

        if (
            lat > mc.bounds.ne.lat ||
            lng < mc.bounds.sw.lng ||
            lat < mc.bounds.sw.lat ||
            lng > mc.bounds.ne.lng

        ) {
            delete mc.current_data[latlng];

        }

    });

};


// ã™ã¹ã¦ã®ãƒžãƒ¼ã‚«ãƒ¼ã‚’å‰Šé™¤
map_control.prototype.delete_full_marker = function () {
    var mc = this;
    $.each(mc.marker, function (latlng) {
        if (mc.marker[latlng]) {
            mc.marker[latlng].setMap(null);
            delete mc.marker[latlng];

        }

    });

};


// è¡¨ç¤ºç¯„å›²å¤–ã®ãƒžãƒ¼ã‚«ãƒ¼ã‚’å‰Šé™¤
map_control.prototype.delete_frameout_marker = function () {
    var mc = this;
    $.each(mc.marker, function (latlng) {
        var lat = this.getPosition().lat();
        var lng = this.getPosition().lng();

        if (
            lat > mc.bounds.ne.lat ||
            lng < mc.bounds.sw.lng ||
            lat < mc.bounds.sw.lat ||
            lng > mc.bounds.ne.lng

        ) {
            if (mc.marker[latlng]) {
                mc.marker[latlng].setMap(null);
                delete mc.marker[latlng];

            }

        }

    });

};


// å–å¾—ã—ãŸç‰©ä»¶ã‚’ãƒ—ãƒ­ãƒƒãƒˆ
map_control.prototype.plot_marker = function () {
    var mc = this;
    var input = $('#cnt').length;
    if (input == '0' || input == '') {
        var input_cnt = 'N'
    } else {
        var input_cnt = 'Y'
        $('#cnt').val(0);
    }
    $.each(mc.current_data, function () {
        var latlng = this.lat + "-" + this.lng;
        var lat = this.lat;
        var lng = this.lng;
        var cnt = this.cnt;
        var data = this;


        if (input_cnt == 'N') {
        } else {
            val = parseInt($('#cnt').val());
            var all_cnt = val + cnt;
            $('#cnt').val(all_cnt);
            $('#num_room').text(all_cnt);
        }

        // ãƒžãƒ¼ã‚«ãƒ¼ã®è¨­ç½®å‡¦ç†
        if (!mc.marker[latlng]) {
            var marker_option = {
                map: mc.map

            };
            if (mc.icon && mc.icon != "") {
                var marker_image = new google.maps.MarkerImage(
                    mc.icon,
                    new google.maps.Size(mc.icon_size, mc.icon_size)
                    //new google.maps.Point( 0, 0 )

                );
                marker_option.icon = marker_image;

            }

            if (mc.marker_label == 'Y') {
                var label = 'å¤š';
                if (cnt < 10) {
                    label = String(cnt)

                }
                marker_option.label = {
                    text: label,
                    color: '#ffffff'

                }

            }
            marker_option.position = new google.maps.LatLng(lat, lng);
            mc.marker[latlng] = new google.maps.Marker(marker_option);

            // ãƒžãƒ¼ã‚«ãƒ¼ã«ã‚¯ãƒªãƒƒã‚¯ã‚¤ãƒ™ãƒ³ãƒˆã‚’è¿½åŠ 
            google.maps.event.addListener(mc.marker[latlng], 'click', function () {
                mc.marker_function({
                    latlng: latlng,
                    lat: lat,
                    lng: lng,
                    cnt: cnt,
                    data: data

                });

            });

        }

    });
    mc.delete_frameout_marker();

};


// å€‹åˆ¥ãƒžãƒ¼ã‚«ãƒ¼ã‚’ãƒ—ãƒ­ãƒƒãƒˆ
map_control.prototype.plot_solo_marker = function (param) {
    var mc = this;

    // ãƒžãƒ¼ã‚«ãƒ¼ã®è¨­å®š
    var marker_option = {
        map: mc.map,
        position: new google.maps.LatLng(param.lat, param.lng)

    };
    if (param.icon) {
        marker_option.icon = new google.maps.MarkerImage(
            param.icon

        );

    }

    // ãƒžãƒ¼ã‚«ãƒ¼ã®è¨­ç½®
    mc.solo_marker[param.marker_id] = new google.maps.Marker(marker_option);

    // ãƒžãƒ¼ã‚«ãƒ¼ã«ã‚¯ãƒªãƒƒã‚¯ã‚¤ãƒ™ãƒ³ãƒˆã‚’è¿½åŠ 
    google.maps.event.addListener(mc.solo_marker[param.marker_id], 'click', function () {
        //sample_func( room_id );

    });

};


// å€‹åˆ¥ãƒžãƒ¼ã‚«ãƒ¼ã‚’å‰Šé™¤
map_control.prototype.delete_solo_marker = function (marker_id) {
    var mc = this;
    if (mc.solo_marker[marker_id]) {
        mc.solo_marker[marker_id].setMap(null);

    }

};



