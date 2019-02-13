'use strict';

let imagesArr = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png',
    'images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png',
    'images/16.png','images/17.png','images/18.png','images/19.png','images/20.png'];
let namesArr = ['СУШИМАН','ФИРМЕННАЯ', 'СУПРИМ', 'ГАВАИ', 'ПАРМА', 'НЕАПОЛИТАНО', 'ПРОШУТТО', 'ГЕТЬМАНСКАЯ', 'ИТАЛЬЯНСКАЯ',
    'ПАПЕРОНИ', 'ФРУТТО ДЕ МАРЕ', 'ОХОТНИЧЬЯ', 'ЛАГУНА', 'ПРОШУТТО', 'ТРИ СЫРА', 'МАРГАРИТА', 'КОПЧЁНАЯ КУРИЦА',
    'МОНТАНАРА', 'ВЕНЕЦИАНСКАЯ', 'ПАПЕРЧИЛИ'];
let productsArr = ['Соус "унаги", угорь, окунь морской, семга, авокдо, сыр моцарелла, оливки','основа, фирменный соус "Пицца Хата", ветчина свиная, салями, ветчина куриная, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", ветчина свиная, салями, бекон, креветки, специи, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", курица, специи, сыр "Моцарелла", кукуруза, ананас, помидор',
    'основа, фирменный соус "Пицца Хата", бекон, лук, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", курица, специи, сыр "Моцарелла", кукуруза, ананас, помидор',
    'основа, фирменный соус "Пицца Хата", курица, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", аджика, куриное филе, свинина отварная, говядина отварная, лук, специи, сыр "Моцарелла", помидор, зелень',
    'основа, сливки кулинарные, шинка "Пармская", руккола, помидоры черри, крем - сыр, сыр "Пармезан", сыр "Моцарелла"',
    'основа, фирменный соус "Пицца Хата", салями, специи, сыр "Моцарелла", помидор,маслины',
    'основа, фирменный соус "Пицца Хата", морской коктейль, специи, сыр "Моцарелла", помидор, перец, маслины',
    'основа, фирменный соус "Пицца Хата", охотничьи колбаски, чернослив, огурцы маринованные, сыр "Моцарелла"',
    'основа, сливки кулинарные, креветки, специи, сыр "Моцарелла", сыр "Пармезан"',
    'основа, фирменный соус "Пицца Хата", курица, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", специи, сыр "Гауда", сыр "Рокфор", сыр "Пармезан"',
    'основа, фирменный соус "Пицца Хата", сыр "Моцарелла", специи, помидор',
    'основа, соус пикантный, копчёная курица, огурцы маринованные, специи, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", грибы свежие, специи, сыр "Моцарелла", помидор, перец, маслины',
    'основа, фирменный соус "Пицца Хата", рыба красная, лук, специи, лимонный сок, укроп, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", аджика грузинская, охотничьи колбаски, салями, специи, чили, сыр "Моцарелла", помидор'];

let caloriesOfProducts = new Map([
    ['Соус "унаги"',  10], ['Угорь',  40], ['окунь морской',  60], ['семга',  50], ['авокдо',  10],  ['сыр моцарелла',  60],
    ['оливки',  80],  ['основа',  50],  ['фирменный соус "Пицца Хата"',  20], ['ветчина свиная',  60], ['салями',  80],['ветчина куриная',  60], ['грибы свежие',  30], ['специи',  5], ['сыр "Моцарелла"',  40], ['помидор',  20], ['маслины',  80], ['бекон',  90], ['креветки',  50],
    ['курица',  45], ['кукуруза', 40],['ананас', 30],['лук', 10],['аджика', 5], ['куриное филе', 40],['свинина отварная',  40], ['говядина отварная',  40],
    ['зелень', 3], ['сливки кулинарные',  6], ['шинка "Пармская"',  80], ['руккола',  10], ['помидоры черри',  16], ['крем - сыр',  7],
    ['сыр "Пармезан"',  55], ['морской коктейль',  45], ['перец',  3], ['охотничьи колбаски',  55], ['чернослив',  6], ['огурцы маринованные',  7],
    ['сыр "Гауда"',  60], ['сыр "Рокфор"',  60], ['соус пикантный',  20], ['копчёная курица',  50],
    ['рыба красная',  60],['лимонный сок',  2], ['укроп',  1], ['аджика грузинская',  6],
    ['чили',  7],
]);

