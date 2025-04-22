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
        $('#tentang').load('./views/biodata/biodata.html');
        $('#kontak').load('./views/biodata/biodata.html');
    });
    
})(jQuery);