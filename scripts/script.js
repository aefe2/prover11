//2 самостоялка
// let arr = [];
// let res = [1, 2, 3, 4, 5]
//
// menu();
//
// function menu() {
//
//     let answer = +prompt("1 - закончить\n" +
//         "2 - вывод массива\n" +
//         "3 - добавить объект\n" +
//         "4 - поиск объектов\n" +
//         "5 - сортировка массива");
//
//     switch (true) {
//         case answer == 0:
//             break;
//         case String(answer) === '0':
//             alert('Пустое поле')
//             break;
//         case Number(answer) === res[0]:
//             break;
//         case Number(answer) === res[1]:
//             printArr();
//             break;
//         case Number(answer) === res[2]:
//             let book = new MakeBook();
//             break;
//         case Number(answer) === res[3]:
//             searchObj();
//             break;
//         case Number(answer) === res[4]:
//             sortArr();
//             break;
//         case !res.includes(answer):
//             if (isNaN(answer)) alert('Вы ввели не число')
//             else alert('Введено неверное число');
//             menu()
//             break;
//         default:
//             alert('Ошибка')
//             menu()
//             break;
//     }
// }
//
// function MakeBook() {
//     this.bookName = prompt('Book name');
//     this.author = {
//         lastName: prompt("Author's last name"),
//         firstName: prompt("Author's first name"),
//     };
//     this.releaseDate = date();
//     this.publishing = prompt('Publishing name');
//     this.price = cost();
//     arr.push(this);
//     menu()
// }
//
// function cost() {
//     let price = +prompt('Book price', '999');
//     if (isNaN(price) || !price) return 0;
//     else return price;
// }
//
// function date() {
//     let a = +prompt('Release date', '1902');
//     if (isNaN(a) || a > 2022 || !a) return 0;
//     else return a;
// }
//
// function printArr() {
//     console.table(arr)
//     menu()
// }
//
// function searchObj() {
//     let search = prompt('Введите св-во поиска');
//     let value = prompt('Введите значение св-ва');
//     for (let item of arr) {
//         if (item[search] == value) console.log(item);
//     }
//     menu()
// }
//
// function sortArr() {
//     let property = prompt('Введите св-во сортировки, bookName, price');
//     if (property === 'bookName') {
//         arr.sort(function (a, b) {
//             if (a.bookName.toLowerCase() > b.bookName.toLowerCase()) return 1;
//             if (a.bookName.toLowerCase() < b.bookName.toLowerCase()) return -1;
//             else return 0;
//         });
//     } else if (property === 'price') {
//         arr.sort(function (a, b) {
//             if (a.price > b.price) return 1;
//             if (a.price < b.price) return -1;
//             else return 0;
//         });
//     }
//
//     console.table(arr)
//     menu()
// }

//11
// document.querySelector('.button1').onclick = function () {
//     document.querySelector('#text').hidden = 'true';
// };
//
// document.querySelector('.button2').onclick = function () {
//     document.querySelector('.button2').hidden = 'true';
// };
//
// let field = document.querySelector('.field');
// let fieldCords = field.getBoundingClientRect();
// let ball = document.querySelector('.ball');
// let ballCords = {};
//
// function football(e) {
//     ballCords.left = e.clientX - ball.offsetWidth / 2;
//     ballCords.top = e.clientY - ball.offsetHeight / 2;
//     //left
//     if (ballCords.left < fieldCords.left + field.clientLeft) {
//         ballCords.left = fieldCords.left + field.clientLeft;
//     }
//     //right
//     if (ballCords.left + ball.offsetWidth > fieldCords.left + field.clientWidth) {
//         ballCords.left = fieldCords.left + field.offsetWidth - ball.offsetWidth - field.clientLeft;
//     }
//     //top
//     if (ballCords.top < fieldCords.top + field.clientTop) {
//         ballCords.top = fieldCords.top + field.clientTop;
//     }
//     //bottom
//     if (ballCords.top + ball.offsetHeight > fieldCords.top + field.clientHeight) {
//         ballCords.top = fieldCords.top + field.offsetHeight - ball.offsetHeight - field.clientTop;
//     }
//     ball.style.left = ballCords.left + 'px';
//     ball.style.top = ballCords.top + 'px';
// }
//
// field.addEventListener('click', football)