let priceOfProducts = new Map([
    ['Соус "унаги"',  15], ['Угорь',  60], ['окунь морской',  50], ['семга',  80], ['авокдо',  30],  ['сыр моцарелла',  80],
    ['оливки',  60],  ['основа',  75],  ['фирменный соус "Пицца Хата"',  55], ['ветчина свиная',  20], ['салями', 55],['ветчина куриная',  10], ['грибы свежие',  10],
    ['специи',  5], ['сыр "Моцарелла"',  60], ['помидор',  5], ['маслины',  40], ['бекон',  65], ['креветки',  58],
    ['курица',  42], ['кукуруза', 22],['ананас', 22],['лук', 88],['аджика', 4], ['куриное филе', 85],['свинина отварная',  53], ['говядина отварная',  25],
    ['зелень', 5], ['сливки кулинарные',  4], ['шинка "Пармская"',  8], ['руккола',  78], ['помидоры черри',  58], ['крем - сыр',  5],
    ['сыр "Пармезан"',  85], ['морской коктейль',  52], ['перец',  9], ['охотничьи колбаски',  45], ['чернослив',  10], ['огурцы маринованные',  20],
    ['сыр "Гауда"',  45], ['сыр "Рокфор"',  20], ['соус пикантный',  42], ['копчёная курица',  85],
    ['рыба красная',  75],['лимонный сок',  1], ['укроп',  1], ['аджика грузинская',  5],
    ['чили',  10],
]);


let priceArr = [];

for (let i = 0; i <productsArr.length; i++) {
    let tmp = 0;
    for (let j of priceOfProducts.keys()) {
        if (productsArr[i].toUpperCase().indexOf(j.toUpperCase()) != -1) {
            tmp += priceOfProducts.get(j);
        }
    }
    priceArr.push(tmp+' грн');
}

let caloriesArr = [];

for (let i = 0; i <productsArr.length; i++) {
    let tmp = 0;
    for (let j of caloriesOfProducts.keys()) {
        if (productsArr[i].toUpperCase().indexOf(j.toUpperCase()) != -1) {
            tmp += caloriesOfProducts.get(j);
        }
    }
    caloriesArr.push(tmp+' ккал');
}

function parseHTML (someString) {
    const parse = new DOMParser().parseFromString(someString, 'text/html');
    return parse.body.children;
}
/**************************/
let allSection = document.querySelector('main > div:nth-child(3)');
for (let i =0; i <20; i++){
    let divAbout = document.createElement('div');
    divAbout.classList.add('about-pizza');
    divAbout.classList.add('flip-container');
    allSection.appendChild(divAbout);
}
/**************************/

/******************/
function buildUnint(un) {
    for (let i = 0; i < 20; i++) {
        const unit = `<img src=${imagesArr[i]} alt="pizza">
<div>${namesArr[i]}</div>
            <div class="list-hide ins">
           
            </div>
            <div class="list-hide">${caloriesArr[i]}</div>
            <div>${priceArr[i]}</div>`;

        for (let j = 0; j < 5; j++)
            un[i].appendChild(parseHTML(unit)[j]);
    }
}

