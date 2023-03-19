<html>
<title>リアルネットプロ</title>
<link href="./css/main_menu.css" rel="stylesheet" type="text/css">

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQFTXP9');</script>
<!-- End Google Tag Manager -->

<script async src="https://www.googletagmanager.com/gtag/js?id=G-9FXQTNH0JJ"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk"></script>
<script src="./js/jquery-1.8.2.min.js" type="text/javascript" language="javascript"></script>
<script src="./js/f5_block.js" type="text/javascript" language="javascript"></script>
<script src="./js/room_detail_history.js?20221213" type="text/javascript" language="javascript"></script>

<script>
//googleアナリティクス
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9FXQTNH0JJ');


var s_cnt = 0;
session_timer = setInterval(function(){
	$.post( "/ajax/session_keep_www.php", function( dd ){
		//alert(dd);
	});
		
	s_cnt += 1;
	if( s_cnt > 3 ){
		clearInterval(session_timer);
	}
} , 900000);

var isIE = "N";

var R_history;

$(function(){
	R_history = new room_history();

	web_entry_message_badge();
	
	$('.left').hover(inFunc, outFunc);
	
	
	function inFunc(){
		$('.menu_text').stop();
		if(!($('.menu_text').is(':animated'))){
			$('.menu_text').animate({'margin-left':'0px'},{'duration':200,'easing': 'linear'});
		}else{
			$('.menu_text').stop();
			$('.menu_text').animate({'margin-left':'0px'},{'duration':200,'easing': 'linear'});
		}
		
	}
	
	function outFunc(){
		$('.menu_text').stop();
		
		if(!($('.menu_text').is(':animated'))){
			$('.menu_text').animate({'margin-left':'-260px'},{'duration':200,'easing': 'linear'});
		}else{
			$('.menu_text').stop();
			$('.menu_text').animate({'margin-left':'-260px'},{'duration':200,'easing': 'linear'});
		}
		
	}
	
	$('.left').css({'z-index':'400'});
	
	$('.guide_area').click(function(){
		$('.layer').fadeIn();
	});
	
	$('.layer_close').click(function(){
		$('.layer').fadeOut();
	});
	
	
	
	/*
	$('.one_page').hover(in_m, out_m);
	
	function in_m(){
		$(this).find('.one_page_contents').show();
	}
	
	function out_m(){
		$(this).find('.one_page_contents').hide();
	}
	*/
	
});

function change_mediation(){
	//$("input.change_mediation").wrap( "<form class='new_mediation' action='https://ex.realnetpro.com/old_login.php' method='post' target='_blank'></form>" ).closest("form.new_mediation").submit().find("input.change_mediation").unwrap("form.new_mediation");
	$("input.change_mediation").wrap( "<form class='new_mediation' action='https://ex.realnetpro.com/old_login.php' method='post' target='_blank'></form>" ).closest("form.new_mediation").submit().find("input.change_mediation").unwrap("form.new_mediation");

}


function web_entry_message_badge(){
	
	var menu_length = 0;
	
	$('.user_box').find('.icon').each(function(){
		if( $(this).find('img').attr('src') == "/img/web_entry_icon.png" ){
			menu_length++;
		}
	});
	
	if( menu_length > 0 ){
	
		var user_compnay_id = $('#user_compnay_id').val();
		if( user_compnay_id != "" ){
			$.post('./ajax/get_application_count.php',{mediation_company_id:user_compnay_id },function(dd){
				if( dd && dd != "false" ){
					var data = $.parseJSON( dd );

					$('.user_box').find('.icon').each(function(){
						if( $(this).find('img').attr('src') == "/img/web_entry_icon.png" ){
							$(this).append('<span class="badge" style="position: absolute; top: -5px; right: -5px; background-color: #C62C2C; color: #FFF; height: 20px; width: 20px; border-radius:5px; box-shadow:0 0 2px #000;"><span style="display:table-cell; height:20px; width:20px; vertical-align:middle; text-align:center; font-size: 12px; font-weight: bold;">'+data.contact+'</span></span>');
						}
					});
				}
			});
		}
	
	}
}

</script>
<style>

.all_menu_box,
.search_box2,
.system_box2,
.user_box2 {
	display:none;
}

.logo_area_text {
	height:60px;
}

.top_guide a {
	display: table-cell;
	height: 60px;
	vertical-align: middle;
}

.top_guide a:visited,
.guide a:visited {
	color:#666;
}

.top_guide a:hover,
.guide a:hover {
	color:#BA5F2B;
}

.layer_close {
	border:1px solid #666;
	border-radius:5px;
	cursor:pointer;
}

.layer_close:hover {
	background-color:#666;
	color:#FFF;
}

.layer_close span {
	display:table-cell;
	height:40px;
	width:80px;
	vertical-align:middle;
	text-align:center;
}

.help_link {
	display:inline-block !important;
	height:auto !important;
	border:1px solid #BA5F2B;
	color:#BA5F2B;
	padding:2px 5px !important;
	font-size:12px;
	border-radius:5px;
	cursor:pointer;
}

.help_link:hover {
	background-color:#BA5F2B;
	color:#FFF !important;
}

#display_room_history {
	position: absolute;
	top: 0;
	right: -500px;
	z-index: 30;
	height: 100%;
	width: 400px;
	background-color: #ffffffc4;
	overflow: auto;
	padding: 10px;
	backdrop-filter: blur(3px);
}

.display_room_history_header {
	height: 40px;
    line-height: 40px;
    position: relative;
    background-color: #43423b;
    color: #fff;
    padding: 0 5px;
}

.display_room_history_header button {
	position: absolute;
	top: 6px;
	right: 10px;
	width: 70px;
	height: 28px;
	background-color:#BA5F2B;
	color:#FFF !important;
	border: none;
	cursor: pointer;
	border-radius: 5px;
}

.history_table_box {
	margin: 0px 0 10px 0;
}

.history_annotation {
	margin: 0;
	font-size: 12px;
	background-color: #ffffff;
    color: #3c3c3c;
    padding: 5px 2px;
    
}

.history_table_box thead {
	position: sticky;
	top: -10px;
	left: 0;
}

.history_table_box thead td {
	background-color: #d7d7d7;
}

#display_room_history table {
	font-size: 9pt;
	border-collapse: separate;
	border-spacing: 0px;
	width: 100%;
	border: solid 1px #b2b2b2;
    border-top: none;
	border-right: none;
	background-color: #fff;
}

#display_room_history td {
	padding: 5px;
	border-top: solid 1px #b2b2b2;
    border-right: solid 1px #b2b2b2;
}

.history-detail-btn {
	border: solid 1px #3c3c3c;
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    color: #fff;
    cursor: pointer;
	/* position: relative; */
}
.hover-name {
	display: none;
    
}
/* .name-display {
	display: inline-block;
    position: absolute;
    top: 0px;
    color: #fff;
    background-color: #3c3c3c;
    border: solid 1px #3c3c3c;
    padding: 5px;
    width: 250%;
    border-radius: 3px;
    right: 0;
} */
.history-detail-btn:hover {
	background-color: #3c3c3c;
	border: solid 1px #fff;
}
.history-detail-btn img {
	width: 30px;
}

body {
	overflow: hidden;
}


@media screen and ( max-height: 640px ){
	
.search_box,
.system_box,
.user_box {
	display:none;
}

.all_menu_box {
	display:block;
	margin: 10px 0;
	border-bottom: 0.5px solid #666;
	position: relative;
	padding: 0 0 10px 0;
}

.icon {
	height:50px;
}

.search_box2,
.system_box2,
.user_box2 {
	display:block;
	height:120px;
}

.search_box2 .text,
.system_box2 .text,
.user_box2 .text {
	height:30px;
}
	
}

</style>


<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQFTXP9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<input class="change_mediation" type="hidden" name="key" value="7G/oaMPGg+5+UxL1UsfqiHF/h/24WS5kC4GoMUvaSw8=" />
<input type="hidden" id="user_compnay_id" value="19017">
<div class="left">
	<input id="search_display" type="hidden" value="">
	<div class="menu_icon">
		<div class="logo_area">
			<a href="main.php">
				<img src="./img/rnp_menu_logo.png" />
			</a>
		</div>
				<div class="search_box">
						<a href="/main.php?method=estate&display=building">
				<span class="icon"><img src="/img/icon_home.png" /></span>
				<div class="line"></div>
			</a>
						<a href="/main.php?method=tenant&display=building">
				<span class="icon"><img src="/img/icon_tenant.png" /></span>
				<div class="line"></div>
			</a>
						<a href="/main.php?method=parking&display=building">
				<span class="icon"><img src="/img/icon_parking.png" /></span>
				<div class="line"></div>
			</a>
					</div>
				<div class="system_box">
						<a href="/main.php?method=topics">
				<span class="icon"><img src="/img/icon_info.png" /></span>
				<div class="line"></div>
			</a>
						<a href="/main.php?method=company_list">
				<span class="icon"><img src="/img/icon_company_list.png" /></span>
				<div class="line"></div>
			</a>
						<a href="https://www.rnp.jp/rnp_plus/" target="_blank">
				<span class="icon"><img src="/img/icon_HP.png" /></span>
				<div class="line"></div>
			</a>
					</div>
				<div class="user_box">
						<a href="/mybox_top.php" target="_blank">
				<span class="icon"><img src="/img/icon_strage.png" /></span>
				<div class="line"></div>
			</a>
						<a href="/main.php?method=account">
				<span class="icon"><img src="/img/icon_user.png" /></span>
				<div class="line"></div>
			</a>
						<a href="/main.php?method=web_entry&entry_menu=apply">
				<span class="icon"><img src="/img/web_entry_icon.png" /></span>
				<div class="line"></div>
			</a>
					</div>
		        
        
		<div class="all_menu_box">
            <span class="icon"><img src="./img/site_menu.png" /></span>
            <div class="line"></div>
		</div>
		
        
        <div class="guide_area">
			<span class="guide_text">ヘルプ</span>
		</div>
	
	</div>
	
	<div class="menu_text">
		<div class="logo_area_text">
        	<div>
            	<div class="text_boxs">
                	<a class="text" href="main.php">トップページ</a>
                </div>
            </div>
		</div>
				<div class="search_box">
						<div class="text_boxs">
				<a class="text" href="/main.php?method=estate&display=building">
					住居検索
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=tenant&display=building">
					テナント検索
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=parking&display=building">
					駐車場検索
				</a>
				<div class="line"></div>
			</div>
					</div>
				<div class="system_box">
						<div class="text_boxs">
				<a class="text" href="/main.php?method=topics">
					最新情報・お知らせ
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=company_list">
					管理会社一覧
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="https://www.rnp.jp/rnp_plus/" target="_blank">
					HP連動設定
				</a>
				<div class="line"></div>
			</div>
					</div>
				<div class="user_box">
						<div class="text_boxs">
				<a class="text" href="/mybox_top.php" target="_blank">
					mybox閲覧
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=account">
					アカウント情報
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=web_entry&entry_menu=apply">
					WEB申込プロ情報
				</a>
				<div class="line"></div>
			</div>
					</div>
		        
        		<div class="search_box2">
						<div class="text_boxs">
				<a class="text" href="/main.php?method=estate&display=building">
					住居検索
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=tenant&display=building">
					テナント検索
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=parking&display=building">
					駐車場検索
				</a>
				<div class="line"></div>
			</div>
					</div>
				<div class="system_box2">
						<div class="text_boxs">
				<a class="text" href="/main.php?method=topics">
					最新情報・お知らせ
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=company_list">
					管理会社一覧
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="https://www.rnp.jp/rnp_plus/" target="_blank">
					HP連動設定
				</a>
				<div class="line"></div>
			</div>
					</div>
				<div class="user_box2">
						<div class="text_boxs">
				<a class="text" href="/mybox_top.php" target="_blank">
					mybox閲覧
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=account">
					アカウント情報
				</a>
				<div class="line"></div>
			</div>
						<div class="text_boxs">
				<a class="text" href="/main.php?method=web_entry&entry_menu=apply">
					WEB申込プロ情報
				</a>
				<div class="line"></div>
			</div>
					</div>
		
	</div>
    
    <div class="logout">
   		<a href="/logout.php">
        	<span><img src="./img/logout.png" /></span>
        </a>
    </div>
    
</div>
<form id="main_form" style="margin:0;" action="search_cookie.php" method="post" style="height:100%;">
<div class="contents_menu">
	<link href="./css/tyukai.css?1678873081" rel="stylesheet" type="text/css">
<script src="https://www.google.com/recaptcha/api.js?render=6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk"></script>

<script>

function a_hack( event, dom ){
	event.preventDefault();

	var href = $(dom).attr('href');

	var base = [];
	var get_array = href.split('&');
	console.log(get_array);
	$.each( get_array, function(){
		var one_get = this.split('=');
		if( one_get[0] != 'gr' ){
			base.push( this );
		}
	})


	grecaptcha.ready(function() {
		grecaptcha.execute('6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk', {action:'homepage'}).then(function(token) {
			var set_url = base.join('&');
			location.href = set_url+'&gr='+token;
		});
	});
}

function pager( base_url, offset ){

	var base = [];
	var get_array = base_url.split('&');
	console.log(get_array);
	$.each( get_array, function(){
		var one_get = this.split('=');
		if( one_get[0] != 'gr' ){
			base.push( this );
		}
	})

	grecaptcha.ready(function() {
		grecaptcha.execute('6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk', {action:'homepage'}).then(function(token) {
			var set_url = base.join('&');
			location.href = './main.php?'+set_url+'&page='+offset+'&gr='+token;
		});
	});
}

function go_detail( event, id, type ){
	event.preventDefault();

	var win = open("", "");
	win.document.open();
	win.document.write('<style>html,body{height:100%;padding:0;margin:0;background-image: url(https://www.realnetpro.com/img/blurredbackground_t.jpg);background-size: cover;background-position: center center;}</style>');
	//win.document.write('<div style="height:100%; width:100%; background-color:#FFF8EB;">hoge</div>');
	win.document.close();

	grecaptcha.ready(function() {
		grecaptcha.execute('6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk', {action:'homepage'}).then(function(token) {
	
			var url = 'room_detail.php?id='+id;
			if( type == 'tenant' ){
				url += '&type=tenant';
			}else {
				url += '&type=room';
			}
			url += '&gr='+token;

			win.location = url; 

		});
	});
}
//閲覧履歴を表示
function set_browsing(){
	let type = document.getElementById('property_type').value;
	if(type == 'estate')type = 'room';

	if( R_history ){
		R_history.get_room_info(type);
		//<span class="browsing_date" id="browsing_{room_id}"></span>を表示位置にセット
		$('.browsing_date').each(function(){
			var rid = $(this).attr('id').replace('browsing_','');
			// console.log(rid)
			if( R_history.history && R_history.history[rid] ){
				// 今日閲覧した物件のみ絞り込み
				if(todayProperties(R_history.history[rid])){

					const wrapItem = $(this).closest('tr');
					
					$(wrapItem).find('.room_number').css({'color':'#541a8b'});
					$(this).html('<span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 17.6 13.4"><path id="パス_236" data-name="パス 236" d="M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z" transform="translate(-3.4 -5.6)" fill="#541a8b"/></svg></span>閲覧済')
					.css({'color': '#541a8b'});
				
				/*
				$(this).html('● '+R_history.history[rid]['date']+'に閲覧').css({
					'font-size'		: '11px',
					'color'			: '#077af4',
					'display'		: 'inline-block',
					'vertical-align': 'middle'
				});
				*/
				}
			}
		})
	}
}



function todayProperties(obj){

	const tureProperties = function(objDate,today){
		return ( objDate.getFullYear() == today.getFullYear() ) && ( objDate.getMonth() + 1 == today.getMonth() + 1 ) && ( objDate.getDate() ==  today.getDate() )
	}

	const objDate = new Date(obj.default_date);
	const today = new Date();

	return tureProperties(objDate,today);
}



$('.go_detail , .room_number').live('click',function(){
	const now = new Date();
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	const hour = now.getHours();
	const minite = now.getMinutes();

	const nowTime = year + '/' + month + '/' + date + ' ' + hour + ':' + minite;

	const parent = $(this).closest('tr');

	$(parent).find('.room_number').css({'color':'#541a8b'});
	const browsing_date = $(parent).find('.browsing_date').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 17.6 13.4"><path id="パス_236" data-name="パス 236" d="M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z" transform="translate(-3.4 -5.6)" fill="#541a8b"/></svg></span>閲覧済');
		$(browsing_date).css({'color':'#541a8b'});


});


