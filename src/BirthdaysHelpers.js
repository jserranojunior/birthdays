import formatedDates from "./FormatedDates/FormatedDates.js";
let VerifyBirthdays = {};

VerifyBirthdays.month = (dataInserida) => {
  const formatedDate = formatedDates(dataInserida);

  const date = new Date();
  const primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1);
  const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  if (formatedDate >= primeiroDia && formatedDate <= ultimoDia) {
    return true;
  } else {
    return false;
  }
};

export default VerifyBirthdays;
