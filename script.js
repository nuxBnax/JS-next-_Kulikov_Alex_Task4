// 1. При изменении значения в input с id="from", значение содержащееся в
//  нем должно моментально отображаться в span. То есть при печати в inputе
//  тег span также должен меняться.

const inputElem = document.querySelector('#from');
const spanElem = document.querySelector('span');
inputElem.addEventListener('input', () => {
    spanElem.textContent = inputElem.value;
});


// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const btnEl = document.querySelector('.messageBtn');
const divEl = document.querySelector('.message');

btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    divEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    divEl.style.visibility = 'visible';
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
// Если какое-либо поле не заполнено, форма не должна отправляться, также должны
// быть подсвечены незаполненные поля (необходимо поставить класс error
// незаполненным полям). Как только пользователь начинает заполнять какое-либо
// поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const buttonEl = formEl.querySelector('button');
const inputEls = document.querySelectorAll('.form-control');

buttonEl.addEventListener('click', (e) => {
    let emptyField = false;
    e.preventDefault();
    inputEls.forEach(item => {
        if (item.value === '') {
            item.classList.add('error');
            emptyField = true;
            item.style.border = "3px solid red";
        } else if (item.value !== '') {
            item.classList.remove('error');
            item.style.border = "3px solid green";
        }
    });
    if (emptyField === false) {
        formEl.submit();
    }
});