$(function(){

	set_browsing();

	var url = location.href;
	var get = url.split("=");
	var display_type = get[2];
	$('#search_display').val(display_type);
	
	$('.type_menu,.search_type_icon,.save_search,.reset_button,.go_search,.click_menu,.any_search,.building_data,.pager,.pager_disable,.pager_current,.history_btn').hover(up, down);
	
	
	function up(){
		if(!($(this).is(':animated'))){
			$(this).animate({'top':'-5px'},{'duration':100,'easing': 'linear'});
		}
	}
	
	function down(){
		$(this).animate({'top':'0px'},{'duration':100,'easing': 'linear'});
	}
	
	//印刷ホバー
	$('.print').hover(printup,printdown);
	
	function printup(){
		//alert($(this).find('img').attr('src'))
		$(this).find('.hover_comment').show();
		$(this).find('img').attr('src','./img/print_hover.png');
	}
	
	function printdown(){
		$(this).find('.hover_comment').hide();
		$(this).find('img').attr('src','./img/print_icon.png')
	}
	
	//メールホバー
	$('.mail_button').hover(mailup, maildown);
	
	function mailup(){
		$(this).find('.hover_comment').show();
		$(this).find('img').attr('src','./img/mail_hover.png');
	}
	
	function maildown(){
		$(this).find('.hover_comment').hide();
		$(this).find('img').attr('src','./img/mail_icon.png');
	}
	
	
	//mybox
	$('.add_mybox_button').hover(myboxup, myboxdown);
	
	function myboxup(){
		$(this).find('.hover_comment').show();
		if($(this).find('.hover_comment').text() == 'mybox追加'){
			$(this).find('img').attr('src','./img/mybox_add_hover.png');
		}
	}
	
	function myboxdown(){
		$(this).find('.hover_comment').hide();
		if($(this).find('.hover_comment').text() == 'mybox追加'){
			$(this).find('img').attr('src','./img/mybox_add_icon.png');
		}
	}
	
	//詳細
	$('.go_detail').hover(detailup, detaildown);
	
	function detailup(){
		$(this).find('.hover_comment').show();
		$(this).find('img').attr('src','./img/detail_hover.png');
	}
	
	function detaildown(){
		$(this).find('.hover_comment').hide();
		$(this).find('img').attr('src','./img/detail_icon.png');
	}
	
	
	//詳細
	$('.search_type_icon').hover(icon_up, icon_down);
	
	function icon_up(){
		$(this).find('.search_type_icon_comment').show();
	}
	
	function icon_down(){
		$(this).find('.search_type_icon_comment').hide();
	}
	
	
	
	
	//画像ポップアップの範囲外クリックでフェードアウト
	 $(document).live('click', function(e) {
		 if (!$(e.target).closest('.large_photo,.room_layout_image').length) {
			 $('.large_photo').fadeOut();
		 }
	 });
	 
	 //ストック・メールの背景レイヤークリックでフェードアウト
	 $('.main_layer').live('click', function(e) {
		 if (!$(e.target).closest('.main_layer_contents,.check_search').length) {
			 $('.main_layer,.check_search').fadeOut();
			 $('.send_room_stock_list').show();
			 $('.send_step1').show();
			 $('.send_room_list').hide();
			 $('.send_step2').hide();
			 $('.mail_text_display').hide();
		 }
	 });
	 
	 //問合せ指定の範囲外クリックでフェードアウト
	 $(document).live('click', function(e) {
		 if (!$(e.target).closest('.specify_text,.specify').length) {
			 $('.specify_text').fadeOut();
		 }
	 });
	 
	 //機能の範囲外クリックでフェードアウト
	 $(document).live('click', function(e) {
		 if (!$(e.target).closest('.hide_room_menu,.room_system_menu').length) {
			 $('.hide_room_menu').animate({'right':'-100%'});
		 }
	 });
	 
	
	
	/*
	$(".eq").find('input').live('change',function(){
		//alert('change')
		if($(this).is(':checked')) {
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
		}else{
			$(this).parent('label').css({'background-color':'transparent','color':'#333'});
		}
	});
	
	
	$(".one_pref").find('input').live('change',function(){
		if($(this).is(':checked')) {
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
		}else{
			$(this).parent('label').css({'background-color':'transparent','color':'#333'});
		}
	});
	*/
	
	
	
	//沿線クリック
	/*
	$(".along_list").find('input').live('change',function(){
		if($(this).is(':checked')) {
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
		}else{
			$(this).parent('label').css({'background-color':'transparent','color':'#333'});
		}
	});
	*/
	/*
	$(".one_station").find('input').live('change',function(){
		if($(this).is(':checked')) {
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
		}else{
			$(this).parent('label').css({'background-color':'transparent','color':'#333'});
		}
	});
	
	$(".company_name_box_list").find('input').live('change',function(){
		if($(this).is(':checked')) {
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
		}else{
			$(this).parent('label').css({'background-color':'transparent','color':'#333'});
		}
	});
	*/
	 
	 
	 //エリア・沿線・管理会社を判定して検索項目表示
	 $('.click_menu').click(function(){
		 //$('.one_slide_search_box').css({'background-color':'transparent'});
		 //$(this).parent('.one_slide_search_box').css({'background-color':'#FFF'});
		 $('.company_jamp_box').hide();
		 $('.any_search_list').hide();
		 $('.check_sarch_list').hide();
		 $('.check_block').hide();
		 var id = $(this).attr('id');
		 if(id == 'area_b'){
			 $('.company_list').hide();
			 $('.trans_list').hide();
			 $('.area_list').show();
			 $('.area_step_check_block').show();
			 //下サンプル表示処理type1
			 $('.area_list').hide();
			 $('.new_search_type2').hide();
			 //$('.new_search_type').show();
			 cityList();
			 $('.next_action').hide();
			 $('.one_search_list_content').show();
			 var type = $('#this_select_type').val();
			 
			 
			if($("#ini_pref").val() =="-1" || $("#ini_pref").val() ==""){
				$('.detail_select_box').hide();
				$('.town_select').hide();
				$('.pref_select').show();
				$(".next_step_button").removeClass('town_search_Y');
				//$('.next_step_button').find('span').html('市区郡を<br>設定する');
				$('.prev_step_button,.prev_step_button2').hide();
				$('.next_step_button2').hide();
				$('.next_step_button').show();
				$('#this_select_type').val('pref');
			}else{	
				cityList();
				//$('.next_step_button').find('span').html('詳細な地域を<br>設定する');
				$('.prev_step_button2').hide();
				$('.next_step_button').hide();
				$('.next_step_button2').show();
				$('.prev_step_button').show();
				$('#this_select_type').val('city');
			}
			 
			 /*
			 if(type == 'pref'){
				 $('.next_step_button').show();
			 }else if(type == 'city'){
				 $('.prev_step_button').show();
				 $('.next_step_button2').show();
			 }else if(type == 'town'){
				 $('.prev_step_button2').show();
			 }
			 */
			// $('.next_action').show();
			 
		 }else if(id == 'trans_b'){
			 $('.area_list').hide();
			 $('.company_list').hide();
			 $('.detail_select_box').hide();
			 $('.along_select').show();
			 $('.one_search_list_content').show();
			 $('.next_action').hide();
			 $('.next_step_button3').show();
			 $('.trans_step_check_block').show();
			 //$('.trans_list').show();
			 var along = $(".along_select").find('.one_line input:checked').length;
			 //alert(along)
			 if( along > 1 || along == 1 ){
				 $(".next_step_button3").addClass('station_search_Y');
			 }else{
				 $(".next_step_button3").removeClass('station_search_Y');
			 }
			 
		 }else{
			 $('.area_list').hide();
			 $('.trans_list').hide();
			 $('.detail_select_box').hide();
			 $('.company_select').show();
			 $('.one_search_list_content').show();
			 $('.next_action').hide();
			 $('.company_step_check_block').show();
			 $('.company_jamp_box').show();
			 //$('.company_list').show();
			 //下サンプル表示処理type3
		 }
		 var list_h = $('.main_table').height() + 40;
		 //$('#search_list').css({'height':list_h});
		 $('#search_list').slideDown();
		 $('#search_list').css({'dispaly':'block'});
	 });
	 
	 $('.go_pref_set_page').live('click',function(){
		 $('.any_search_list').hide();
		 $('.check_sarch_list').hide();
		 $('.company_list').hide();
		 $('.trans_list').hide();
		 $('.area_list').show();
		 var list_h = $('.main_table').height() + 40;
		 //$('#search_list').css({'height':list_h});
		 $('#search_list').slideDown();
		 $('#search_list').css({'dispaly':'block'});
	 });
	 
	 
	 //その他検索条件表示
	 $('.any_search').click(function(){
	 	 $('.company_jamp_box').hide();
		 $('.check_block').hide();
		 $('.area_list').hide();
		 $('.trans_list').hide();
		 $('.company_list').hide();
		 $('.check_sarch_list').hide();
		 //$('.one_search_list_content').hide();
		 //$('.any_search_list').show();
		 var list_h = $('.main_table').height() + 40;
		 $('#search_list').css({'height':list_h});
		 $('#search_list').slideDown();
		 $('#search_list').css({'dispaly':'block'});
		 $('.detail_select_box').hide();
		 $('.eq_select').show();
		 $('.one_search_list_content').show();
		 $('.any_step_check_block').show();
		 $('.next_action').hide();
	 });
	 
	 //検索中の条件表示
	 $('.check_list_open').click(function(){
	 	 $('.company_jamp_box').hide();
		 $('.area_list').hide();
		 $('.trans_list').hide();
		 $('.company_list').hide();
		 $('.any_search_list').hide();
		 $('.one_search_list_content').hide();
		 $('.check_sarch_list').show();
		 var list_h = $('.main_table').height() + 40;
		 //$('#search_list').css({'height':list_h});
		 $('#search_list').slideDown();
		 $('#search_list').css({'dispaly':'block'});
	 });
	 
	 
	 //検索条件部分をとじる
	 $('.check_list_close,.check_list_close2').click(function(){
		 $('#search_list').slideUp();
		 $('.any_search_list').hide();
	 });
	 
	 $('.this_window_close,.close_search_detail').click(function(){
		 $('#search_list').slideUp();
		 $('.any_search_list').hide();
		
	 });
	 
	 var userAgent = window.navigator.userAgent.toLowerCase();
	 var appVersion = window.navigator.appVersion.toLowerCase();
   
	  if (userAgent.indexOf('msie') != -1) {
		  //IE6～9（おそらく）
		  if (appVersion.indexOf("msie 6.") != -1) {
			  //IE6での処理
		  }else if (appVersion.indexOf("msie 7.") != -1) {
			  //IE7での処理
		  }else if (appVersion.indexOf("msie 8.") != -1) {
			  //IE8での処理
		  }else if (appVersion.indexOf("msie 9.") != -1) {
			  //IE9での処理
		  }
		  $('.midashi_r').find('td:nth-child(15)').hide();
		  $('.room_info_tr').find('td:nth-child(15)').hide();
	  }else{
	  $(window).on('load resize', function(){
		   var list_h = $('.main_table').height() + 40;
		   //$('#search_list').css({'height':list_h});
		   var width = $(window).width();
		   //alert(width)
		   
		   if(width < 1250){
			   $('.right_contents').css({'padding':'0 0 0 50px'});
			   $('.contents_menu').css({'left':'-160px'});
			   $('.search_menu_open_layer').show();
			   $('.midashi_r').find('td:gt(9)').hide();
			   $('.room_info_tr').find('td:gt(9)').hide();
			   $('.midashi_r').find('td:nth-child(15)').show();
			   $('.room_info_tr').find('td:nth-child(15)').show();
			   $('.main_contents').css({'padding':'0 0 10px 0'});
			   $('.width_space').css({'height':'70px'});
		   }else{
			   $('.right_contents').css({'padding':'0 0 0 260px'});
			   $('.contents_menu').css({'left':'50'});
			   $('.search_menu_open_layer').hide();
			   $('.midashi_r').find('td:gt(9)').css({'display':''});
			   $('.room_info_tr').find('td:gt(9)').css({'display':''});
			   $('.midashi_r').find('td:nth-child(15)').hide();
			   $('.room_info_tr').find('td:nth-child(15)').hide();
			   $('.hide_room_menu').css({'right':'-100%'});
			   $('.main_contents').css({'padding':'0'});
			   $('.width_space').css({'height':'0'});
		   }
		   
	   });
	 }
	 
	 /*
	 $(window).on('load resize', function(){
		 var list_h = $('.main_table').height() + 40;
		 //$('#search_list').css({'height':list_h});
		 var width = $(window).width();
		 //alert(width)
		 
		 if(width < 1250){
			 $('.right_contents').css({'padding':'0 0 0 50px'});
			 $('.contents_menu').css({'left':'-160px'});
			 $('.search_menu_open_layer').show();
			 $('.midashi_r').find('td:gt(9)').hide();
			 $('.room_info_tr').find('td:gt(9)').hide();
			 $('.midashi_r').find('td:nth-child(15)').show();
			 $('.room_info_tr').find('td:nth-child(15)').show();
			 $('.main_contents').css({'padding':'0 0 10px 0'});
			 $('.width_space').css({'height':'70px'});
		 }else{
			 $('.right_contents').css({'padding':'0 0 0 260px'});
			 $('.contents_menu').css({'left':'50'});
			 $('.search_menu_open_layer').hide();
			 $('.midashi_r').find('td:gt(9)').css({'display':''});
			 $('.room_info_tr').find('td:gt(9)').css({'display':''});
			 $('.midashi_r').find('td:nth-child(15)').hide();
			 $('.room_info_tr').find('td:nth-child(15)').hide();
			 $('.hide_room_menu').css({'right':'-100%'});
			 $('.main_contents').css({'padding':'0'});
			 $('.width_space').css({'height':'0'});
		 }
		 
	 });
	 */
	 
	 //検索メニュー表示・非表示
	 $('.search_menu_open_button2').click(function(){
		 if($(this).hasClass('opened')){
			 $('.contents_menu').animate({'left':'-160px'});
			 $(this).find('.text_span').html('検索条件を<span class="dispaly_on_text">表示</span>');
			 $(this).removeClass('opened');
		 }else{
			 $('.contents_menu').animate({'left':'50'});
			 $(this).find('.text_span').html('検索条件を<span class="dispaly_off_text">とじる</span>');
			 $(this).addClass('opened');
		 }
	 });
	 
	 
	 $('.all_display_on').live('click',function(){
		 $(this).parents('.room_info_tr').next('.room_info_detail').find('.all_display').slideToggle();
	 });
	 
	 
	 //間取図ポップアップ
	 //$('.room_layout_image').addClass('large');
	 $('.room_layout_image').live('click',function(){
		 var building_name = $(this).parents('.one_building').find('.building_name').text();
		 //var room_number = $(this).parents('.one_building').find('.building_name').text();
		 var room_name = $(this).parents('.room_info_tr').find('.room_number').text();
		 var name = building_name + '( '+ room_name +' )';
		 var src = $(this).attr('src');
		 //alert(src)
		 $('.large_photo').html('<div class="pop_name">'+ name +'<span class="pop_layout_close">×とじる</span></div><div class="image_box"><img src="'+ src +'"></div>');
		 $('.large_photo').fadeIn();
		 $('.large_photo').animate({'opacity':'1'});
		 /*
		 if($(this).hasClass('large')){
		 	$(this).css({'height':'200px','width':'200px'});
			$(this).removeClass('large');
		 }else{
			$(this).css({'height':'30px','width':'30px'});
			$(this).removeClass('large');
			$(this).addClass('large');
		 }
		 */
	 });
	 
	 
	 $('.pop_layout_close').live('click',function(){
		 $('.large_photo').fadeOut();
	 });
	 
	
	 $('.city_select_area').live('click',function(){
	 });
	
	//ストック条件の説明
	$('.save_search_help').click(function(){
		$('.mail_send').hide();
		$('.main_layer').show();
		$('.stock_manual').show();
	});
	
	//ストック条件
	$('#stock').click(function(){
		$('.stock_manual').hide();
		$('.mail_send').hide();
		$('.main_layer').show();
		
		load_condition_stock();
		
	});
	
	function load_condition_stock(){
		$.post( "/ajax/mod_condition_stock.php", {'mode':'list'}, function( dd ){
			if( !dd || !dd.match( /\[.+\]/ ) ){
				alert( "検索条件のストックの呼び出しに失敗しました\nログイン状態をご確認ください" );
			
			}else{
				var data	= $.parseJSON( dd );
				var doc		= "";
				$.each( data, function(){
					doc += '\
					<div class="one_stock">\
						<span class="setting_number">' + this.setting_number + '</span>.<span class="setting_name">' + this.setting_name + '</span>\
						<div class="stock_menu">\
							<span class="check_stock"><span>確認</span></span><span class="use_stock"><span>適用</span></span><span class="delet_stock"><span>削除</span></span>\
						</div>\
						<input type="hidden" name="param_text" value=\'' + this.param_text + '\' />\
					</div>'
				
				});
				$( "div.stock_list" ).html( doc );
				$('.save_search_contents').show();
			
			}
		
		
		});
	
	}
	
	// ストックから検索
	$( "span.use_stock" ).live( "click", function(){
		var param_text		= $( this ).closest( "div.one_stock" ).find( "input[name='param_text']" ).val();
		var param			= $.parseJSON( param_text );
		if( !param.page_method ){
			param.page_method = "estate";
		
		}
		if( !param.page_type ){
			param.page_type = "building";
		
		}
		
	 	multi_submit( "/search_cookie.php", param );
	 	
	});
	
	// ストックリストからフォームを設定
	$( "div.one_stock" ).live( "click", function(){
		var setting_number	= $( this ).find( "span.setting_number" ).text();
		var setting_name	= $( this ).find( "span.setting_name" ).text();
		
		$( "select[name='setting_number']" ).val( setting_number );
		$( "input[name='stock_save_name']" ).val( setting_name );
	
	});
	
	// 検索条件を保存
	$( "div.stock_save" ).live( "click", function(){
		var param	= {};
		param.mode	= "edit";

		if( !$( "input[name='stock_save_name']" ).val() ){
			alert( "保存名を設定してください" );
		
		}else{
			// チェックボックス
			$.each( $( "form#main_form input:checked" ), function(){
				if( $( this ).attr( 'name' ) ){
					if( $( this ).attr( 'name' ).match( /\[\]$/ ) ){
						var name = $( this ).attr( 'name' ).replace( /\[\]$/, "" );


						if( !param[name] ){
							param[name] = [];
						
						}
						param[name].push( $( this ).val() );
					
					}else{
						param[$( this ).attr( 'name' )] = $( this ).val();
					
					}
				
				}
			
			});
			
			// テキストボックス、hidden ボックス
			$.each( $( "form#main_form input[type='text'], form#main_form input[type='hidden']" ), function(){
				if( $( this ).attr( 'name' ) && $( this ).val() ){
					if( $( this ).attr( 'name' ).match( /\[\]$/ ) ){
						var name = $( this ).attr( 'name' ).replace( /\[\]$/, "" );
						
						if( name == "not_search_company" ){
							if( $(this).parent('label').hasClass('not_search') ){
								if( !param[name] ){
								param[name] = [];

								}
								param[name].push( $( this ).val() );
								
							}
						}else{
							
							if( !param[name] ){
								param[name] = [];

							}
							param[name].push( $( this ).val() );

						}
					
					}else{
						param[$( this ).attr( 'name' )] = $( this ).val();
					
					}
				
				}
			
			});
			
			// セレクトボックス
			$.each( $( "form#main_form select option:selected" ), function(){
				if( $( this ).closest( "select" ).attr( 'name' ) ){
					if( $( this ).closest( "select" ).attr( 'name' ).match( /\[\]$/ ) ){
						var name = $( this ).closest( "select" ).attr( 'name' ).replace( /\[\]$/, "" );
						if( !param[name] ){
							param[name] = [];
						
						}
						param[name].push( $( this ).val() );
					
					}else{
						param[$( this ).closest( "select" ).attr( 'name' )] = $( this ).val();
					
					}
				
				}
			
			});
			
			
			$.post( "/ajax/mod_condition_stock.php", param, function( dd ){
				if( !dd || dd != "true" ){
					alert( "検索条件の保存に失敗しました" );
				
				}
				var number = $('#setting_number').val();
				alert(number+'番目に追加されました')
				load_condition_stock();
			
			});
	 	
	 	}
	 	
	});
	
	//ストック条件を削除
	$('.delet_stock').live( "click", function(){
		var setting_number	= $( this ).closest( "div.one_stock" ).find( "span.setting_number" ).text();
		var setting_name	= $( this ).closest( "div.one_stock" ).find( "span.setting_name" ).text();
		if( confirm( "「" + setting_number + "." + setting_name + "」 を削除してもよろしいですか？" ) ){
			$.post(
				"/ajax/mod_condition_stock.php",
				{
					'mode'				: 'delete',
					'setting_number'	: setting_number
				
				},
				function( dd ){
					if( !dd || dd != "true" ){
						alert( "検索条件の削除に失敗しました" );
					
					}else{
						load_condition_stock();
					
					}
				
				}
			
			);
		
		}
		
	});
	
	//メール添付
	/*
	$('.mail_button,.mail_tr_hide').click(function(){
		$('.stock_manual').hide();
		$('.save_search_contents').hide();
		$('.main_layer').show();
		$('.mail_send').show();
	});
	*/
	
	
	
	//ストック条件・メール添付をとじる
	$('.main_layer_close').click(function(){
		$('.main_layer').hide();
		$('.save_search_contents').hide();
		$('.mail_send').hide();
		$('.send_room_stock_list').show();
		$('.send_step1').show();
		$('.send_room_list').hide();
		$('.send_step2').hide();
		$('.mail_text_display').hide();
	});
	
	
	//ストック条件確認
	$('.check_stock').live('click',function(){
		$('.ck').empty();
		$('.check_search').show();
		
		
		var param_text		= $( this ).closest( "div.one_stock" ).find( "input[name='param_text']" ).val();
		
		var param			= $.parseJSON( param_text );
		//alert(param_text)
		
		$.each( param, function( key, val ){
			
			
			name(key);
			
			function name(key){
			switch( key ){
				
			case 'page_type':
			div = '表示'
			break;
			
			case 'page_method':
			div = '検索タイプ'
			break;
			
			case 'route_id':
			$('.pref_st').prepend('<input type="hidden" id="this_stock_along" value="'+val+'" >');
			stock_along();
			div = '沿線'
			break;
			
			case 'station_id':
			$('.pref_st').prepend('<input type="hidden" id="this_stock_station" value="'+val+'" >');
			stock_station();
			div = '駅'
			break;
			
			case 'company_id':
			$('.company_st').prepend('<input type="hidden" id="this_stock_company" value="'+val+'" >');
			div = '会社情報'
			stock_company();
			break;
			
			case 'company_id_t':
			$('.company_st').prepend('<input type="hidden" id="this_stock_company" value="'+val+'" >');
			div = '会社情報'
			stock_company();
			break;
			
			case 'company_id_p':
			$('.company_st').prepend('<input type="hidden" id="this_stock_company" value="'+val+'" >');
			div = '会社情報'
			stock_company();
			break;
			
			case 'not_search_company':
			$('.not_company_st').prepend('<input type="hidden" id="this_stock_not_company" value="'+val+'" >');
			div = '会社情報[除]'
			stock_not_company();
			break;
			
			case 'ini_pref':
			
			var prefstockAry = val.split(",");
			
			$.each(prefstockAry,function(i){
				//alert(val[i])
				var name = $('.one_pref').find('input[value ="'+ prefstockAry[i] +'"]').attr('title');
				$('.pref_st').prepend('<span class="stock_item prf">'+ name +'</span>');
			});
			$('.pref_st').prepend('<input type="hidden" id="this_stock_pref" value="'+val+'" >');
				
			div = '県'
			break;
			
			case 'city_code':
			$('.pref_st').prepend('<input type="hidden" id="this_stock_city" value="'+val+'" >');
			stock_city();
			div = '市区郡'
			break;
			
			case 'town_code':
			$('.pref_st').prepend('<input type="hidden" id="this_stock_town" value="'+val+'" >');
			stock_town();
			div = '町'
			break;
			
			case 'building_name':
			div = '建物名'
			break;
			
			case 'keyword':
				$('.free_text_st').prepend('<span class="stock_item freetxet">'+ val +'</span>');
			div = 'フリーワード'
			break;
			
			case 'transportation_id':
			div = ''
			break;
			
			case 'required_time':
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ val +'分以内×</span>');
			div = ''
			break;
			
			case 'update_date':
				if(val !=='-1'){
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">更新日'+ val +'日以内</span>');
				}
			div = '更新日'
			break;

			case 'rnp_newly_open_flag':
				if(val !=='-1'){
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">新着物件で絞り込み</span>');
				}
			div = '新着物件で絞り込み'
			break;

			case 'enable_enter_flag':
				if(val !=='-1'){
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">即入物件で絞り込み</span>');
				}
			div = '即入物件で絞り込み'
			break;
			
			case 'rental_cost1':
				if(val !=='-1'){
					var cost = val/10000;
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ cost +'万円以上</span>');
				}
			div = '賃料下限'
			break;
			
			case 'rental_cost2':
				if(val !=='-1'){
					var cost = val/10000;
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ cost +'万円以下</span>');
				}
			div = '賃料上限'
			break;
			
			case 'include_common_fee':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">管理費・共益費含むし</span>');
			}
			div = '管理費・共益費含む'
			break;
			
			case 'deposit_recommpence':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">敷金礼金無し</span>');
			}
			div = '敷金礼金無し'
			break;
			
			case 'include_parking_cost':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">駐車場料金を含む</span>');
			}
			div = '駐車場料金を含む'
			break;
			
			case 'structured_date':
				if(val !=='-1'){
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ val +'年以内</span>');
				}
			div = '築年数'
			break;
			
			case 'structured_type':
				$.each(val,function(i){
					//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
					var name = $('.stc').find('input[value ="'+ val[i] +'"]').attr('title');
					//var name = $('.stc').find('input[value ="'+ val[i] +'"]').parent('label').text();
					$('.str_check_area_st').prepend('<span class="stock_item strct">'+ name +'</span>');
				});
			div = '構造'
			break;
			
			case 'room_layout_id':
				$.each(val,function(i){
					//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
					var name = $('.rl_area').find('input[value ="'+ val[i] +'"]').attr('title');
					$('.layout_check_area_st').prepend('<span class="stock_item rl">'+ name +'</span>');
				});
			//$('.rl_area'),find('input[value='+ val +']');
			div = '間取'
			break;
			
			case 'square_meter_l':
				if(val !=='-1'){
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ val +'㎡以上</span>');
				}
			div = '専有面積下限'
			break;
			
			case 'square_meter_h':
				if(val !=='-1'){
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ val +'㎡以下</span>');
				}	
			div = '専有面積上限'
			break;
			
			case 'isolated_house':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">戸建</span>');
			}
			div = '戸建'
			break;
			
			case 'sharehouse_use_flag':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">シェアハウス</span>');
			}
			div = 'シェアハウス'
			break;
			
			case 'periodical_rent_flag':
			div = ''
			break;
			
			case 'reform_flag':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">リフォーム</span>');
			}
			div = 'リフォーム'
			break;
			
			case 'renovation_flag':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">リノベーション</span>');
			}
			div = 'リノベーション'
			break;
			
			
			case 'second_floor_more_flag':
				if( val == 'F' ){
					text = "1Fのみ";
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ text +'</span>');
				}else if( val == 'Y' ){
					text = "2F以上";
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ text +'</span>');
				}else if( val == 'B' ){
					text = "地下階";
					$('.basic_check_area_st').prepend('<span class="stock_item basic_st">'+ text +'</span>');
				}
				
			div = '所在階'
			break;
			
			
			
			case 'eq_bld':
				$.each(val,function(i){
					//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
					var name = $('.equipment').find('input[value ="'+ val[i] +'"]').attr('title');
					$('.eq_check_area_st').prepend('<span class="stock_item bid" id="b_'+val[i]+'">'+ name +'</span>');
				});
			div = '建物'
			break;
			
			case 'eq_rm':
			
			if(val !==''){
				$.each(val,function(i){
					//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
					var name = $('.equipment').find('input[value ="'+ val[i] +'"]').attr('title');
					$('.eq_check_area_st').prepend('<span class="stock_item rm" id="r_'+val[i]+'">'+ name +'</span>');
				});
			}
			
			div = '部屋'
			break;
			
			case 'eqd':
				
			if(val !==''){
				var group  = val.split(",");
				$.each(group,function(i){
				var eqd = group[i].split(":");
					var name = $('#rm_detail_id_'+ eqd[1] ).text().replace(/・/g,'');
					var req = $('#r_' + eqd[0]).text() +'・'+ name ;
					$('#r_' + eqd[0]).text(req);
				});
			}
			
			div = '部屋設備詳細'
			break;
			
			case 'eqdb':
			
			if(val !==''){
				var group  = val.split(",");
				$.each(group,function(i){
				var eqdb = group[i].split(":");
					var name = $('#bld_detail_id_'+ eqdb[1] ).text().replace(/・/g,'');
					var beq = $('#b_' + eqdb[0]).text() +'・'+ name ;
					$('#b_' + eqdb[0]).text(beq);
				});
			}
			
			div = '建物設備詳細'
			break;
			
			case 'room_id':
			div = '部屋ID'
			break;
			
			case 'diversion':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">web転載可能</span>');
			}
			div = 'web転載可能'
			break;
			
			case 'juridical_model_contract_flag':
			if(val == "Y"){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">標準契約書</span>');
			}
			div = '標準契約書'
			break;
			
			case 'parking_flag':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">駐車場有り</span>');
			}
			div = '駐車場有り'
			break;
			
			case 'available_parking_flag':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">駐車場空き有り</span>');
			}
			div = '駐車場空き有り'
			break;
			
			case 'newly_built_flag':
			if(val == 1){
				$('.basic_check_area_st').prepend('<span class="stock_item basic_st">新築</span>');
			}
			div = '新築'
			break;
			
			}
			}
			
			/*
			if( div =='.rl_area'){
			var valary = val.split(",");
				$.each(valary,function(i){
					var nm = $('.rl_area').find('input[value='+ valary[i] +']').attr('title');
					$('.pref_st').prepend('<span class="select pref_st_item">'+ div+':'+nm +'</span>');
					//alert(nm)
				});
			}else{
			*/
			
			//$('.pref_st').prepend('<span class="select pref_st_item">'+ div+':'+val +'</span>');
			//}
			
			//var name = $('input[name='+ key +']').attr('title');
			
			//$('.pref_st').prepend('<span class="select pref_st_item">'+ key+':'+val +'</span>');
			
		});
		//ar param_list = param_text.split("");
		
		//$.each(param_list,function(i){
		//	$('.pref_st').prepend('<span class="select pref_st_item">'+ param_list[i] +'</span>');
		//});
		
		
		
	});
	
	$('.check_search_close').click(function(){
		$('.check_search').hide();
	});
	
	
	//検索
	$('.go_search_submit,.go_search').click(function(){
		var cheked = $(".city_select").find('.one_city input:checked').length;
		if(cheked == '1'){
		}else{
			$(".one_town").find('input').prop("checked",false);
		}

		//var action = location.href;
		//$('#main_form').attr('action',action);

		//$('#main_form').submit();
		grecaptcha.ready(function() {
			grecaptcha.execute('6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk', {action:'homepage'}).then(function(token) {
				$('#main_form').append('<input type="hidden" name="gr" value="'+token+'">');
				$('#main_form').submit();
			});
		});
	});
	
	
	$(document).on("keypress", "input[name=keyword]", function(e) {
		if (e.keyCode == 13) { // Enterが押された
		
			var cheked = $(".city_select").find('.one_city input:checked').length;
			if(cheked == '1'){
			}else{
				$(".one_town").find('input').prop("checked",false);
			}
			$('#main_form').submit();
		
		}
	 });
	
	
	//リセット
	$('.reset_button').click(function(){
		var method = $('input[name=page_method]').val();
		var type = $('input[name=page_type]').val();
		//alert("search_cookie.php?clear=true&page_method="+ method +"&page_type="+ type);
		//window.location.href="search_cookie.php?clear=true&page_method="+ method +"&page_type="+ type;
		grecaptcha.ready(function() {
			grecaptcha.execute('6LfSaRwbAAAAAC6lFrjE44srClYh3-lTMlwAJVQk', {action:'homepage'}).then(function(token) {
				window.location.href="search_cookie.php?clear=true&page_method="+ method +"&page_type="+ type +"&gr="+token;
			});
		});
	});
	
	
	
	//並べ替え機能表示・非表示
	//$('.sort_change').click(function(){
	//	$('.room_result_box').hide();
	//	$(this).find('.sort_list_box').toggle();
	//});
	
	$('.sort_change').hover(sortonbox, sortoutbox);
	
	function sortonbox(){
		//$(this).css({'background-color':'#BA5F2B','border-radius':'5px 5px 0 0','border':'none'});
		$(this).css({'background-color':'#BA5F2B'});
		$(this).find('.sort_list_box').show();
	}
	
	function sortoutbox(){
		//$(this).css({'background-color':'transparent','border-radius':'5px','border':'1px solid #FFF'});
		$(this).css({'background-color':'CCC'});
		$(this).find('.sort_list_box').hide();
	}
	
	//並べ替え機能のホバーアクション
	$('.sort_name').hover(sorton, sortout);
	
	function sorton(){
		$(this).find('.sort_detail_box').show();
	}
	
	function sortout(){
		$(this).find('.sort_detail_box').hide();
	}
	
	
	//表示件数の表示・非表示
	//$('.room_result_change').click(function(){
	//	$('.sort_list_box').hide();
	//	$(this).find('.room_result_box').toggle();
	//});
	$('.room_result_change').hover(displayonbox, displayoutbox);
	
	function displayonbox(){
		//$(this).css({'background-color':'#BA5F2B','border-radius':'5px 5px 0 0','border':'none'});
		$(this).css({'background-color':'#BA5F2B'});
		$(this).find('.room_result_box').show();
	}
	
	function displayoutbox(){
		//$(this).css({'background-color':'transparent','border-radius':'5px','border':'1px solid #FFF'});
		$(this).css({'background-color':'CCC'});
		$(this).find('.room_result_box').hide();
	}
	
	
	$('input[name=parking_flag]').click(function(){
		if($(this).is(':checked')) {
			$('.empty_parking_flag').show();
		}else{
			$('.empty_parking_flag').hide();
		}
	});
	
	//問合せ指定有りアイコンクリックで問合せ先表示
	$('.specify').live('click',function(){
		$(this).next('.specify_text').toggle();
	});
	
	
	
	//選択項目生成など
	
	if($('#ini_pref_name').val() == "" ){
		//$('.search_pref').text('全国');
	}else{
		var pref_array = $('#ini_pref_name').val().replace(/,/g,'・');
		var pref_array2 = $('#ini_pref_name').val().split(",");
		//alert(pref_array)
		//$('.search_pref').text(pref_array);
		
		
		$.each(pref_array2,function(i){
			$('.pref_log').prepend('<span class="select pref_log_item">'+ pref_array2[i] +'×</span>');
		});
		
	}
	
	
	//チェックボックスの色切り替え
	
	$('#search_list').find('input').live('change',function(){
		//alert('change')
		if($(this).is(':checked')) {
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
		}else{
			$(this).parent('label').css({'background-color':'transparent','color':'#333'});
		}
	});
	
	
	//項目ごとのリセット
	$('.step_item_reset').live('click',function(){
		//var class_name = '.'+$(this).parent('.reset_area').parent('div').attr('class').replace(/_m/g,'') + '_check_box';

		var class_replace = $(this).parent('.reset_area').parent('div').attr('class').replace(/ /g,'-');
		var class_type = class_replace.split("-");
		var class_name = '.'+ class_type[0] + '_check_box';
		
		$(class_name).find('.step_check_con').empty();
		
		if( $(this).parents('.detail_select_box').hasClass('company_select') ){
			$(this).parents('.detail_select_box').find('label').removeClass('not_search');
			$(this).parents('.detail_select_box').find('input').attr("disabled",false);
			$(this).parents('.detail_select_box').find('.nsc').attr("disabled", true);
			$(this).parents('.detail_select_box').find('.not_search_text').hide();
		}
		
		//alert(class_name)
		$(this).parents('.detail_select_box').find('input').prop("checked",false);
		$(this).parents('.detail_select_box').find('.eq_detail_button').text('-----');
		$(this).parents('.detail_select_box').find('label').css({'background-color':'#FFF','color':'#333'});
		$(this).parents('.detail_select_box').find('.eq_detail_button').removeClass('check_on');
		$(this).parents('.detail_select_box').find('input[name=eqd]').val('');
		$(this).parents('.detail_select_box').find('input[name=eqdb]').val('');
	});
	
	/**********************************************************************/
	//
	//
	//       都道府県
	//
	//
	/**********************************************************************/
	
	$('.step1_m_text,#step1').click(function(){
		$('.city_select').hide();
		$('.town_select').hide();
		$('.pref_select').show();
		$(".next_step_button2").removeClass('town_search_Y');
		//$('.next_step_button').find('span').html('市区郡を<br>設定する');
		$('.prev_step_button,.prev_step_button2').hide();
		$('.next_step_button2').hide();
		$('.next_step_button').show();
		$('#this_select_type').val('pref');
	});
	
	//都道府県セット
	//$(document).ready(function(){
		
		var doc = '';
		
		$.getJSON("ajax/pref.php",function( dd ){
			//alert(dd)
			var pref_name_array = [];
			$.each(dd, function(i){
				doc += '<div class="pref_box">';
				doc += '<div class="pref_box_m">' + dd[i].area_name + '</div>';
				
				var pref = $("#ini_pref").val();
				var prefAry = pref.split(",");
				
				doc += '<div class="one_pref_box_list">';
				$.each(dd[i].pref_list, function(k){
					if ($.inArray(dd[i].pref_list[k].pref_code, prefAry) != -1 ) {
						pref_name_array.push(dd[i].pref_list[k].pref_name);
						doc += '<label class="one_pref"><input checked="checked" name="pref_code" title="'+ dd[i].pref_list[k].pref_name +'" type="checkbox" value="'+ dd[i].pref_list[k].pref_code +'" />' + dd[i].pref_list[k].pref_name + '</label>'
					}else{
						doc += '<label class="one_pref"><input name="pref_code" title="'+ dd[i].pref_list[k].pref_name +'" type="checkbox" value="'+ dd[i].pref_list[k].pref_code +'" />' + dd[i].pref_list[k].pref_name + '</label>'
					}
				});
				doc += '</div>';
				doc += '</div>';
			});
			doc += '<br style="clear:left;">';
			$.when(
				//$("input#ini_pref_name").val( pref_name_array ),
				$('.step1_con').html( doc )
			).done(function(){ 
			$('#this_select_type').val('pref');
			$("input#ini_pref_name").val( pref_name_array );
			//$('.one_pref_box_list').hide();
			//$('.one_pref_box_list').each(function(){
			//	if($(this).find('input').is(':checked')) {
			//		$(this).parent('.pref_box').find('.pref_box_m').addClass('pref_open');
			//		$(this).parent('.pref_box').find('.pref_open_close').text('▲');
			//		$(this).show();
			//	}
			//});
			
			var pref_array = $("#ini_pref_name").val().replace(/,/g,'・');
			
			if(pref_array !== "" ){
				//var pref_array = $("#ini_pref_name").val().replace(/,/g,'・');
				//$('.search_pref').html(pref_array);
			}
			
			/*
				var val = $('#ini_pref').val().split(",");
				var pref_name = [];
				$.each(val, function(i){
					var name = $('.pref_serect_area').find('input[value'+val[i]+']').attr('title');
					alert(name)
				});
				$("input#set_city_name").val( pref_name.join(",") );
				*/
				$('.pref_log').empty();
				$('.step1_check_box').find('.step_check_con').empty();
				$('.one_pref').each(function(){
					if($(this).find('input').is(':checked')) {
						$(this).css({'background-color':'#333','color':'#FFF'});
						$('.pref_log').prepend('<span class="select pref_log_item">'+ $(this).find('input').attr('title') +'×</span>');
						$('.step1_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
					}
				});
				$('.step1_check_box').find('.selected').after('<span class="dot">・</span>');
				$('.step_check_con').find('.dot:last-child').remove();
			});
		});
		
		

	//});
	
	$('.pref_box_m').live('click',function(){
		if($(this).hasClass('pref_open')){
			$(this).parent('.pref_box').find('.one_pref_box_list').hide();
			$(this).find('.pref_open_close').text('▼');
			$(this).removeClass('pref_open');
		}else{
			$(this).parent('.pref_box').find('.one_pref_box_list').show();
			$(this).find('.pref_open_close').text('▲');
			$(this).addClass('pref_open');
		}
	});
	
	$(".step1_con").find('input').live('change',function(){
		pref_change_action();
	});
	
	function pref_change_action(){
		var dom = $.makeArray($(".step1_con input:checkbox:checked"));
		var val = Array();
		var str = Array();
		for ( i=0; i<dom.length; i++ ) {
			val[i] = dom[i].value;
			str[i] = dom[i].title;
		}
		
	
		$("input#set_ini_pref").val( str.join(",") );
		$("input#ini_pref_name").val( str.join(",") );
		$("input[name=ini_pref]").val( val.join(",") );
		$("#pref_code").val( val.join(",") );
		$('.city_select_area').fadeOut(300);
		//cityList();
		//alongList();
	}
	
	
	/**********************************************************************/
	//
	//
	//       市区町村
	//
	//
	/**********************************************************************/
	$('.step2_m_text,#step2').click(function(){
		var step2_cheked = $(".pref_select").find('.one_pref input:checked').length;
		if( step2_cheked == 0){
			alert('都道府県が選択されていません。')
		}else{
			$('.detail_select_box').hide();
			$('.town_select').hide();
			$('.city_select').show();
			$(".next_step_button2").removeClass('town_search_Y');
			//$('.next_step_button').find('span').html('詳細な地域を<br>設定する');
			$('.prev_step_button2').hide();
			$('.next_step_button').hide();
			$('.next_step_button2').show();
			$('.prev_step_button').show();
			$('#this_select_type').val('city');
		}
	});
	
	$('.prev_step_button').click(function(){
		$('.detail_select_box').hide();
		$('.town_select').hide();
		$('.pref_select').show();
		$(".next_step_button2").removeClass('town_search_Y');
		//$('.next_step_button').find('span').html('市区郡を<br>設定する');
		$('.prev_step_button,.prev_step_button2').hide();
		$('.next_step_button2').hide();
		$('.next_step_button').show();
		$('#this_select_type').val('pref');
	});
	
	$('.prev_step_button2').click(function(){
		$('.detail_select_box').hide();
		$('.town_select').hide();
		$('.city_select').show();
		//$(".next_step_button2").removeClass('town_search_Y');
		//$('.next_step_button').find('span').html('詳細な地域を<br>設定する');
		$('.prev_step_button2').hide();
		$('.next_step_button').hide();
		$('.next_step_button2').show();
		$('.prev_step_button').show();
		$('#this_select_type').val('city');
	});
	
	
	$('.next_step_button').click(function(){
		var step2_cheked = $(".pref_select").find('.one_pref input:checked').length;
		if( step2_cheked == 0){
			alert('都道府県が選択されていません。')
		}else{
			cityList();
			//$('.next_step_button').find('span').html('詳細な地域を<br>設定する');
			$('.next_step_button').hide();
			$('.prev_step_button2').hide();
			$('.next_step_button2').show();
			$('.prev_step_button').show();
		}
	});
	
	if($("#ini_pref").val() =="-1" || $("#ini_pref").val() ==""){
		$('.detail_select_box').hide();
		$('.town_select').hide();
		$('.pref_select').show();
		$(".next_step_button").removeClass('town_search_Y');
		//$('.next_step_button').find('span').html('市区郡を<br>設定する');
		$('.prev_step_button,.prev_step_button2').hide();
		$('.next_step_button2').hide();
		$('.next_step_button').show();
		$('#this_select_type').val('pref');
	}else{	
		cityList();
		//$('.next_step_button').find('span').html('詳細な地域を<br>設定する');
		$('.prev_step_button2').hide();
		$('.next_step_button').hide();
		$('.next_step_button2').show();
		$('.prev_step_button').show();
		$('#this_select_type').val('city');
	}
	
	function cityList() {
		var pref = $("#ini_pref").val();
		var prefAry = pref.split(",");
		//alert($("#ini_pref_name").val());
		var prefnameAry = $("#ini_pref_name").val().split(",");
		if(prefnameAry ==''){
			var prefnameAry = $("#ini_pref_name").val();
		}
		var cityAry = $("#set_city").val().split(",");
		var doc_city = '';
		var num = 0;
		doc_city += '<span>市区郡より詳細な絞り込みをされる際は、市区郡設定を１つにしてください。</span>';
		var param = {'pref_code':prefAry,'type':'city'};
		$.when(
		
		$.post("ajax/get_city_along_code.php", param, function(dd){
			if( dd && dd !== "false" ){
			var data = $.parseJSON( dd );
			$.each(data, function(){
				doc_city += '<div class="one_pref_city">';
				doc_city += '<div class="city_select_m">';
				doc_city += this.pref_name ;
				//doc_city +=  '<span class="pref_city_unchecked">リセット</span>';
				doc_city += '</div>';
				doc_city += '<div class="town_search">';
				//doc_city += '<span class="town_button">さらに詳細な地域を設定<span>(市区郡の設定が１つの場合ご利用になれます)</span></span>';
				var city_code_check_frist_3_text = 'frist';
				
				
				$.each(this.city, function(){
					
					//doc_city += this.Name;
					
					
					if ($.inArray(this.Code, cityAry) != -1 ) {
						if( this.Code.slice(0,3) == city_code_check_frist_3_text ){
						}else{
							if(city_code_check_frist_3_text !== 'frist'){
								doc_city += '<div class="block_line"></div>';
							}
						}
						city_code_check_frist_3_text = this.Code.slice(0,3);
						doc_city += '<label class="one_city"><input checked="checked" type="checkbox" name="city_code[]" title="'+ this.Name +'" value="'+ this.Code +'" />'+ this.Name +'</label>';
					}else{
						if( this.Code.slice(0,3) == city_code_check_frist_3_text ){
						}else{
							if(city_code_check_frist_3_text !== 'frist'){
								doc_city += '<div class="block_line"></div>';
							}
						}
						city_code_check_frist_3_text = this.Code.slice(0,3);
						doc_city += '<label class="one_city"><input type="checkbox" name="city_code[]" title="'+ this.Name +'" value="'+ this.Code +'" />'+ this.Name +'</label>';
					}
					
				});
				
				doc_city += '</div>';
				doc_city += '</div>';
			});
			}
		})
		
		/*
		$.each(prefAry,function(i){
			var this_pref_name = prefnameAry[num];
			var pref_code = parseInt(prefAry[i]) 
			//alert(this_pref_name)
			num++;
			var tpn = $('.one_pref').find('input[value='+ prefAry[i] +']').attr('title');
			//alert(tpn)
			$.ajax({type: "GET", dataType: "json", url: "addresslist/city/" + prefAry[i] + ".json", success: function(dd){
			doc_city += '<div class="one_pref_city">';
			doc_city += '<div class="city_select_m">';
			doc_city += this_pref_name ;
			//doc_city +=  '<span class="pref_city_unchecked">リセット</span>';
			doc_city += '</div>';
			doc_city += '<div class="town_search">';
			//doc_city += '<span class="town_button">さらに詳細な地域を設定<span>(市区郡の設定が１つの場合ご利用になれます)</span></span>';
			var city_code_check_frist_3_text = 'frist';
			//$('.search_menu').prepend('<span>'+ prefAry[i] +'</span>');
				$.each(dd, function(i){
					if ($.inArray(dd[i].Code, cityAry) != -1 ) {
						if( dd[i].Code.slice(0,3) == city_code_check_frist_3_text ){
						}else{
							if(city_code_check_frist_3_text !== 'frist'){
								doc_city += '<div class="block_line"></div>';
							}
						}
						city_code_check_frist_3_text = dd[i].Code.slice(0,3);
						doc_city += '<label class="one_city"><input checked="checked" type="checkbox" name="city_code[]" title="'+ dd[i].Name +'" value="'+ dd[i].Code +'" />'+ dd[i].Name +'</label>';
					}else{
						if( dd[i].Code.slice(0,3) == city_code_check_frist_3_text ){
							//alert(city_code_check_frist_3_text +','+ dd[i].Code.slice(0,3) +','+ dd[i].Name)
						}else{
							//alert(city_code_check_frist_3_text +','+ dd[i].Code.slice(0,3) +','+ dd[i].Name)
							if(city_code_check_frist_3_text !== 'frist'){
								doc_city += '<div class="block_line"></div>';
							}
						}
						city_code_check_frist_3_text = dd[i].Code.slice(0,3);
						doc_city += '<label class="one_city"><input type="checkbox" name="city_code[]" title="'+ dd[i].Name +'" value="'+ dd[i].Code +'" />'+ dd[i].Name +'</label>';
						//alert(city_code_check_frist_3_text)
					}
					//doc_city += '<div class="town_box" id="town_'+ dd[i].Code +'">';
					//doc_city += '</div>';
				});
				
			doc_city += '</div>';
			doc_city += '</div>';
			}});
		})
		*/
		).done(function(){ 
		//alert(doc_city)
		setTimeout(function(){
			$('.step2_con').html( doc_city );
			
			//テスト環境の最初の謎枠を消す処理（本番では必要ない）
			$('.one_pref_city').each(function(){
				//$(this).find('.line:first-child').remove();
				//$(this).find('.one_city:first-child').remove();
			});
			
			if(pref !== ''){
				$('.detail_select_box').hide();
				$('.town_select').hide();
				$('.city_select').show();
				$('.city_select_area').fadeIn();
				$('.city_log').empty();
				$('.step2_check_box').find('.step_check_con').empty();
				$('#this_select_type').val('city');
			}

			$.when(
			$('.city_select').find('label').each(function(){
				if($(this).find('input').is(':checked')) {
					$(this).css({'background-color':'#333','color':'#FFF'});
					$('.city_log').prepend('<span class="select city_log_item">'+ $(this).find('input').attr('title') +'×</span>');
					$('.step2_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
					var cheked = $(this).parents(".city_select").find('.one_city input:checked').length;
					if(cheked == '1'){
						$('.more_area_select').css({'display':'inline-block'});
						$(".town_button").css({'background-color':'#999'});
						$(".town_button").removeClass('town_search_Y');
						$(".one_city input:checked").parents(".one_pref_city").find(".town_button").addClass('town_search_Y');
						//$(".one_city input:checked").parents(".one_pref_city").find(".town_button").css({'background-color':'#BA5F2B'});
						$('.next_step_button2').addClass('town_search_Y');
					}else{
						$('.more_area_select').hide();
						$(".town_button").css({'background-color':'#999'});
						$(".town_button").removeClass('town_search_Y');
						$(".next_step_button2").removeClass('town_search_Y');
					}
				}
			})
			).done(function(){
				$('.step2_check_box').find('.selected').after('<span class="dot">・</span>');
				$('.step_check_con').find('.dot:last-child').remove();
				check_town(); 
			});
		},500);
		});
	}
	
	
	
	//市区郡クリック
	$(".one_city").find('input').live('change',function(){
		var id = $(this).val();
		var id_name = '#town_'+ id;
		//$(".next_step_button").removeClass('town_search_Y');
		var cheked = $(".city_select").find('.one_city input:checked').length;
		//alert(cheked)
		if($(this).is(':checked')) {
			if(cheked == '1'){
				//alert('チェック数は'+ cheked +'です')
				//$('.more_area_select').css({'display':'inline-block'});
				//$(".town_button").css({'background-color':'#999'});
				//$(".town_button").removeClass('town_search_Y');
				$(".one_city input:checked").parents(".one_pref_city").find(".town_button").addClass('town_search_Y');
				//$(".one_city input:checked").parents(".one_pref_city").find(".town_button").css({'background-color':'#BA5F2B'});
				$('.next_step_button2').addClass('town_search_Y');
				//$(this).parents(".one_pref_city").find(".town_button").css({'background-color':'#333'});
			}else{
				//alert('チェック数は'+ cheked +'です')
				//$('.more_area_select').hide();
				//$(".town_button").css({'background-color':'#999'});
				$(".next_step_button2").removeClass('town_search_Y');
				$(".one_town").find('input').prop("checked",false);
				$(".one_town").find('label').css({'background-color':'transparent','border-color':'#333','color':'#333'});
			}
		}else{
			if(cheked == '1'){
				//$('.more_area_select').css({'display':'inline-block'});
				//$(".town_button").css({'background-color':'#999'});
				//$(".town_button").removeClass('town_search_Y');
				$(".one_city input:checked").parents(".one_pref_city").find(".town_button").addClass('town_search_Y');
				//$(".one_city input:checked").parents(".one_pref_city").find(".town_button").css({'background-color':'#BA5F2B'});
				$('.next_step_button2').addClass('town_search_Y');
			}else{
				//$('.more_area_select').hide();
				//$(".town_button").css({'background-color':'#999'});
				$(".next_step_button2").removeClass('town_search_Y');
				$(".one_town").find('input').prop("checked",false);
				$(".one_town").find('label').css({'background-color':'transparent','border-color':'#333','color':'#333'});
			}
			//alert('チェック数は'+ cheked +'です')
			$(id_name).hide();
			$(this).parent('label').css({'background-color':'transparent','border-color':'#333','color':'#333'});
		}
		
		//inputにcity情報格納
		var dom = $.makeArray($(".city_select input:checkbox:checked"));
		var val = Array();
		var str = Array();
		for ( i=0; i<dom.length; i++ ) {
			val[i] = dom[i].value;
			str[i] = dom[i].title;
		}
		
		
		$("input#set_city").val( val.join(",") );
		$("input#set_city_name").val( str.join(",") );
	});
	
	
	
	function check_town(){
		if($("#set_city").val() !=="" && $("#set_town").val() !==""){
			var set_city_check_town = $("#set_city").val();
			//$(".one_city input:checked").parent("label").css({'background-color':'#BA5F2B','border-color':'#BA5F2B','color':'#FFF'});
			//var check_town_code = $("#set_town").val();
			//stationList(check_alongAry[i]);
			townList();
		}
	}
	
	
	
	$(".next_step_button2").click(function(){
		if($(this).hasClass('town_search_Y') && $('#this_select_type').val() == 'city'){
			townList();
			$('.detail_select_box').hide();
			$('.city_select').hide();
			$('.town_select').show();
			$('.next_step_button,.next_step_button2').hide();
			$('.prev_step_button').hide();
			$('.prev_step_button2').show();
			$('#this_select_type').val('town');
		}else if($('#this_select_type').val() == 'city'){
			alert('市区郡を１つ選んだ状態の場合に詳細な地域を設定することが出来ます。')
		}else{
			//alert($(this).find('span').text())
		}
	});
	
	
	//$(".town_search_Y").live('click',function(){
	//	townList();
	//});
	
	$(".more_area_select").live('click',function(){
		townList();
	});
	
	
	$('#step3').click(function(){
		var cheked = $(".city_select").find('.one_city input:checked').length;
		if(cheked == '1'){
			townList();
			$('.detail_select_box').hide();
			$('.city_select').hide();
			$('.town_select').show();
			$('.next_step_button,.next_step_button2').hide();
			$('.prev_step_button').hide();
			$('.prev_step_button2').show();
			$('#this_select_type').val('town');
		}else{
			alert('市区郡を１つ選んだ状態の場合に詳細な地域を設定することが出来ます。');
		}
	});
	
	//市区郡選択して更に詳細をクリックした時に町名書き出し
	//$(".town_button").live('click',function(){
	function townList(){
		//$(".one_city input:checked").parent("label").css({'background-color':'#BA5F2B','border-color':'#BA5F2B','color':'#FFF'});
		//alert('ok')
		var city_code = $("input#set_city").val();
		var cityAry = city_code.split(",");
		var townAry = $("#set_town").val().split(",");
		var set_div = "#town_" + city_code;
		var param = {"city_code": city_code};
		var town_doc = "";
		$.when(
		$.getJSON("ajax/town.php", param, function(dd){
			//alert(dd)
			town_doc +='<div class="town_list_box">';
			town_doc +='<div class="town_box_m">';
			town_doc +='</div>';
			town_doc +='<div class="town_list_box_content">';
			$.each(dd, function(i){
				if ($.inArray(dd[i].Code, townAry) != -1 ) {
					town_doc += '<label class="one_town"><input checked="checked" type="checkbox" name="town_code[]" title="'+ dd[i].Name +'" value="'+ dd[i].Code +'" />'+ dd[i].Name +'</label>';
				}else{
					town_doc += '<label class="one_town"><input type="checkbox" name="town_code[]" title="'+ dd[i].Name +'" value="'+ dd[i].Code +'" />'+ dd[i].Name +'</label>';
				}
			});
			town_doc +='</div>';
			town_doc +='</div>';
		})
		).done(function(){ 
		$(set_div).show();
		//setTimeout(function(){
			$('.step3_con').html( town_doc );
			var selected_city = $('.step2_check_box').find('.selected').text();
			//alert(selected_city)
			$('.town_box_m').html('<span>'+ selected_city +'</span>');
			$('.town_log').empty();
			$('.step3_check_box').find('.step_check_con').empty();
			$('.town_select').find('label').each(function(){
				if($(this).find('input').is(':checked')) {
					$(this).css({'background-color':'#333','color':'#FFF'});
					$('.town_log').prepend('<span class="select town_log_item">'+ $(this).find('input').attr('title') +'×</span>');
					$('.step3_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
					
				}
			})
			$('.step3_check_box').find('.selected').after('<span class="dot">・</span>');
			$('.step_check_con').find('.dot:last-child').remove();
		//},100);
		});
		
		
	//});
	}
	
	
	
	/**********************************************************************/
	//
	//
	//       沿線・駅
	//
	//
	/**********************************************************************/
	
	$('.step4_m_text,#step4').click(function(){
		$('.station_select').hide();
		$('.along_select').show();
		$('.prev_step_button3').hide();
		$('.next_step_button3').show();
		$('#this_select_type').val('along');
	});
	
	
	if($("#ini_pref").val() =="-1" || $("#ini_pref").val() ==""){
		$('.trans_list').html( '<span>都道府県が設定されていません<br><span style="color:#BA5F2B; cursor:pointer;" class="go_pref_set_page">「都道府県設定」</span>より都道府県を設定して下さい</span>' );
	}else{
		alongList();
	}
	
	var doc_trans = "";
	function alongList(){
		var trans_pref = $("#ini_pref").val();
		var trans_prefAry = trans_pref.split(",");
		
		var check_along = $("#set_along").val();
		var check_alongAry = check_along.split(",");
		
		
		doc_trans = "";
		
		var param = {'pref_code':trans_prefAry,'type':'along'};
		$.post("ajax/get_city_along_code.php", param, function(dd){
			if( dd && dd !== "false" ){
			var data = $.parseJSON( dd );
			$.each(data, function(){
				doc_trans += '<div class="one_pref_city">';
				doc_trans += '<div class="town_search">';
				doc_trans += '<div class="this_select_box_name">'+this.pref_name+'</div>';
				
				$.each(this.along, function(i){
					if ($.inArray(this.AlongCode, check_alongAry) != -1 ) {
						doc_trans += '<label class="one_line"><input class="line_'+ this.AlongCode +'" checked="checked" type="checkbox" name="route_id[]" title="'+ this.AlongShortName +'" value="'+ this.AlongCode +'" />'+ this.AlongName +'</label>'
					}else{
						doc_trans += '<label class="one_line"><input class="line_'+ this.AlongCode +'" type="checkbox" name="route_id[]" title="'+ this.AlongShortName +'" value="'+ this.AlongCode +'" />'+ this.AlongName +'</label>'
					}
				});
				
				doc_trans += '</div>';
				doc_trans += '</div>';
				$('.step4_con').html( doc_trans );
				$('.city_select_area').show();
				$('.along_log').empty();
				$.when(
					$('.along_select').find('label').each(function(){
						if($(this).find('input').is(':checked')) {
							$(this).css({'background-color':'#333','color':'#FFF'});
							//var text = $(this).find('input').attr('title') +'×';
							var text = 'check_'+$(this).find('input').val();
							var checktext = 'line_'+$(this).find('input').val();
							//if(a = 0){
							$('.along_log').prepend('<span class="select along_log_item '+text+'" title='+checktext+'>'+ $(this).find('input').attr('title') +'×</span>');
							var text2 = '.'+text;
							$('.along_log').find(text2).not(':first').remove();
							//}
						}
					})
				
				).done(
					function(){ 
						kakimodoshi();
				
					}
				);
			});
			}
		});
		
		/*
		$.each(trans_prefAry,function(i){
			
			$.ajax(
				{
					type		: "GET",
					dataType	: "json",
					url			: "addresslist/line/" + trans_prefAry[i] + ".json",
					success		: function(dd){
						doc_trans += '<div class="one_pref_city">';
						doc_trans += '<div class="town_search">';
				
						$.each(dd, function(i){
							if ($.inArray(dd[i].AlongCode, check_alongAry) != -1 ) {
								doc_trans += '<label class="one_line"><input class="line_'+ dd[i].AlongCode +'" checked="checked" type="checkbox" name="route_id[]" title="'+ dd[i].AlongShortName +'" value="'+ dd[i].AlongCode +'" />'+ dd[i].AlongName +'</label>'
							}else{
								doc_trans += '<label class="one_line"><input class="line_'+ dd[i].AlongCode +'" type="checkbox" name="route_id[]" title="'+ dd[i].AlongShortName +'" value="'+ dd[i].AlongCode +'" />'+ dd[i].AlongName +'</label>'
							}
						});
					
						doc_trans += '</div>';
						doc_trans += '</div>';
						$('.step4_con').html( doc_trans );
						$('.city_select_area').show();
						$('.along_log').empty();
						$.when(
							$('.along_select').find('label').each(function(){
								if($(this).find('input').is(':checked')) {
									$(this).css({'background-color':'#333','color':'#FFF'});
									//var text = $(this).find('input').attr('title') +'×';
									var text = 'check_'+$(this).find('input').val();
									var checktext = 'line_'+$(this).find('input').val();
									//if(a = 0){
									$('.along_log').prepend('<span class="select along_log_item '+text+'" title='+checktext+'>'+ $(this).find('input').attr('title') +'×</span>');
									var text2 = '.'+text;
									$('.along_log').find(text2).not(':first').remove();
									//}
								}
							})
						
						).done(
							function(){ 
								kakimodoshi();
						
							}
						);
				
				}
			
			});
			
		});
		*/
	
	}
	/*
	function alongList(){
		setTimeout(function(){
			$('.step4_con').html( doc_trans );
			$('.city_select_area').show();
			//$('.trans_list').html( doc_trans );
			//$('.city_select_area').fadeIn();
			$('.along_log').empty();
			$.when(
			$('.along_select').find('label').each(function(){
				if($(this).find('input').is(':checked')) {
					$(this).css({'background-color':'#333','color':'#FFF'});
					//alert($(this).find('input').attr('title'))
					$('.along_log').prepend('<span class="select along_log_item">'+ $(this).find('input').attr('title') +'×</span>');
				}
			})
			).done(function(){ 
				kakimodoshi();
			});
		},500);
		
	}
	*/
	
	function kakimodoshi(){
		if($("#set_along").val() !==""){
			var check_along = $("#set_along").val();
			var check_alongAry = check_along.split(",");
			//stationList(check_alongAry[i]);
			stationList(check_along);
			
			//$.each(check_alongAry,function(i){
				//alert(check_alongAry[i])
				//stationList(check_alongAry[i]);
			//});
			
			
		}
	}
	
	$('.along_select').find('input').live('change',function(){
		var along = $(".along_select").find('.one_line input:checked').length;
		//alert(along)
		if( along > 1 || along == 1 ){
			$(".next_step_button3").addClass('station_search_Y');
		}else{
			$(".next_step_button3").removeClass('station_search_Y');
		}
	});
	
	$(".next_step_button3").click(function(){
		if($(".next_step_button3").hasClass('station_search_Y')){
		}else{
			alert('沿線が選択されていません。')
		}
	});
	
	$(".station_search_Y").live('click',function(){
		//inputにcity情報格納
		var dom = $.makeArray($(".along_select input:checkbox:checked"));
		var val = Array();
		for ( i=0; i<dom.length; i++ ) {
			val[i] = dom[i].value;
		}
		
		$("input#set_along").val( val.join(",") );
		
		var along_code = $(this).val();
		//if($(this).is(':checked')) {
		stationList();
		$('.detail_select_box').hide();
		$(".next_step_button3").hide();
		$('.station_select').show();
		$(".prev_step_button3").show();
		
		//}else{
			//$(this).parent('label').css({'background-color':'transparent','color':'#333'});
			//var set_station_list = '#line_'+ along_code ;
			//$(set_station_list).fadeOut(300);
		//}
	});
	
	
	$(".prev_step_button3").click(function(){
		$('.detail_select_box').hide();
		$(".prev_step_button3").hide();
		$('.along_select').show();
		$(".next_step_button3").show();
	});
	
	$('#step5').click(function(){
		if($(".next_step_button3").hasClass('station_search_Y')){
			stationList();
			$('.along_select').hide();
			$('.station_select').show();
			$('.next_step_button3').hide();
			$('.prev_step_button3').show();
			$('#this_select_type').val('station');
		}else{
			alert('沿線が選択されていません。')
		}
	});
	
	
	//沿線クリックでチェックが入ったら
	function stationList(along_code){
		
		var set_station_list = '#line_'+ along_code ;
		var along_code_list = $("#set_along").val().split(",");
		var check_staAry  = $("#set_station").val().split(",");
		var station_doc = "";
		var param = {'along_code':along_code_list};
		$.when(
		
		$.post("ajax/get_station_code.php", param, function(dd){
			if( dd && dd !== "false" ){
			var data = $.parseJSON( dd );
			$.each(data, function(){
				station_doc += '<div class="one_along_station_box">'
				station_doc += '<div class="this_select_box_name">'+this.along_name+'</div>';
				
				$.each(this.station, function(i){
					if ($.inArray(this.StationCode7, check_staAry) != -1 ) {
						station_doc += '<label class="one_station"><input checked="checked" type="checkbox" name="station_id[]" title="'+ this.StationName +'" value="'+ this.StationCode7 +'" />'+ this.StationName +'</label>';
					}else{
						station_doc += '<label class="one_station"><input type="checkbox" name="station_id[]" title="'+ this.StationName +'" value="'+ this.StationCode7 +'" />'+ this.StationName +'</label>';
					}
				})
				
				station_doc += '</div>'
			});
			}
		})
		/*
		$.each(along_code_list, function(a){
			//alert(along_code_list[a])
			$.getJSON("ajax/station.php", {"along_code": along_code_list[a]}, function(dd){
				station_doc += '<div class="one_along_station_box">'
				$.each(dd, function(i){
					if ($.inArray(dd[i].StationCode7, check_staAry) != -1 ) {
						station_doc += '<label class="one_station"><input checked="checked" type="checkbox" name="station_id[]" title="'+ dd[i].StationName +'" value="'+ dd[i].StationCode7 +'" />'+ dd[i].StationName +'</label>';
					}else{
						station_doc += '<label class="one_station"><input type="checkbox" name="station_id[]" title="'+ dd[i].StationName +'" value="'+ dd[i].StationCode7 +'" />'+ dd[i].StationName +'</label>';
					}
				})
				station_doc += '</div>'
			})
		})
		*/
		).done(function(){ 
			setTimeout(function(){
				$(set_station_list).show();
				//$('.step5_con').empty();
				$('.step5_con').html(station_doc);
				$('.station_log').empty();
				$('.station_select').find('label').each(function(){
					if($(this).find('input').is(':checked')) {
						$(this).css({'background-color':'#333','color':'#FFF'})
						$('.station_log').prepend('<span class="select station_log_item">'+ $(this).find('input').attr('title') +'×</span>');
					}
				});
			},500);

		});
		
	}
	
	
	
	/**********************************************************************/
	//
	//
	//       管理会社
	//
	//
	/**********************************************************************/
	
	//管理会社
	function search_company(){
		if($('#ini_pref_name').val() == "" ){
			$('.set_pref_name').text('全国');
		}else{
			var pref_array = $('#ini_pref_name').val().replace(/,/g,'・');
			$('.set_pref_name').text(pref_array);
		}
		
		var doc_company = '';
		var setting_pref = $('#ini_pref').val();
		
		var page_m = $('input[name=page_method]').val();
		
		$('.not_company_log').empty();
		
		$.getJSON("ajax/company.php",{"pref_code":setting_pref,"method":page_m},function( dd ){
			//alert(dd)
			var comp = $(".company_id_check").val();
			var comp_name = $(".company_id_check").attr('id');
			var compAry = comp.split(",");
			
			var not_search_campany_array = $('#not_company_id').val().split(",");
			
			$.each(dd, function(i){
				//doc_company += '<div class="one_block">';
				
				if (i==0 || dd[i-1].initial_letter!=dd[i].initial_letter) {
				//doc_company += '<div class="one_block">';
				doc_company += '<div class="name_sort_m"><span>';
				doc_company += dd[i].initial_letter;
				doc_company += '</span>';
				doc_company += '<input type="hidden" class="jamp_point" value="'+dd[i].initial_letter+'">';
				doc_company += '</div>';
				
				}
				
				if ($.inArray(dd[i].company_id, compAry) != -1 ) {
					doc_company += '<label onclick="not_search(event,this);"><img class="not_search_text" src="./img/not_search.png"><input class="sc" name="'+ comp_name +'[]" type="checkbox" title="'+ dd[i].company_short_name +'" value="'+ dd[i].company_id +'" checked="checked" />'+ dd[i].company_short_name +'<input type="hidden" class="nsc" name="not_search_company[]" disabled="true" value="'+ dd[i].company_id +'"></label>';
				}else if($.inArray(dd[i].company_id, not_search_campany_array) != -1 ){
					doc_company += '<label class="not_search" onclick="not_search(event,this);"><img class="not_search_text" style="display: inline;" src="./img/not_search.png"><input class="sc" name="'+ comp_name +'[]" type="checkbox" title="'+ dd[i].company_short_name +'" value="'+ dd[i].company_id +'" disabled="true" />'+ dd[i].company_short_name +'<input type="hidden" class="nsc" name="not_search_company[]" value="'+ dd[i].company_id +'"></label>';
					
					$('.not_company_log').prepend('<span class="select not_company_log_item" id="n_'+ dd[i].company_id +'">[除]&nbsp;'+ dd[i].company_short_name +'&nbsp;×</span>');
					
				}else{
					doc_company += '<label onclick="not_search(event,this);"><img class="not_search_text" src="./img/not_search.png"><input class="sc" name="'+ comp_name +'[]" type="checkbox" title="'+ dd[i].company_short_name +'" value="'+ dd[i].company_id +'" />'+ dd[i].company_short_name +'<input type="hidden" class="nsc" name="not_search_company[]" disabled="true" value="'+ dd[i].company_id +'"></label>';
				}
				
				//doc_company += '</div>';
				
			
			});
			$('.step6_con').html( doc_company );
			$('.company_log').empty();
			$('.company_select').find('label').each(function(){
				if($(this).find('input').is(':checked')) {
					$(this).css({'background-color':'#333','color':'#FFF'})
					//$(this).find('input').attr('title');
					$('.company_log').prepend('<span class="select company_log_item" id='+ $(this).find('input').val() +'>'+ $(this).find('input').attr('title') +'×</span>');
				}
			});
			
		});
		
		
	}
	
	
	search_company();
	
	
	$('#company_b').click(function(){
		search_company();
	});
	
	
	
	
	
	
	
	//検索中項目書き出し
	
	var stc = $('#hstc').val();
	if(stc !==''){
		var stcAry = stc.split(",");
		$.each(stcAry,function(i){
			//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
			$('.stc').find('input[value ="'+ stcAry[i] +'"]').prop("checked",true);
			$('.stc').find('input[value ="'+ stcAry[i] +'"]').parent('label').css({'background-color':'#333','color':'#FFF'});
			var name = $('.stc').find('input[value ="'+ stcAry[i] +'"]').attr('title');
			$('.str_check_area').prepend('<span class="ary_check structur">'+ name +'×</span>');
		});
	}
	
	
	var rl = $('#rl_check').val();
	if(rl !==''){
		var rlAry = rl.split(",");
		$.each(rlAry,function(i){
			//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
			$('.rl_area').find('input[value ="'+ rlAry[i] +'"]').prop("checked",true);
			var name = $('.rl_area').find('input[value ="'+ rlAry[i] +'"]').attr('title');
			$('.layout_check_area').prepend('<span class="ary_check rl">'+ name +'×</span>');
		});
	}
	
	
	var rm = $('#rm_eq').val();
	if(rm !==''){
		var rmAry = rm.split(",");
		$.each(rmAry,function(i){
			//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
			$('.equipment').find('input[value ="'+ rmAry[i] +'"]').prop("checked",true);
			$('.equipment').find('input[value ="'+ rmAry[i] +'"]').parent('label').css({'background-color':'#333','color':'#FFF'});
			var name = $('.equipment').find('input[value ="'+ rmAry[i] +'"]').attr('title');
			$('.eq_check_area').prepend('<span class="eq_box check_r_'+rmAry[i]+'"><span class="ary_check rm">'+ name +'×</span></span>');
			$('.equipment').find('input[value ="'+ rmAry[i] +'"]').parents('.eq_detail').find('.eq_detail_button').addClass('check_on');
		});
	}
	var bld = $('#bld_eq').val();
	if(bld !==''){
		var bldAry = bld.split(",");
		$.each(bldAry,function(i){
			//$('.under').prepend('<span>'+ stcAry[i] +'</span>');
			$('.equipment').find('input[value ="'+ bldAry[i] +'"]').prop("checked",true);
			$('.equipment').find('input[value ="'+ bldAry[i] +'"]').parent('label').css({'background-color':'#333','color':'#FFF'});
			var name = $('.equipment').find('input[value ="'+ bldAry[i] +'"]').attr('title');
			$('.eq_check_area').prepend('<span class="eq_box check_b_'+bldAry[i]+'"><span class="ary_check bid">'+ name +'×</span></span>');
			$('.equipment').find('input[value ="'+ bldAry[i] +'"]').parents('.eq_detail').find('.eq_detail_button').addClass('check_on');
		});
	}
	
	if($('select[name=transportation_id]').val() !=='-1' && $('select[name=transportation_id]').val() !==''){
		var text = $("select[name=transportation_id] option:selected").text();
		$('.basic_check_area').prepend('<span class="select trans">'+ text +'×</span>');
	}
	
	/*
	if($('select[name=required_time]').val() !=='-1' && $('select[name=required_time]').val() !==''){
		var text = $("select[name=required_time] option:selected").text();
		$('.basic_check_area').prepend('<span class="select time">'+ text +'以内×</span>');
	}
	*/
	
	if($('input[name=required_time]').val() !==''){
		//var text = $("select[name=required_time] option:selected").text();
		var text = $("input[name=required_time]").val();
		$('.basic_check_area').prepend('<span class="select time">'+ text +'分以内×</span>');
	}
	
	if($('select[name=update_date]').val() !=='-1' && $('select[name=update_date]').val() !==''){
		var text = $("select[name=update_date] option:selected").text();
		$('.basic_check_area').prepend('<span class="select update">更新日'+ text +'×</span>');
	}
	
	if($('select[name=rental_cost1]').val() !=='-1' && $('select[name=rental_cost1]').val() !==''){
		var text = $("select[name=rental_cost1] option:selected").text();
		$('.basic_check_area').prepend('<span class="select rc1">'+ text +'以上×</span>');
	}
	
	if($('select[name=rental_cost2]').val() !=='-1' && $('select[name=rental_cost2]').val() !==''){
		var text = $("select[name=rental_cost2] option:selected").text();
		$('.basic_check_area').prepend('<span class="select rc2">'+ text +'以下×</span>');
	}
	
	if($('select[name=square_meter_l]').val() !=='-1' && $('select[name=square_meter_l]').val() !==''){
		var text = $("select[name=square_meter_l] option:selected").text();
		$('.basic_check_area').prepend('<span class="select sml">'+ text +'㎡以上×</span>');
	}
	
	if($('select[name=square_meter_h]').val() !=='-1' && $('select[name=square_meter_h]').val() !==''){
		var text = $("select[name=square_meter_h] option:selected").text();
		$('.basic_check_area').prepend('<span class="select smh">'+ text +'㎡以下×</span>');
	}
	
	if($('select[name=structured_date]').val() !=='-1' && $('select[name=structured_date]').val() !==''){
		var text = $("select[name=structured_date] option:selected").text();
		$('.basic_check_area').prepend('<span class="select strd">'+ text +'×</span>');
	}
	
	$('.basic_input').each(function(){
		if($(this).attr('title') !==""){
			$('.basic_check_area').prepend('<span class="basic_check">'+ $(this).attr('title') +'×</span>');
		}
	});


	if($('input[name=rnp_newly_open_flag]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">新着物件で絞り込み×</span>');
	}

	if($('input[name=enable_enter_flag]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">即入物件で絞り込み×</span>');
	}
	
	if($('input[name=include_common_fee]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">'+ $('input[name=include_common_fee]').attr('title') +'×</span>');
	}
	
	if($('input[name=include_parking_cost]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">'+ $('input[name=include_parking_cost]').attr('title') +'×</span>');
	}
	
	if($('input[name=deposit_recommpence]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">'+ $('input[name=deposit_recommpence]').attr('title') +'×</span>');
	}
	
	if($('input[name=parking_flag]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">'+ $('input[name=parking_flag]').attr('title') +'×</span>');
	}
	
	if($('input[name=available_parking_flag]').is(':checked')){
		$('.basic_check_area').prepend('<span class="basic_check">'+ $('input[name=available_parking_flag]').attr('title') +'×</span>');
	}
	
	$('.rebuild').find('input').each(function(){
		if($(this).attr('title') !==""){
			$(this).parent('label').css({'background-color':'#333','color':'#FFF'});
			$('.eq_check_area').prepend('<span class="rebld">'+ $(this).attr('title') +'×</span>');
		}
	});
	
	if($('input[name=keyword]').val() !==''){
		var freetext = $('input[name=keyword]').val();
		$('.free_text_log').prepend('<span class="free_search_text">'+ freetext +'×</span>');
	}
	
	if($('select[name=second_floor_more_flag]').val() !=='-1' && $('select[name=second_floor_more_flag]').val() !==''){
		var text = $("select[name=second_floor_more_flag] option:selected").text();
		$('.basic_check_area').prepend('<span class="select floor">'+ text +'×</span>');
	}
	
	//駐車場
	
	if($('input[name=parking_flag]').is(':checked')){
		$('.empty_parking_flag').show();
	}
	
	
	
	//検索項目確認の処理
	$('.ary_check').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		if($(this).hasClass('structur')){
			$('.stc').find('input[title ="'+ text +'"]').prop("checked",false);
			$('.stc').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
		}else if($(this).hasClass('rl')){
			$('.rl_area').find('input[title ="'+ text +'"]').prop("checked",false);
			
		}else{
			$('.equipment').find('input[title ="'+ text +'"]').prop("checked",false);
			$('.equipment').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
		}
	});
	
	$('.select').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		if($(this).hasClass('rc1')){
			$('select[name=rental_cost1]').val('-1');
		}else if($(this).hasClass('rc2')){
			$('select[name=rental_cost2]').val('-1');
		}else if($(this).hasClass('sml')){
			$('select[name=square_meter_l]').val('-1');
		}else if($(this).hasClass('smh')){
			$('select[name=square_meter_h]').val('-1');
		}else if($(this).hasClass('trans')){
			$('select[name=transportation_id]').val('-1');
		}else if($(this).hasClass('time')){
			//$('select[name=required_time]').val('-1');
			$('input[name=required_time]').val('');
		}else if($(this).hasClass('strd')){
			$('select[name=structured_date]').val('-1');
		}else if($(this).hasClass('update')){
			$('select[name=update_date]').val('-1');
		}else if($(this).hasClass('floor')){
			$('select[name=second_floor_more_flag]').val('-1');
		}
	});
	
	$('.basic_check').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		$('input[title ="'+ text +'"]').prop("checked",false);
	});
	
	$('.rebld').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		$('.rebuild').find('input[title ="'+ text +'"]').prop("checked",false);
		$('.rebuild').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
	});
	
	$('.free_search_text').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		$('input[name=keyword]').val("");
	});
	
	
	$('.pref_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		$('.pref_select').find('input[title ="'+ text +'"]').prop("checked",false);
		$('.pref_select').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
		pref_change_action()
	});
	
	$('.city_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		$('.one_pref_city').find('input[title ="'+ text +'"]').prop("checked",false);
		$('.one_pref_city').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
	});
	
	$('.town_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		$('.town_select').find('input[title ="'+ text +'"]').prop("checked",false);
		$('.town_select').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
	});
	
	$('.along_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		var text2 = '.'+$(this).attr('title');
		//$('.one_line').find('input[title ="'+ text +'"]').prop("checked",false);
		//$('.one_line').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
		$('.one_line').find(text2).prop("checked",false);
		$('.one_line').find(text2).parent('label').css({'background-color':'#FFF','color':'#333'});
	});
	
	$('.station_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		$('.station_select').find('input[title ="'+ text +'"]').prop("checked",false);
		$('.station_select').find('input[title ="'+ text +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
	});
	
	$('.company_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		var ID = $(this).attr('id');
		$('.company_select').find('input[value ="'+ ID +'"]').prop("checked",false);
		$('.company_select').find('input[value ="'+ ID +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
	});
	
	$('.not_company_log_item').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var text = $(this).text().replace(/×/g,'');
		var ID = $(this).attr('id').replace(/n_/g,'');
		$('.company_select').find('input[value ="'+ ID +'"]').attr("disabled",false);
		$('.company_select').find('input[value ="'+ ID +'"]').parent('label').css({'background-color':'#FFF','color':'#333'});
		$('.company_select').find('input[value ="'+ ID +'"]').parent('label').removeClass('not_search');
		$('.company_select').find('input[value ="'+ ID +'"]').parent('label').find('.not_search_text').hide();
		$('.company_select').find('input[value ="'+ ID +'"]').parent('label').find('.nsc').attr("disabled",true);
		$('.company_select').find('input[value ="'+ ID +'"]').parent('label').find('.not').css({"width":'0'});
		
	});
	

	//function my_file( dom, id ) {
	$('.add_mybox_button,.mybox_tr_hide').live('click',function(){
		var dom = $(this);
		var id = $(this).attr('id')
		var reg = new RegExp("^[0-9]+$");
		var flag = $(this).find('.hover_comment').text();
		//var memo = $(dom).next( "textarea[name='memo']" ).val();
		var mode = $(this).find( "input[name='mybox_mode']" ).val();
		//alert(mode)
		$.post("./ajax/update_myfile.php",{'id':id,'mode':mode},function(dd){
			if( !dd || dd == "false" ){
				alert("登録に失敗しました。");
			}else if(dd == "exist"){
				alert("すでに登録済みです。");
				$(dom).attr("disabled", "disabled").val("mybox追加済");
			}else{
				if(dd.match(reg)){
					dd = parseInt(dd,10);
					if(flag =="mybox追加"){
						$(dom).addClass('maybox_checked');
						$(dom).find('.hover_comment').text("mybox追加済");
						$(dom).find( "input[name='mybox_mode']" ).val("delete");
					}else{
						$(dom).removeClass('maybox_checked');
						$(dom).find('.hover_comment').text("mybox追加");
						$(dom).find( "input[name='mybox_mode']" ).val("insert");
					}
					$("#myfile_cnt").fadeOut(200,function(){
						$(this).text(dd).fadeIn(300);
					});
				}
			}
			
		});
		
	});
	
	
	
	/**********************************************************************/
	//
	//
	//       ストック用・市区町村・駅沿線・管理会社書き起こし
	//
	//
	/**********************************************************************/
	
	
	function stock_city() {
		var pref = $("#this_stock_pref").val();
		var prefAry = pref.split(",");
		var cityAry = $("#this_stock_city").val().split(",");
		
		$.each(prefAry,function(i){
			$.ajax({type: "GET", dataType: "json", url: "addresslist/city/" + prefAry[i] + ".json", success: function(dd){
				$.each(dd, function(i){
					if ($.inArray(dd[i].Code, cityAry) != -1 ) {
						//doc_city += '<label class="one_city"><input checked="checked" type="checkbox" name="city_code[]" title="'+ dd[i].Name +'" value="'+ dd[i].Code +'" />'+ dd[i].Name +'</label>';
						$('.city_st').prepend('<span class="stock_item city_stock_item">'+ dd[i].Name +'</span>');
					}
				});
			}});
		});
	}
	
	
	function stock_town(){
		$(".one_city input:checked").parent("label").css({'background-color':'#BA5F2B','border-color':'#BA5F2B','color':'#FFF'});
		//alert('ok')
		var city_code = $("#this_stock_city").val();
		var cityAry = city_code.split(",");
		var townAry = $("#this_stock_town").val().split(",");
		var set_div = "#town_" + city_code;
		var param = {"city_code": city_code};
		
		$.getJSON("ajax/town.php", param, function(dd){
			//alert(dd)
			$.each(dd, function(i){
				if ($.inArray(dd[i].Code, townAry) != -1 ) {
					//town_doc += '<label class="one_town"><input checked="checked" type="checkbox" name="town_code[]" title="'+ dd[i].Name +'" value="'+ dd[i].Code +'" />'+ dd[i].Name +'</label>';
					$('.town_st').prepend('<span class="stock_item town_stock_item">'+ dd[i].Name +'</span>');
				}
			});
		})
		
	}
	
	function stock_along(){
	//function lineList() {
		//alert('ss')
		var trans_pref = $("#this_stock_pref").val();
		var trans_prefAry = trans_pref.split(",");
		
		var check_along = $("#this_stock_along").val();
		var check_alongAry = check_along.split(",");
		
		
		$.each(trans_prefAry,function(i){
			
			$.ajax({type: "GET", dataType: "json", url: "addresslist/line/" + trans_prefAry[i] + ".json", success: function(dd){
			
				$.each(dd, function(i){
					if ($.inArray(dd[i].AlongCode, check_alongAry) != -1 ) {
						//doc_trans += '<label class="one_line"><input checked="checked" type="checkbox" name="route_id[]" title="'+ dd[i].AlongShortName +'" value="'+ dd[i].AlongCode +'" />'+ dd[i].AlongName +'</label>'
						$('.along_st').prepend('<span class="stock_item along_stock_item">'+ dd[i].AlongShortName +'</span>');
					}
				})

			}})
		})
		
	}
	
	function stock_station(){
		
		var station_along = $("#this_stock_along").val();
		var station_alongAry = station_along.split(",");
		
		var check_staAry  = $("#this_stock_station").val().split(",");
		
		$.each(station_alongAry,function(i){
			$.getJSON("ajax/station.php", {"along_code": station_alongAry[i]}, function(dd){
				$.each(dd, function(i){
					if ($.inArray(dd[i].StationCode7, check_staAry) != -1 ) {
						//station_doc += '<label class="one_station"><input checked="checked" type="checkbox" name="station_id[]" title="'+ dd[i].StationName +'" value="'+ dd[i].StationCode7 +'" />'+ dd[i].StationName +'</label>';
						$('.station_st').prepend('<span class="stock_item station_stock_item">'+ dd[i].StationName +'</span>');
					}
				})
			})
		});
		
	}
	
	function stock_company(){
	
		var setting_pref = $("#this_stock_pref").val();
		
		$.getJSON("ajax/company.php",{"pref_code":setting_pref},function( dd ){
			//alert(dd)
			var comp = $("#this_stock_company").val();
			//var comp_name = $(".company_id_check").attr('id');
			var compAry = comp.split(",");
			$.each(dd, function(i){
				
				if ($.inArray(dd[i].company_id, compAry) != -1 ) {
					//doc_company += '<label><input name="'+ comp_name +'[]" type="checkbox" title="'+ dd[i].company_short_name +'" value="'+ dd[i].company_id +'" checked="checked" />'+ dd[i].company_short_name +'</label>';
					$('.company_st').prepend('<span class="stock_item company_stock_item">'+ dd[i].company_short_name +'</span>');
				}
				
			
			});
			
		});
		
		
	}
	
	
	function stock_not_company(){
	
		var setting_pref = $("#this_stock_pref").val();
		
		$.getJSON("ajax/company.php",{"pref_code":setting_pref},function( dd ){
			//alert(dd)
			var comp = $("#this_stock_not_company").val();
			//var comp_name = $(".company_id_check").attr('id');
			var compAry = comp.split(",");
			$.each(dd, function(i){
				
				if ($.inArray(dd[i].company_id, compAry) != -1 ) {
					//doc_company += '<label><input name="'+ comp_name +'[]" type="checkbox" title="'+ dd[i].company_short_name +'" value="'+ dd[i].company_id +'" checked="checked" />'+ dd[i].company_short_name +'</label>';
					$('.company_st').prepend('<span class="stock_item not_company_stock_item">[除]&nbsp;'+ dd[i].company_short_name +'</span>');
				}
				
			
			});
			
		});
		
		
	}
	

	
	
	// multi submit to search estate
	 function multi_submit( action, param ){
	 	$( "<form />" )
	 		.addClass( "multi_submit" )
	 		.attr({
	 			'action'	: action,
	 			'method'	: "post"
	 		
	 		})
	 		.css({
	 			'display'	: 'none'
	 		
	 		})
	 		.appendTo( "body" );
	 	
	 	$.each( param, function( key, val ){
	 		$( "form.multi_submit" ).append( $( '<input />', {type:'hidden', "name":key, "value":val} ) );
	 	
	 	});
	 	
	 	$( "form.multi_submit" ).submit();
	 
	 }
	 
	 
	 $('.required_time_view').live('input',function(){
	 	if( $('.required_time_view').val() != "" ){
			var val = $(this).val().replace(/[^0-9]/g, '');
			//$('.required_time_view').val( val );
			if( val != '0' ){
				$('.required_time_view').val( val );
			}else{
				$('.required_time_view').val( '' );
			}
		}
	 })
	 
	 
	 $('.required_time_view').keydown(function(event){
	 	
	 	switch( event.keyCode ){
			case 38:
				required_time_switch('up');
			break;
			
			case 40:
				required_time_switch('down');
			break;
		}
	 });
	
	 $('.history-detail-btn').live('mouseover',function(){
		this.querySelector('img').setAttribute('src','./img/detail_hover.png');
		// this.querySelector('span').classList.add('name-display');
	 });
	 $('.history-detail-btn').live('mouseleave',function(){
		this.querySelector('img').setAttribute('src','./img/detail_icon.png');
		// this.querySelector('span').classList.remove('name-display');
	 });

});


