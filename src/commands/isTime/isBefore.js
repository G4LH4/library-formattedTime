import {
  checkInstance,
  checkBothCamps,
} from "../../components/handleParameters.js";

export const isBefore = (date1, date2) => {
  checkBothCamps(date1, date2);

  checkInstance(date1, Date);
  checkInstance(date2, Date);

  const dateNow = new Date();

  const dates = [];

  dates.push(dateNow - date1);
  dates.push(dateNow - date2);

  const max = Math.max(...dates);

  const positionOfMax = dates.indexOf(max);

  if (positionOfMax === 1) {
    return false;
  } else {
    return true;
  }
};
