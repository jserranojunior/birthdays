import BirthdaysHelpers from "./BirthdaysHelpers.js";

describe("Births of the Month", () => {
  test("Checks whether the date greater than the current month returns false", () => {
    const today = new Date();
    const nextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    const VerifyBirthdays = new BirthdaysHelpers(nextMonth);

    expect(VerifyBirthdays.month).toBeFalsy();
  });

  test("Checks whether the date less than the current month returns false", () => {
    const today = new Date();
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    const VerifyBirthdays = new BirthdaysHelpers(previousMonth);

    expect(VerifyBirthdays.month).toBeFalsy();
  });

  test("Checks whether the current date returns true", () => {
    const today = new Date();
    const VerifyBirthdays = new BirthdaysHelpers(today);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether the first day of the month returns true", () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const VerifyBirthdays = new BirthdaysHelpers(firstDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether the second day of the month returns true", () => {
    const today = new Date();
    const secondDay = new Date(today.getFullYear(), today.getMonth(), 2);
    const VerifyBirthdays = new BirthdaysHelpers(secondDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether in pt-br format returns true", () => {
    const today = new Date();
    const brDay = today.toLocaleString("pt-BR", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    const VerifyBirthdays = new BirthdaysHelpers(brDay);

    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether in US format returns true", () => {
    const today = new Date();
    const usDay = today.toLocaleDateString("fr-ca");
    const VerifyBirthdays = new BirthdaysHelpers(usDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });

  test("Checks whether year diferent of birth returns true", () => {
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), 1);
    const usDay = nextYear.toLocaleDateString("fr-ca");
    const VerifyBirthdays = new BirthdaysHelpers(usDay);
    expect(VerifyBirthdays.month).toBeTruthy();
  });
});
