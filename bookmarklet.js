$('img').each(function(i, element) { console.log(element); var src = 'http://placekitten.com/g/' + $(element).width() + '/' + $(element).height(); console.log (src); $(element).attr("src", src);  });
