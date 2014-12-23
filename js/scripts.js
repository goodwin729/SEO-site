
$(function() {
/*----------------
 slider on general
 ----------------*/
    $('#da-slider').cslider({
        autoplay	: true,
        bgincrement	: 50
    });

/*----------------
 tabs
 ----------------*/
    $('#tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

/*----------------
 slider in content
 ----------------*/
    $('.carousel').carousel({
        interval: 2000
    })

});
/*-------------
 gallery on gen
 ------------*/
$(function() {

    var $grid = $( '#tp-grid' ),
        $name = $( '#name' ),
        $close = $( '#close' ),
        $loader = $( '<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>' ).insertBefore( $grid ),
        stapel = $grid.stapel( {
            delay : 50,
            onLoad : function() {
                $loader.remove();
            },
            onBeforeOpen : function( pileName ) {
                $name.html( pileName );
            },
            onAfterOpen : function( pileName ) {
                $close.show();
            }
        } );

    $close.on( 'click', function() {
        $close.hide();
        $name.empty();
        stapel.closePile();
    } );

} );

/*-----------
header resize
------------*/
$(document).on("scroll",function(){
    if($(document).scrollTop()>300){
        $(".drop-slide-block").removeClass("small").addClass("large");
    } else{
        $(".drop-slide-block").removeClass("large").addClass("small");
    }
});

/*-----------------
hight columns
------------------
function EqualColumns(columns) {
    var biggestHeight = 0;
    jQuery(columns).each(function(){
        if(jQuery(this).height() > biggestHeight){
            biggestHeight = jQuery(this).height() ;
        }
    });
    jQuery(columns).height(biggestHeight);
}

EqualColumns(jQuery(".cards ul li"));

});*/