//10aya
// let anchor = document.querySelector('.anchor');
// let elem = document.querySelector('.elem');
// let container = document.querySelector('.container');
// let anchorCords = anchor.getBoundingClientRect();
//
// function positionAt(e) {
//     //сверху
//     if(e.clientY < anchorCords.top && e.clientX > anchorCords.left && e.clientX < anchorCords.left + anchor.offsetWidth) {
//         elem.style.top = anchorCords.top - elem.offsetHeight - 5 + 'px';
//         elem.style.left = anchorCords.left - elem.offsetWidth + elem.offsetWidth / 2 + anchor.offsetWidth / 2 + 'px';
//     }
//     //справа
//     else if(e.clientX > anchorCords.left + anchor.offsetWidth) {
//         elem.style.top = anchorCords.top + 'px';
//         elem.style.left = anchorCords.left + anchor.offsetWidth +  5 +'px';
//     }
//     //снизу
//     else if(e.clientY > anchorCords.top + anchor.offsetHeight) {
//         elem.style.top = anchorCords.top + anchor.offsetHeight + 5 +'px';
//         elem.style.left = anchorCords.left - elem.offsetWidth + elem.offsetWidth / 2 + anchor.offsetWidth / 2 + 'px';
//     }
//     //слева
//     else if(e.clientX < anchorCords.left) {
//         elem.style.top = anchorCords.top + 'px';
//         elem.style.left = anchorCords.left - elem.offsetWidth - 5 + 'px';
//
//     }
// }
//
// container.addEventListener('mousemove', positionAt);

//13
// let slideArea = document.createElement('div');
// slideArea.style.position = 'absolute';
// slideArea.style.width = '400px';
// slideArea.style.height = '20px';
// slideArea.style.top = '20%'
// slideArea.style.left = '20%'
// slideArea.style.backgroundColor = 'lightslategray';
// slideArea.style.borderRadius = '50px';
// document.body.append(slideArea);
//
// let ball = document.createElement('div');
// ball.style.position = 'absolute';
// ball.style.width = '40px';
// ball.style.height = '40px';
// ball.style.top = '19%';
// ball.style.left = '20.3%';
// ball.style.backgroundColor = 'darkslateblue';
// ball.style.borderRadius = '50px';
// document.body.append(ball);
//
// ball.onmousedown = function (event) {
//     event.preventDefault();
//
//     let shiftX = event.clientX - ball.getBoundingClientRect().left;
//
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseup', onMouseUp);
//
//     function onMouseMove(event) {
//         let newLeft = event.clientX - shiftX - slideArea.getBoundingClientRect().left;
//
//         // курсор вышел из слайдера => оставить бегунок в его границах.
//         if (newLeft < 0) {
//             newLeft = 0;
//         }
//         let rightEdge = slideArea.offsetWidth + slideArea.offsetLeft - ball.offsetWidth - 5;
//         if (newLeft > rightEdge) {
//             newLeft = rightEdge;
//         }
//
//         ball.style.left = newLeft + 'px';
//     }
//
//     function onMouseUp() {
//         document.removeEventListener('mouseup', onMouseUp);
//         document.removeEventListener('mousemove', onMouseMove);
//     }
//
// };
//
// ball.ondragstart = function () {
//     return false;
// };

//12
let ul = document.querySelector('ul');
let list = document.querySelectorAll('li');
for (let liElem of list) {
    liElem.style.cursor = 'pointer';
}

ul.onclick = function (event) {
    if (event.target.tagName != "LI") return;

    if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }

}

// предотвращает ненужное выделение элементов списка при клике
ul.onmousedown = function () {
    return false;
};

function toggleSelect(li) {
    li.classList.toggle('selected');
}

function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for (let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}