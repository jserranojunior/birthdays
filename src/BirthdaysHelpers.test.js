import VerifyBirthdays from "./BirthdaysHelpers.js";

describe("Births of the Month", () => {
  test("Checks whether the date greater than the current month returns false", () => {
    const today = new Date();
    const nextMonth = today
      .setMonth(today.getMonth() + 1)
      .toLocaleString("fr-CA");
    expect(VerifyBirthdays.month(nextMonth)).toBeFalsy();
  });

  test("Checks whether the date less than the current month returns false", () => {
    const today = new Date();
    const previousMonth = today
      .setMonth(today.getMonth() - 1)
      .toLocaleString("fr-CA");
    expect(VerifyBirthdays.month(today)).toBeFalsy();
  });

  test("Checks whether the current date returns true", () => {
    const today = new Date();
    expect(VerifyBirthdays.month(today)).toBeTruthy();
  });

  test("Checks whether the first day of the month returns true", () => {
    const today = new Date();
    const secondDay = new Date(today.getFullYear(), today.getMonth(), 2);
    expect(VerifyBirthdays.month(secondDay)).toBeTruthy();
  });

  test("Checks whether the second day of the month returns true", () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    expect(VerifyBirthdays.month(firstDay)).toBeTruthy();
  });

  test("Checks whether in pt-br format returns true", () => {
    const today = new Date();
    const brDay = today.toLocaleString("pt-BR", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    expect(VerifyBirthdays.month(brDay)).toBeTruthy();
  });

  test("Checks whether in US format returns true", () => {
    const today = new Date();
    const usDay = today.toLocaleDateString("fr-ca");
    expect(VerifyBirthdays.month(usDay)).toBeTruthy();
  });
});
