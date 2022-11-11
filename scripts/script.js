//
// document.querySelector('.button1').onclick = function () {
//     document.querySelector('#text').style.display = 'none';
// };
//
// document.querySelector('.button2').onclick = function () {
//     document.querySelector('.button2').hidden = 'true';
// };
//
// let field = document.querySelector('.field');
// let ball = document.querySelector('.ball');
//
// football = function(event) {
//     let ballCord
//     ballCord.style.left = 'px';
//     ballCord.style.top = 'px';
// }
//
// field.addEventListener('click', football)


let anchor = document.querySelector('.anchor');
let elem = document.querySelector('.elem');
let container = document.querySelector('.container');
let anchorCords = anchor.getBoundingClientRect();

function positionAt(e) {
    //сверху
    if(e.clientY < anchorCords.top && e.clientX > anchorCords.left && e.clientX < anchorCords.left + anchor.offsetWidth) {
        elem.style.top = anchorCords.top - elem.offsetHeight - 5 + 'px';
        elem.style.left = anchorCords.left - elem.offsetWidth + elem.offsetWidth / 2 + anchor.offsetWidth / 2 + 'px';
    }
    //справа
    else if(e.clientX > anchorCords.left + anchor.offsetWidth) {
        elem.style.top = anchorCords.top + 'px';
        elem.style.left = anchorCords.left + anchor.offsetWidth +  5 +'px';
    }
    //снизу
    else if(e.clientY > anchorCords.top + anchor.offsetHeight) {
        elem.style.top = anchorCords.top + anchor.offsetHeight + 5 +'px';
        elem.style.left = anchorCords.left - elem.offsetWidth + elem.offsetWidth / 2 + anchor.offsetWidth / 2 + 'px';
    }
    //слева
    else if(e.clientX < anchorCords.left) {
        elem.style.top = anchorCords.top + 'px';
        elem.style.left = anchorCords.left - elem.offsetWidth - 5 + 'px';

    }
}

container.addEventListener('mousemove', positionAt);