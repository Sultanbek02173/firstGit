// let, const и блочная область видимости
{
    var num = 10;

    let num1 = 20;
    const num2 = 20;
    num = num + 15;
    console.log(num1);
    console.log(num2);
}

console.log(num);
// console.log(num1);
// console.log(num2);


// Стрелочные функции. Параметры по умолчанию

const foo = (a = 0) => {
    return a + 5;
}

console.log(foo());

// let a;
// console.log(a);

// Spread / Rest оператор

const dog = (...par) =>{
    return par
}

console.log(dog(1, 2, 3, 4, 5));

let mas1 = [1, 2, 3, 4, 5]
let mas2 = [...mas1, 11, 22, 33, ]

console.log(mas2);

// Деструктуризация массивов и объектов
const bar = () => {
    return [1, 2, 3, 4]
}

let mas5 = [1, 2, 3]
let [a1, a2, a3] = mas5;

console.log(a3);

let [m1, m2, m3, m4] = bar();

// let m1 = bar()[0];
// let m2 = bar()[1];
// let m3 = bar()[2];
// let m4 = bar()[3];
console.log(m1 + 1, m2 - 2, m3 * 2, m2 / 2);

const brif = () => {
    return {
        x: 11,
        y: 22,
        z: 33,
    }
}

let {x: b1, y: b2, z: b3} = brif();

console.log(b1);


// Строковые шаблоны и разделители

let get = 12;

console.log('sacasc', get, 'ascsa');
console.log(`aascsc ${get} sadsad ${get}`);
