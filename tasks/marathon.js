// 1

// Даны 2 строки. В каждой из них необходимо посчитать количество букв "а" и вывести ту строку, в которой таких букв больше.

const firstRow = "мама мыла раму";
const secondRow = "собака друг человекаа";
const CHAR = "а";

function getRow(firstRow, secondRow) {
  let firstResult = counterChar(firstRow, CHAR);
  let secondResult = counterChar(secondRow, CHAR);

  if (firstResult === secondResult) {
    return "Здесь одинаковое количество букв " + CHAR;
  }

  return firstResult > secondResult ? firstRow : secondRow;
}

function counterChar(row, char) {
  let counted = 0;

  for (let i = 0; i < row.length; i++) {
    if (row.charAt(i) === char) {
      counted++;
    }
  }

  return counted;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму



// 2 

/* Есть номер телефона из 12-ти символов: `+71234567890`

Правила форматирования следующие:

- после +7 стоит пробел;
- затем идёт открывающая круглая скобка;
- затем три цифры (код региона);
- затем закрывающая круглая скобка;
- снова пробел;
- три цифры;
- минус;
- две цифры;
- минус;
- две цифры.

Советы по выполнению

- используй функцию для подсчета количества букв в строке;
- используй цикл для перебора букв;
- чтобы перебрать всю строку, воспользуйтесь свойством `.length` у строки;
- чтобы получить символ строки с определенным номером, нужно использовать метод `.charAt()`;

Задание под *

- Напиши функцию так что бы она могла принимать телефон в формате `89211234567`, а возвращать `+7 (921) 123-45-67`
- Напиши функцию, которая может принимать телефон в формате `9211234567` а возвращало в формате `+7 (921) 123-45-67`
- Возвращайте сообщение, что формат функции неверный, если передается что-то непохожее на `+79211234567` или `79211234567` или `89211234567` или `9211234567` 

У нас должна быть функция, которая принимает телефон строкой и возвращает обратно отформатированные телефоны: */

// function formattedPhone(phone) {

// }

// console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90