import quiz from './quiz-data.js';
let buttonSbm = document.querySelector('button[type="submit"]');
let resultAlert = document.createElement('div')
resultAlert.className = "result modal";


function createTest(quiz) {
    const h2 = document.createElement('h2');
    h2.className = "test__title";
    h2.textContent = quiz.title;
    let fragment = document.createDocumentFragment();
    quiz.questions.forEach((el, indexQuestion) => {
        let section = document.createElement('section');
        section.className = "section";
        let h3 = document.createElement('h3');
        h3.textContent = el.question;
        let ul = document.createElement('ul');
        ul.className = "test_list__choices";

        el.choices.forEach((item, index) => {
            let li = document.createElement('li');
            let label = document.createElement('label');
            label.textContent = item;
            let radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', 'answer' + (indexQuestion + 1));
            radio.setAttribute('value', '' + (index + 1));
            label.prepend(radio);
            li.append(label);
            ul.append(li);
        });
        section.append(h3, ul);
        fragment.append(section);
    });
    document.querySelector('form').prepend(h2, fragment, resultAlert);
};
createTest(quiz);

const trueAnswers = quiz.questions.map(el => { return el.answer });
console.log('trueAnswer :', trueAnswers);

buttonSbm.addEventListener('click', checkedTest);
// resultAlert.addEventListener('click', toggleModal)

function checkedTest(e) {
    e.preventDefault();
    let userAnswers = [];
    let checkedInputArr = document.querySelectorAll('input[type=radio]:checked');
    [...checkedInputArr].map(el => {
        userAnswers.push(+el.value)
    })

    console.log('userAnswers :', userAnswers);
    compareAnswer(trueAnswers, userAnswers);

};



function compareAnswer(trueAnswers, userAnswers) {
    let counter = 0;
    let index = 0;
    for (let el of trueAnswers) {
        if (el === userAnswers[index]) {
            counter += 1;
        }
        index += 1;
    }

    if (counter > 4) {
        return resultAlert.textContent = `Success!!! Your result >80%`
    }
    resultAlert.textContent = `Fail!!! Try again...`
}


buttonSbm.onclick = function () {
    resultAlert.style.display = "block";
}

resultAlert.onclick = function () {
    resultAlert.style.display = "none";
}