function not_search(event,dom){
	var key_event = event || window.event; //*3
	//var key_shift = (key_event.shiftKey); //*4
	var key_alt = (key_event.altKey);
	
	var source = event.srcElement || e.target
	
	var eType = source.tagName;
	
	console.log(eType +'|'+source)
	
	if( key_alt && eType == "LABEL" ){
		
		console.log(dom)
		if( $(dom).hasClass('not_search') ){
			$(dom).removeClass('not_search');
			$(dom).find('input').attr("disabled", false);
			$(dom).find('.nsc').attr("disabled", true);
			$(dom).find('.not_search_text').hide();
			$(dom).find('input').attr("checked", false);
			$(dom).css({'background-color':'#FFF','color':'#333'});
		}else{
			$(dom).addClass('not_search');
			$(dom).find('input').attr("disabled", true);
			$(dom).find('.nsc').attr("disabled", false);
			$(dom).find('.not_search_text').show();
			$(dom).find('input').attr("checked", false);
			$(dom).css({'background-color':'transparent','color':'#333'});
			//$(this).prepend('<img class="not_search_text" src="./img/not_search.png">');
		}
		
	}
	
	if( key_alt && eType == "INPUT" ){
		//$(dom).find('input').attr("checked", false);
		//$(dom).attr("checked", false);
		$(dom).find('.sc').attr("checked", false);
		$(dom).css({'background-color':'#FFF','color':'#333'});
	}
	
	
}

