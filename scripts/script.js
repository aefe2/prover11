
document.querySelector('.button1').onclick = function () {
    document.querySelector('#text').style.display = 'none';
};

document.querySelector('.button2').onclick = function () {
    document.querySelector('.button2').hidden = 'true';
};

let field = document.querySelector('.field');
let ball = document.querySelector('.ball');

football = function(event) {
    let ballCord
    ballCord.style.left = 'px';
    ballCord.style.top = 'px';
}

field.addEventListener('click', football)