function buildPage() {
    let unint = document.getElementsByClassName('about-pizza');

    for (let i = 0; i < unint.length; i++) {
        let emptyDiv = document.createElement('div');
        let divNo = document.createElement('div');
        divNo.classList.add('no-display');
        divNo.classList.add('open');
        emptyDiv.appendChild(divNo);
        unint[i].appendChild(emptyDiv);
    }

    let unints = document.querySelectorAll('.about-pizza div.no-display');
    buildUnint(unints);
    let about1 = document.querySelectorAll('.about-pizza>div');

    for (let i = 0; i < about1.length; i++) {
        let div = document.createElement('div');
        div.className = 'cover';
        let img = document.createElement('img');
        img.src = 'images/turn.png';
        img.className='turn';
        div.appendChild(img);
        about1[i].insertBefore(div, about1[i].firstChild);
    }

    let productA = [];
    for (let i = 0; i < productsArr.length; i++)
        productA = productA.concat(productsArr[i].split(','));

    let masL = [];
    for (let o = 0; o < productsArr.length; o++) {
        masL.push(productsArr[o].split(',').length);
    }

    for (let j = 0; j < 20; j++) {
        let par = document.getElementsByClassName('ins')[j];

        for (let i = 0; i < productsArr[j].split(',').length; i++) {
            let label = document.createElement('label');
            let input = document.createElement('input');
            let br = document.createElement('br');
            input.setAttribute('type', 'checkbox');
            input.checked = true;

            for (let k of caloriesOfProducts.keys()) {
                if (productsArr[j].split(',')[i].toUpperCase().indexOf(k.toUpperCase()) != -1) {
                    let t = caloriesOfProducts.get(k);
                    input.setAttribute('data-calories', t);
                }
            }
            for (let k of priceOfProducts.keys()) {
                if (productsArr[j].split(',')[i].toUpperCase().indexOf(k.toUpperCase()) != -1) {
                    let t = priceOfProducts.get(k);
                    input.setAttribute('value', t);
                }
            }

            label.appendChild(input);
            label.appendChild(document.createTextNode(productsArr[j].split(',')[i]));
            label.appendChild(br);
            par.appendChild(label);
        }
    }
}

/****************************************************/
function startFlip() {
    let menu = document.getElementsByClassName('menu-for-grid')[0];
    menu.addEventListener('click', (e) => {

        if (e.target.tagName != 'IMG' && e.target.className !='turn' ) {
            return;
        }
        let flip = e.target.parentElement.parentElement.parentElement;

        let fl1 = document.getElementsByClassName('flipper')[0];
        if (fl1 != undefined) {
            fl1.className = '';
        }

        let fr1 = document.getElementsByClassName('front')[0];
        if (fr1 != undefined) {
            fr1.className = 'cover';
        }
        let bc1 = document.getElementsByClassName('back')[0];
        if (bc1 != undefined) {
            bc1.className = 'no-display open';
        }

        flip.firstElementChild.classList = 'flipper';
        let front = document.querySelector('div.flipper > div.cover');

        let back = document.querySelector('.flipper > div.open');//ALL

        front.className = 'front';
        back.className = 'back';

    });


    menu.addEventListener('click', (event) => {
        if (event.target.tagName != 'INPUT'){ return;}
        let pr = document.getElementsByClassName('price-first')[0];
        if (pr != undefined) {
            pr.className = '';
        }

        let priceFirst = document.querySelector('div.back div:nth-child(5)');//4

        priceFirst.classList.add('price-first');

        let lastPrice = document.getElementsByClassName('price-first')[0];
        let lastCalories = lastPrice.previousElementSibling;

        let inputs = document.querySelectorAll(' div.back div.list-hide label>input');

        let price = 0;
        let calorie = 0;
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].checked) {
                price += parseInt(inputs[i].value);
                calorie += parseInt(inputs[i].dataset.calories);
            }
        }
        lastPrice.innerHTML = price + ' грн';
        lastCalories.innerHTML = calorie + ' ккал';

    });
}
/*****************************************************/