function reset_not_search(){
	$('.step6_con').find('label').removeClass('not_search');
	$('.step6_con').find('label').find('input').attr("disabled", false);
	$('.step6_con').find('label').find('.nsc').attr("disabled", true);
	$('.step6_con').find('label').find('.not_search_text').hide();
	$('.step6_con').find('label').css({'background-color':'#FFF','color':'#333'});
}


function required_time_set( param ){
	$('.required_time_view').val(param);
	$('.required_time_list_box').hide();
}

function required_time_switch( type ){
	
	var time = 0;
	if( $('.required_time_view').val() != "" ){
		time = parseInt( $('.required_time_view').val() );
	}
	
	console.log(time)
	
	var param  = 0;
	
	switch( type ){
		case 'up':
			param = time + 1
		break;
		
		case 'down':
			if( time > 1 ){
				param = time - 1;
			}else{
				param = "";
			}
		break;
	}
	
	$('.required_time_view').val(param)
	
}


function display_room_history(){
	let type = document.getElementById('property_type').value;
	if(type == 'estate')type = 'room';

	var list = R_history.history_list_table(type);
	

	let typeString;
	switch(type){
		case 'room':
			typeString = '住居';
		break;

		case 'tenant':
			typeString = 'テナント';
		break;

	}


	if( $('#display_room_history').length == 0 ){
		var html = "";
			html += '<div id="display_room_history">';
				html += '<div class="display_room_history_header">';
				html += '物件閲覧履歴（' + typeString + ')' ;
				html += '<button type="button" onclick="display_room_history_close();">とじる</button>';
				html += '</div>';
				if(R_history.annotation)html += '<p class="history_annotation">' + R_history.annotation + '</p>';
				html += '<div class="history_table_box">';
				html += '</div>';
			html += '</div>';
		$('body').append(html);
		$('.history_table_box').html(list);
		$('#display_room_history').animate({'right':'0'},500);
	}else{
		$('.history_table_box').html(list);
	}
}

function display_room_history_close(){
	$('#display_room_history').animate({'right':'-500px'},500,function(){
		$('#display_room_history').remove();
	});
}

</script>
<style>

.not_search {
	background-color: #DDD!important;
	color: #777!important;
	/*pointer-events: none;*/
}

.not_search_text {
	font-size: 9px;
	height: 18px;
	margin: 0 5px 0 0;
	vertical-align: middle;
	display: none;
}

.search_menu {
	padding:0;
}

.DL_block,
.free,
.reset_button,
.go_search,
.search_table_waku,
.parking_flag_box,
.web_flag,
.any_search,
.reset_button,
.go_search {
	margin-left:20px;
	margin-right:10px;
}

.flag_2 p {
	margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    background-color: #013265;
    color: #fff;
    border-radius: 3px;
    padding: 4px;
}

.one_slide_search_box {
	padding:10px 0;
	text-align:center;
}

.one_slide_search_box div {
	display:inline-block;
	margin:0;
}

.history_btn {
    border-radius: 5px;
    color: #fff;
    position: relative;
    cursor: pointer;
    border: 1px solid #fff;
	width: 100%;
    height: 40px;
	background-color: #333;
    box-shadow: 0 0 3px #333;
	border: solid 2px orange;
	font-size: 15px;
}
.history_btn:hover {
	background-color: #c78000;
}

.history_btn img {
	width: 150px;
}



.type_menu,.search_type_icon,.save_search,.reset_button,.go_search,.click_menu,.any_search,.building_data,.pager,.pager_disable,.pager_current {
	cursor:pointer;
	position:relative;
}

.block_line {
	border-bottom:2px dotted #999;
	margin:20px 0;
}



/**/

.search_tittle {
	font-size:13px;
	height:200px;
	padding:10px 0 0 0;
	background-color:#999;
	box-shadow:0 0 3px #000 inset;
}

.seach_area {
	padding:200px 0 0 0;
}

.system_menu {
	color:#FFF;
	font-size:15px;
}

.change_area {
	margin:0;
}

.search_type_icon {
	padding:0;
	border-radius:5px;
	background-color:#333;
	box-shadow:0 0 3px #333;
	cursor:pointer !important;
	position:relative;
}

.search_type_icon img {
	max-width:160px;
	height:auto;
	margin:1%;
}

.search_type_icon a {
	display:inline-block;
	margin:0;
	padding:0;
}

.search_type_icon:hover {
}

.free {
	margin:10px 10px 20px 20px;
}

.stock_button_box {
	padding:10px 0 0 0;
}

.save_search {
	width:160px;
	background-color:#FFF;
	color:#036;
	margin:0;
	display:inline-block;
}

.save_search_help {
	text-align:center;
	margin:0 0 0 20px;
	color:#666;
	display:inline-block;
	font-size:13px;
}

.save_search span {
	width:160px;
}

.main_layer_contents {
	margin:3% auto;
	max-height:90%;
	overflow:auto;
}

.search_menu_m_text {
	text-align:center;
	color:#FFF;
	margin:10px 0 0 0;
	font-size:14px;
}


.search_system_menu {
	border-spacing:5px;
}



.mode_cahnge {
	border:2px solid #6C3;
}

.PDF_print {
	border:2px solid #B90002;
}

.check_list_open {
	border:2px solid #09C;
}

.mode_cahnge:hover {
	background-color:#690;
}

.PDF_print:hover {
	background-color:#900600;
}

.check_list_open:hover {
	background-color:#069;
}

.search_system_menu {
	border-spacing:5px;
}


.PDF_print img,
.check_list_open img  {
	max-width:70px;
}

/*.PDF_print img,
.check_list_open img {
	max-width:96px;
}*/

.reset_button {
	margin:10px 10px 20px 20px;
}

.search_type_icon_comment {
	position:absolute;
	top:90%;
	left:0;
	background-color:#FFF;
	font-size:12px;
	z-index:10;
	width:110px;
	border:1px solid #333;
	text-align:center;
	padding:3px 0;
	border-radius:5px;
	display:none;
	box-shadow:0 0 3px #333;
}



.search_menu_open_button {
	position:absolute;
	left:100%;
	top:50%;
	margin-top:-90px;
	height:180px;
	width:40px;
	text-align:center;
	/*background-color:#BA5F2B;*/
	background-color:#036;
	border-top:2px solid #FFF;
	border-right:2px solid #FFF;
	border-left:1px solid #FFF;
	border-bottom:2px solid #FFF;
	border-radius:0 5px 5px 0;
	color:#FFF;
	font-weight:600;
}

.search_menu_open_button span {
	display:table-cell;
	height:180px;
	width:40px;
	vertical-align:middle;
}

.search_menu_open_button img {
	width:30px;
	height:auto;
}

.check_sarch_list {
	background-color:#FFF;
	padding:20px;
	border-radius:3px;
}

.trans_detail {
	color:#FFF;
	width:160px;
	margin:0 auto
}

.trans_detail .select-wrapper {
	width:60px;
}

.stock_save:hover {
	background-color:#333;
}







.search_type_icon img {
	_width:160px;/* IE9 */
	height:auto;
	_margin:0;/* IE9 */
}

.PDF_print img,
.check_list_open img  {
	_width:70px;/* IE9 */
}

.seach_info_change {
	_width:90%;/* IE9 */
	_height:100px;/* IE9 */
	_z-index:10;/* IE9 */
}



.trans_detail {
	_width:160px;/* IE9 */
	_margin-left: 20px;/* IE9 */
	_margin-right: 10px;/* IE9 */
}


.search_menu_open_layer {
	_text-align:center;/* IE9 */
}
.search_menu_open_button2 {
	_display:inline-block;/* IE9 */
}

.eq_detail {
	_display:inline;/* IE9 */
}
.eq_detail_button {
	_display:inline-block;/* IE9 */
	_width:200px;/* IE9 */
}

.eq_detail_box div {
	_background-color:#999;/* IE9 */
}

.step1_m,
.step2_m,
.step3_m,
.step4_m,
.step5_m,
.step6_m,
.step7_m {
	_width:100%;/* IE9 */
}

.main_table {
	_width:1140px;/* IE9 */
}

.under {
	_width:100%;/* IE9 */
	_overflow-x:scroll;/* IE9 */
}

.pager_box {
	_width:1140px;/* IE9 */
}

.this_select_box_name {
	padding:0 5px;
	border-bottom:1px solid #BA5F2B;
	color:#BA5F2B;
	font-size:16px;
}

</style>


<!--div class="search_menu_open_button">
	<span><img src="./img/search_open_icon.png" /><br />検<br />索<br />条<br />件<br />表<br />示</span>
</div-->

<div class="search_tittle">
	<span class="system_menu">リスト検索</span>
    <!--検索メニュー<br />-->
   <div class="change_area">
        <!--span>検索タイプ切り替え</span-->
        <table class="search_system_menu">
            <!--tr>
                <td class="search_type_icon">
                    <a href="main.php?method=estate&display=building">
                        <img src="./img/list_search.png" />
                    </a>
                </td>
                <td class="change_icon">
                    <a href="main.php?method=estate&display=map">
                        <img src="./img/change_search_type.png" />
                    </a>
                </td>
                <td class="search_type_icon">
                    <a href="main.php?method=estate&display=map">
                        <img src="./img/map_opacity.png" />
                    </a>
                </td>
            </tr-->
            <tr>
            	<!--td class="search_type_icon">
                	<a href="main.php?method=estate&display=building">
                        <img src="./img/list_search.png" />
                    </a>
                </td-->
                <td colspan="2" class="search_type_icon mode_cahnge">
                	<a href="main.php?method=estate&display=map">
                        <img src="./img/map_mode_icon.png" />
                    </a>
                </td>
            </tr>
            <tr>
                <td class="search_type_icon PDF_print">
                	<a href="pdf_list_bridge.php">
                    <img src="./img/PDF_mode.png" />
                    <div class="search_type_icon_comment">
                    	検索結果をPDFで<br />出力します
                    </div>
                    </a>
                </td>
                <td class="search_type_icon check_list_open">
                    <img src="./img/search_check_mode.png" />
                    <div class="search_type_icon_comment">
                    	検索中の条件を<br />確認出来ます
                    </div>
                </td>
            </tr>
			<tr>	
				<td colspan="2">
					<div>
						<button class="history_btn" type="button" onclick="display_room_history();"><img src="./img/history.png"></button>
					</div>
				</td>
			</tr>
			<tr>
            	<td colspan="2" style="font-size:10px; color:#FFF;">
            		PDF出力は建物毎600件までになります
                </td>
            </tr>
        </table>
   </div>
</div>
<div class="seach_area">
	<input type="hidden" name="page_method" value="estate" />
    <input type="hidden" name="page_type" value="building" />
	<input id="ini_pref" name="ini_pref" type="hidden" value="26" />
	<input id="ini_pref_name" name="ini_pref_name" type="hidden" value="京都" />
    <input id="pref_code" type="hidden" value="26" />
    <input id="search_pref_ary" type="hidden" value="" />
    <input id="along_code" type="hidden" value="" />
	<input id="property_type" type="hidden" value="estate">
    
    <!--書き戻し用-->
    <input id="set_city" type="hidden" value="26202" />
    <input id="set_town" type="hidden" value="26202017,26202020,26202028" />
    <input id="set_along" type="hidden" value="" />
    <input id="set_station" type="hidden" value="" />
    <input id="company_check" type="hidden" value="" />
    <input id="company_check_name" type="hidden" value="" />
    
        	<input class="company_id_check" id="company_id" type="hidden" value="" />
    	
	<!--会社除外検索-->
	<input class="not_company_id_check" id="not_company_id" type="hidden" value="" />

    <!--配列系チェックボックス取得-->
    <input type="hidden" id="rl_check" value="">
    <input type="hidden" value="" id="hstc" />
    <input type="hidden" id="rm_eq" value=""  />
    <input type="hidden" id="bld_eq" value=""  />
	<!--form id="main_form" action="search_cookie.php" method="post"-->
    <div class="search_menu">
    	        <!--div class="search_menu_m_text">
        	検索メニュー
        </div-->
        
        <!--div class="save_search" id="stock">
            <span>検索条件ストック</span>
        </div-->
        <!--div class="save_search_help" >
            検索条件ストックとは?
        </div-->
                
        <div>
        	<div class="one_slide_search_box">
                <div class="click_menu" id="area_b">
                    <span>所在地絞り込み ＋</span>
                </div>
            </div>
            <div class="one_slide_search_box">
                <div class="click_menu" id="trans_b">
                    <span>沿線・駅絞り込み ＋</span>
                </div>
            </div>
            <div class="trans_detail">
            	<div>
                	駅からの移動手段
                </div>
                <div class="select-wrapper" style="vertical-align: middle;">
                    <select name="transportation_id">
                        <option value="-1" selected="selected">-----</option>
                        <option value="1" >徒歩</option>
                        <option value="2" >バス</option>
                        <option value="3" >自動車</option>
                    </select>
                </div>
				
				<style>
				.required_time_box {
					display: inline-block;
					vertical-align: middle;
					position: relative;
				}
				
				.required_time_view {
					height: 29px;
					border-radius: 5px;
					width: 55px;
					border: none;
					box-shadow: 0 0 2px #333 inset;
					background-image: url(/img/shadow30.png);
					vertical-align: middle;
					background-color: transparent;
					text-align: left;
					color: #FFF;
					padding: 0 15px 0 5px;
				}
				
				.required_selecter {
					display: inline-block;
					vertical-align: middle;
					overflow: hidden;
					border-radius: 0 5px 5px 0;
					height: 29px;
					width: 15px;
					background-image: url(/img/shadow60.png);
					position: relative;
				}
				
				.required_time_select {
					opacity: 0;
					height: 22px;
					position: absolute;
					bottom: -22px;
					left: 0;
				}
				
				.required_time_select_icon {
					display: table-cell;
					height: 29px;
					width: 15px;
					color: #FFF;
					font-size: 0pt;
					vertical-align: middle;
					text-align: center;
					cursor: pointer;
				}
				
				
				.required_time_list_box {
					position: absolute;
					top: 30px;
					left: 0;
					background-color: #FFF;
					border-radius: 4px;
					z-index: 10;
					overflow: hidden;
					font-size: 9pt;
					display: none;
					box-shadow: 0 2px 3px #000;
				}
				
				
				.required_time_selecter {
					position: absolute;
					right: 2px;
					top: 0;
				}
				
				.click_button {
					display: inline-block;
					vertical-align: middle;
					font-size: 5pt;
					border: none;
					background-color: transparent;
					vertical-align: middle;
					margin: 0;
					padding: 0;
					color: #FFF;
				}
				
				
				</style>
				
				<div class="required_time_box">
					<input type="text" name="required_time" class="required_time_view" value="">
					<div class="required_time_selecter">
						<span class="required_time_select_icon">
							<input type="button" class="click_button" onClick="required_time_switch('up');" value="▲">
							<br>
							<input type="button" class="click_button" onClick="required_time_switch('down');" value="▼">
						</span>
						<!--
						<span class="required_time_select_icon"><span onClick="required_time_switch('up');">▲</span><br><span onClick="required_time_switch('down');">▼</span></span>
						-->
					</div>
				</div>
				分<br>
				<span style="font-size: 7pt; color: #FFF;">※駅からの時間は直接入力と▲▼での分単位指定が可能です</span>
				<!--
                <div class="select-wrapper">
                    <select name="required_time">
                        <option value="-1" >-----</option>
                        <option value="1" >1分</option>
                        <option value="3" >3分</option>
                        <option value="5" >5分</option>
                        <option value="10" >10分</option>
                        <option value="15" >15分</option>
                    </select>
                </div>
				-->
            </div>
            <div class="one_slide_search_box">
                <div class="click_menu" id="company_b">
                    <span>管理会社絞り込み ＋</span>
                </div>
            </div>
        </div>
        
        <div class="reset_button">
        	<span>リセット</span>
        </div>
        <div class="go_search">
            <span>検 索</span>
        </div>
        
        <div class="free">
            フリーワード<br />
            <input name="keyword" type="search" value="" />
        </div>
        
        <div class="search_table_waku">
            <table class="search_table">
				<tr>
                    <td>
						<span style="font-size: 9px;color: #FF0;">★ New</span><br>
                        <span class="search_table_m">更新日</span>
                    </td>
                    <td>
                        <div class="select-wrapper">
                            <select name="update_date">
                                <option value="-1" selected="selected">すべて表示</option>
								<option value="1" >1日以内</option>
								<option value="3" >3日以内</option>
								<option value="7" >7日以内</option>
								<option value="14" >14日以内</option>
                            </select>
                        </div>
                    </td>
                </tr>
				<tr>
					<td colspan="2">
						<!--
						<label><input type="checkbox" name="rnp_newly_open_flag" title="新着物件で絞り込み" value="Y"  />新着物件で絞り込み</label><br />
						-->
						<label><input type="checkbox" name="enable_enter_flag" title="即入物件で絞り込み" value="Y"  />即入物件で絞り込み</label>
					</td>
				</tr>
                <tr>
                    <td>
                        <span class="search_table_m">賃料</span>
                    </td>
                    <td>
                        <div class="select-wrapper">
                            <select name="rental_cost1">
                                <option value="-1" selected="selected">下限なし</option>
                                <option value="20000" >2.0万円</option>
                                <option value="25000" >2.5万円</option>
                                <option value="30000" >3.0万円</option>
                                <option value="35000" >3.5万円</option>
                                <option value="40000" >4.0万円</option>
                                <option value="45000" >4.5万円</option>
                                <option value="50000" >5.0万円</option>
                                <option value="55000" >5.5万円</option>
                                <option value="60000" >6.0万円</option>
                                <option value="65000" >6.5万円</option>
                                <option value="70000" >7.0万円</option>
                                <option value="75000" >7.5万円</option>
                                <option value="80000" >8.0万円</option>
                                <option value="85000" >8.5万円</option>
                                <option value="90000" >9.0万円</option>
                                <option value="95000" >9.5万円</option>
                                <option value="100000" >10万円</option>
                                <option value="110000" >11万円</option>
                                <option value="120000" >12万円</option>
                                <option value="130000" >13万円</option>
                                <option value="140000" >14万円</option>
                                <option value="150000" >15万円</option>
                                <option value="160000" >16万円</option>
                                <option value="170000" >17万円</option>
                                <option value="180000" >18万円</option>
                                <option value="190000" >19万円</option>
                                <option value="200000" >20万円</option>
                                <option value="250000" >25万円</option>
                                <option value="300000" >30万円</option>
                                <option value="350000" >35万円</option>
                                <option value="400000" >40万円</option>
                                <option value="450000" >45万円</option>
                                <option value="500000" >50万円</option>
                                <option value="600000" >60万円</option>
                                <option value="700000" >70万円</option>
                                <option value="800000" >80万円</option>
                                <option value="900000" >90万円</option>
                                <option value="1000000" >100万円</option>
                           	</select>
                        </div>
                    </td>
                    <td>
                        円
                    </td>
                </tr>
                <tr>
                    <td>
                        〜
                    </td>
                    <td>
                        <div class="select-wrapper">
                            <select name="rental_cost2">
                            	<option value="-1" selected="selected">上限なし</option>
                                <option value="20000" >2.0万円</option>
                                <option value="25000" >2.5万円</option>
                                <option value="30000" >3.0万円</option>
                                <option value="35000" >3.5万円</option>
                                <option value="40000" >4.0万円</option>
                                <option value="45000" >4.5万円</option>
                                <option value="50000" >5.0万円</option>
                                <option value="55000" >5.5万円</option>
                                <option value="60000" >6.0万円</option>
                                <option value="65000" >6.5万円</option>
                                <option value="70000" >7.0万円</option>
                                <option value="75000" >7.5万円</option>
                                <option value="80000" >8.0万円</option>
                                <option value="85000" >8.5万円</option>
                                <option value="90000" >9.0万円</option>
                                <option value="95000" >9.5万円</option>
                                <option value="100000" >10万円</option>
                                <option value="110000" >11万円</option>
                                <option value="120000" >12万円</option>
                                <option value="130000" >13万円</option>
                                <option value="140000" >14万円</option>
                                <option value="150000" >15万円</option>
                                <option value="160000" >16万円</option>
                                <option value="170000" >17万円</option>
                                <option value="180000" >18万円</option>
                                <option value="190000" >19万円</option>
                                <option value="200000" >20万円</option>
                                <option value="250000" >25万円</option>
                                <option value="300000" >30万円</option>
                                <option value="350000" >35万円</option>
                                <option value="400000" >40万円</option>
                                <option value="450000" >45万円</option>
                                <option value="500000" >50万円</option>
                                <option value="600000" >60万円</option>
                                <option value="700000" >70万円</option>
                                <option value="800000" >80万円</option>
                                <option value="900000" >90万円</option>
                                <option value="1000000" >100万円</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        円
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label><input type="checkbox" name="include_common_fee" title="管理費・共益費含む" value="1"  />管理費・共益費含む</label><br />
						<label><input type="checkbox" name="include_parking_cost" title="駐車場料金を含む" value="1"  />駐車場料金を含む</label><br />
                        <label><input type="checkbox" name="deposit_recommpence" title="敷金・礼金なし" value="1"  />敷金・礼金なし</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="search_table_m">面積</span>
                    </td>
                    <td>
                        <div class="select-wrapper">
                            <select name="square_meter_l">
                                <option value="-1">下限なし</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                                <option value="45">45</option>
                                <option value="50">50</option>
                                <option value="55">55</option>
                                <option value="60">60</option>
                                <option value="65">65</option>
                                <option value="70">70</option>
                                <option value="75">75</option>
                                <option value="80">80</option>
                                <option value="85">85</option>
                                <option value="90">90</option>
                                <option value="95">95</option>
                                <option value="100">100</option>
                           </select>
                        </div>
                    </td>
                    <td>
                        ㎡
                    </td>
                </tr>
                <tr>
                    <td>
                        〜
                    </td>
                    <td>
                        <div class="select-wrapper">
                            <select name="square_meter_h">
                                <option value="-1">上限なし</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                                <option value="45">45</option>
                                <option value="50">50</option>
                                <option value="55">55</option>
                                <option value="60">60</option>
                                <option value="65">65</option>
                                <option value="70">70</option>
                                <option value="75">75</option>
                                <option value="80">80</option>
                                <option value="85">85</option>
                                <option value="90">90</option>
                                <option value="95">95</option>
                                <option value="100">100</option>
                           </select>
                        </div>
                    </td>
                    <td>
                        ㎡
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="search_table_m">築年数</span>
                    </td>
                    <td>
                        <div class="select-wrapper">
                            <select name="structured_date">
                                <option value="-1" selected="selected">年数を問わない</option>
                                <option value="1" >1年以内</option>
                                <option value="3" >3年以内</option>
                                <option value="5" >5年以内</option>
                                <option value="7" >7年以内</option>
                                <option value="10" >10年以内</option>
                                <option value="15" >15年以内</option>
                                <option value="20" >20年以内</option>
								<option value="25" >25年以内</option>
								<option value="30" >30年以内</option>
								<option value="35" >35年以内</option>
								<option value="40" >40年以内</option>
								<option value="45" >45年以内</option>
								<option value="50" >50年以内</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                	<td colspan="3">
                        <label>
                            <input class="basic_input" title="" type="checkbox" name="newly_built_flag" value="1">&nbsp;新築で絞込む
                        </label>
                    </td>
                </tr>
            </table>
            <div class="room_layout">
                <div>
                    間取
                </div>
                <div>
                    <div class="rl_area">
                        <label><input type="checkbox" title="ワンルーム" name="room_layout_id[]" value="1" />ワンルーム</label><br />
                        <label><input type="checkbox" title="スタジオタイプ" name="room_layout_id[]" value="2" />スタジオタイプ</label><br />
                        <label><input type="checkbox" title="1K" name="room_layout_id[]" value="3" />1K</label>
                        <label><input type="checkbox" title="1DK" name="room_layout_id[]" value="4" />1DK</label>
                        <label><input type="checkbox" title="1LDK" name="room_layout_id[]" value="6" />1LDK</label><br />
                        <label><input type="checkbox" title="2K" name="room_layout_id[]" value="7" />2K</label>
                        <label><input type="checkbox" title="2DK" name="room_layout_id[]" value="8" />2DK</label>
                        <label><input type="checkbox" title="2LDK" name="room_layout_id[]" value="9" />2LDK</label><br />
                        <label><input type="checkbox" title="3K" name="room_layout_id[]" value="10" />3K</label>
                        <label><input type="checkbox" title="3DK" name="room_layout_id[]" value="11" />3DK</label>
                        <label><input type="checkbox" title="3LDK" name="room_layout_id[]" value="12" />3LDK</label><br />
                        <label><input type="checkbox" title="4K" name="room_layout_id[]" value="13" />4K</label>
                        <label><input type="checkbox" title="4DK" name="room_layout_id[]" value="14" />4DK</label>
                        <label><input type="checkbox" title="4LDK" name="room_layout_id[]" value="15" />4LDK</label><br />
                        <label><input type="checkbox" title="5K" name="room_layout_id[]" value="16" />5K</label>
                        <label><input type="checkbox" title="5DK" name="room_layout_id[]" value="17" />5DK</label>
                        <label><input type="checkbox" title="5LDK" name="room_layout_id[]" value="18" />5LDK</label><br />
                        <label><input type="checkbox" title="6LDK~" name="room_layout_id[]" value="19" />6LDK~</label>
                        <label><input type="checkbox" title="メゾネット" name="room_layout_id[]" value="21" />メゾネット</label><br />
                        <label><input type="checkbox" title="テナント" name="room_layout_id[]" value="20" />テナント</label>
                    </div>
                    <label><input class="basic_input" title="" type="checkbox" name="isolated_house" value="1">戸建で絞り込む</label><br />
                    <label><input class="basic_input"title=""  type="checkbox" name="sharehouse_use_flag" value="1">シェアハウスで絞り込む</label>
					<table>
						<tr>
							<td>
								<span style="font-size: 9px;color: #FF0;">★ New</span><br>
								<span class="search_table_m" style="color: #FFF;">所在階</span>
							</td>
							<td>
								<div class="select-wrapper">
									<select name="second_floor_more_flag">
										<option value="-1" selected="selected">すべて表示</option>
										<option value="F" >1Fのみ</option>
										<option value="Y" >2F以上</option>
										<option value="B" >地下階</option>
									</select>
								</div>
							</td>
						</tr>
					</table>
                </div>
            </div>
        </div>
        <div class="parking_flag_box">
        	<div>
            	<label><input type="checkbox"  name="parking_flag" value="1" title="駐車場有り" 　 />駐車場有り</label>
            </div>
        	<div class="empty_parking_flag">
            	<label><input type="checkbox" name="available_parking_flag" value="1" title="駐車場空き有り"   />空き有りで検索</label>
            </div>
        </div>
        <div class="web_flag">
        	web転載可能<br />
            <label><input class="basic_input" title="" name="diversion" type="checkbox" value=1  />webサービスに広告を掲載することが許可されている物件</label>
        </div>

		<div class="web_flag flag_2">
			<label style="border-bottom: solid 1px; padding-bottom: 5px;" ><input name="juridical_model_contract_flag" class="basic_input" title="" style="vertical-align: top;" type="checkbox" value="Y"   /><span style="display: inline-block;">標準契約書（法人版）<br>利用可能</span></label>
				<a href="https://www.jpm.jp/cmphouse/file/leaflet.pdf" target="_blank" style><p style="margin: 10px 0 0 0; font-size: 11px;">標準契約書（法人版）とは？</p></a>
		</div>

        
        <span style="font-size: 9px;color: #FF0;margin: 20px 0 3px 20px;display: block;">★ New 新規追加された項目があります</span>
        <div class="any_search" style="margin: 0px 20px 20px 20px;">
            <span>絞り込み条件 ＋</span>
        </div>
        <div class="reset_button">
        	<span>リセット</span>
        </div>
        <div class="go_search">
            <span>検 索</span>
        </div>
        <div class="on_off_box">
            <label class="s"><input type="checkbox" class="checkbox" name="music"  id="m01" value="1" /><span class="on"></span><span class="off">業務情報を隠す</span><span class="o"></span></label>
        </div>
    </div>
    <!--/form-->
