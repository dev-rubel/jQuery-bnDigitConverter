(function ($) {
        $.fn.convertBengaliDigit = function () {
            return this.each(function () {
                if ($(this).is('input')) {
                    $(this).val(convDigit($(this).val()));
                    $(this).keyup(function () {
                        $(this).val(convDigit($(this).val()));
                    });
                }else {
                    $(this).text(convDigit($(this).text()));
                }
                function convDigit(digit) {
                    return digit.replace(/[০-৯]/g, function (substring) {
                        return substring.charCodeAt(0) - 2534;
                    });
                }
            });
        }
    }(jQuery));
