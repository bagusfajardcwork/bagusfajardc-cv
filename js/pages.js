(function($) {
    "use strict";
    // header
    $(document).ready(function() {
        $('#header').load('./views/components/header.html');
    });

    $(document).ready(function() {
        $('#subpages').load('./views/components/subpages.html');
    });

    $(document).ready(function() {
        $('#pendidikan').load('./views/biodata/index.html');
        $('#keahlian').load('./views/biodata/index.html');
        $('#kontak').load('./views/kontak/index.html');
    });
    
})(jQuery);