</div></div>

<div class="right_contents">
	<input type="hidden" value="tyukai_content.tpl">
	
<script>
$(function(){
	
	var pref_text = $('.search_pref').text().split("・");
	var set_pref_num = pref_text.length;
	if( set_pref_num > 3 ){
		var p_num = set_pref_num-1;
		$('.search_pref').html(pref_text[0]+'：<span class="any_pref_length">他 '+p_num+'地域</span>');
	}
	
	$('.one_building').each(function(){
		var num = $(this).find('.specify_y').length;
		//$(this).find('.any_tel').html(num)
		if(num == 0){
			//$(this).find('.any_tel').css({'color':'#F00'});
			$(this).find('.any_tel').hide();
		}
	});
	
	if( $(".checkbox").is(':checked') ){
		$("#m01").parent('label').find('.o').css({'left':97});
		$("#m01").parent('label').find('.o').css({'background-color':'#9F5424'});
		$("#m01").parent('.s').css({'background-color':'#AF8566'});
		$("#m01").parent('label').find('.on').show();
		$("#m01").parent('label').find('.off').hide();
		//alert("チェックされています。");
		$('.building_company').hide();
		$('.midashi_r').find('td:nth-child(3)').hide();
		$('.midashi_r').find('td:nth-child(6)').hide();
		$('.midashi_r').find('td:nth-child(11)').hide();
		$('.room_info_tr').find('td:nth-child(3)').hide();
		$('.room_info_tr').find('td:nth-child(6)').hide();
		$('.room_info_tr').find('td:nth-child(11)').hide();
	}
	
	//左右に動くチェックボックス
	$(".checkbox").live('change',function(){
		var id ='#' + $(this).attr('id');
		if ($(this).is(':checked')) {
			//alert(id)
			$(id).parent('label').find('.o').animate({'left':97},200);
			$(id).parent('label').find('.o').css({'background-color':'#9F5424'});
			$(id).parent('.s').css({'background-color':'#AF8566'});
			$(id).parent('label').find('.on').show();
			$(id).parent('label').find('.off').hide();
		 //alert("チェックされています。");
		 	$('.building_company').hide();
			$('.midashi_r').find('td:nth-child(3)').hide();
			$('.midashi_r').find('td:nth-child(6)').hide();
			$('.midashi_r').find('td:nth-child(11)').hide();
			$('.room_info_tr').find('td:nth-child(3)').hide();
			$('.room_info_tr').find('td:nth-child(6)').hide();
			$('.room_info_tr').find('td:nth-child(11)').hide();
			
			detail_infomation_display('Y');
			
		 }
		 else {
			$(id).parent('label').find('.o').animate({'left':3},200);
			$(id).parent('label').find('.o').css({'background-color':'#999'});
			$(id).parent('.s').css({'background-color':'#FFF'});
			$(id).parent('label').find('.on').hide();
			$(id).parent('label').find('.off').show();
		   //alert("チェックされていません。");
		   	$('.building_company').show();
			$('.midashi_r').find('td:nth-child(3)').show();
			$('.midashi_r').find('td:nth-child(6)').show();
			$('.midashi_r').find('td:nth-child(11)').show();
			$('.room_info_tr').find('td:nth-child(3)').show();
			$('.room_info_tr').find('td:nth-child(6)').show();
			$('.room_info_tr').find('td:nth-child(11)').show();
			
			detail_infomation_display('N');
			
		 }
	 });
	 
	 $('.room_info_table').each(function(){
		 var room_cnt = $(this).find('.room_info_tr').length;
		 $(this).parents('.one_building').find('.room_cnt').val(room_cnt);
		 if(room_cnt > 5){
			 var hide_room = room_cnt-5;
			 $(this).find('tr:gt(10)').hide();
			 $(this).find('.building_room_num').text(hide_room)
		 	 $(this).find('.more_five_room').show();
		 }else{
			 $(this).find('.more_five_room').hide();
		 }
	 });
	 
	 
	 //-------
	 var open_mode = $('#open_room').val();
	 if (open_mode == 'all') {
		 $('.hide_five_room').removeClass('room_hide_open_st');
		 $('.all_room_open').addClass('room_hide_open_st');
		 
		 $('.room_info_table').each(function(){
			 var cnt = $(this).parents('.one_building').find('.room_cnt').val();
			 if(cnt > 5 ){
				 $(this).find('.hide_room_text').hide();
				 $(this).find('.hide_room_open').text('５部屋以降をとじる');
				 $(this).find('tr').show();
			 }else{
				 $(this).find('.more_five_room').hide();
			 }
		 });
	 } else {
		 $('.all_room_open').removeClass('room_hide_open_st');
		 $('.hide_five_room').addClass('room_hide_open_st');
		 
		 $('.room_info_table').each(function(){
			 var cnt = $(this).parents('.one_building').find('.room_cnt').val();
			 if(cnt > 5 ){
				 $(this).find('.hide_room_text').show();
				 $(this).find('.hide_room_open').text('表示する');
				 $(this).find('tr:gt(10)').hide();
				 $(this).find('.more_five_room').show();
			 }else{
				 $(this).find('.more_five_room').hide();
			 }
		 });
	 }
	 //--------
	 
	 
	 $('.more_five_room').live('click',function(){
		 var text = $(this).find('.hide_room_open').text();
		 if($(this).find('.hide_room_open').text() == '表示する'){
			 $(this).find('.hide_room_text').hide();
			 $(this).find('.hide_room_open').text('５部屋以降をとじる');
			 $(this).parents('.room_info_table').find('tr').show();
		 }else{
			 $(this).find('.hide_room_text').show();
			 $(this).find('.hide_room_open').text('表示する');
			 $(this).parents('.room_info_table').find('tr:gt(10)').hide();
			 $(this).show();
		 }
	 });
	 
	 
	 //if($('input[name=all_room_open_st]').val() ==""){
	 //	 $('input[name=all_room_open_st]').val('N')
	 //}
	 
	 $('.all_room_open').click(function(){
		 //$('input[name=all_room_open_st]').val('Y');
		 $('.hide_five_room').removeClass('room_hide_open_st');
		 $(this).addClass('room_hide_open_st');
		 
			var url = location.href;
			
			$.post( "tyukai.php", {'open_room':'all'}, function(){
			  //window.location.href = url;
			});
		 
		 $('.room_info_table').each(function(){
			 var cnt = $(this).parents('.one_building').find('.room_cnt').val();
			 if(cnt > 5 ){
				 $(this).find('.hide_room_text').hide();
				 $(this).find('.hide_room_open').text('５部屋以降をとじる');
				 $(this).find('tr').show();
			 }else{
				 $(this).find('.more_five_room').hide();
			 }
		 });
		 
	 });
	 
	 $('.hide_five_room').click(function(){
		 //var st = $('input[name=all_room_open_st]').val('N');
		 $('.all_room_open').removeClass('room_hide_open_st');
		 $(this).addClass('room_hide_open_st');
		 
			var url = location.href;
			   
			$.post( "tyukai.php", {'open_room':'five'}, function(){
			  //window.location.href = url;
			});
		 
		 $('.room_info_table').each(function(){
			 var cnt = $(this).parents('.one_building').find('.room_cnt').val();
			 if(cnt > 5 ){
				 $(this).find('.hide_room_text').show();
				 $(this).find('.hide_room_open').text('表示する');
				 $(this).find('tr:gt(10)').hide();
				 $(this).find('.more_five_room').show();
			 }else{
				 $(this).find('.more_five_room').hide();
			 }
		 });
	 });
	 
	 let targetTag;
	 $('.room_system_menu').live('click',function(e){
	 
	 	var type = $(this).attr('id').split("_");
		var url_param = "";
		if( type[1] == "tenant"){
			url_param = "&type=tenant";
		}
		targetTag = e.target;
		 var text = $(this).attr('title').split(",");
		 var room_mail_id 	= '#mail_'+text[0];
		 $('.building_name_td').text(text[1]);
		 $('.room_name_td').text(text[2]);
		 $('.print_tr_hide').find('.hide_button').attr('href','/common/factsheet.php?id='+ text[0] +'');
		 $('.print_tr_hide').find('.hide_text').attr('href','/common/factsheet.php?id='+ text[0] +'');
		 $('.print_tr_hide').find('.hide_button1').attr('href','/common/factsheet.php?id='+ text[0] +'&org=1');
		 $('.print_tr_hide').find('.hide_text1').attr('href','/common/factsheet.php?id='+ text[0] +'&org=1');
		 $('.print_tr_hide').find('.hide_button2').attr('href','/common/factsheet.php?id='+ text[0] +'&org=2');
		 $('.print_tr_hide').find('.hide_text2').attr('href','/common/factsheet.php?id='+ text[0] +'&org=2');
		 $('.mybox_tr_hide').attr('id', text[0])
		 $('.detail_tr_hide').find('.hide_button').attr('href','room_detail.php?id='+ text[0] + url_param);
		 $('.detail_tr_hide').find('.hide_text').attr('href','room_detail.php?id='+ text[0] + url_param);
		 $('.detail_tr_hide').find('.hide_button').attr('onClick',"go_detail(event,'"+text[0]+"','"+type[1]+"');");
		 $('.detail_tr_hide').find('.hide_text').attr('onClick',"go_detail(event,'"+text[0]+"','"+type[1]+"');");
		 $('.mail_button2').attr('id','mail2_'+ text[0]);
		 if($(room_mail_id).hasClass('checked_send_stock')){
			 $('.mail_button2').text('メールリスト確認');
		 }else{
			 $('.mail_button2').text('メールリスト登録');
		 }
		 $('.hide_room_menu').animate({'right':'0px'});

	 });
	 
	 $('.hide_detail').live('click',function(){
		const now = new Date();
		const year = now.getFullYear();
		const month = now.getMonth() + 1;
		const date = now.getDate();
		const hour = now.getHours();
		const minite = now.getMinutes();

		const nowTime = year + '/' + month + '/' + date + ' ' + hour + ':' + minite;
		console.log(nowTime);

		const parent = $(targetTag).closest('tr');
		$(parent).find('.room_number').css({'color':'#541a8b'});
		const browsing_date = $(parent).find('.browsing_date').html('<span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 17.6 13.4"><path id="パス_236" data-name="パス 236" d="M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z" transform="translate(-3.4 -5.6)" fill="#541a8b"/></svg></span>閲覧済')
			$(browsing_date).css({'color':'#541a8b'});
	});

	 

	 $('.hide_room_menu_close').live('click',function(){
		 $('.hide_room_menu').animate({'right':'-100%'});
	 });
	 
	 
	 
	 //メール添付物件をセッションに追加
	 $('.mail_button').live('click',function(){
		 //$(this).addClass('checked_send_stock');
		 var room_id 	= parseInt($(this).attr('id').replace(/mail_/g,''));
		 //alert(room_id)
		 if($(this).hasClass('checked_send_stock')){
			 session_list()
			 $('.stock_manual').hide();
			 $('.save_search_contents').hide();
			 $('.main_layer').show();
			 $('.mail_send').show();
		 }else{
			 $.post( "/ajax/mod_enduser_detail_site_stock.php", {type:'room',id:room_id}, function(){
				 session_list()
				 $('.stock_manual').hide();
				 $('.save_search_contents').hide();
				 $('.main_layer').show();
				 $('.mail_send').show();
			 });
			 $(this).addClass('checked_send_stock');
		 }
	 });
	 
	 
	 //メール添付物件をセッションに追加
	 $('.mail_button2').live('click',function(){
		 //$(this).addClass('checked_send_stock');
		 var room_id 	= parseInt($(this).attr('id').replace(/mail2_/g,''));
		 var room_mail 	= '#mail_'+parseInt($(this).attr('id').replace(/mail2_/g,''));
		 //alert(room_id)
		 if($(room_mail).hasClass('checked_send_stock')){
			 session_list()
			 $('.stock_manual').hide();
			 $('.save_search_contents').hide();
			 $('.main_layer').show();
			 $('.mail_send').show();
		 }else{
			 $.post( "/ajax/mod_enduser_detail_site_stock.php", {type:'room',id:room_id}, function(){
				 session_list()
				 $('.stock_manual').hide();
				 $('.save_search_contents').hide();
				 $('.main_layer').show();
				 $('.mail_send').show();
			 });
			 $(room_mail).addClass('checked_send_stock');
		 }
	 });
	 
	 //メール添付
	/*
	$('.mail_button,.mail_tr_hide').live('click',function(){
		$('.stock_manual').hide();
		$('.save_search_contents').hide();
		$('.main_layer').show();
		$('.mail_send').show();
	});
	*/
	
	 
	 //セッション内の物件をリスト化
	 function session_list(){
	 //$('.send_room_info').live('click',function(){
		 $.post( "/ajax/mod_enduser_detail_site.php", {'type':'room'}, function(dd){
			 var data = $.parseJSON( dd );
			 //alert(data)
			 var doc = '';
			 var date_i = '';
			 var cnt = data.list.length;
			 doc += '<table class="mail_table">'
			 if(cnt < 10 || cnt != 10){
				 doc += '<tr class="info_'+this.room_id+'">'
				 doc += '<td class="mail_send_top_info" colspan="5">'
				 doc += '<span class=mail_add_new_room><span>+物件を追加する</span></span>'
				 doc += '</td>'
				 doc += '</tr>'
			 }
			 $.each( data.list, function(){
				 date_i++;
				 doc += '<tr class="info_'+this.room_id+'">'
				 doc += '<td class="mail_send_top_info" colspan="4">'
				 //doc += '<label>'
				 doc += '<input type="hidden" class="hash room_checked" id="send_'+this.room_id+'" value="Y">'
				 doc += '<span>'
				 doc += this.building_name+'&nbsp;'+this.room_name;
				 doc += '</span>'
				 doc += '<br>'
				 doc += this.address;
				 //doc += '</label>'
				 doc += '</td>'
				 doc += '<td colspan="2">'
				 doc += '<span class="not_send_now" id="send_'+this.room_id+'after">今は送らない</span>'
				 doc += '<span class="delete_this" id="delete_'+this.room_id+'">削除</span>'
				 doc += '</td>'
				 doc += '<tr>'
				 
				 doc += '<tr class="info_'+this.room_id+'">'
				 doc += '<td  class="mail_send_top_info" colspan="2">'
				 doc += '状態：'+this.status
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info" colspan="2">'
				 doc += '間取：'+this.room_layout
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info" colspan="2">'
				 doc += '面積：'+this.square_meter+'㎡'
				 doc += '</td>'
				 doc += '</tr>'
				 
				 doc += '<tr  class="mail_send_last_info info_'+this.room_id+'">'
				 doc += '<td  class="mail_send_top_info">'
				 doc += '賃料：'
				 if(this.rental_cost.match(/^-?[0-9]+$/)){
					 commaNum = this.rental_cost.toString().replace(/(\d)(?=(\d\d\d)+$)/g , '$1,');
					 doc += commaNum;
					 doc += '円';
				 }else{
				 	 doc += this.rental_cost;
				 }
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info">'
				 doc += '共益・管理費：';
				 if(this.fee_common ==''){
					 doc += '-----';
				 }else{
					 doc += this.fee_common;
				 }
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info">'
				 if(this.deposit == ''){
					 doc += '敷金：-----';
				 }else{
					 doc += '敷金：'+this.deposit;
				 }
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info">'
				 if(this.recompense == ''){
					 doc += '礼金：-----';
				 }else{
					 doc += '礼金：'+this.recompense;
				 }
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info">'
				 if(this.warranty == ''){
					 doc += '保証金：-----';
				 }else{
					 doc += '保証金：'+this.warranty;
				 }
				 doc += '</td>'
				 doc += '<td  class="mail_send_top_info">'
				 if(this.amortization == ''){
					 doc += '敷引・償却：-----';
				 }else{
					 doc += '敷引・償却：'+this.amortization;
				 }
				 doc += '</td>'
				 doc += '</tr>'
			 });
			 
			 doc += '</table>'
			 $('.send_room_stock_list').html(doc);
		});
	 }
	 
	 $('.not_send_now').live('click',function(){
		 var id_name = '#'+$(this).attr('id').replace(/after/g,'');
		 var info_tr = '.info'+$(this).attr('id').replace(/send/g,'').replace(/after/g,'');
		 //alert(info_tr)
		 if($(this).hasClass('check_out')){
			 $(id_name).addClass('room_checked');
			 $(this).removeClass('check_out');
			 $(info_tr).find('.mail_send_top_info').css({'opacity':'1'});
		 }else{
			 $(id_name).removeClass('room_checked');
			 $(this).addClass('check_out');
			 $(info_tr).find('.mail_send_top_info').css({'opacity':'0.3'});
		 }
	 });
	 
	 $('.delete_this').live('click',function(){
		 var room_id 	= parseInt($(this).attr('id').replace(/delete_/g,''));
		 var button_id 	= '#mail_'+room_id;
		 var delete_t 	= '.info_'+room_id;
		 $.post( "/ajax/mod_enduser_detail_site_stock.php", {type:'room',delete_id:room_id}, function(){
			 $(delete_t).remove();
			 $(button_id).removeClass('checked_send_stock');
		 })
	 });
	 
	 $('.add_room_send').click(function(){
		 $('.main_layer').fadeOut();
		 $('.mail_send').hide();
	 });
	 
	 $('.mail_add_new_room').live('click',function(){
		 $('.main_layer').fadeOut();
		 $('.mail_send').hide();
	 });
	 
	 
	 
	 $('.back_send_list').click(function(){
		 $('.send_room_list').fadeOut(300);
		 $('.send_step2').fadeOut(300);
		 $('.mail_text_display').hide();
		 setTimeout(function(){
			 $('.send_room_stock_list').fadeIn(300);
			 $('.send_step1').fadeIn(300);
		 },310);
	 });
	 
	 
	 $('.go_send').click(function(){
		 
		 var id = [];
		 
		 $('.room_checked').each(function(){
			 //alert($(this).attr('id').replace(/send_/g,''))
			 //if($(this).is(':checked')){
			 	id.push($(this).attr('id').replace(/send_/g,''));
			 //}
		 });
		 
		 
		 if(id ==''){
			 alert('物件が選択されていません。')
		 }else{
		 
		 
		 $.post( "/ajax/mod_enduser_detail_site.php", {'type':'room','hash':'Y','room_id':id}, function(dd){
			 var data = $.parseJSON( dd );
			 //alert(data)
			 var check = '';
			 var mail_body = '';
			 var mail_body_web = '';
			 check += '<table>'
			 $.each( data.list, function(){
				 
				 if(this.fee_common ==''){
					 var fee = '-----';
				 }else{
				 	var fee = this.fee_common;
				 }
				 
				 mail_body += '物件名'+this.building_name+'%20%20号室名'+this.room_name+'%0d%0a';
				 mail_body += '住所'+this.address+'%0d%0a';
				 mail_body += '賃料%20(%20共益費・管理費%20)%20'+this.rental_cost.toString().replace(/(\d)(?=(\d\d\d)+$)/g , '$1,')+'円%20(%20'+fee+'%20)%20%20%20間取%20(%20面積%20)%20'+this.room_layout+'%20(%20'+this.square_meter+'㎡%20)%0d%0a';
				 mail_body += 'URL:%20';
				 mail_body += 'https://www.realnetpro.com/r.php?key='+this.hash;
				 mail_body += '%0d%0a%0d%0a';
				 
				 mail_body_web += '物件名'+this.building_name+' 号室名'+this.room_name+'<br>';
				 mail_body_web += '住所'+this.address+'<br>';
				 mail_body_web += '賃料 ( 共益費・管理費 ) '+this.rental_cost.toString().replace(/(\d)(?=(\d\d\d)+$)/g , '$1,')+'円 ( '+fee+' )   間取 ( 面積 ) '+this.room_layout+' ( '+this.square_meter+'㎡ )<br>';
				 mail_body_web += 'URL: ';
				 mail_body_web += 'https://www.realnetpro.com/r.php?key='+this.hash;
				 mail_body_web += '<br><br>';
				 
				 
				 check += '<tr>'
				 check += '<td class="mail_send_top_info" colspan="6">'
				 check += '<label>'
				 //check += '<input type="checkbox" class="hash" id="send_'+this.room_id+'" value="Y">'
				 check += '<span>'
				 check += this.building_name+'&nbsp;'+this.room_name;
				 check += '</span>'
				 check += '<br>'
				 check += this.address;
				 check += '</label>'
				 check += '</td>'
				 check += '<tr>'
				 
				 check += '<tr>'
				 check += '<td colspan="2">'
				 check += '状態：'+this.status
				 check += '</td>'
				 check += '<td colspan="2">'
				 check += '間取：'+this.room_layout
				 check += '</td>'
				 check += '<td colspan="2">'
				 check += '面積：'+this.square_meter+'㎡'
				 check += '</td>'
				 check += '</tr>'
				 
				 check += '<tr class="mail_send_last_info">'
				 check += '<td>'
				 check += '賃料：';
				 if(this.rental_cost.match(/^-?[0-9]+$/)){
					 commaNum = this.rental_cost.toString().replace(/(\d)(?=(\d\d\d)+$)/g , '$1,');
					 check += commaNum;
					 check += '円';
				 }else{
				 	 check += this.rental_cost;
				 }
				 check += '</td>'
				 check += '<td>'
				 check += '共益・管理費：';
				 if(this.fee_common ==''){
					 check += '-----';
				 }else{
					 check += this.fee_common;
				 }
				 check += '</td>'
				 check += '<td>'
				 if(this.deposit == ''||!this.deposit){
					 check += '敷金：-----';
				 }else{
					 check += '敷金：'+this.deposit;
				 }
				 check += '</td>'
				 check += '<td>'
				 if(this.recompense == ''||!this.recompense){
					 check += '礼金：-----';
				 }else{
					 check += '礼金：'+this.recompense;
				 }
				 check += '</td>'
				 check += '<td>'
				 if(this.warranty == ''||!this.warranty){
					 check += '保証金：-----';
				 }else{
					 check += '保証金：'+this.warranty;
				 }
				 check += '</td>'
				 check += '<td>'
				 if(this.amortization == ''||!this.amortization){
					 check += '敷引・償却：-----';
				 }else{
					 check += '敷引・償却：'+this.amortization;
				 }
				 check += '</td>'
				 check += '</tr>'
			 });
			 check += '</table>'
			 $('.send_room_list').html(check);
			 
			 $('.mail_text_display').html(mail_body_web);
			 
			 $('.mail_open').attr('href','mailto:?subject=【物件情報】&body='+ mail_body)
			 
			 $('.send_room_stock_list').fadeOut(300);
			 $('.send_step1').fadeOut(300);
			 setTimeout(function(){
				 $('.send_room_list').fadeIn(300);
				 $('.send_step2').fadeIn(300);
			 },310);
			 
		 });
		 }
		 
	 });
	 //});}
	 
	 
	 $('.mail_text_get').click(function(){
	 	$('.mail_text_display').show();
	 });
	 
	 
	 $('.print_type_select').click(function(e){
		if(!$(e.target).closest('.print_cancel,.one_print_type').length) {
			$('.print_type_box').hide();
			$(this).find('.print_type_box').show();
		}
	})
	
	$('.one_print_type').click(function(){
		$('.print_type_box').hide();
	});
	
	$('.print_cancel').click(function(){
		$('.print_type_box').hide();
	});
	
	
});


function detail_infomation_display(flag){
	$.post('./ajax/detail_infomation_display_flag.php',{'display_flag':flag});
}

</script>
<style>

.building_type {
	border-radius:3px 0 0 3px;
	background-color:#BA5F2B;
	color:#FFF;
	display:inline-block;
	cursor:pointer;
}

.room_type {
	border-radius:0 3px 3px 0;
	background-color:#CCC;
	color:#999;
	display:inline-block;
	cursor:pointer;
	box-shadow:0 0 2px #000 inset;
}

.building_type:hover,
.room_type:hover {
	background-image:url(./img/shadow30.png);
	color:#FFF;
}

.more_five_room td {
	background-image:url(./img/shadow30.png);
	color:#FFF;
	font-size:14px;
	padding:3px 0;
}

.hide_room_text {
}

.hide_room_red {
	color:#C00;
	margin:0 3px;
}

.hide_room_open {
	display:inline-block;
	border:1px solid #FFF;
	padding:2px 10px;
	border-radius:3px;
	cursor:pointer;
}

.room_display_num {
	position:absolute;
	bottom:10px;
	right:200px;
	font-size:14px;
	text-align:center;
}

.all_room_open {
	border-radius:0 3px 3px 0;
	background-color:#CCC;
	padding:2px 10px;
	display:inline-block;
	color:#666;
	cursor:pointer;
}

.all_room_open:hover {
	background-image:url(./img/shadow30.png);
	color:#FFF;
}

.hide_five_room {
	border-radius:3px 0 0 3px;
	background-color:#CCC;
	padding:2px 10px;
	display:inline-block;
	color:#666;
	cursor:pointer;
}

.hide_five_room:hover {
	background-image:url(./img/shadow30.png);
	color:#FFF;
}

.room_hide_open_st {
	background-color:#BA5F2B !important;
	color:#FFF !important;
}


.print,
.mail_button,
.add_mybox_button,
.go_detail {
	padding:0 5px !important;
	position:relative;
}


.print img,
.mail_button img,
.add_mybox_button img,
.go_detail img {
	height:25px;
	width:auto;
}

.maybox_checked {
	background-color:#BA5F2B !important;
}

.hover_comment {
	position:absolute;
	bottom:90%;
	left:50%;
	margin-left:-47.5px;
	width:95px;
	display:inline-block;
	padding:6px;
	background-color:#FFF;
	color:#333 !important;
	border-radius:3px;
	border:1px solid #666;
	box-shadow:0 0 2px #666;
	display:none;
	z-index:10;
}

.main_contents {
	min-width:830px !important;
}

.hide_room_menu {
	position:absolute;
	top:50%;
	background-image:url(./img/white90.png);
	/*background-color:#FFF;*/
	padding:20px;
	border:1px solid #333;
	right:-100%;
	z-index:20;
	height:300px;
	margin-top:-130px;
	border-radius:5px 0 0 5px;
	box-shadow:0 0 8px #333;
	min-width:300px;
}

.hide_room_menu table {
	border-collapse:collapse;
}

.hide_room_menu_close {
	position:absolute;
	bottom:10px;
	left:20px;
	cursor:pointer;
}

.hide_room_menu th {
	padding:3px 0;
	width:40px;
	text-align:center;
}


.hide_room_menu td {
	padding:3px 0;
}

.hide_room_menu a,
.hide_room_menu span {
	color:#333;
}

.hide_room_menu .hover_comment {
	display:inline-block;
	position:static;
	margin-left:0;
	width:auto;
	display: inline-block;
	padding:0;
	background-color:transparent;
	color: #333 !important;
	border-radius:0;
	border:none;
	box-shadow: 0 0 0 #000;
	z-index: 10;
}

.room_system_menu {
	display:inline-block;
	border:1px solid #333;
	padding:3px 6px;
	border-radius:5px;
	cursor:pointer;
}

.room_system_menu:hover {
	background-color:#333;
	color:#FFF;
}

.hide_button1 img,
.hide_button2 img,
.hide_button img {
	height:25px;
}

.print_tr_hide:hover {
	background-color:#CCC;
}

.mail_tr_hide:hover {
	background-color:#CCC;
}

.mybox_tr_hide:hover {
	background-color:#CCC;
}

.detail_tr_hide:hover {
	background-color:#CCC;
}



.search_menu_open_layer {
	background-image:url(./img/orange90.png);
	position:absolute;
	bottom:40px;
	width:100%;
	z-index:3;
	display:none;
}

.search_menu_open_button2 {
	background-color:#FFF;
	margin:10px auto;
	width:200px;
	text-align:center;
	border-radius:5px;
	cursor:pointer;
}

.search_menu_open_button2 .text_span {
	display:table-cell;
	height:40px;
	vertical-align:middle;
	width:200px;
}

.dispaly_on_text {
	color:#BA5F2B;
}

.dispaly_off_text {
	color:#039;
}

.search_menu_open_button2 img {
	height:30px;
	width:auto;
}

.text_right {
	/*text-align:right !important;*/
	padding:0 4px;
}

.text_right span {
	display:inline-block;
	text-align:right;
}


/*メール添付*/
.mail_room_info table {
	font-size:12px;
}

.main_layer_contents {
	max-width:900px !important;
}

.go_send {
	font-size:12px;
	cursor:pointer;
	border-radius:15px;
}

.go_send span {
}

.add_room_send {
	background-color:#666;
	width:180px;
	font-size:12px;
	cursor:pointer;
	border-radius:15px;
	
	display:none;
}

.mail_open {
	background-color:#666;
	width:180px;
	font-size:12px;
	cursor:pointer;
	border-radius:15px;
	display:block;
}

.back_send_list {
	background-color:#666;
	width:180px;
	font-size:12px;
	cursor:pointer;
	border-radius:15px;
}

.send_room_list {
	display:none;
}

