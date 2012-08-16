;(function($){
    $.fn.textareaformatter = function(_options) {
        var options = $.extend({}, $.fn.textareaformatter.defaults, _options);

        return this.each(function() {
            var textfield = $(this);
            var format = function() {
                var text = textfield.val();
                if (options.format) {
                    var origarr = text.split('\n');
                    var newarr = [];
                    for (var i in origarr) {
                        if (origarr[i].length > options.width) {
                            var k = origarr[i];
                            while (k.length > options.width) {
                                newarr.push(k.substring(0, options.width));
                                k = k.substring(options.width);
                            }
                            newarr.push(k);
                        } else {
                            newarr.push(origarr[i]);
                        }
                    }
                    textfield.val('');
                    for (var j = 0; j < options.height && j < newarr.length; j++) {
                        textfield.val(textfield.val() + (newarr[j]));
                        if (j < newarr.length - 1 && j < options.height - 1) {
                            textfield.val(textfield.val() + '\n');
                        }
                    }
                }
            };
            $(this).bind('keyup paste', format);
            format();
        });
    };

    $.fn.textareaformatter.defaults = {
        'width': 3,
        'height': 3,
        'format': true
    };
})(jQuery);