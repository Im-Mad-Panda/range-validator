// Реализовать класс RangeValidator
// У него будет только два свойства, два числа:
// from,
// to

// От и до. Оба числа. "До" не может быть меньше, чем "от".

// Задание:
// 1. Реализовать геттеры и сеттеры для обоих свойств
// 2. Реализовать геттер range, который будет возвращать массив всех целых чисел в заданном этими from-to диапазоне
// 3. Реализовать метод validate, который будет принимать число и проверять, входит ли оно в указанный диапазон чисел, если нет - кидать ошибку.

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  set to(value) {
    if (value >= this._from) {
      this._to = value;
    } else {
      this._to = this._from;
    }
  }
  set from(value) {
    this._from = value;
  }
  get range() {
    const numbers = [];
    for (let i = this._from; i <= this._to; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  validate(value) {
    if (value >= this._from && value <= this._to) {
      return true;
    } else {
      throw new Error('Value is not valid!');
    }
  }
}