.add_room_send span,
.mail_open span,
.back_send_list span {
	display:table-cell;
	width:180px;
	height:30px;
	vertical-align:middle;
	text-align:center;
	color:#FFF;
}

.checked_send_stock {
	background-color:#BA5F2B !important;
}

.mail_send_menu {
	margin:15px auto 0 auto;
}

.send_step2 {
	display:none;
}

.mail_send_top_info {
	padding:7px 0 0 0;
}

.mail_send_top_info span {
	color:#BA5F2B;
}

.mail_send_last_info td {
	padding:0 0 7px 0;
}

.delete_this {
	background-color:#666;
	color:#FFF;
	display:inline-block;
	padding:3px 10px;
	border-radius:4px;
	cursor:pointer;
}

.not_send_now {
	/*background-color:#666;
	color:#FFF;*/
	margin:0 10px 0 0;
	border:1px solid #CCC;
	color:#999;
	display:inline-block;
	padding:3px 10px;
	border-radius:4px;
	cursor:pointer;
}

.check_out {
	background-color:#666;
	color:#FFF;
	background-color:#BA5F2B;
	border-color:#BA5F2B;
}

.alert {
	font-size:10px;
}


.one_building {
	margin:0 0 18px 0 !important;
}

.mail_add_new_room {
	border:1px solid #333;
	display:inline-block;
	border-radius:14px;
	cursor:pointer;
	box-shadow:0 0 3px #666;
}

.mail_add_new_room span {
	display:table-cell;
	height:24px;
	padding:0 15px;
	vertical-align:middle;
	color:#333;
}

/*メール本文取得*/
.mailer_err {
	margin: 10px 0 0 0;
	font-size: 11px;
	color: #AB3739;
}

.mail_text_get {
	width:180px;
	font-size:12px;
	cursor:pointer;
	border-radius:4px;
	display:block;
	margin: 10px auto 0 auto;
	border: 1px solid #AB3739;
}

.mail_text_get span {
    display: table-cell;
    width: 180px;
    height: 24px;
    vertical-align: middle;
    text-align: center;
    color: #AB3739;
}

.mail_text_display {
	display: none;
	font-size: 13px;
	background-color: #FFF;
	padding: 10px;
	border-radius: 3px;
}

/*出力タイプ選択*/
.print_type_select {
	display: inline-block;
	font-size: 8px;
	cursor: pointer;
	position: relative;
}

.print_type_box {
	display: none;
	background-color: #FFF;
	z-index: 5;
	padding: 5px;
	border-radius: 5px; 
	position: absolute;
	top: 100%;
	left: 0;
	width: 200px;
	font-size: 12px;
	text-align:left;
	box-shadow: 0 0 2px #666;
}

.print_cancel {
	text-align: right;
	cursor: pointer;
	font-size: 10px;
}

.one_print_type {
	display: block;
}

.one_print_type:hover {
	background-color: #EEE;
	border-radius: 3px;
	color: #DB7838;
}

.web_application_list {
	background-color: #006934;
	padding: 0 5px;
}

.icon-wrapper {
    border-radius: 5px;
    width: 35px;
    margin: auto;
    height: 35px;
    position: relative;
}
.icon-text {
	color: #fff;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
	color: #fff;
}
.furniture {
	background-color: #d70050;
}
.appliances {
	background-color: #21b8c5;
}
.both {
	background: linear-gradient(135deg, #d70050 0%, #d70050 50%, #21b8c5 50%, #21b8c5 100%);
}

.room_number {
	color: #0000ee;
}

</style>

<div class="hide_room_menu">
	<table>
    	<tr>
        	<td colspan="2">
            	物件名：<span class="building_name_td"></span>
            </td>
        </tr>
        <tr>
        	<td colspan="2">
            	号室名：<span class="room_name_td"></span>
            </td>
        </tr>
    	<!--tr class="print_tr_hide">
        	<th>
            	<a href="#" class="hide_button"><img src="./img/print_icon.png" /></a>
            </th>
            <td>
            	<a class="hide_text" href="#" target="_blank">印刷する</a>
            </td>
        </tr-->
		<tr class="print_tr_hide">
        	<th>
            	<a href="#" class="hide_button1"><img src="./img/print_icon.png" /></a>
            </th>
            <td>
            	<a class="hide_text1" href="#" target="_blank">客付け＋元付け資料</a>
            </td>
        </tr>
		<tr class="print_tr_hide">
        	<th>
            	<a href="#" class="hide_button2"><img src="./img/print_icon.png" /></a>
            </th>
            <td>
            	<a class="hide_text2" href="#" target="_blank">元付け資料</a>
            </td>
        </tr>
		<tr class="print_tr_hide">
        	<th>
            	<a href="#" class="hide_button"><img src="./img/print_icon.png" /></a>
            </th>
            <td>
            	<a class="hide_text" href="#" target="_blank">客付け資料</a>
            </td>
        </tr>
        <tr class="mail_tr_hide">
        	<th>
            	<span class="hide_button"><img src="./img/mail_icon.png" /></span>
            </th>
            <td>
            	<span class="mail_button2">メール添付</span>
            </td>
        </tr>
        <tr class="mybox_tr_hide">
        	<th>
            	<span class="hide_button " id="" ><img src="./img/mybox_add_icon.png" /></span>
            </th>
            <td>
            	<span class="hover_comment">mybox追加</span><input type="hidden" name="mybox_mode" value="insert" />
            </td>
        </tr>
        <tr class="detail_tr_hide">
        	<th>
            	<a class="hide_button hide_detail" href="#" target="_blank"><img src="./img/detail_icon.png" /></a>
            </th>
            <td>
			<a class="hide_text hide_detail" href="#" target="_blank">詳細</a>
            </td>
        </tr>
    </table>
    <div class="hide_room_menu_close">
    	×とじる
    </div>
</div>

<div class="search_menu_open_layer">
	<div class="search_menu_open_button2">
    	<span class="text_span">検索条件を<span class="dispaly_on_text">表示</span></span>
    </div>
</div>
<div class="under">
    <div class="main_table">
        <div class="seach_info_change">
            <span class="search_pref">
																					京都																					</span>　1 棟 1 戸　<!--表示戸数0戸--><br />
            <span class="sort_change">
            	並べ替え
                <span class="sort_list_box">
                	                        <span class="sort_list">
                         
                            <span class="sort_name"><a href="javascript:void(0)">更新日時</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=upd&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">旧→新</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=upd&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">新→旧（デフォルト）</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">所在地</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=addr&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">昇順</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=addr&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">降順</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">物件名</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=bld&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">ア→ワ</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=bld&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">ワ→ア</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">賃料（管理費込）</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=rent&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">低→高</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=rent&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">高→低</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">賃料（管理費なし）</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=rent2&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">低→高</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=rent2&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">高→低</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">敷金</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=depo&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">低→高</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=depo&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">高→低</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">礼金</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=rec&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">低→高</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=rec&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">高→低</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">専有面積</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=squ&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">狭→広</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=squ&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">広→狭</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">間取タイプ</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=lyt&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">狭→広</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=lyt&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">広→狭</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">築年数</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=str&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">旧→新</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=str&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">新→旧</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">共益費・管理費</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=fee&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">低→高</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=fee&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">高→低</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">A D</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=ad&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">低→高</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=ad&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">高→低</span></a>
                                                                </span>
                            </span>
                         
                            <span class="sort_name"><a href="javascript:void(0)">管理会社</a>
                                <span class="sort_detail_box">
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=com&amp;odr=asc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">ア→ワ</span></a>
                                                                    <a href="main.php?method=estate&amp;display=building&amp;key=com&amp;odr=desc&amp;page=0" onClick="a_hack(event,this);"><span class="sort_detail">ワ→ア</span></a>
                                                                </span>
                            </span>
                                                </span>
                                    </span>
            </span>
            <span class="room_result_change">
            	表示棟数
                <span class="room_result_box">
                    <span class="room_result">
                        <a href='./main.php?method=estate&display=building' onClick="a_hack(event,this);">10棟</a>
                        <a href='./main.php?method=estate&display=building&cnt=15' onClick="a_hack(event,this);">15棟</a>
                        <a href='./main.php?method=estate&display=building&cnt=20' onClick="a_hack(event,this);">20棟</a>
                        <a href='./main.php?method=estate&display=building&cnt=50' onClick="a_hack(event,this);">50棟</a>
                    </span>
                </span>
            </span>
            
            <div class="room_display_num">
            	<div class="list_display_type">
                	<span>１棟内の初期表示数</span>
                    <input type="hidden" id="open_room" value="all" />
                </div>
            	<!--input type="hidden" name="all_room_open_st" value="" /-->
                <span class="hide_five_room" title="five">５部屋まで表示</span><span class="all_room_open" title="all">全部屋を表示</span>
            </div>
            
            <div class="list_display_type_box">
            	<div class="list_display_type">
                	<span>物件の表示方法</span>
                </div>
                <span class="building_type"><span>建物ごと</span></span><a class="room_type" onClick="a_hack(event,this);" href="main.php?method=estate&display=room"><span>部屋ごと</span></a>
            </div>
            
            <!--a class="list_type" href="main.php?method=estate&display=room">部屋ごとにリスト表示</a-->
            <!--div class="excel">
                <img src="./img/excel.png" /><br />
                表示中の物件を出力
            </div-->
        </div>
        <div class="main_contents">
        	            <!--1棟-->
            <div class="one_building">
                <div class="building_tr">
                    <table>
                        <tr>
                            <td>
                                <img class="building_photo" src="https://file.realnetpro.com/photo/0015944/building/large/b0000424594149374295101.jpg" />
                            </td>
                            <td class="building_info">
                                <div class="building_name">
                                   プラティーク <input type="hidden" class="room_cnt" value="" />
                                </div>
                                <div>
                                    住所：舞鶴市字円満寺<br />
                                    沿線：舞鶴線「西舞鶴」徒歩9分 
                                </div>
                                <!--div>
                                    お問合せ先：サンプル不動産 ◯◯◯◯◯◯店
                                </div-->
                            </td>
                            <td class="building_company">
                                お問合せ先<br />
                                大東建託パートナーズ株式会社 福知山営業所<br />
                                Tel :0773-23-6807 <span class="any_tel">(問合せ先が異なる部屋があります)</span>
                            </td>
                            <td class="building_data">
                                <a href="/common/building_sheet.php?id=424594">
                                    <img class="building_data_dl" src="./img/dl_icon.png" />
                                </a>
                            </td>
							                        </tr>
                    </table>
                </div>
                <div class="room_tr">
                    <table class="room_info_table">
                        <tr class="midashi_r">
                            <td>
                                部屋名<br />
                                更新日
                            </td>
							<td>
															</td>
                            <td>
                                問合せ<br>
                                指定
                            </td>
                            <td>
                                図面
                            </td>
                            <td>
                                状態
                            </td>
                            <td>
                                入居可能日<br />
                                内覧可能日
                            </td>
                            <td>
                                間取
                            </td>
                            <td>
                                賃料<br />
                                管理費・共益費
                            </td>
                            <td>
                                敷金<br />
                                礼金
                            </td>
                            <td>
                                保証金<br />
                                償却・敷引
                            </td>
                            <td>
                                AD
                            </td>
                            <!--td>
                                備考
                            </td-->
                            <td>
                                印刷用PDF
                            </td>
                            <td>
                                メール添付
                            </td>
                            <td>
                                mybox
                            </td>
                            <td>
								機能<!--br />
                                選択-->
                            </td>
                            <td>
                            	詳細
                            </td>
                        </tr>
                                                <tr class="room_info_tr">
							<td class="history_bg">                                
							                                <a onClick="go_detail(event,'2669386','room')" href="" target="_blank" class="room_number">201</a><br />
                                                                <span>13時間前</span>
								<br>
								<!--閲覧履歴-->
								<div>
									<span class="browsing_date" id="browsing_2669386"></span>
								</div>
                            </td>
							<td>
								<!--家具付の判定-->
																								
								<!--家電付の判定-->
																								
															</td>
                            <td class="specify_td">
                            	                                	<span class="specify"><span class="specify_n">無</span></span>
                                                            </td>
                            <td>
                                <img class="room_layout_image" src="https://file.realnetpro.com/photo/0015944/layout/room/l00026693861678751595.jpg" />
								                            </td>
                            <td class="st_td">
                            	                            	                                                                    <span class="st type2">退去予定</span>
                                                                
                                                                                                								                                <!--span class="st type1">空室</span><br />
                                <span class="st type2">退去予定</span><br />
                                <span class="st type3">清掃中</span><br />
                                <span class="st type4">内装中</span><br />
                                <span class="st type5">審査中</span><br />
                                <span class="st type6">商談中</span>
                                <span class="st type7">新築</span>
                                <span class="st type8">建築中</span-->
                            </td>
                            <td>
                                2023年04月中旬<br />
								------                            </td>
                            <td>
                                1K<br />
                                26.5㎡
                            </td>
                            <td class="text_right">
                                <span>47,000円<br />
                        		2,500円</span>
                            </td>
                            <td class="text_right">
                                <span>1ヶ月<br />
                        		なし</span>
                            </td>
                            <td class="text_right">
                                <span>なし<br />
                        		なし</span>
                            </td>
                            <td class="text_right">
                                <span>----<br />
								</span>
                            </td>
                            <!--td>
                                <span class="all_display_on">備考</span>
                            </td-->
                                                        <td>
                                <a href="/common/factsheet.php?id=2669386&org=1" class="print"><span class="hover_comment">印刷用PDF</span><img src="./img/print_icon.png" /></a><br>
								<div class="print_type_select">
									▼出力タイプ
									<div class="print_type_box">
										<a href="/common/factsheet.php?id=2669386&org=1" class="one_print_type">
											客付け＋元付け物件資料(2枚)
										</a>
										<a href="/common/factsheet.php?id=2669386&org=2" class="one_print_type">
											元付け物件資料(1枚)
										</a>
										<a href="/common/factsheet.php?id=2669386" class="one_print_type">
											客付け物件資料(1枚)
										</a>
										<div class="print_cancel">
											キャンセル
										</div>
									</div>
								</div>
                            </td>
                            <td>
                                <span class="mail_button " id="mail_2669386"><span class="hover_comment">メール添付</span><img src="./img/mail_icon.png" /></span>
                            </td>
                            <td>
                                <span class="add_mybox_button " id="2669386" ><img src="./img/mybox_add_icon.png" /><span class="hover_comment">mybox追加</span><input type="hidden" name="mybox_mode" value="insert" /></span>
                            </td>
                            <td>
								<span id="type_room" class="room_system_menu" title="2669386,プラティーク,201">機能</span>
                                <!--br />
                                <input type="checkbox" /-->
                            </td>
                            <td>
								<a class="go_detail" onClick="go_detail(event,'2669386','room')" href="" target="_blank"><span class="hover_comment">詳細</span><img src="./img/detail_icon.png" /></a>
                            </td>
                                                    </tr>
                                                <tr class="room_info_detail">
                            <td colspan="15">
                                <div class="all_display">
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                </div>
                            </td>
                        </tr>
                                                <tr class="more_five_room">
                        	<td colspan="15">
                            	<span class="hide_room_text">この建物にはあと<span class="hide_room_red"><span class="building_room_num"></span>部屋</span>登録があります</span>　<span class="hide_room_open">表示する</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <!--1棟ここまで-->
                        <!--1棟--
            <div class="one_building">
                <div class="building_tr">
                    <table>
                        <tr>
                            <td>
                                <img class="building_photo" src="./img/sample_building.jpg" />
                            </td>
                            <td class="building_info">
                                <div class="building_name">
                                    サンプルマンション THE GATE MITA
                                </div>
                                <div>
                                    住所：東京都港区芝5丁目13-14サンプルサンプル<br />
                                    沿線：サンプル線「サンプルサンプル」徒歩８分
                                </div>
                                <!--div>
                                    お問合せ先：サンプル不動産 ◯◯◯◯◯◯店
                                </div--
                            </td>
                            <td class="building_company">
                                お問合せ先<br />
                                サンプル不動産 ◯◯◯◯◯◯店<br />
                                Tel : 000-0000-0000 (問合せ先が異なる部屋があります)
                            </td>
                            <td class="building_data">
                                <img class="building_data_dl" src="./img/dl_icon.png" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="room_tr">
                    <table class="room_info_table">
                        <tr class="midashi_r">
                            <td>
                                部屋名
                            </td>
                            <td>
                                問合せ<br>
                                指定
                            </td>
                            <td>
                                図面
                            </td>
                            <td>
                                状態
                            </td>
                            <td>
                                入居可能日<br />
                                内覧可能日
                            </td>
                            <td>
                                間取
                            </td>
                            <td>
                                賃料<br />
                                管理費・共益費
                            </td>
                            <td>
                                敷金<br />
                                礼金
                            </td>
                            <td>
                                保証金<br />
                                償却・敷引
                            </td>
                            <td>
                                広告料
                            </td>
                            <!--td>
                                備考
                            </td--
                            <td>
                                印刷
                            </td>
                            <td>
                                メール添付
                            </td>
                            <td>
                                mybox
                            </td>
                            <td>
                                詳細<!--br />
                                選択--
                            </td>
                        </tr>
                        <tr class="room_info_tr">
                            <td>
                                <span class="room_number">201</span>
                            </td>
                            <td>
                               <span class="specify"><span class="specify_y">有</span></span>
                            </td>
                            <td>
                                <img class="room_layout_image" src="./img/DS204.jpg" />
                            </td>
                            <td class="st_td">
                                <!--span class="st type1">空室</span><br />
                                <span class="st type2">退去予定</span><br />
                                <span class="st type3">清掃中</span><br />
                                <span class="st type4">内装中</span><br />
                                <span class="st type5">審査中</span><br /--
                                <span class="st type6">商談中</span>
                                <span class="st type7">新築</span>
                                <span class="st type8">建築中</span>
                            </td>
                            <td>
                                2016/10/10<br />
                                2016/10/10
                            </td>
                            <td>
                                2DK
                            </td>
                            <td>
                                100,000円<br />
                                10,000円
                            </td>
                            <td>
                                １ヶ月<br />
                                １ヶ月
                            </td>
                            <td>
                                なし<br />
                                なし
                            </td>
                            <td>
                                １ヶ月
                            </td>
                            <!--td>
                                <span class="all_display_on">備考</span>
                            </td--
                            <td>
                                <span class="print">印刷</span>
                            </td>
                            <td>
                                <span class="mail_button">メール添付</span>
                            </td>
                            <td>
                                <span class="add_mybox_button">mybox</span>
                            </td>
                            <td>
                                <a class="go_detail" href="room_detail.php" target="_blank">詳細</a><!--br />
                                <input type="checkbox" /--
                            </td>
                        </tr>
                        <tr class="room_info_detail">
                            <td colspan="14">
                                <div class="all_display">
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                    aaaaaaaaaaaaaaaaaaaaaa<br />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <!--1棟ここまで-->
            <div class="width_space">
            </div>
        </div>
        
        
        
    </div>
    
    <div class="pager_box">
        <table>
        	            <tr>
                <td class="pager_disable">
                    最初
                </td>
                <td class="pager_disable">
                    前
                </td>
                                                        <td class="pager_current">
                        1
                    </td>
                                                    <td class="pager_disable">
                    次
                </td>
                <td class="pager_disable">
                    最後
                </td>
            </tr>
                    </table>
    </div>
    
    			
<script>

$(function(){
	
	$('.one_frist_test').click(function(){
		var frist_text = $(this).text();
		var top = $('input[value='+frist_text+']').parent('.name_sort_m').offset().top-80;
		var sc = $('.search_list_contents_box').scrollTop();
		$('.search_list_contents_box').scrollTop(top+sc);
	});
	
	$('.any_search,.click_menu').click(function(){
		var cheked = $('#search_list').find('input:checked').length;
		//alert(cheked)
		if(cheked =='0'){
			$('.go_search_detail_area').hide();
		}else{
			$('.go_search_detail_area').show();
		}
	});
	
	$('.type_menu').click(function(){
		$('.go_search_detail_area').hide();
	});
	
	
	$('.pref_select_button').click(function(){
		$('.slm').text('都道府県を設定');
		$('.slm').css({'background-color':'#C60'});
		$('.city_list').hide();
		$('.town_list').hide();
		$('.pref_list').show();
	});
	
	$('.city_select_button').click(function(){
		$('.slm').text('市区郡を設定');
		$('.slm').css({'background-color':'#693'});
		$('.pref_list').hide();
		$('.town_list').hide();
		$('.city_list').show();
	});
	
	$('.town_select_button').click(function(){
		$('.slm').text('町を設定');
		$('.slm').css({'background-color':'#39C'});
		$('.pref_list').hide();
		$('.city_list').hide();
		$('.town_list').show();
	});
	
	
	$('.pref_list').find('input').change(function(){
		$('.pref_check_now').find('.check_now_con').empty();
		$('.pref_list').find('input:checked').each(function(){
			$('.pref_check_now').find('.check_now_con').prepend('<span class="plc">'+ $(this).parent('label').text() +'</span>');
		});
		var pref = $('.pref_check_now').find('.plc').length;
		if(pref !== 0 && pref > 0 ){
			$('.city_select_button').css({'background-image':'none'});
		}else{
			$('.city_select_button').css({'background-image':'url(./img/white70.png)'});
		}
	});
	
	$('.city_list').find('input').change(function(){
		$('.city_check_now').find('.check_now_con').empty();
		$('.city_list').find('input:checked').each(function(){
			$('.city_check_now').find('.check_now_con').prepend('<span class="clc">'+ $(this).parent('label').text() +'</span>');
		});
		var city = $('.city_check_now').find('.clc').length;
		if(city == 1){
			$('.town_select_button').css({'background-image':'none'});
		}else{
			$('.town_select_button').css({'background-image':'url(./img/white70.png)'});
		}
	});
	
	
	
	function check_list_show(){
		$('.check_input_now').find('.cin_con').empty();
		$('.saerch_contents_block').find('input:checked').each(function(){
			var name = $(this).parent('label').text();
			var class_name =  $(this).parent('label').attr("class");
			//alert(class_name)
			
			if(class_name == 'one_pref'){
				$('.cin1').find('.cin_con').prepend('<span class="check_this">'+ name +'×</span>');
			}else if(class_name == 'one_city'){
				$('.cin2').find('.cin_con').prepend('<span class="check_this">'+ name +'×</span>');
			}else if(class_name == 'one_pref'){
				$('.cin3').find('.cin_con').prepend('<span class="check_this">'+ name +'×</span>');
			}else{
				$('.cin4').find('.cin_con').prepend('<span class="check_this">'+ name +'×</span>');
			}
			
			//$('.check_input_now').prepend('<span class="check_this">'+ name +'×</span>');
		});
		
		var num = $('.cin2').find('.check_this').length;
			if(num > 1){
				$('.town_area2').hide();
				$('.err_town').show();
				$('.err_type2').hide();
				$('.err_type1').show();
			}else if(num == 0){	
				$('.town_area2').hide();
				$('.err_town').show();
				$('.err_type1').hide();
				$('.err_type2').show();
			}else{
				$('.err_town').hide();
				$('.town_area2').show();
			}
		}
	
	
	$('.saerch_contents_block').find('input').change(function(){
		check_list_show();
		
	});
	
	
	
	$('.check_this').live('click',function(){
		var click_text = $(this).text();
		var text = click_text.replace(/×/g,'');
		//alert(text)
		$('.saerch_contents_block').find('label:contains('+ text +')').find('input').prop("checked",false);
		$('.saerch_contents_block').find('label:contains('+ text +')').css({'background-color':'#FFF','color':'#333'});
		check_list_show();
	});
	
	$('.detail_select_table').find('td').click(function(){
		var this_text = $(this).find('span').text();
		if(this_text =='市区郡'){
			$('.pref_list2').hide();
			$('.town_list2').hide();
			$('.any_search_list2').hide();
			$('.city_list2').show();
		}else if(this_text =='町字'){
			$('.pref_list2').hide();
			$('.city_list2').hide();
			$('.any_search_list2').hide();
			$('.town_list2').show();
			var num = $('.cin2').find('.check_this').length;
			if(num > 1){
				$('.town_area2').hide();
				$('.err_town').show();
				$('.err_type2').hide();
				$('.err_type1').show();
			}else if(num == 0){	
				$('.town_area2').hide();
				$('.err_town').show();
				$('.err_type1').hide();
				$('.err_type2').show();
			}else{
				$('.err_town').hide();
				$('.town_area2').show();
			}
		}else if(this_text =='都道府県'){
			$('.any_search_list2').hide();
			$('.town_list2').hide();
			$('.city_list2').hide();
			$('.pref_list2').show();
		}else{
			$('.town_list2').hide();
			$('.pref_list2').hide();
			$('.city_list2').hide();
			$('.any_search_list2').show();
		}
	});
	
	/*
 	setInterval(shadow, 1400);
	
	function shadow(){
		$('.go_submit2').css({'box-shadow':'0 0 10px #036'});
		setTimeout(function(){
		$('.go_submit2').css({'box-shadow':'0 0 8px #036'});
		},300);
		setTimeout(function(){
		$('.go_submit2').css({'box-shadow':'0 0 6px #036'});
		},600);
		setTimeout(function(){
		$('.go_submit2').css({'box-shadow':'0 0 4px #036'});
		},900);
		setTimeout(function(){
		$('.go_submit2').css({'box-shadow':'0 0 6px #036'});
		},1200);
		setTimeout(function(){
		$('.go_submit2').css({'box-shadow':'0 0 8px #036'});
		},1500);
	}
	*/
	$('.one_slide_search_box,.any_search').click(function(){
		$('.step1_check_box').find('.step_check_con').empty();
		$('.step2_check_box').find('.step_check_con').empty();
		$('.step3_check_box').find('.step_check_con').empty();
		$('.step4_check_box').find('.step_check_con').empty();
		$('.step5_check_box').find('.step_check_con').empty();
		$('.step6_check_box').find('.step_check_con').empty();
		$('.step7_check_box').find('.step_check_con').empty();
		
		
		$('.one_pref').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step1_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		
		$('.city_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step2_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		
		
		$('.town_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step3_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		var selected_city = $('.step2_check_box').find('.selected').text();
		$('.town_box_m').html('<span>'+ selected_city +'</span>');
		
		
		$('.along_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step4_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		$('.station_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step5_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		$('.company_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step6_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		$('.stc').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).text() +'</span>');
			}
		});
		
		$('.rebuild').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).text() +'</span>');
			}
		});
		
		
		$('.eq_select').find('.eq_detail').each(function(){
			if($(this).find('input').is(':checked')) {
				if($(this).find('.eq_detail_button').length == 1){
					var text = $(this).find('.eq_detail_button').text();
					if(text == '-----' ){
						$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() +'</span>');
					}else{
						$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() + text +'</span>');
					}
				}else{
					$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() +'</span>');
				}
			}
		});
		
		
		$('.selected').after('<span class="dot">・</span>');
		$('.step_check_con').find('.dot:last-child').remove();
	});
	
	$('.one_search_list_content').find('input').live('change',function(){
		add_log();
	});
	
	$('.name_all_check,.name_all_clear').live('click',function(){
		add_log();
	});
		
		
	function add_log(){	
		$('.step1_check_box').find('.step_check_con').empty();
		$('.step2_check_box').find('.step_check_con').empty();
		$('.step3_check_box').find('.step_check_con').empty();
		$('.step4_check_box').find('.step_check_con').empty();
		$('.step5_check_box').find('.step_check_con').empty();
		$('.step6_check_box').find('.step_check_con').empty();
		$('.step7_check_box').find('.step_check_con').empty();
		
		
		$('.one_pref').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step1_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		
		$('.city_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step2_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		
		
		$('.town_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step3_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		var selected_city = $('.step2_check_box').find('.selected').text();
		$('.town_box_m').html('<span>'+ selected_city +'</span>');
		
		
		$('.along_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step4_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		$('.station_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step5_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		$('.company_select').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step6_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('input').attr('title') +'</span>');
			}
		});
		
		$('.stc').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).text() +'</span>');
			}
		});
		
		$('.rebuild').find('label').each(function(){
			if($(this).find('input').is(':checked')) {
				$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).text() +'</span>');
			}
		});
		
		
		$('.eq_select').find('.eq_detail').each(function(){
			if($(this).find('input').is(':checked')) {
				if($(this).find('.eq_detail_button').length == 1){
					var text = $(this).find('.eq_detail_button').text();
					if(text == '-----' ){
						$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() +'</span>');
					}else{
						$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() + text +'</span>');
					}
				}else{
					$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() +'</span>');
				}
			}
		});
		
		
		$('.selected').after('<span class="dot">・</span>');
		$('.step_check_con').find('.dot:last-child').remove();
		
		
	};
	
	
	
	$('.eq_select').find('.one_eq_detail').live('click',function(){
		$('.step7_check_box').find('.step_check_con').empty();
		setTimeout(function(){
		$('.eq_select').find('.eq_detail').each(function(){
			if($(this).find('input').is(':checked')) {
				if($(this).find('.eq_detail_button').length == 1){
					var text = $(this).find('.eq_detail_button').text();
					if(text == '-----' ){
						$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() +'</span>');
					}else{
						$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() + text +'</span>');
					}
				}else{
					$('.step7_check_box').find('.step_check_con').prepend('<span class="selected">'+ $(this).find('label').text() +'</span>');
				}
			}
		});
		$('.step7_check_box').find('.selected').after('<span class="dot">・</span>');
		$('.step7_check_box').find('.step_check_con').find('.dot:last-child').remove();
		},100);
	});
	
	
	
	$('.eq_detail_box').each(function(){
		var check_eq = $(this).find('.one_eq_detail').length;
		if(check_eq == 0){
			$(this).parents('.eq_detail').find('.eq_detail_button').remove();
			$(this).parents('.eq_detail').find('.eq_detail_input').remove();
			$(this).remove();
		}else{
			$(this).parents('.eq_detail').find('label').css({'border-radius':'5px 0 0 5px','margin':'5px 0 5px 5px'});
		}
	});
	
	$('.eq_detail').find('input').live('change',function(){
		if($(this).is(':checked')){
		$(this).parents('.eq_detail').find('.eq_detail_button').addClass('check_on');
		$(this).parents('.eq_detail').find('.eq_detail_box').show();
		
		}else{
			$(this).parents('.eq_detail').find('.eq_detail_button').removeClass('check_on');
			$(this).parents('.eq_detail').find('.eq_detail_box').hide();
			
			//チェックが外れたら詳細も初期に
			$(this).parents('.eq_detail').find('.eq_detail_button').text('-----');
			$(this).parents('.eq_detail').find('.eq_detail_input').val('');
			
			val_eqd = new Array();
			val_eqdb = new Array();
			$.each( $(".eq_detail_input"), function(){
				var type = $(this).attr('id').split("_");
				if(type[0] == 'rm'){
					if( $( this ).val() > 0 ){
						val_eqd.push( type[1] + ":" + $( this ).val() );
					}
				}else{
					if( $( this ).val() > 0 ){
						val_eqdb.push( type[1] + ":" + $( this ).val() );
					}
				}
			
			});
			$("input[name=eqd]").val( val_eqd.join(",") );
			$("input[name=eqdb]").val( val_eqdb.join(",") );
		}
	});
	
	$('.one_eq_detail').live('click',function(){
		var detail_text = $(this).text().replace( /・/, "" );
		//var id = $(this).attr('id').replace( /detail_id_/, "" );
		var id = $(this).attr('id').split("_");
		$(this).parents('.eq_detail').find('.eq_detail_button').text(detail_text);
		$(this).parents('.eq_detail').find('.eq_detail_input').val(id[3]);
		
		
		val_eqd = new Array();
		val_eqdb = new Array();
		$.each( $(".eq_detail_input"), function(){
			var type = $(this).attr('id').split("_");
			if(type[0] == 'rm'){
				if( $( this ).val() > 0 ){
					val_eqd.push( type[1] + ":" + $( this ).val() );
				}
			}else{
				if( $( this ).val() > 0 ){
					val_eqdb.push( type[1] + ":" + $( this ).val() );
				}
			}
		
		});
		$("input[name=eqd]").val( val_eqd.join(",") );
		$("input[name=eqdb]").val( val_eqdb.join(",") );
		
	});
	
	$('.eq_detail_defo').live('click',function(){
		$(this).parents('.eq_detail').find('.eq_detail_button').text('-----');
		$(this).parents('.eq_detail').find('.eq_detail_input').val('');
		
		
		val_eqd = new Array();
		val_eqdb = new Array();
		$.each( $(".eq_detail_input"), function(){
			var type = $(this).attr('id').split("_");
			if(type[0] == 'rm'){
				if( $( this ).val() > 0 ){
					val_eqd.push( type[1] + ":" + $( this ).val() );
				}
			}else{
				if( $( this ).val() > 0 ){
					val_eqdb.push( type[1] + ":" + $( this ).val() );
				}
			}
		
		});
		$("input[name=eqd]").val( val_eqd.join(",") );
		$("input[name=eqdb]").val( val_eqdb.join(",") );
		
	});
	
	$('.search-station-btn').click(function(){
		var stationNameValue 	= $('.seach_station_name input').val();
		var prefInput 			= $('.one_pref').find('input');
		var addWrapper 			= document.querySelector('div.step4 .step4_con');
		var prefArray 			= [];
		var step4 				= document.querySelector('.step4');
		var errArray 			= step4.querySelectorAll('#err-msg');
		var countArray 			= step4.querySelectorAll('#count-msg');
		var onePref 			= document.querySelectorAll('div.step4 .one_pref_city');
		var countMsg 			= document.createElement('p');
			countMsg.id 		= 'count-msg';
		var removeErr 			= document.getElementById('err-msg');
		var removeCount 		= document.getElementById('count-msg');
		var errMsg 				= document.createElement('p');
			errMsg.id 			= 'err-msg';
			errMsg.textContent 	= '※ご入力いただいた駅名は設定中の都道府県には存在しません。駅名、設定中の都道府県をお確かめください。';
			errMsg.style.color 	= 'red';
			errMsg.style.fontSize = '11px';
			errMsg.style.margin = '6px 0';

		$.each(prefInput,function(index,name){
			if(name.checked == true){
				prefInput = $(name).val();
				prefArray.push(prefInput);
			}
			
		});
		
		$.post('/ajax/get_city_along_code.php',{'type':'station-along','pref_code':prefArray,'station_name':stationNameValue},function(dt){
			$('.one_line').css({'display':'none'});
				if( dt && dt != 'false'){
					var data = $.parseJSON(dt);
					var styleArray = [];

					data.forEach(function(elem,index){
						var targetInput = $('div.step4 input[value="'+ elem.route_id +'"]')[0];
						var targetItem = $(targetInput).closest('label')[0];
						
						$(targetItem).css({'display':'inline-block'});
					});

					for(let i =0; i<onePref.length; i++){
						var label = onePref[i].getElementsByTagName('label');

						for ( let i =0 ; i<label.length; i++){
							var cssStyle = getComputedStyle(label[i],null);
							var styleContent = cssStyle.getPropertyValue('display');

							if(styleContent == 'inline-block'){
								styleArray.push(styleContent);
								
							}
						}
					}

					countMsg.innerHTML = 'ヒットした沿線<span class="count-number">' + styleArray.length + '</span>件';

					if(removeErr != null){
						removeErr.remove();
					}

					if(countArray.length >= 1 && removeCount != null){
						$(removeCount).remove();
						$(addWrapper).before(countMsg);

					}else{
						$(addWrapper).before(countMsg);
					}

				}else {

					if(errArray.length < 1){
						$(addWrapper).before(errMsg);
					}

					if(removeCount != null){
						$(removeCount).remove();
				}
			}
		});
	});

	
	//印刷ホバー
	//if($('.eq_detail').find('.eq_detail_button').hasClass('check_on')){
		$('.eq_detail').hover(detail_show,detail_hide);
	//}
	
	function detail_show(){
		if($(this).find('.eq_detail_button').hasClass('check_on')){
		$(this).find('.eq_detail_box').show();
		}
	}
	
	function detail_hide(){
		$(this).find('.eq_detail_box').hide();
	}
	
	//////////////////////////////////////////
	
	
	var eqd_check = $('input[name=eqd]').val().split(",");
	var eqdb_check = $('input[name=eqdb]').val().split(",");
	
	if(eqd_check !=''){
		$.each( eqd_check, function(i){
			var eq_info = eqd_check[i].split(":");
			$('input[value='+ eq_info[0] +']').parents('.eq_detail').find('.eq_detail_button').addClass('check_on');
			var check_text = $('#rm_detail_id_'+ eq_info[1] ).text().replace( /・/, "" );
			$('input[value='+ eq_info[0] +']').parents('.eq_detail').find('.eq_detail_button').text(check_text);
			$('input[value='+ eq_info[0] +']').parents('.eq_detail').find('.eq_detail_input').val(eq_info[1]);
			$('.check_r_'+eq_info[0]).append('・<span class="rm_detail" id="detail_'+ eq_info[0] +'">'+ check_text +'×</span>');
		});
	}
	
	
	if(eqdb_check !=''){
		$.each( eqdb_check, function(i){
			var eq_info2 = eqdb_check[i].split(":");
			$('input[value='+ eq_info2[0] +']').parents('.eq_detail').find('.eq_detail_button').addClass('check_on');
			var check_text2 = $('#bld_detail_id_'+ eq_info2[1] ).text().replace( /・/, "" );
			$('input[value='+ eq_info2[0] +']').parents('.eq_detail').find('.eq_detail_button').text(check_text2);
			$('input[value='+ eq_info2[0] +']').parents('.eq_detail').find('.eq_detail_input').val(eq_info2[1]);
			$('.check_b_'+eq_info2[0]).append('・<span class="bid_detail" id="detail_'+ eq_info2[0] +'">'+ check_text2 +'×</span>');
		});
		
	}
	
	
	$('.rm_detail').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var ID = '#rm_' + $(this).attr('id').replace( /detail_/, "" );
		room_detail_eq(ID);
	});
	
	$('.bid_detail').live('click',function(){
		$(this).css({'background-color':'transparent','border-color':'#999','color':'#999'});
		var ID = '#bid_' + $(this).attr('id').replace( /detail_/, "" );
		building_detail_eq(ID);
	});
	
	function room_detail_eq(ID){
		//var ID = '#rm_' + $(this).attr('id').replace( /detail_/, "" );
		//$(ID).parents('.eq_detail').find('.eq_detail_button').removeClass('check_on');
		$(ID).parents('.eq_detail').find('.eq_detail_button').text('-----');
		$(ID).val('');
		val_eqd = new Array();
		val_eqdb = new Array();
		$.each( $(".eq_detail_input"), function(){
			var type = $(this).attr('id').split("_");
			if(type[0] == 'rm'){
				if( $( this ).val() > 0 ){
					alert(type[1] + ":" + $( this ).val())
					val_eqd.push( type[1] + ":" + $( this ).val() );
				}
			}else{
				if( $( this ).val() > 0 ){
					val_eqdb.push( type[1] + ":" + $( this ).val() );
				}
			}
		
		});
		$("input[name=eqd]").val( val_eqd.join(",") );
		$("input[name=eqdb]").val( val_eqdb.join(",") );
	}
	
	
	function building_detail_eq(ID){
		//$(ID).parents('.eq_detail').find('.eq_detail_button').removeClass('check_on');
		$(ID).parents('.eq_detail').find('.eq_detail_button').text('-----');
		$(ID).val('');
		val_eqd = new Array();
		val_eqdb = new Array();
		$.each( $(".eq_detail_input"), function(){
			var type = $(this).attr('id').split("_");
			if(type[0] == 'rm'){
				if( $( this ).val() > 0 ){
					val_eqd.push( type[1] + ":" + $( this ).val() );
				}
			}else{
				if( $( this ).val() > 0 ){
					val_eqdb.push( type[1] + ":" + $( this ).val() );
				}
			}
		
		});
		$("input[name=eqd]").val( val_eqd.join(",") );
		$("input[name=eqdb]").val( val_eqdb.join(",") );
	}
	
	$('div.step4 input[type="text"]').click(function(){
		$(this).attr('placeholder','');
		});

	$('div.step4 input[type="text"]').blur(function(){
		$(this).attr('placeholder','例）新宿');
	});

	$('div.step4 .step_item_reset').click(function(){
		eachItem($('.one_line'));
	});

	$('.crear-btn').click(function(){
		eachItem($('.one_line'));
		
		$('input[type="text"]').attr('value','');
	});

	function eachItem(elem){
		$.each(elem,function(index,name){
			var check = $(name).find('input')[0];
			var removeErr = document.getElementById('err-msg');
			var removeCount = document.getElementById('count-msg');

			if(removeCount != null){
				$(removeCount).remove();
			}

			if(removeErr != null){
				$(removeErr).remove();
				$(removeErr).remove();
			}

			$(name).css({'display':'inline-block'});
		});
	}

});