let choose = document.getElementById('choose');
let chooseNum;
choose.addEventListener('click', (event)=> {

    if (chooseNum != undefined) {

        let main = document.getElementsByTagName('main')[0];
        main.classList.add('no-display');
        let filter1 = document.querySelector('main > div:nth-child(1)');
        filter1.classList.add('no-display');
        let filter2 = document.querySelector('main > div:nth-child(2)');
        filter2.classList.add('no-display');

        document.getElementById('filter-value-for-grid').value = null;

        let radios = document.getElementsByName('filter');
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

        let clear = document.querySelector('main > div:nth-child(3)');
        clear.innerHTML = '';

        for (let i = 0; i < 20; i++) {
            let divs = document.createElement('div');
            divs.className = 'about-pizza';
            clear.appendChild(divs);
        }
    }

    if (event.target.id != 'grid') chooseNum = 2;
    else chooseNum = 1;


    if (chooseNum == 1) {
        buildPage();

        let noDisplayOne = document.getElementsByClassName('no-display')[0];
        let noDisplayTwo = document.getElementsByClassName('no-display')[1];
        noDisplayOne.className = '';
        noDisplayTwo.className = '';
        let menu = document.querySelector('main div:nth-child(3)');
        menu.className = 'menu-for-grid';
        let about = menu.children;
        for (let i = 0; i < about.length; i++) {
            about[i].className = 'about-pizza-for-grid flip-container';
        }

        let divFilter = document.querySelector('main > div:nth-child(1)');
        divFilter.addEventListener("click", event => {
            if (event.target.tagName != 'BUTTON') return;
            let filterVal = document.getElementById('filter-value-for-grid').value;
            for (let i = 0; i < about.length; i++) {
                if (about[i].classList.contains('no-display')) {
                    about[i].classList = 'about-pizza-for-grid flip-container';
                }
            }
            filterByIngredient(filterVal);
        });
        divFilter.addEventListener("keyup", event => {
            if (event.target.tagName != 'INPUT') return;
            if (event.keyCode != 13) return;
            let filterVal = document.getElementById('filter-value-for-grid').value;
            for (let i = 0; i < about.length; i++) {
                if (about[i].classList.contains('no-display')) {
                    about[i].classList = 'about-pizza-for-grid flip-container';
                }
            }
            filterByIngredient(filterVal);
        });

        let filterByIngredient = (ingr) => {

            for (let i = 0; i < productsArr.length; i++) {
                if (productsArr[i].indexOf(ingr) == -1) {
                    about[i].className = 'no-display';
                }
            }
        };
        startFlip();

    } else if (chooseNum == 2) {
        let unints = document.getElementsByClassName('about-pizza');
        buildUnint(unints);

        let noDisplayOne = document.getElementsByClassName('no-display')[0];
        let noDisplayTwo = document.getElementsByClassName('no-display')[2];
        noDisplayOne.className = '';
        noDisplayTwo.className = '';
        let menu = document.querySelector('main div:nth-child(3)');
        let about = menu.children;
        let hide = [];
        for (let i = 0; i < about.length; i++) {
            about[i].className = 'about-pizza-for-list';
            hide.push(about[i].children[2]);
            hide.push(about[i].children[3]);
        }
        for (let i = 0; i < hide.length; i++) {
            hide[i].className = 'list-hide-for-list';
        }

        let separ = document.querySelectorAll('.about-pizza-for-list div:nth-child(2)');
        for (let i = 0; i < separ.length; i++) {
            separ[i].innerHTML += ' ,&nbsp';
        }


        let button = document.getElementById('run-for-list');

        button.addEventListener("click", () => {

            let radios = document.getElementsByName('filter');
            let filter;
            for (let i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    filter = radios[i].value;
                    break;
                }
            }

            about = [].slice.call(about, 0);/*in array*/
            let parent = about.map(function (el) {
                return el.parentNode;
            });

            if (filter == 'priceToCheap') {
                about.sort((a, b) => {
                    return parseInt(b.children[4].textContent) - parseInt(a.children[4].textContent);
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            } else if (filter == 'priceToExpensive') {
                about.sort((a, b) => {
                    return parseInt(a.children[4].textContent) - parseInt(b.children[4].textContent);
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            } else if (filter == 'nameToZ') {
                about.sort((a, b) => {
                    return (b.children[1].textContent.toLowerCase().localeCompare(a.children[1].textContent.toLowerCase()));
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            } else if (filter == 'nameToA') {
                about.sort((a, b) => {
                    return (a.children[1].textContent.toLowerCase().localeCompare(b.children[1].textContent.toLowerCase()));
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            }
        });
    }
});

