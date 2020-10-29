import BirthdaysHelpers from "../BirthdaysHelpers.js";
import formatedDates from "../__mocks__/formatedDates";

function builder(date) {
  return new BirthdaysHelpers(formatedDates, date);
}

describe("Births of the Month", () => {
  test("Checks whether the date greater than the current month returns false", () => {
    const today = new Date();
    const nextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    const VerifyBirthdays = builder(nextMonth);
    expect(VerifyBirthdays.month).toBeFalsy();
  });

  test("Checks whether the date less than the current month returns false", () => {
    const today = new Date();
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    const VerifyBirthdays = builder(previousMonth);

    expect(VerifyBirthdays.month).toBeFalsy();
  });

  test("Checks whether the current date returns true", () => {
    const today = new Date();
    const VerifyBirthdays = builder(today);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether the first day of the month returns true", () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const VerifyBirthdays = builder(firstDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether the second day of the month returns true", () => {
    const today = new Date();
    const secondDay = new Date(today.getFullYear(), today.getMonth(), 2);
    const VerifyBirthdays = builder(secondDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether in pt-br format returns true", () => {
    const today = new Date();
    const brDay = today.toLocaleString("pt-BR", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const VerifyBirthdays = builder(brDay);

    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether in US format returns true", () => {
    const today = new Date();
    const usDay = today.toLocaleDateString("fr-ca");
    const VerifyBirthdays = new BirthdaysHelpers(null, usDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether year diferent of birth returns true", () => {
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), 1);
    const usDay = nextYear.toLocaleDateString("fr-ca");
    const VerifyBirthdays = builder(usDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });
});

describe("Births of the Week", () => {
  test("Check if the birthday in the last day of week returns true", () => {
    const today = new Date();

    let DayOfTheWeek = today;
    do {
      DayOfTheWeek = new Date(
        DayOfTheWeek.getFullYear(),
        DayOfTheWeek.getMonth(),
        DayOfTheWeek.getDate() + 1
      );
    } while (DayOfTheWeek.getDay() < 6);

    const VerifyBirthdays = builder(DayOfTheWeek);
    expect(VerifyBirthdays.week).toBeTruthy();
  });

  test("Check if the birthday in the first day of week returns true", () => {
    const today = new Date();

    let firstDayOfTheWeek = today;
    do {
      firstDayOfTheWeek = new Date(
        firstDayOfTheWeek.getFullYear(),
        firstDayOfTheWeek.getMonth(),
        firstDayOfTheWeek.getDate() - 1
      );
    } while (firstDayOfTheWeek.getDay() >= 1);

    const VerifyBirthdays = new BirthdaysHelpers(
      formatedDates,
      firstDayOfTheWeek
    );
    expect(VerifyBirthdays.week).toBeTruthy();
  });

  test("Check if the birthday in the next week returns false", () => {
    const today = new Date();
    let DayOfTheWeek = today;
    do {
      DayOfTheWeek = new Date(
        DayOfTheWeek.getFullYear(),
        DayOfTheWeek.getMonth(),
        DayOfTheWeek.getDate() + 1
      );
    } while (DayOfTheWeek.getDay() < 6);
    DayOfTheWeek = new Date(
      DayOfTheWeek.getFullYear(),
      DayOfTheWeek.getMonth(),
      DayOfTheWeek.getDate() + 1
    );
    const VerifyBirthdays = builder(DayOfTheWeek);
    expect(VerifyBirthdays.week).toBeFalsy();
  });

  test("Check if the birthday in the previous week returns false", () => {
    const today = new Date();

    let DayOfTheWeek = today;
    do {
      DayOfTheWeek = new Date(
        DayOfTheWeek.getFullYear(),
        DayOfTheWeek.getMonth(),
        DayOfTheWeek.getDate() - 1
      );
    } while (DayOfTheWeek.getDay() >= 1);

    DayOfTheWeek = new Date(
      DayOfTheWeek.getFullYear(),
      DayOfTheWeek.getMonth(),
      DayOfTheWeek.getDate() - 1
    );
    const VerifyBirthdays = builder(DayOfTheWeek);
    expect(VerifyBirthdays.week).toBeFalsy();
  });
});

describe("Births of the Day", () => {
  test("Check if the birthday today return true", () => {
    const today = new Date();
    const VerifyBirthdays = builder(today);
    expect(VerifyBirthdays.day).toBeTruthy();
  });

  test("Check if the birthday tomorrow return true", () => {
    const today = new Date();
    const Day = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const VerifyBirthdays = builder(Day);
    expect(VerifyBirthdays.day).toBeFalsy();
  });

  test("Check if the birthday yesterday return true", () => {
    const today = new Date();
    const Day = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    );
    const VerifyBirthdays = builder(Day);
    expect(VerifyBirthdays.day).toBeFalsy();
  });
});
