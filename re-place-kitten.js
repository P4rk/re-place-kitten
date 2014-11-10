$(function() {
        var global = false;
        if($('body[data-re-place-kitten]').length){
            global = true;
        }
        $('img').load(function() {
            if (global || $(this).attr('data-re-place-kitten') !== undefined && $(this).attr('data-re-place-kitten').length !== undefined) {
                var src = 'http://placekitten.com/g/' + $(this).width() + '/' + $(this).height();
                $(this).attr("src", src);
            }
        });
});