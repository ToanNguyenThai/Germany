/* Onclick to show mobile list
 */var barIcon = document.querySelector('.myIcon')
var mobileList = document.querySelector('.mobile-list')

barIcon.onclick = function () {
    if (mobileList.classList.contains("show")) {
        mobileList.classList.remove("show")
    } else {
        mobileList.classList.add("show")
    }
}
var mobileItem1 = document.querySelector('#mobile-list-item1')
mobileItem1.onclick = function () {
    if (mobileList.classList.contains("show")) {
        mobileList.classList.remove("show")
    } else {
        mobileList.classList.add("show")
    }
}

var mobileItem2 = document.querySelector('#mobile-list-item2')
mobileItem2.onclick = function () {
    if (mobileList.classList.contains("show")) {
        mobileList.classList.remove("show")
    } else {
        mobileList.classList.add("show")
    }
}

var mobileItem3 = document.querySelector('#mobile-list-item3')
mobileItem3.onclick = function () {
    if (mobileList.classList.contains("show")) {
        mobileList.classList.remove("show")
    } else {
        mobileList.classList.add("show")
    }
}

var mobileItem4 = document.querySelector('#mobile-list-item4')
mobileItem4.onclick = function () {
    if (mobileList.classList.contains("show")) {
        mobileList.classList.remove("show")
    } else {
        mobileList.classList.add("show")
    }
}

const header = document.querySelector('header')
const logo = document.querySelector('.logo')



window.addEventListener("scroll", function () {
    var w = window.innerWidth
    if (w > 1280) {
        var top = this.scrollY

        if (top > 200) {
            header.style.height = '80px'
            logo.style.height = '60px'

        }
        else {
            header.style.height = '100px'
            logo.style.height = '80px'
        }
    }
    else return


}, false);
/* on scroll to specific pixel */
function myScroll(pixel) {

    document.documentElement.scrollTop = pixel;
}