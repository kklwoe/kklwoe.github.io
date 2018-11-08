//给导航当前页添加选中态
$(function () {
    var href = window.location.href.split("/").slice(-1)[0].split("?")[0].split(".")[0];
    var $current = $("li#" + href);
    $current.addClass('active');
});



//--------------------------模块---------------------------\\
var tempHeader = function () {/*
 <!--write down HTML here start-->
 <nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="../index.html">寻梦君</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li id='1'><a href="../1/1.html">板块1
                    <small></small>
                </a></li>
                <li id='2'><a href="../2/2.html">板块2
                    <small></small>
                </a></li>
            </ul>
        </div>
    </div>
 </nav>
 <!--write down HTML here end-->
*/};
var tempFooter = function () {/*
 <footer class="bs-docs-footer">
 <div class="container">
    <p>感谢 <a href="https://www.qcloud.com/act/campus">腾讯云+校园计划</a> 提供 <a href="https://www.qcloud.com/">腾讯云服务</a> CVM资源</p>
    <p>本项目开源，<a href="https://github.com/kklwoe/kklwoe.github.io"> 源码 </a>托管于<a href="https://github.com"> Github </a>，受 <a target="_blank" href="https://github.com/twbs/bootstrap/blob/master/LICENSE">MIT</a> 开源协议保护，文档受 <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a> 开源协议保护</p>
    <p>Designed and built by <strong>Mengjun Sun</strong>. Maintained by <strong>Mengjun Sun</strong>. Special thanks to <a target="_blank" href="http://getbootstrap.com/">Twitter Bootstrap</a></p>
    <div class="row">
        <div class="col-sm-12">
            <span>Copyright &copy; 2018 <strong>Mengjun Sun</strong>. All Rights Reserved </span> |
            <span>Email：<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=vY6NiYSFioiOjv3MzJPe0tA">304987533@qq.com</a></span> |
            <span><a target="_blank" href="http://www.miibeian.gov.cn/">沪ICP备16051283号</a></span>
        </div>
    </div>
 </div>
 </footer>
*/};
var tempElevator = function () {/*
 <!--write down HTML here start-->
 <div class="elevator_item">
     <a class="elevator" title="回到顶部"></a>
 </div>
 <!--write down HTML here end-->
*/};
var tempMailto = function () {/*
 <!--write down HTML here start-->
 <div class="mailto_item">
     <a class="btn btn-lg btn-outline" target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=vY6NiYSFioiOjv3MzJPe0tA">
         <span class="glyphicon glyphicon-envelope""></span> 写信吐槽
     </a>
 </div>
 <!--write down HTML here end-->
*/};

var templateFooter = tempFooter.toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, "");
var templateElevator = tempElevator.toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, "");
var templateHeader = tempHeader.toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, "");
var templateMailto = tempMailto.toString().replace(/^.+?\*|\\(?=\/)|\*.+?$/gi, "");

$("#template_footer").html(templateFooter);
$("#template_elevator").html(templateElevator);
$("#template_header").html(templateHeader);
$("#template_mailto").html(templateMailto);

// elevator模块功能
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 200) {
            $(".elevator_item").show();
        } else {
            $(".elevator_item").hide();
        }
    });
    $(".elevator").click(function () {
        $("html,body").animate({scrollTop: 0}, 300);
    });
});
// mailto模块功能
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 300) {
            $(".mailto_item").show();
        } else {
            $(".mailto_item").hide();
        }
    });
});


