/*
- Знайти та вивести довижину настипних стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до великого регістру наступні стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'
- Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']



- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]


- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

описати колоду карт
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше


{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}


Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/

/*****************************************************************/

consolex.header(`- Знайти та вивести довижину настипних стрінгових значень
  'hello world', 'lorem ipsum', 'javascript is cool'`);
{
    ['hello world', 'lorem ipsum', 'javascript is cool'].forEach(
        (value, index) => consolex.log('%d. Стрінгове значення %s, має довжину %d',
            index + 1, '"' + value + '"', value.length)
    );
}

/*****************************************************************/

consolex.header(`- Перевести до великого регістру наступні стрінгові значення
  'hello world', 'lorem ipsum', 'javascript is cool'`);
{
    ['hello world', 'lorem ipsum', 'javascript is cool'].forEach(
        (value, index) => consolex.log('%d. %s -> %s',
            index + 1, '"' + value + '"', '"' + value.toUpperCase() + '"')
    );
}

/*****************************************************************/

consolex.header(`- Перевести до нижнього регістру настипні стрінгові значення
  'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'`);
{
    ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'].forEach(
        (value, index) => consolex.log('%d. %s -> %s',
            index + 1, '"' + value + '"', '"' + value.toLowerCase() + '"')
    );
}

/*****************************************************************/

consolex.header(`- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.`);
{
    let str = ' dirty string   ';
    consolex.log('%s -> %s', '"' + str + '"', '"' + str.trim() + '"');
}

/*****************************************************************/

consolex.header(`- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
  let str = 'Ревуть воли як ясла повні';
  let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']`);
{
    const stringToarray = str => str.split(' ');
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); // ['Ревуть', 'воли', 'як', 'ясла', 'повні'];
    consolex.log('Маємо рядок %s', '"' + str + '"');
    consolex.log('Отримаємо масив', arr);
}

/*****************************************************************/

consolex.header(`- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
  за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.`);
{
    let numbers = [10,8,-7,55,987,-1011,0,1050,0];
    consolex.log('Маємо масив', numbers);
    /*
      Думаю, що постановка задання не досить точна "перетворити всі об'єкти в масиві на стрінгові".
      Перетворити, то значить вносити зміни в масив, який вже існує на початку.
      За домомогою .map() ми змушені створити новий масив. І після цього, початковий масив буде
      перезаписаний отримаманим через .map() новим масивом
    */
    numbers = numbers.map(value => '' + value);
    consolex.log('Після змін', numbers);
}

/*****************************************************************/

consolex.header(`- створити функцію sortNums(direction), яка прймає масив чисел, 
  та сортує його від більшого до меньшого, або навпаки в залежності 
  від значення аргументу direction.
    let nums = [11,21,3];
    
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]`);
{
    // У випадку, якщо numbers - не масив, то результат функції - null
    // У випадку, якщо direction не задане, або значення не відповідає
    //  значенням ['ascending', 'descending'], то сортування буде 'ascending'
    // В принципі, функція може не повертати нічого, оскільки масиви передаються у функцію за посиланням.
    // Таким чином, зміни у функції застосуються і до зовнішнього масиву, який був заданий у якості аргументу
    const sortNums = function(numbers, direction = 'ascending') {
        if(Array.isArray(numbers)) {
            return numbers.sort(
                (direction === 'descending') ?
                    (a, b) => b - a :
                    (a, b) => a - b
            );
        } else
            return null;
    }
    let nums = [11,21,3];
    consolex.log('Маємо масив', nums);
    sortNums(nums,'ascending') // [3,11,21]
    consolex.log('Сортований масив direction=\'ascending\'', nums);
    sortNums(nums,'descending') // [21,11,3]
    consolex.log('Сортований масив direction=\'descending\'', nums);
}

/*****************************************************************/

consolex.header(`- є масив
  let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
  ];
  -- відсортувати його за спаданням за monthDuration
  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців`);
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    consolex.log('Маємо масив:');
    consolex.log(coursesAndDurationArray);
    consolex.log('-- відсортувати його за спаданням за monthDuration:');
    coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
    consolex.log(coursesAndDurationArray);

    consolex.log('-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців:');
    const coursesGreaterThenFive = coursesAndDurationArray.filter(value => value.monthDuration > 5);
    consolex.log(coursesGreaterThenFive);
}

/*****************************************************************/

consolex.header(`описати колоду карт
  - знайти піковий туз
  - всі шістки
  - всі червоні карти
  - всі буби
  - всі трефи від 9 та більше
  
  {
      cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
          value: '', // '6'-'10', 'ace','jack','queen','king','joker'
      color:'', // 'red','black'
  }`);

/*
    В цій задачі я допустив, що 'joker' - має масть. Насправді, він має лише колір.
    Тобто джокерів може бути лише два: червоний та чорний.
    Але, у випадку, якщо джокер не матиме масті, то умова задачі із використанням reduce,
    яка реалізована нижче, буде некоректною, оскільки, там ідеться про пакування ВСІХ карт за мастями.
    Тобто, якщо джокер - не матиме масті, то він не потрапить у жоден із запропонованих
    масивів: spades:[], diamonds:[], hearts:[], clubs:[]
*/
const cardSuites = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
const cardDeck = [];
cardSuites.forEach(cardSuit => {
    cardValues.forEach(cardValue => cardDeck.push(
        {
            cardSuit: cardSuit, // 'spade', 'diamond','heart', 'clubs'
            value: cardValue, // '6'-'10', 'ace','jack','queen','king','joker'
            color: ['diamond', 'heart'].includes(cardSuit) ? 'red' : 'black', // 'red','black'
        }
    ))
})
consolex.log('Описана колода карт:');
consolex.log(cardDeck);
consolex.log('- знайти піковий туз:');
consolex.log(cardDeck.find(card => card.cardSuit === 'spade' && card.value === 'ace'));
consolex.log('- всі шістки:');
consolex.log(cardDeck.filter(card => card.value === '6'));
consolex.log('- всі червоні карти:');
consolex.log(cardDeck.filter(card => card.color === 'red'));
consolex.log('- всі буби:');
consolex.log(cardDeck.filter(card => card.cardSuit === 'diamond'));
consolex.log('- всі трефи від 9 та більше:');
consolex.log(cardDeck.filter(card => card.cardSuit === 'clubs' && cardValues.indexOf(card.value) >= 3));

/*****************************************************************/

consolex.header(`Додатково по reduce
  Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
  {
      spades:[],
      diamonds:[],
      hearts:[],
      clubs:[]
  }`);

const cardPack = {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
}
/*
  Назва масті карти буде грати роль ключа масиву packNames, у якому розписана
  відповідність назви масті до назви контейнера, у який потрібно вносити карту.
*/
const packNames = {
    'spade': 'spades',
    'diamond': 'diamonds',
    'heart': 'hearts',
    'clubs': 'clubs'
}
consolex.log('- попакувані всі карти по "мастях":');

/*
  Стрілкова функція, яка використана нижче в cardDeck.reduce() використовує конструкцію "A && B".
  При цьому, складові значення не є falsy. У такому випадку результатом виразу буде значення останнього значення.
  Якщо array.push() повертає нову довжину масиву, а нам потрібно вернути сам масив, то ми можемо застосувати
  вираз типу "A && B" для того, щоб тіло функції було більш компактним
*/
cardDeck.reduce((pack, card) => pack[packNames[card.cardSuit]].push(card)/* returns new length */ && pack, cardPack);
consolex.log(cardPack);

