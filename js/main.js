var win1 = window.matchMedia("(max-width: 2000px)");
var win2 = window.matchMedia("(max-width: 992px)");
var win3 = window.matchMedia("(max-width: 768px)");
var list_content = document.getElementsByClassName('list__content');
/**
 * function cho nut nhan o Library
 */
function treasure(n) {
    if (win3.matches) {
        if (list_content[n].style.display == "none") {
            list_content[0].style.display = "none";
            list_content[1].style.display = "none";
            list_content[2].style.display = "none";
            list_content[3].style.display = "none";
            list_content[4].style.display = "none";

            list_content[n].style.display = "block";
        } else {
            list_content[n].style.display = 'none';
        }
    };
    if (win2.matches && $('body').width() > 768) {
        if (n > 1) {
            if (list_content[n].style.display == "none") {
                list_content[2].style.display = "none";
                list_content[3].style.display = "none";
                list_content[4].style.display = "none";
                list_content[n].style.display = "block";
            } else {
                list_content[n].style.display = "none";
            }
        }
    }

}

/**
 * Responsive cho Brand Gallery khi thay doi kich thuoc man hinh va co nhan vao chu View All hay View Less
 * Responsive cho Library 
 */
$(window).resize(function () {
    var width = $(window).width();
    if (width >= 992) {
        for (var i = 0; i < 5; i++) {
            list_content[i].style.display = "block";
        };
        document.getElementsByClassName('see__less')[0].style.display = "none";
        document.getElementsByClassName('see__more')[0].style.display = "none";
        var m = document.getElementsByClassName('brand-gallery__item');
        for (var l = 4; l < 7; l++) {
            m[l].style.display = "block";
        };
    }
    if (width < 992 && width >= 768) {
        for (var j = 2; j < 5; j++) {
            list_content[j].style.display = "none";
        }
        list_content[0].style.display = "block";
        list_content[1].style.display = "block";
        document.getElementsByClassName('see__less')[0].style.display = "none";
        document.getElementsByClassName('see__more')[0].style.display = "none";
        var y = document.getElementsByClassName('brand-gallery__item');
        for (var k = 4; k < 7; k++) {
            y[k].style.display = "block";
        };
    }
    if (width < 768) {
        for (var i = 0; i < 5; i++) {
            list_content[i].style.display = "none";
        };
    }
});