</script>
<style>

/*詳細条件*/
#search_list {
	width:100%;
	/*background-image:url(/img/white90.png);*/
	/*background-color:#FFF;*/
	background-image:url(/img/shadow80.png);
	height:100%;
	display:none;
	position:absolute;
	bottom:0;
	box-shadow:0 0 2px #333 inset;
	z-index:100;
	font-size:13px;
}

.overflow_ie8 {
	height:100%;
	padding:20px 20px 20px 20px;
	overflow:auto;
}

.any_search_list {
}

.eq {
	/*background-image:url(./img/shadow30.png);*/
	margin:30px 0;
	padding:20px;
	position:relative;
	background-color:#FFF;
	border-radius:5px/5px;
	box-shadow:0 0 2px #666;
}

.eq label {
	margin:5px;
	display:inline-block;
	border:1px solid #333;
	border-radius:5px/5px;
	padding:3px 5px;
	position:relative;
}

.eq span {
	/*background-color:#FFF;*/
	position:relative;
	z-index:5;
}

.eq input,
.one_pref input,
.along_list input,
.company_select input,
.one_town input,
.one_line input,
.one_station input,
.one_city input {
	position:absolute;
	outline:none;
	z-index:-1;
	opacity:0;
	filter: alpha(opacity=0);        /* ie lt 8 */
	-ms-filter: "alpha(opacity=0)";  /* ie 8 */
	zoom:1;
}

.eq_name {
	color:#BA5F2B;
	font-size:16px;
	margin:0 0 10px 0;
}

.trans_list {
	display:none;
}

.one_line {
	display:inline-block;
	/*width:80px;*/
	margin:8px 5px;
	border:1px solid #333;
	border-radius:5px/5px;
	padding:3px 5px;
	position:relative;
	background-color:#FFF;
}

.one_pref_trans {
	background-color:#FFF;
	border-radius:5px/5px;
	padding:20px;
	box-shadow:0 0 2px #666;
}

.along_list label {
	margin:6px 10px;
	display:inline-block;
	border:1px solid #333;
	border-radius:5px/5px;
	padding:3px 5px;
	position:relative;
	background-color:#FFF;
	width:250px;
}

.one_block {
	background-color:#FFF;
	border-radius:5px/5px;
	padding:20px;
	box-shadow:0 0 2px #666;
	margin:20px 0;
}

.company_list {
	background-color:#FFF;
	border-radius:5px/5px;
	padding:20px;
	box-shadow:0 0 2px #666;
	margin:20px 0;
}

.company_select label {
	margin:5px;
	display:inline-block;
	border:1px solid #CCC;
	border-radius:5px/5px;
	padding:8px 10px;
	position:relative;
	background-color:#FFF;
}

.name_sort_m {
	margin:10px 0 7px;
	border-bottom:1px solid #BA5F2B;
	padding:5px;
	color:#BA5F2B;
	font-weight:600;
	font-size:16px;
}


.close {
	margin:20px;
	border:1px solid #333;
	border-radius:5px;
	display:inline-block;
	text-align:center;
	background-image:url(/img/shadow60.png);
	color:#FFF;
	cursor:pointer;
}

.close span {
	display:table-cell;
	height:28px;
	width:180px;
	vertical-align:middle;
}

.close2 {
	margin:20px 20px 80px 20px;
	border:1px solid #333;
	border-radius:5px;
	display:inline-block;
	text-align:center;
	background-image:url(/img/shadow60.png);
	color:#FFF;
	cursor:pointer;
}

.close2 span {
	display:table-cell;
	height:28px;
	width:180px;
	vertical-align:middle;
}

.pref_box {
	width:190px;
	padding:10px;
	background-color:#FFF;
	color:#333;
	text-align:center;
	margin:20px 0;
	border-radius:5px/5px;
	box-shadow:0 0 2px #666;
}

.one_pref {
	display:inline-block;
	width:80px;
	margin:8px 2px;
	border:1px solid #333;
	border-radius:5px/5px;
	padding:3px 5px;
	position:relative;
}

.building_data_dl {
	height:68px;
	width:auto;
}

.pref_serect_area {
	float:left;
}

.city_select_area {
	margin:0 0 0 220px;
}

.one_pref_city {
	background-color:#FFF;
	padding:0 !important;
	box-shadow:0 0 2px #666;
	border-radius:5px/5px;
	margin:0 0 20px 0;
	overflow:auto;
}

.city_select_m {
	font-size:16px;
	border-radius:5px 5px 0 0;
	background-color:#666;
	color:#FFF;
	padding:2px 15px;
}

.town_search {
	margin:15px;
}

.town_button {
	display:inline-block;
	background-color:#999;
	color:#FFF;
	padding:3px 10px;
	border-radius:5px/5px;
}

.town_button span {
	font-size:10px;
}

.one_city {
	display:inline-block;
	/*width:80px;*/
	margin:8px 5px;
	border:1px solid #333;
	border-radius:5px/5px;
	padding:3px 5px;
	position:relative;
	background-color:#FFF;
}

.pref_city_unchecked {
	margin:0 0 0 40px;
	font-size:12px;
}

/**/
.town_box {
	display:none;
	border:2px solid #BA5F2B;
	border-radius:5px/5px;
	padding:20px;
}

.one_town {
	display:inline-block;
	/*width:80px;*/
	margin:8px 5px;
	border:1px solid #333;
	border-radius:5px/5px;
	padding:3px 5px;
	position:relative;
	background-color:#FFF;
	font-size:11px;
}

.one_line {
	margin:5px;
	display:inline-block;
	border:1px solid #CCC;
	border-radius:5px/5px;
	padding:8px 10px;
	position:relative;
	background-color:#FFF;
}

.station_box {
	display:none;
	border:2px solid #BA5F2B;
	border-radius:5px/5px;
	padding:20px;
}

.one_station {
	display:inline-block;
	/*width:80px;*/
	margin:8px 5px;
	border:1px solid #CCC;
	border-radius:5px/5px;
	padding:8px 10px;
	position:relative;
	background-color:#FFF;
	font-size:13px;
}


/**/



/*検索中項目確認*/


.search_check_m {
	background-color:#666;
	color:#FFF;
	padding:3px 10px;
	margin:30px 0 10px 0;
}

.eq_box {
	display:inline-block;
	margin:0 6px;
	padding:0 6px;
	border-radius:5px;
	background-color:#CCC;
}

.ary_check,
.rm_detail,
.bid_detail {
	border:2px solid #BA5F2B;
	background-color:#BA5F2B;
	color:#FFF;
	cursor:pointer;
	display:inline-block;
	border-radius:5px;
	margin:6px 0;
	padding:4px 10px;
}

.layout_check_area .ary_check {
	border:2px solid #BA5F2B;
	background-color:#BA5F2B;
	color:#FFF;
	cursor:pointer;
	display:inline-block;
	border-radius:5px;
	margin:6px;
	padding:4px 10px;
}

.basic_check,
.select,
.rebld,
.free_search_text {
	border:2px solid #BA5F2B;
	background-color:#BA5F2B;
	color:#FFF;
	cursor:pointer;
	display:inline-block;
	border-radius:5px;
	margin:6px;
	padding:4px 10px;
}


/*詳細条件ここまで*/


.go_search_detail_area {
	position:absolute;
	background-image:url(./img/shadow60.png);
	bottom:0;
	width:100%;
	display:none;
}

.go_search_detail_area_box {
	text-align:center;
	margin:10px 0;
}

.more_area_select {
	height:50px;
	width:200px;
	margin:0 10px 0 0;
	border-radius:5px;
	display:none;
	background-color:#FFF;
	color:#BA5F2B;
	cursor:pointer;
	box-shadow:0 0 3px #000;
}

.go_search_detail {
	display:inline-block;
	height:50px;
	width:200px;
	background-color:#BA5F2B;
	color:#FFF;
	border-radius:5px;
	cursor:pointer;
	box-shadow:0 0 3px #000;
}

.go_search_span,
.go_search_span {
	display:table-cell;
	width:200px;
	height:50px;
	vertical-align:middle;
}

.go_search_span span {
	font-size:18px;
}


/* -------------2/21-------------- */

.overflow_ie8 {
	height:100%;
	padding:40px 40px 40px 40px;
	overflow:auto;
}

.close,
.close2 {
	display:none;
}

.one_search_list_content {
	height:100%;
	width:100%;
	position:relative;
}

.one_search_list_content label:hover {
	/*background-color:#BA5F2B !important;*/
	border-color:#BA5F2B !important;
	/*color:#BA5F2B !important;*/
	box-shadow:0 0 3px #BA5F2B;
	cursor:pointer;
}

.search_list_contents_box {
	margin:0 220px 0 0;
	height:100%;
	background-color:#FFF;
	overflow:auto;
	padding:20px;
	position: relative;
}

.search_list_contents_box label {
	border-color:#CCC !important;
	letter-spacing:1px;
}

.search_list_menu {
	position:absolute;
	right:0px;
	top:0;
	width:200px;
	height:100%;
	/*background-color:#FFF;*/
}

.pref_select .pref_box {
	height:300px;
	margin:20px;
	float:left;
}



.step2_check_box {
	margin:20px 0;
}

.step_check_m {
	color:#FFF;
	border-bottom:1px solid #FFF;
	display:block;
	padding:0 0 3px 0;
	position:relative;
	font-size:16px;
}

.step1_check_box .step_check_m,
.step4_check_box .step_check_m {
	border-bottom:1px solid #690;
}

.step2_check_box .step_check_m,
.step5_check_box .step_check_m {
	border-bottom:1px solid #399;
}

.step3_check_box .step_check_m {
	border-bottom:1px solid #BA5F2B;
}

.step1_check_box .change_span:hover,
.step4_check_box .change_span:hover {
	color:#690;
}

.step2_check_box .change_span:hover,
.step5_check_box .change_span:hover {
	color:#399;
}

.step3_check_box .change_span:hover {
	color:#BA5F2B;
}

/*
.selected {
	display:block;
}

.dot {
	display:none;
}
*/

.change_span {
	position:absolute;
	right:5px;
	bottom:3px;
	font-size:12px;
	cursor:pointer !important;
}

.change_span:hover {
	color:#BA5F2B;
}

.step_check_con {
	/*height:120px;
	border:1px solid #FFF;*/
	color:#FFF;
	border-radius:5px 5px 0 0;
	padding:8px;
	overflow:auto;
}

.step_change_button {
	border:1px solid #FFF;
	color:#FFF;
	cursor:pointer;
	text-align:center;
	border-radius:0 0 5px 5px;
}

.step_change_button span {
	display:table-cell;
	width:200px;
	height:30px;
	vertical-align:middle;
}

.step_change_button:hover {
	background-color:#FFF;
	color:#666;
}



.next_go_button_box {
	position:absolute;
	bottom:20px;
	width:100%;
}


.prev_step_button,
.prev_step_button2,
.prev_step_button3{
	border:1px solid #FFF;
	color:#FFF;
	width:180px;
	margin:0 auto 20px auto;
	font-size:18px;
	cursor:pointer;
	border-radius:20px 6px 6px 20px/50% 6px 6px 50%;
	background-image:url(./img/prev_back.png);
	background-repeat:no-repeat;
	background-position:5% 0;
}

.prev_step_button:hover,
.prev_step_button2:hover,
.prev_step_button3:hover {
	box-shadow:0 0 10px #FFF;
}

.prev_step_button span,
.prev_step_button2 span,
.prev_step_button3 span {
	display:table-cell;
	width:180px;
	height:60px;
	text-align:center;
	vertical-align:middle;
}

.prev_step_button,
.prev_step_button3 {
	background-color:#690;
}
.prev_step_button2 {
	background-color:#399;
}



.next_step_button,
.next_step_button2,
.next_step_button3 {
	border:1px solid #FFF;
	color:#FFF;
	width:180px;
	margin:0 auto 20px auto;
	font-size:18px;
	cursor:pointer;
	border-radius:6px 20px 20px 6px/6px 50% 50% 6px;
	background-image:url(./img/next_back.png);
	background-repeat:no-repeat;
	background-position:95% 0;
}

.next_step_button:hover,
.next_step_button2:hover,
.next_step_button3:hover {
	box-shadow:0 0 10px #FFF;
}

.next_step_button span,
.next_step_button2 span,
.next_step_button3 span {
	display:table-cell;
	width:180px;
	height:60px;
	text-align:center;
	vertical-align:middle;
}

.next_step_button {
	background-color:#399;
}
.next_step_button2, 
.next_step_button3{
	background-color:#999;
}

.station_search_Y {
	background-color:#399;
}

.town_search_Y {
	background-color:#BA5F2B;
}



.go_search_submit {
	background-color:#036;
	border:1px solid #FFF;
	color:#FFF;
	width:180px;
	margin:0 auto;
	font-size:30px;
	cursor:pointer;
	border-radius:6px;
}

.go_search_submit:hover {
	box-shadow:0 0 10px #FFF;
}

.go_search_submit span {
	display:table-cell;
	width:180px;
	height:100px;
	text-align:center;
	vertical-align:middle;
}

.this_window_close {
	border:1px solid #FFF;
	background-color:#FFF;
	width:180px;
	margin:20px auto 0px auto;
	color:#333;
	border-radius:5px;
	cursor:pointer !important;
}

.this_window_close:hover {
	background-color:#CCC;
	box-shadow:0 0 10px #FFF;
}

.this_window_close span {
	display:table-cell;
	height:30px;
	width:180px;
	vertical-align:middle;
	text-align:center;
}

.one_pref,
.one_city,
.one_town {
	font-size:13px;
	padding:8px 10px;
}


.color1 {
	color:#690;
}

.color2 {
	color:#399;
}

.color3 {
	color:#BA5F2B;
}

.step1_m{
	border-bottom:2px solid #690;
	margin:0 0 10px 0;
	color:#690;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.step2_m {
	border-bottom:2px solid #399;
	margin:0 0 10px 0;
	color:#399;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.step3_m {
	border-bottom:2px solid #BA5F2B;
	margin:0 0 10px 0;
	color:#BA5F2B;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.step4_m {
	border-bottom:2px solid #690;
	margin:0 0 10px 0;
	color:#690;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.step5_m {
	border-bottom:2px solid #399;
	margin:0 0 10px 0;
	color:#399;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.step6_m {
	border-bottom:2px solid #BA5F2B;
	margin:0 0 10px 0;
	color:#BA5F2B;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.step7_m {
	border-bottom:2px solid #BA5F2B;
	margin:0 0 10px 0;
	color:#BA5F2B;
	font-size:16px;
	font-weight:600;
	padding:0 0 4px 0;
	position:relative;
}

.town_list_box {
	border-radius:5px/5px;
	box-shadow:0 0 2px #666;
}

.town_box_m {
	background-color:#666;
	color:#FFF;
	padding:2px 15px;
	font-size:16px;
	border-radius:5px 5px 0 0;
}

.town_list_box_content {
	padding:20px;
}

.step1_m_text,
.step4_m_text {
	color:#690;
	font-weight:500;
	font-size:16px;
	cursor:pointer;
}

.step2_m_text {
	color:#399;
	font-weight:500;
	font-size:16px;
	cursor:pointer;
}

.yajirushi {
	color:#666;
	font-weight:500;
}

.this_select_page_title1 {
	background-color:#690;
	color:#FFF;
	padding:3px 10px;
	display:inline-block;
	border-radius:5px;
}

.this_select_page_title2 {
	background-color:#399;
	color:#FFF;
	padding:3px 10px;
	display:inline-block;
	border-radius:5px;
}

.this_select_page_title3 {
	background-color:#BA5F2B;
	color:#FFF;
	padding:3px 10px;
	display:inline-block;
	border-radius:5px;
}

.eq_detail {
	display:inline-block;
	position:relative;
}

.eq_detail_box {
	position:absolute;
	background-color:#666 !important;
	color:#FFF;
	left:100%;
	top:0;
	background-color:#FFF;
	z-index:10;
	padding:15px;
	border:1px solid #666;
	width:150px;
	box-shadow:0 0 2px #000;
	border-radius:5px;
	display:none;
}

.one_eq_detail,
.eq_detail_defo {
	cursor:pointer;
	padding:1px 2px;
	border-radius:3px;
}

.one_eq_detail:hover,
.eq_detail_defo:hover {
	background-color:#FFF;
	color:#666;
}

.this_detail_title {
	position:absolute !important;
	top:3px;
	left:-16px;
	font-size:20px;
	color:#666;
}

.eq_detail_button {
	display:inline-block;
	padding:3px;
	border:1px solid #CCC;
	background-color:#CCC;
	color:#FFF;
	border-radius:0 5px 5px 0;
	letter-spacing:1px;
}

.check_on {
	background-color:#BA5F2B !important;
	border-color:#BA5F2B !important;
}

#search_list label {
	/*border:1px solid #CCC;*/
}

.one_along_station_box {
	box-shadow: 0 0 2px #666;
	border-radius: 5px/5px;
	margin: 0 0 20px 0;
	padding:15px;
}

.reset_area {
	text-align:right;
	margin:0 0 10px 0;
}

.step_item_reset {
	/*position:absolute;
	right:5px;
	bottom:5px;*/
	display:inline-block;
	border:1px solid #333;
	color:#333;
	border-radius:5px;
	padding:3px 6px;
	cursor:pointer;
}

.step_item_reset:hover {
	background-color:#333;
	color:#FFF;
}

.close_search_detail {
	position:absolute;
	right:5px;
	bottom:15px;
	color:#666;
	border:1px solid #666;
	padding:1px 5px;
	border-radius:5px;
	cursor:pointer;
}

.close_search_detail:hover {
	background-color:#666;
	color:#FFF;
}

/* ---------2/21ここまで---------- */


.check_list_m {
	position:relative;
}

.check_list_close {
	position:absolute;
	right:50px;
	cursor:pointer;
	border:1px solid #333;
	padding:3px 6px;
	border-radius:5px;
}

.check_list_close2 {
	cursor:pointer;
	border:1px solid #333;
	padding:3px 6px;
	border-radius:5px;
	display:inline-block;
}

.check_list_close:hover,
.check_list_close2:hover {
	background-color:#333;
	color:#FFF;
}


.step6 {
	margin: 40px 0 0 0;
}

.company_jamp_box {
	position: absolute;
	height: 36px;
	background-color: #666;
	z-index: 3;
	margin-top: 0px;
	margin-left: 0px;
	border-radius: 0 0 8px 0;
}

.company_jamp_box table {
	height: 30px;
	margin: 3px 20px;
	border-collapse: collapse;
}

.company_jamp_box td {
	padding: 0 2px;
}

.one_frist_test {
	background-color: #DDD;
	display: inline-block;
	font-size: 13px;
	padding: 1px 5px;
	border-radius: 3px;
	cursor: pointer;
}

.one_frist_test:hover {
	background-color: #333;
	color: #FFF;
}

.display_station_name {
	height: 100%;
	background-color: #ccc;
}
.container {
	display: flex;
}
.search-station-btn{
	background-color: #fff;
	border-radius: 5px;
	border: solid 1px #ff5057;
	padding: 3px 20px;
	color: #ff5057;
	cursor: pointer;
}
.search-station-btn:hover {
	background-color: #ff5057;
	color: #fff;
	transition: ease-in-out .1s;
}
div.step4 input[type="text"]{
	border-radius: 5px;
	border: solid 1px #ccc;
	padding: 3px 5px;
}
div.step4 .reset_area {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.crear-btn {
	margin-left: 10px;
	background-color: #fff;
	border: solid 1px #333;
	border-radius: 5px;
	padding: 3px 10px;
	cursor: pointer;
}
.crear-btn:hover {
	background-color: #333;
	color: #fff;
	transition: ease-in-out .1s;
}
.search-station-title {
	margin: 0;
	text-align: left;
	position: relative;
	padding: 3px 10px;
}
.search-station-title::before {
	position: absolute;
    top: 16%;
    left: 0px;
    width: 6px;
    height: 60%;
    content: '';
    border-radius: 2px;
    background: #669900;
}

.new_eq {
	position: absolute!important;
	top: -11px;
	left: 0px;
	font-size: 8pt;
	color: #d92a2a;
	background-color: #FFF;
	border-radius: 5px;
	pointer-events: none;
	box-shadow: 0 0 2px #000;
}

#count-msg {
	font-size: 14px;
    font-weight: bold;
    border-bottom: 2px solid orange;
    display: inline-block;
    margin: 5px 0 15px 0;
}
.count-number {
	color: orange;
    font-size: 20px;
    margin: 0px 5px;
}

@media screen and ( max-height: 720px ){
	
.check_and_change {
	display:none;
}
	
}

</style>

