
// 底部版权区
ReactDOM.render(
    <footer className="bs-docs-footer">
        <div className="container">
            <p>Designed and built by <strong>Mengjun Sun</strong>，maintained by <strong>Mengjun Sun</strong></p>
            <p>Special thanks to <a target="_blank" href="http://getbootstrap.com/">Twitter Bootstrap</a> designed and built with all the love in the world by <a target="_blank" href="https://twitter.com/mdo">@mdo</a> and <a target="_blank" href="https://twitter.com/fat">@fat</a>，maintained by the <a href="https://github.com/orgs/twbs/people">core team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">the contributors</a>.</p>
            <p>本项目开源，<a href="https://github.com/kklwoe/sunmengjun.cn"> 源码 </a>托管于<a href="https://github.com"> Github </a> ，受 <a target="_blank" href="https://github.com/twbs/bootstrap/blob/master/LICENSE">MIT</a> 开源协议保护，文档受 <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a> 开源协议保护。</p>
            <p>感谢 <a href="https://www.qcloud.com/act/campus">腾讯云+校园计划</a> 提供 <a href="https://www.qcloud.com/">腾讯云</a> 服务器CVM资源。</p>
            <div className="row">
                <div className="col-sm-12">
                    <span>Copyright &copy; 2017 孙孟君 版权所有 盗版不究 </span>  |
                    <span><a target="_blank" href="http://www.miibeian.gov.cn/">沪ICP备16051283号</a></span>  |
                    <span>邮箱：kklwoe@163.com </span>
                </div>
            </div>
        </div>
    </footer>,
    document.getElementById('component_footer')
);

//返回顶部
ReactDOM.render(
    <div className="elevator_item">
        <a className="elevator" title="回到顶部"></a>
    </div>,
    document.getElementById('component_elevator')
);
$(function() {
    $(window).scroll(function(){
        var scrolltop=$(this).scrollTop();
        if(scrolltop>=200){
            $(".elevator_item").show();
        }else{
            $(".elevator_item").hide();
        }
    });
    $(".elevator").click(function(){
        $("html,body").animate({scrollTop: 0}, 300);
    });
});


