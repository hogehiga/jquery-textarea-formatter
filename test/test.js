$(function() {
    $('.textarea1').textareaformatter();
    $('.textarea2').textareaformatter();
    $('.textarea3').textareaformatter();
    $('.textarea4').textareaformatter();
    $('.textarea5').textareaformatter({width: 1, height: 1});
    $('.textarea6').textareaformatter({format: false});

    test('If textarea is empty, do nothing.', function() {
        equal($('.textarea1').val(), '');
    });
    test('If a line has number of chars over width, that line is formatted with newline.', function() {
        equal($('.textarea2').val(), 'ddd\nddd');
    });
    test('If a line has number of chars less than width, that line show as it is.', function() {
        equal($('.textarea3').val(), 'dd\nd\ndd');
    });
    test('If number of lines over height, the excess rows is deleted.', function() {
        equal($('.textarea4').val(), 'dd\ndff\ndd');
    });
    test('Width and height can be overridden.', function() {
        equal($('.textarea5').val(), 'd');
    });
    test('You can Inhibit formatting with options override.', function() {
        equal($('.textarea6').val(), 'abcdef');
    });
});