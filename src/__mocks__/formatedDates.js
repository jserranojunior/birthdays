function dateUStoJs(value) {
  const stringValue = String(value);
  const data = stringValue.replace(/-/g, ",");
  const date = new Date(data);
  return date;
}

function datePtbrtoJs(value) {
  value = value.split("/").reverse().join(",");
  value = new Date(value);
  return value;
}

export default function formatedDates(value) {
  console.log("mockado porra! ");
  if (String(value).includes("/")) {
    return datePtbrtoJs(value);
  } else if (String(value).includes("-") && !String(value).includes("T")) {
    return dateUStoJs(value);
  } else if (String(value).includes("-")) {
    return value;
  }
}
