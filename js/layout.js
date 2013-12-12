var resize = function(zoom){
    var zoomNew = window.innerWidth;
    $('#slide').width(document.documentElement.clientWidth+'px');
    $('#slide').height(document.documentElement.clientHeight+'px');
    $('#slide img').width(document.documentElement.clientWidth+'px');
};

var zoom = window.innerWidth;
resize(zoom);

$(window).on('resize', function(){
	resize(zoom);
});




