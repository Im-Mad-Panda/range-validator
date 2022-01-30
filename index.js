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
  static #from = 0;
  static #to = 0;
  static get to() {
    return this.#to;
  }
  static get from() {
    return this.#from;
  }
  static set to(value) {
    if (value >= this.#from) {
      this.#to = value;
    } else {
      this.#to = this.#from;
    }
  }
  static set from(value) {
    this.#from = value;
  }
  static get range(){
      const numbers = []
      for (let i = this.#from; i <= this.#to; i++) {
        numbers.push(i)
      }
      return numbers
  }
  static validate(value){
    if (this.range.includes(value)) {
        return true
    } else {
        throw new Error('Value is not valid!')
    }
  }
}


