// window.onload(){function(){}}
    $(function(){
        $('.btn a').on('click', function(){
            $('.btn').next('ul').filter(':visible').slideUp();
    
            $(this).parent().next().slideDown();
            return false;
        });
    });