<div id="search_list">
    <div class="overflow_ie8">
    	<div class="close">
            <span>× 条件を確定して戻る</span>
        </div>
        
        <!--2/21-->
        <div class="one_search_list_content">
		
			<div class="company_jamp_box">
				<table>
					<tr>
						<td><span class="one_frist_test">ア</span></td>
						<td><span class="one_frist_test">カ</span></td>
						<td><span class="one_frist_test">サ</span></td>
						<td><span class="one_frist_test">タ</span></td>
						<td><span class="one_frist_test">ナ</span></td>
						<td><span class="one_frist_test">ハ</span></td>
						<td><span class="one_frist_test">マ</span></td>
						<td><span class="one_frist_test">ヤ</span></td>
						<td><span class="one_frist_test">ラ</span></td>
						<td><span class="one_frist_test">ワ</span></td>
					</tr>
				</table>
			</div>
			
        	<div class="search_list_contents_box">
				
				
            	<input type="hidden" id="this_select_type" value="" />
                <!--都道府県-->
            	<div class="step1 pref_select detail_select_box">
                    <div class="step1_m">
                    	<span class="this_select_page_title1">都道府県の設定</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
                    <div class="reset_area">
                    	<span class="step_item_reset">都道府県リセット</span>
                    </div>
                    <div class="step1_con">
                    </div>
                </div>
                
                <!--市区郡-->
                <div class="step2 city_select detail_select_box">
                	<div class="step2_m">
                    	<span class="step1_m_text">都道府県の設定</span>&nbsp;&nbsp;<span class="yajirushi">>></span>&nbsp;&nbsp;<span class="this_select_page_title2">市区郡の設定</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
                    <div class="reset_area">
                    	<span class="step_item_reset">市区郡リセット</span>
                    </div>
                    <div class="step2_con">
                    </div>
                </div>
                
                <!--町字-->
                <div class="step3 town_select detail_select_box">
                	<div class="step3_m">
                    	<span class="step1_m_text">都道府県の設定</span>&nbsp;&nbsp;<span class="yajirushi">>></span>&nbsp;&nbsp;<span class="step2_m_text">市区郡の設定</span>&nbsp;&nbsp;<span class="yajirushi">>></span>&nbsp;&nbsp;<span class="this_select_page_title3">町字の設定</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
                    <div class="reset_area">
                    	<span class="step_item_reset">町字リセット</span>
                    </div>
                    <div class="step3_con">
                    </div>
                </div>
                
                <!--沿線-->
                <div class="step4 along_select detail_select_box">
                	<div class="step4_m">
                    	<span class="this_select_page_title1">沿線の設定</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
                    <div class="reset_area">
						<div class="seach_station_name">
							<p class="search-station-title">駅名から絞り込み</p>
							<input type="text" placeholder="例）新宿">&nbsp;&nbsp;<button class="search-station-btn" type="button">絞り込み</button><button type="button" class="crear-btn">クリア</button>
						</div>
						<span class="step_item_reset">沿線リセット</span>
                    </div>
                    <div class="step4_con">
                    </div>
                </div>
                
                <!--駅-->
                <div class="step5 station_select detail_select_box">
                	<div class="step5_m">
                    	<span class="step4_m_text">沿線の設定</span>&nbsp;&nbsp;<span class="yajirushi">>></span>&nbsp;&nbsp;<span class="this_select_page_title2">駅の設定</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
                    <div class="reset_area">
                    	<span class="step_item_reset">駅リセット</span>
                    </div>
                    <div class="step5_con">
                    </div>
                </div>
                
                <!--管理会社-->
                <div class="step6 company_select detail_select_box">
                	<div class="step6_m">
                    	<span class="step6_m_text">管理会社の設定</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
					<div>
						<span style="font-size: 11px;">※「altキー」を押しながらクリックすると絞り込み結果に「含む/含めない」の設定が出来ます</span>
					</div>
                    <div class="reset_area">
                    	<span class="step_item_reset">管理会社リセット</span>
                    </div>
                    <div class="step6_con">
                    </div>
                </div>
                
                
                <!--その他・設備-->
                <div class="step7 eq_select detail_select_box">
                	<div class="step7_m">
                    	<span class="step7_m_text">設備・条件</span>
                        <span class="close_search_detail">×とじる</span>
                    </div>
                    <div class="reset_area">
                    	<span class="step_item_reset">設備・条件リセット</span>
                    </div>
                    <div class="step7_con">
                    	<div class="eq">
                            <div class="eq_name">
                                物件構造
                            </div>
                            <div class="stc">
                                <label><input title="鉄骨鉄筋コンクリート造" name="structured_type[]" type="checkbox" value="1" />鉄骨鉄筋コンクリート造</label>
                                <label><input title="鉄筋コンクリート造" name="structured_type[]" type="checkbox" value="2" />鉄筋コンクリート造</label>
                                <label><input title="鉄骨造" name="structured_type[]" type="checkbox" value="3" />鉄骨造</label>
                                <label><input title="重量鉄骨造" name="structured_type[]" type="checkbox" value="4" />重量鉄骨造</label>
                                <label><input title="軽量鉄骨造" name="structured_type[]" type="checkbox" value="5" />軽量鉄骨造</label>
                                <label><input title="木造" name="structured_type[]" type="checkbox" value="6" />木造</label>
                                <label><input title="木造一部RC造" name="structured_type[]" type="checkbox" value="7" />木造一部RC造</label>
                                <label><input title="その他" name="structured_type[]" type="checkbox" value="8" />その他</label>
                            </div>
                        </div>
                        <div class="eq">
                            <div class="eq_name">
                                改装
                            </div>
                            <div class="rebuild">
                                <label><input type="checkbox" title="" name="renovation_flag" value="1">リノベーション</label>
                                <label><input type="checkbox" title="" name="reform_flag" value="1">リフォーム</label>
                            </div>
                        </div>
                        <input type="hidden" name="eqd" value="" />
                        <input type="hidden" name="eqdb" value="" />
                                                    <div class="eq">
                                <div class="eq_name">
                                    位置
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="角部屋" type="checkbox" name="eq_rm[]" value="140" /><span>角部屋</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_140"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="最上階" type="checkbox" name="eq_rm[]" value="166" /><span>最上階</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_166"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    条件
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ペット相談" type="checkbox" name="eq_rm[]" value="113" /><span>ペット相談</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_113"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_11">・小型犬のみ</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_12">・猫のみ</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_13">・大型犬可能</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_46">・犬・猫可</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_58">・小型犬、猫可</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="外国人契約可能" type="checkbox" name="eq_rm[]" value="121" /><span>外国人契約可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_121"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="楽器相談" type="checkbox" name="eq_rm[]" value="126" /><span>楽器相談</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_126"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="事務所利用可能" type="checkbox" name="eq_rm[]" value="127" /><span>事務所利用可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_127"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="2人入居可能" type="checkbox" name="eq_rm[]" value="128" /><span>2人入居可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_128"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="保証人不要" type="checkbox" name="eq_rm[]" value="129" /><span>保証人不要</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_129"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="男性限定" type="checkbox" name="eq_rm[]" value="137" /><span>男性限定</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_137"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="女性限定" type="checkbox" name="eq_rm[]" value="138" /><span>女性限定</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_138"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="子供可" type="checkbox" name="eq_rm[]" value="175" /><span>子供可</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_175"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="学生限定" type="checkbox" name="eq_rm[]" value="176" /><span>学生限定</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_176"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="単身者限定" type="checkbox" name="eq_rm[]" value="177" /><span>単身者限定</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_177"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="フリーレント" type="checkbox" name="eq_rm[]" value="141" /><span>フリーレント</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_141"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="家賃スライド相談" type="checkbox" name="eq_rm[]" value="201" /><span>家賃スライド相談</span>
																							<span class="new_eq">New</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_201"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="二世帯向き" type="checkbox" name="eq_rm[]" value="142" /><span>二世帯向き</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_142"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="高齢者入居可能" type="checkbox" name="eq_rm[]" value="147" /><span>高齢者入居可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_147"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="生活保護者入居可能" type="checkbox" name="eq_rm[]" value="148" /><span>生活保護者入居可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_148"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="保証会社利用可能" type="checkbox" name="eq_rm[]" value="149" /><span>保証会社利用可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_149"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="保証会社利用必須" type="checkbox" name="eq_rm[]" value="150" /><span>保証会社利用必須</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_150"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="高齢者等向け住宅" type="checkbox" name="eq_rm[]" value="155" /><span>高齢者等向け住宅</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_155"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ルームシェア可能" type="checkbox" name="eq_rm[]" value="170" /><span>ルームシェア可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_170"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="カード決済可能" type="checkbox" name="eq_rm[]" value="181" /><span>カード決済可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_181"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="DIY可能" type="checkbox" name="eq_rm[]" value="182" /><span>DIY可能</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_182"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    キッチン
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="給湯器" type="checkbox" name="eq_rm[]" value="116" /><span>給湯器</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_116"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_20">・ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_21">・都市ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_22">・プロパンガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_23">・灯油</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_48">・天然ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_27">・電気</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ガスコンロ設置可" type="checkbox" name="eq_rm[]" value="194" /><span>ガスコンロ設置可</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_194"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ガステーブル" type="checkbox" name="eq_rm[]" value="117" /><span>ガステーブル</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_117"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_1">・一個口</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_2">・二個口</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_3">・三個口以上</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="IHクッキングヒーター" type="checkbox" name="eq_rm[]" value="131" /><span>IHクッキングヒーター</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_131"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_49">・一個口</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_50">・二個口</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_51">・三個口以上</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="電気コンロ" type="checkbox" name="eq_rm[]" value="190" /><span>電気コンロ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_190"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="システムキッチン" type="checkbox" name="eq_rm[]" value="118" /><span>システムキッチン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_118"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="対面式キッチン" type="checkbox" name="eq_rm[]" value="119" /><span>対面式キッチン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_119"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="カウンターキッチン" type="checkbox" name="eq_rm[]" value="178" /><span>カウンターキッチン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_178"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="アイランドキッチン" type="checkbox" name="eq_rm[]" value="179" /><span>アイランドキッチン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_179"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ディスポーザー" type="checkbox" name="eq_rm[]" value="197" /><span>ディスポーザー</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_197"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="食器洗浄乾燥機" type="checkbox" name="eq_rm[]" value="198" /><span>食器洗浄乾燥機</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_198"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_59">・据置型</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_60">・ビルドイン型</div>
                                                                                                                                    </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    水廻り
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="風呂" type="checkbox" name="eq_rm[]" value="154" /><span>風呂</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_154"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_32">・ユニットバス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_33">・共同</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="トイレ" type="checkbox" name="eq_rm[]" value="153" /><span>トイレ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_153"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_28">・水洗</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_29">・改良</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_30">・汲取</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_31">・共同</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="洗面台" type="checkbox" name="eq_rm[]" value="158" /><span>洗面台</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_158"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_34">・浴室内</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_35">・独立</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_36">・共用</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="バランス釜" type="checkbox" name="eq_rm[]" value="180" /><span>バランス釜</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_180"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="浴室乾燥機" type="checkbox" name="eq_rm[]" value="104" /><span>浴室乾燥機</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_104"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="暖房便座" type="checkbox" name="eq_rm[]" value="188" /><span>暖房便座</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_188"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="シャワートイレ" type="checkbox" name="eq_rm[]" value="105" /><span>シャワートイレ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_105"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="追い焚き" type="checkbox" name="eq_rm[]" value="132" /><span>追い焚き</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_132"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="洗髪洗面化粧台" type="checkbox" name="eq_rm[]" value="133" /><span>洗髪洗面化粧台</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_133"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="バス・トイレ別" type="checkbox" name="eq_rm[]" value="151" /><span>バス・トイレ別</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_151"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="洗濯機置場" type="checkbox" name="eq_rm[]" value="152" /><span>洗濯機置場</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_152"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_24">・室内</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_25">・屋外</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="トイレ2カ所" type="checkbox" name="eq_rm[]" value="159" /><span>トイレ2カ所</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_159"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="男女別トイレ" type="checkbox" name="eq_rm[]" value="160" /><span>男女別トイレ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_160"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="洗濯機" type="checkbox" name="eq_rm[]" value="199" /><span>洗濯機</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_199"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="衣類乾燥機" type="checkbox" name="eq_rm[]" value="200" /><span>衣類乾燥機</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_200"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    冷暖房
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="エアコン" type="checkbox" name="eq_rm[]" value="101" /><span>エアコン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_101"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_18">・冷房のみ</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_19">・冷暖房</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="暖房" type="checkbox" name="eq_rm[]" value="102" /><span>暖房</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_102"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_4">・ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_5">・都市ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_6">・プロパンガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_47">・天然ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_7">・灯油</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_26">・電気</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="床暖房" type="checkbox" name="eq_rm[]" value="134" /><span>床暖房</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_134"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    収納
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ウォークインクローゼット" type="checkbox" name="eq_rm[]" value="106" /><span>ウォークインクローゼット</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_106"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ロフト付" type="checkbox" name="eq_rm[]" value="122" /><span>ロフト付</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_122"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="床下収納" type="checkbox" name="eq_rm[]" value="135" /><span>床下収納</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_135"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="トランクルーム" type="checkbox" name="eq_rm[]" value="136" /><span>トランクルーム</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_136"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="シューズボックス" type="checkbox" name="eq_rm[]" value="145" /><span>シューズボックス</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_145"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    放送・通信
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ＢＳ" type="checkbox" name="eq_bld[]" value="2" /><span>ＢＳ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_2"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ＣＳ" type="checkbox" name="eq_bld[]" value="3" /><span>ＣＳ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_3"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ケーブルTV" type="checkbox" name="eq_rm[]" value="109" /><span>ケーブルTV</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_109"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="光ファイバー" type="checkbox" name="eq_bld[]" value="11" /><span>光ファイバー</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_11"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="bld_detail_id_1">・VDSL方式</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_2">・LAN配線方式</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_3">・光配線方式</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="有線放送" type="checkbox" name="eq_rm[]" value="111" /><span>有線放送</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_111"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="インターネット対応" type="checkbox" name="eq_rm[]" value="183" /><span>インターネット対応</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_183"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_61">・回線工事必要・契約必要</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_62">・回線工事不要・契約不要</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_63">・回線工事不要・契約必要</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_64">・回線工事必要・契約不要</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="UHFアンテナ（地デジ用）" type="checkbox" name="eq_bld[]" value="12" /><span>UHFアンテナ（地デジ用）</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_12"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ネット使用料不要" type="checkbox" name="eq_rm[]" value="184" /><span>ネット使用料不要</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_184"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="高速ネット対応" type="checkbox" name="eq_rm[]" value="185" /><span>高速ネット対応</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_185"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ネット専用回線" type="checkbox" name="eq_rm[]" value="186" /><span>ネット専用回線</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_186"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="Wi-Fi" type="checkbox" name="eq_rm[]" value="193" /><span>Wi-Fi</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_193"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    セキュリティ
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="インターホン" type="checkbox" name="eq_rm[]" value="114" /><span>インターホン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_114"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_52">・カメラ付き</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="オートロック" type="checkbox" name="eq_bld[]" value="1" /><span>オートロック</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_1"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="オートロック ハンズフリー" type="checkbox" name="eq_bld[]" value="22" /><span>オートロック ハンズフリー</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_22"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="防犯ブザー" type="checkbox" name="eq_rm[]" value="125" /><span>防犯ブザー</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_125"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="宅配BOX" type="checkbox" name="eq_bld[]" value="6" /><span>宅配BOX</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_6"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="管理人" type="checkbox" name="eq_bld[]" value="8" /><span>管理人</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_8"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="bld_detail_id_8">・常駐</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_9">・日勤</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_10">・巡回</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_11">・非常駐</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="防犯カメラ" type="checkbox" name="eq_bld[]" value="10" /><span>防犯カメラ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_10"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="防犯モデルマンション" type="checkbox" name="eq_bld[]" value="21" /><span>防犯モデルマンション</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_21"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    テナント設備
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="高床式プラットホーム" type="checkbox" name="eq_rm[]" value="161" /><span>高床式プラットホーム</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_161"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="24時間利用" type="checkbox" name="eq_bld[]" value="14" /><span>24時間利用</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_14"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="スケルトン" type="checkbox" name="eq_rm[]" value="162" /><span>スケルトン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_162"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="居抜き" type="checkbox" name="eq_rm[]" value="163" /><span>居抜き</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_163"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="飲食店可" type="checkbox" name="eq_rm[]" value="164" /><span>飲食店可</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_164"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="OAフロア" type="checkbox" name="eq_rm[]" value="195" /><span>OAフロア</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_195"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ワンフロア" type="checkbox" name="eq_rm[]" value="196" /><span>ワンフロア</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_196"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                                    <div class="eq">
                                <div class="eq_name">
                                    その他
                                </div>
                                <div class="equipment">
                                                                            <div class="eq_detail">
                                        <label>
											<input title="電気" type="checkbox" name="eq_rm[]" value="171" /><span>電気</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_171"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="専用ごみ置場" type="checkbox" name="eq_bld[]" value="5" /><span>専用ごみ置場</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_5"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ガス" type="checkbox" name="eq_rm[]" value="172" /><span>ガス</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_172"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_37">・都市ガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_38">・プロパンガス</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_39">・天然ガス</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="エレベーター" type="checkbox" name="eq_bld[]" value="7" /><span>エレベーター</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_7"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="bld_detail_id_4">・1基</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_5">・2基</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_6">・3基</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="bld_detail_id_7">・4基以上</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="水道" type="checkbox" name="eq_rm[]" value="173" /><span>水道</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_173"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_40">・公営</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_41">・私営</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_42">・井戸</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="オートバイ駐輪場" type="checkbox" name="eq_bld[]" value="9" /><span>オートバイ駐輪場</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_9"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="自転車置場" type="checkbox" name="eq_bld[]" value="4" /><span>自転車置場</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_4"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="排水" type="checkbox" name="eq_rm[]" value="174" /><span>排水</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_174"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                                                                            <div class="one_eq_detail" id="rm_detail_id_43">・公共下水</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_44">・浄化槽</div>
                                                                                                                                                                                                <div class="one_eq_detail" id="rm_detail_id_45">・汲取</div>
                                                                                                                                    </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ペット足洗い場" type="checkbox" name="eq_bld[]" value="13" /><span>ペット足洗い場</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_13"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="バルコニー／ベランダ" type="checkbox" name="eq_rm[]" value="103" /><span>バルコニー／ベランダ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_103"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="制震構造" type="checkbox" name="eq_bld[]" value="15" /><span>制震構造</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_15"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ルーフバルコニー" type="checkbox" name="eq_rm[]" value="192" /><span>ルーフバルコニー</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_192"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="家具付" type="checkbox" name="eq_rm[]" value="107" /><span>家具付</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_107"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="免震構造" type="checkbox" name="eq_bld[]" value="16" /><span>免震構造</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_16"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="家電付" type="checkbox" name="eq_rm[]" value="156" /><span>家電付</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_156"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="耐震構造" type="checkbox" name="eq_bld[]" value="17" /><span>耐震構造</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_17"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="照明" type="checkbox" name="eq_rm[]" value="110" /><span>照明</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_110"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="ロードヒーティング" type="checkbox" name="eq_bld[]" value="18" /><span>ロードヒーティング</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_18"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="融雪溝" type="checkbox" name="eq_bld[]" value="19" /><span>融雪溝</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_19"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="網戸" type="checkbox" name="eq_rm[]" value="115" /><span>網戸</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_115"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="コンシェルジュ" type="checkbox" name="eq_bld[]" value="20" /><span>コンシェルジュ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="bld_20"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="専用庭付" type="checkbox" name="eq_rm[]" value="120" /><span>専用庭付</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_120"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="メゾネットタイプ" type="checkbox" name="eq_rm[]" value="123" /><span>メゾネットタイプ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_123"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="バリアフリー" type="checkbox" name="eq_rm[]" value="124" /><span>バリアフリー</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_124"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="デザイナーズ" type="checkbox" name="eq_rm[]" value="130" /><span>デザイナーズ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_130"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="複層ガラス・ペアガラス" type="checkbox" name="eq_rm[]" value="139" /><span>複層ガラス・ペアガラス</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_139"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="24時間換気システム" type="checkbox" name="eq_rm[]" value="143" /><span>24時間換気システム</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_143"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="分譲タイプ" type="checkbox" name="eq_rm[]" value="144" /><span>分譲タイプ</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_144"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="間接照明" type="checkbox" name="eq_rm[]" value="146" /><span>間接照明</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_146"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="フローリング" type="checkbox" name="eq_rm[]" value="167" /><span>フローリング</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_167"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="フロアタイル" type="checkbox" name="eq_rm[]" value="191" /><span>フロアタイル</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_191"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="オール電化" type="checkbox" name="eq_rm[]" value="168" /><span>オール電化</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_168"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="室内物干" type="checkbox" name="eq_rm[]" value="187" /><span>室内物干</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_187"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="カーテン" type="checkbox" name="eq_rm[]" value="157" /><span>カーテン</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_157"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="食事付" type="checkbox" name="eq_rm[]" value="165" /><span>食事付</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_165"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                            <div class="eq_detail">
                                        <label>
											<input title="日当たり良好" type="checkbox" name="eq_rm[]" value="169" /><span>日当たり良好</span>
																					</label>
										<div class="eq_detail_button">-----</div>
                                        <input type="hidden" class="eq_detail_input" id="rm_169"  value="" />
                                        <div class="eq_detail_box">
                                            <span class="this_detail_title">◀</span>
                                            <div class="eq_detail_defo" id="detail_id_none">
                                                ・詳細設定しない
                                            </div>
                                                                                                                                                                                </div>
                                        </div>
                                                                    </div>
                            </div>
                                            </div>
                </div>
                
            </div>
            <div class="search_list_menu">
            	
            	<!--選択項目確認＆変更-->
                <div class="check_and_change">
                	
                    
                    <!--所在地の確認エリア-->
                    <div class="area_step_check_block check_block">
                        <!--ステップ１の確認-->
                        <div class="step1_check_box">
                            <div class="step_check_m">
                                設定中の都道府県<span class="change_span" id="step1">変更</span>
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step1">
                                <span>都道府県を変更する</span>
                            </div-->
                        </div>
                        
                        <!--ステップ２の確認-->
                        <div class="step2_check_box">
                            <div class="step_check_m">
                                設定中の市区郡<span class="change_span" id="step2">変更</span>
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step2">
                                <span>市区郡を変更する</span>
                            </div-->
                        </div>
                        
                        <!--ステップ２の確認-->
                        <div class="step3_check_box">
                            <div class="step_check_m">
                                設定中の町字<span class="change_span" id="step3">変更</span>
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step３">
                                <span>町字を変更する</span>
                            </div-->
                        </div>
                    </div>
                    
                    
                    <!--駅・沿線の確認エリア-->
                    <div class="trans_step_check_block check_block">
                        <!--ステップ4の確認-->
                        <div class="step4_check_box">
                            <div class="step_check_m">
                                設定中の沿線<span class="change_span" id="step4">変更</span>
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step1">
                                <span>都道府県を変更する</span>
                            </div-->
                        </div>
                        
                        <!--ステップ5の確認-->
                        <div class="step5_check_box">
                            <div class="step_check_m">
                                設定中の駅<span class="change_span" id="step5">変更</span>
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step2">
                                <span>市区郡を変更する</span>
                            </div-->
                        </div>
                        
                    </div>
                    
                    <!--管理会社の確認エリア-->
                    <div class="company_step_check_block check_block">
                        <!--ステップ4の確認-->
                        <div class="step6_check_box">
                            <div class="step_check_m">
                                設定中の管理会社<!--span class="change_span" id="step6">変更</span-->
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step1">
                                <span>都道府県を変更する</span>
                            </div-->
                        </div>
                    </div>
                    
                    
                    <!--設備・条件の確認エリア-->
                    <div class="any_step_check_block check_block">
                        <!--ステップ4の確認-->
                        <div class="step7_check_box">
                            <div class="step_check_m">
                                設定中の設備・条件<!--span class="change_span" id="step7">変更</span-->
                            </div>
                            <div class="step_check_con">
                            </div>
                            <!--div class="step_change_button" id="step1">
                                <span>都道府県を変更する</span>
                            </div-->
                        </div>
                    </div>
                    
                </div>
                
                <!--次へ＆検索-->
                <div class="next_go_button_box">
                	<!--所在地-->
                	<div class="prev_step_button next_action">
                    	<span>都道府県の<br>設定へ戻る</span>
                    </div>
                    <div class="prev_step_button2 next_action">
                    	<span>市区郡の<br>設定へ戻る</span>
                    </div>
                	<div class="next_step_button next_action">
                    	<span>市区郡の<br>設定へ進む</span>
                    </div>
                    <div class="next_step_button2 next_action">
                    	<span>詳細な地域の<br>設定へ進む</span>
                    </div>
                    <!--駅・沿線-->
                    <div class="prev_step_button3 next_action">
                    	<span>沿線の<br>設定へ戻る</span>
                    </div>
                    <div class="next_step_button3 next_action">
                    	<span>駅の<br>設定へ進む</span>
                    </div>
                    <!--検索・とじる-->
                    <div class="go_search_submit">
                        <span>検&nbsp;&nbsp;索</span>
                    </div>
                    <div class="this_window_close">
                    	<span>確定してリストへ</span>
                    </div>
                </div>
                
            </div>
        </div>
        
        
        <div class="check_sarch_list">
        	<div class="check_list_m">
        		<span>項目をクリックすると設定を外すことが出来ます</span><span class="check_list_close">×とじる</span>
            </div>
            <div class="stock_button_box">
                <div class="save_search" id="stock">
                    <span>検索条件ストック</span>
                </div>
                <div class="save_search_help" >
                    検索条件ストックとは?
                </div>
            </div>
            <div class="search_check_m">
            	都道府県
            </div>
            <div class="pref_log re">
            </div>
            <div class="search_check_m">
            	市区郡・町名
            </div>
            <div class="city_area_log">
            	<div class="city_log re">
            	</div>
                <div class="town_log re">
            	</div>
            </div>
            <div class="search_check_m">
            	沿線・駅
            </div>
            <div class="trans_log">
            	<div class="along_log re">
            	</div>
                <div class="station_log re">
            	</div>
            </div>
            <div class="search_check_m">
            	管理会社
            </div>
            <div class="company_log re">
            </div>
			<div class="not_company_log re">
            </div>
            <div class="search_check_m">
            	フリーワード
            </div>
            <div class="free_text_log re">
            </div>
            <div class="search_check_m">
            	基本条件
            </div>
            <div class="basic_check_area re">
            </div>
            <div class="search_check_m">
            	間取タイプ
            </div>
            <div class="layout_check_area re">
            </div>
            <div class="search_check_m">
            	建物構造
            </div>
            <div class="str_check_area re">
            </div>
            <div class="search_check_m">
            	設備・条件
            </div>
            <div class="eq_check_area re">
            </div>
        	<!--div class="all_check_list">
            </div-->
            <span class="check_list_close2">×とじる</span>
        </div>
        
        <div class="close2">
            <span>× 条件を確定して戻る</span>
        </div>
    </div>
    
</div>	    
    
</div>

<div class="large_photo">
</div>

<div class="main_layer">
	<div class="main_layer_contents">
    	
        <!--メール送信-->
    	<div class="mail_send">
        	<div>
                物件情報メール送信 <span class="alert">（10件以上追加されると古い登録から順に削除されます。ログアウトされると初期化されますのでご注意下さい。）</span>
            </div>
        	<div class="mail_room_info">
            	<div class="send_room_stock_list">
                </div>
                <div class="send_room_list">
                </div>
            </div>
            <!--div class="mail_room_form">
            	<table>
                	<tr>
                    	<td>
                        	送信先
                        </td>
                        <td>
                        	<input class="mail_address" type="text" value="" />
                        </td>
                    </tr>
                    <tr>
                    	<td>
                        	件名
                        </td>
                        <td>
                        	<input class="mail_address" type="text" value="" />
                        </td>
                    </tr>
                    <tr>
                    	<td colspan="2">
                        	本文
                        </td>
                    </tr>
                    <tr>
                    	<td colspan="2">
                        	<textarea class="mail_text"></textarea>
                        </td>
                    </tr>
                </table>
                
                <div class="radio_box">
                    <label><input type="radio" checked="checked" name="info_type" />エンドユーザー向け</label>
                    <label><input type="radio" name="info_type" />業務情報付き</label>
                </div>
            </div-->
            <table class="mail_send_menu">
            	<tr class="send_step1">
                	<td>
                    	<div class="go_send">
                            <span>送信する物件を確認</span>
                        </div>
                    </td>
                    <td>
                    	<div class="add_room_send">
                            <span>リストへ物件を追加</span>
                        </div>
                    </td>
                </tr>
                <tr class="send_step2">
                	<td>
                    	<a class="mail_open" href="#">
                            <span>メールソフトを起動</span>
                        </a>
                    </td>
                    <td>
                    	<div class="back_send_list">
                            <span>戻る</span>
                        </div>
                    </td>
                </tr>
				<tr class="send_step2">
					<td colspan="2">
						<div class="mailer_err">
							※お使いのブラウザやメールソフトによってはメールソフトを起動できない場合がございます。<br>
							その際は、お手数をお掛けしますが下記ボタンより物件情報を取得し、コピー・ペーストしてご利用ください。
						</div>
						<div class="mail_text_get">
                            <span>メール記載内容を取得</span>
                        </div>
					</td>
				</tr>
            </table>
			<div class="mail_text_display">
			</div>
            <!--div class="go_send">
            	<span>メールに添付する物件を確定</span>
            </div-->
        </div>
        
        <!--条件ストック説明-->
    	<div class="stock_manual">
        	<table>
            	<tr>
                	<td colspan="2">
                    	検索条件ストックとは<br />
                        現在検索されている検索条件を保存して、いつでも呼び出せる機能です。
                    </td>
                </tr>
            	<tr>
                	<td>
                    	登録方法<br />
                        <div class="one_step">
                        	1. 物件検索画面で保存しておきたい条件を選択します。
                        </div>
                        <div class="one_step">
                        	2.右上図の１番のプルダウンより保存する番号を選んで下さい。<br />
                        	（右上図「検索条件ストック管理」の場所に保存した条件が表示されます）
                        </div>
                        <div class="one_step">
                       		4.右上図の２番の入力フォームに保存しておく名前を入力して下さい。
                        </div>
                        <div class="one_step">
                        	5.最後に「保存」ボタンをクリックすると検索条件のストックが完了します。
                        </div>
                        
                    </td>
                    <td>
                    	<img src="./img/stock_1.png" />
                    </td>
                </tr>
                <tr>
                	<td>
                    	検索条件ストックに保存した条件を使用する<br />
                        <div class="one_step">
                            検索条件ストックに保存された条件は<br />「物件検索ページ」「トップページ」<br />から使用することが出来ます。
                        </div>
                        <div class="one_step">
                            物件検索ページ<br />
                            右上図の「検索条件ストック管理」部分の「適用」をクリック
                            すると検索条件が反映されます。
                        </div>
                        <div class="one_step">
                            トップページ<br />
                            右下図の１番の場所にストックされた条件の名前が表示されます。<br />
                            ストック条件の名前をクリックすると検索条件が反映された検索ページに移動します。<br />
                        </div>
                    </td>
                    <td>
                    	<img src="./img/stock_2.png" />
                    </td>
                </tr>
            </table>
    	</div>
        
        <!--条件ストック-->
        <div class="save_search_contents">
        	<div>
            	検索条件ストック管理
            </div>
        	<div class="stock_list">
            	<div class="one_stock">
                	1.---------
                    <div class="stock_menu">
                    	<span class="check_stock"><span>確認</span></span><span class="use_stock"><span>適用</span></span><span class="delet_stock"><span>削除</span></span>
                    </div>
                </div>
                <div class="one_stock">
                	2.---------
                    <div class="stock_menu">
                    	<span class="check_stock"><span>確認</span></span><span class="use_stock"><span>適用</span></span><span class="delet_stock"><span>削除</span></span>
                    </div>
                </div>
                <div class="one_stock">
                	3.---------
                    <div class="stock_menu">
                    	<span class="check_stock"><span>確認</span></span><span class="use_stock"><span>適用</span></span><span class="delet_stock"><span>削除</span></span>
                    </div>
                </div>
                <div class="one_stock">
                	4.---------
                    <div class="stock_menu">
                    	<span class="check_stock"><span>確認</span></span><span class="use_stock"><span>適用</span></span><span class="delet_stock"><span>削除</span></span>
                    </div>
                </div>
                <div class="one_stock">
                	5.---------
                    <div class="stock_menu">
                    	<span class="check_stock"><span>確認</span></span><span class="use_stock"><span>適用</span></span><span class="delet_stock"><span>削除</span></span>
                    </div>
                </div>
            </div>
            <div class="stock_form_box">
            	<div>
                	現在検索中の条件を保存
                </div>
                <div class="stock_form">
                	<table>
                    	<tr>
                        	<td colspan="2">
                            	<select id="setting_number" name="setting_number">
                                    <option value="1">1番目</option>
                                    <option value="2">2番目</option>
                                    <option value="3">3番目</option>
                                    <option value="4">4番目</option>
                                    <option value="5">5番目</option>
                                </select> の欄に追加・上書き
                            </td>
                        </tr>
                        <tr>
                        	<td class="save_name_m">
                            	保存名：
                            </td>
                            <td>
                            	<input type="text" name="stock_save_name" value="" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="stock_save">
                	<span>保存</span>
                </div>
            </div>
            <br style="clear:left;" />
        </div>
        <div class="main_layer_close">
        	<span>×とじる</span>
        </div>
    </div>
    <div class="check_search">
    	<div class="check_stock_list">
            <div class="search_check_m">
            	都道府県
            </div>
            <div class="pref_st ck">
            </div>
            <div class="search_check_m">
            	市区郡・町名
            </div>
            <div class="city_area_log">
            	<div class="city_st ck">
            	</div>
                <div class="town_st ck">
            	</div>
            </div>
            <div class="search_check_m">
            	沿線・駅
            </div>
            <div class="trans_st">
            	<div class="along_st ck">
            	</div>
                <div class="station_st ck">
            	</div>
            </div>
            <div class="search_check_m">
            	管理会社
            </div>
            <div class="company_st ck">
            </div>
			<div class="not_company_st ck">
            </div>
            <div class="search_check_m">
            	フリーワード
            </div>
            <div class="free_text_st ck">
            </div>
            <div class="search_check_m">
            	基本条件
            </div>
            <div class="basic_check_area_st ck">
            </div>
            <div class="search_check_m">
            	間取タイプ
            </div>
            <div class="layout_check_area_st ck">
            </div>
            <div class="search_check_m">
            	建物構造
            </div>
            <div class="str_check_area_st ck">
            </div>
            <div class="search_check_m">
            	設備・条件
            </div>
            <div class="eq_check_area_st ck">
            </div>
        	<!--div class="all_check_list">
            </div-->
        </div>
        
        <div class="check_search_close">
        	×とじる
        </div>
        
    </div>
</div></div>
</form>

<div class="layer">
    <div class="guide_box">
        <div class="top_guide">
            <a href="tyukai_help.php?page=top" target="_blank">＜ トップページへ戻ることが出来ます。<span class="help_link">ヘルプはこちら</span></a>
        </div>
        <div class="guide">
            <div class="one_page">
                <a href="tyukai_help.php?page=search" target="_blank">＜ 住居用の賃貸物件を検索や、各種物件情報の出力が出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	住居リスト検索
                    </div>
                    <div>
                    	住居マップ検索
                    </div>
                </div>
            </div>
            <div class="one_page">
                <a href="tyukai_help.php?page=search" target="_blank">＜ テナント用の賃貸物件を検索や、各種物件情報の出力が出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	テナントリスト検索
                    </div>
                    <div>
                    	テナントマップ検索
                    </div>
                </div>
            </div>
            <div class="one_page">
                <a href="tyukai_help.php?page=search" target="_blank">＜ 駐車場用の賃貸物件を検索や、各種物件情報の出力が出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	駐車場リスト検索
                    </div>
                    <div>
                    	駐車場マップ検索
                    </div>
                </div>
            </div>
        </div>
        <div class="guide">
            <div class="one_page">
                <a href="tyukai_help.php?page=info" target="_blank">＜ 管理会社の方のオススメ物件情報や、お知らせ、リアプロからのお知らせを確認出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	サポートセンターからのお知らせ
                    </div>
                    <div>
                    	トピックライト（管理会社様からの新着物件、キャンペーン情報）
                    </div>
                    <div>
                    	トピックス（管理会社様からの新着情報）
                    </div>
                    <div>
                    	カバン（ユーザー様への通知メッセージ）
                    </div>
                </div>
            </div>
            <div class="one_page">
                <a href="tyukai_help.php?page=company" target="_blank">＜ リアプロに登録されている管理会社様を探すことが出来ます。また、管理会社ごとの空室一覧を出力出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	管理会社検索
                    </div>
                    <div>
                    	管理会社の物件出力
                    </div>
                </div>
            </div>
            <div class="one_page">
                <span>＜ リアプロのHP連動サービス「リアプロPlus02」で連動させる物件情報の編集が出来ます。</span>
                <div class="one_page_contents">
                	<div>
                    	HP連動サービス「リアプロPlus02」の管理画面
                    </div>
                </div>
            </div>
        </div>
        <div class="guide">
            <div class="one_page">
                <a href="tyukai_help.php?page=mybox" target="_blank">＜ 住居、テナント、駐車場の検索ページで「mybox」へ登録した物件を確認することが出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	mybox各種機能
                    </div>
                </div>
            </div>
            <div class="one_page">
                <a href="tyukai_help.php?page=account" target="_blank">＜ 登録されている会社情報、ユーザー情報の変更、ユーザー追加、ユーザーの確認をすることが出来ます。<span class="help_link">ヘルプはこちら</span></a>
                <div class="one_page_contents">
                	<div>
                    	会社情報の変更
                    </div>
                    <div>
                    	ユーザー情報の変更
                    </div>
                    <div>
                    	新規ユーザーの追加
                    </div>
                    <div>
                    	ユーザーリスト
                    </div>
                    <div>
                    	ログイン履歴
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="layer_close">
    	<span>×とじる</span>
    </div>
</div>

</body>
</html>