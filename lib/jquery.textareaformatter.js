;(function($){
    $.fn.textareaformatter = function(_options) {
        var options = $.extend({}, $.fn.textareaformatter.defaults, _options);

        return this.each(function() {
            var textfield = $(this);
            var format = function() {
                if (options.format) {
                    var origpos = $(textfield).caret();
                    var origarr = textfield.val().split('\n');
                    var newarr = [];
                    for (var i = 0; i < origarr.length; i++) {
                        var k = origarr[i];
                        do {
                            newarr.push(k.substring(0, options.width));
                            k = k.substring(options.width);
                        } while (k.length > 0)
                    }
                    textfield.val('');
                    for (var j = 0; j < options.height && j < newarr.length; j++) {
                        textfield.val(textfield.val() + newarr[j]);
                        if (j < newarr.length - 1 && j < options.height - 1) {
                            textfield.val(textfield.val() + '\n');
                        }
                    }
                    textfield.caret(origpos);
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
