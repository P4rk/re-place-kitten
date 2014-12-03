function replace_image(element){
    var src = 'http://placekitten.com/g/' + $(element).width() + '/' + $(element).height();
    $(element).attr("src", src);
}

$(function() {
        var global = false;
        var replace_class = '';
        if($('body[data-re-place-kitten-global]').length){
            global = true;
        }
        if($('body[data-re-place-kitten]').length && !global){
            replace_class = $('body[data-re-place-kitten]');
        }

        $('img').load(function() {
            if (global) {
                replace_image(this);
            } else if($(this).attr('data-re-place-kitten') !== undefined && $(this).attr('data-re-place-kitten').length !== undefined){
                replace_image(this);
            }else if (replace_class !== '' && $(this).hasClass(replace_class)) {
                replace_image(this);
            }
        });
});