import formatedDates from "./FormatedDates/FormatedDates.js";

class VerifyBirthdays {
  constructor(dateInserted) {
    this.dateInserted = formatedDates(dateInserted);
    this.today = new Date();
    this.firstDayOfTheWeek;
  }
  get month() {
    if (this.dateInserted.getMonth() == this.today.getMonth()) {
      return true;
    } else {
      return false;
    }
  }
  get week() {
    if (this.month) {
      this.getFirstDayOfTheWeek();
      if (
        this.dateInserted.getDate() === this.firstDayOfTheWeek.getDate() &&
        this.dateInserted.getMonth() === this.firstDayOfTheWeek.getMonth()
      ) {
        return true;
      } else {
        let dayOfTheWeek = this.firstDayOfTheWeek;
        let valueReturn = false;
        do {
          dayOfTheWeek = new Date(
            dayOfTheWeek.getFullYear(),
            dayOfTheWeek.getMonth(),
            dayOfTheWeek.getDate() + 1
          );
          if (
            this.dateInserted.getDate() === dayOfTheWeek.getDate() &&
            this.dateInserted.getMonth() === dayOfTheWeek.getMonth()
          ) {
            valueReturn = true;
          }
        } while (dayOfTheWeek.getDay() < 6);
        return valueReturn;
      }
    } else {
      return false;
    }
  }

  get day() {
    if (this.month) {
      if (
        this.dateInserted.getDate() === this.today.getDate() &&
        this.dateInserted.getMonth() === this.today.getMonth()
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getFirstDayOfTheWeek() {
    this.firstDayOfTheWeek = this.today;
    do {
      this.firstDayOfTheWeek = new Date(
        this.firstDayOfTheWeek.getFullYear(),
        this.firstDayOfTheWeek.getMonth(),
        this.firstDayOfTheWeek.getDate() - 1
      );
    } while (this.firstDayOfTheWeek.getDay() >= 1);
    return this.firstDayOfTheWeek;
  }
}

// pegar primeiro dia da semana
// Ir comparando até o último dia da semana

export default VerifyBirthdays;
