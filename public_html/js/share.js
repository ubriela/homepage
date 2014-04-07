(function( $ ) {
    $(document).ready(function() {
        var url = window.location.href;
        var host =  window.location.hostname;
        var title = $('title').text();
        title = escape(title); //clean up unusual characters

        var twit = 'http://twitter.com/home?status='+title+'%20'+url;
        var facebook = 'http://www.facebook.com/sharer.php?u='+url
        var digg = 'http://digg.com/submit?phase=2&url='+url+'&amp;title='+title;
        var stumbleupon = 'http://stumbleupon.com/submit?url='+url+'&amp;title='+title;
        var buzz = 'http://www.google.com/reader/link?url='+url+'&amp;title='+title+'&amp;srcURL='+host;
        var delicious  = 'http://del.icio.us/post?url='+url+'&amp;title='+title;

        var tbar = '<div id="socializethis"><span>Share<br /><a href="#min" id="minimize" title="Minimize"> <img src="js/images/minimize2.png" /> </a></span><div id="sicons">';
        tbar += '<a href="'+twit+'" id="twit" title="Share on twitter"><img src="js/images/twitter.png"  alt="Share on Twitter" width="32" height="32" /></a>';
        tbar += '<a href="'+facebook+'" id="facebook" title="Share on Facebook"><img src="js/images/facebook.png"  alt="Share on facebook" width="32" height="32" /></a>';
        tbar += '<a href="'+digg+'" id="digg" title="Share on Digg"><img src="js/images/digg.png"  alt="Share on Digg" width="32" height="32" /></a>';
//        tbar += '<a href="'+stumbleupon+'" id="stumbleupon" title="Share on Stumbleupon"><img src="images/stumbleupon.png"  alt="Share on Stumbleupon" width="32" height="32" /></a>';
        tbar += '<a href="'+delicious+'" id="delicious" title="Share on Del.icio.us"><img src="js/images/delicious.png"  alt="Share on Delicious" width="32" height="32" /></a>';
        tbar += '<a href="'+buzz+'" id="buzz" title="Share on Buzz"><img src="js/images/google-buzz.png"  alt="Share on Buzz" width="32" height="32" /></a>';
        tbar += '</div></div>';

        // Add the share tool bar.
        $('body').append(tbar);
        $('#socializethis').css({
            opacity: .7
        });
        // hover.
        $('#socializethis').bind('mouseenter',function(){
            $(this).animate({
                height:'35px',
                width:'260px',
                opacity: 1
            }, 300);
            $('#socializethis img').css('display', 'inline');
        });
        //leave
        $('#socializethis').bind('mouseleave',function(){
            $(this).animate({
                opacity: .7
            }, 300);
        });
        // Click minimize
        $('#socializethis #minimize').click( function() {
            minshare();
            $.cookie('minshare', '1');
        });

        if($.cookie('minshare') == 1){
            minshare();
        }

        function minshare(){
            $('#socializethis').animate({
                height:'15px',
                width: '40px',
                opacity: .7
            }, 300);
            $('#socializethis img').css('display', 'none');
            return false;
        }
    });
})(jQuery);