const nameTest = () => {
  console.log(``);
  console.log(startName);
  console.log(``);
}

// ================================================================================================
let startName = `days in year`;
nameTest();

const getDaysInYear = (year) => {
  const firstDaysInYear = new Date(year, 0, 1);
  const lastDaysInYear = new Date(year, 12, 1);
  const allDaysInYear = (lastDaysInYear - firstDaysInYear) / (1000 * 60 * 60 * 24);
  console.log(allDaysInYear);
};

getDaysInYear(2021);
// 365
getDaysInYear(2020);
// 366

// ================================================================================================
startName = `day of a year`;
nameTest();

const getDayNumber = (date) => {
  const dateYear = new Date(date).getFullYear();
  const dayOfYear = Math.ceil((new Date(date) - new Date(dateYear, 0, 1)) / (1000 * 60 * 60 * 24));
  console.log(dayOfYear);

};

getDayNumber("2023-01-12");  // 12
getDayNumber("2023-02-26");  // 57
getDayNumber("2021-11-12");
getDayNumber("1985-01-18");

// ================================================================================================
startName = ` fiscal quarters`;
nameTest();

const getQuarters = (date) => {
  const monthQuarters = new Date(date).getMonth();
  const dayQuarters = new Date(date).getDate();
  const monthEnter = new Date(date).toLocaleString('en-US', { month: `short` });

  if (monthQuarters <= 2) {
    console.log(monthEnter + ` ` + dayQuarters + ` is I quarter`);
  }
  else if (monthQuarters > 2 && monthQuarters <= 5) {
    console.log(monthEnter + ` ` + dayQuarters + ` is 2 quarter`);
  }
  else if (monthQuarters > 5 && monthQuarters <= 8) {
    console.log(monthEnter + ` ` + dayQuarters + ` is 3 quarter`);
  }
  else if (monthQuarters > 8 && monthQuarters <= 11) {
    console.log(monthEnter + ` ` + dayQuarters + ` is 4 quarter`);
  }
};

getQuarters("2023-02-26");   // Feb 26 is I quarter
getQuarters("2023-04-26");
getQuarters("2023-09-26");
getQuarters("2023-11-26");

// ================================================================================================
startName = ` a function to calculate date diff`;
nameTest();

const calcDateDiff = (startDate, endDate) => {
  const differenceInTimeMS = new Date(endDate).getTime() - new Date(startDate).getTime();
  const differenceYear = new Date(endDate).getFullYear() - new Date(startDate).getFullYear();
  const differenceMonth = new Date(endDate).getMonth() - new Date(startDate).getMonth();
  const differenceDay = new Date(endDate).getDate() - new Date(startDate).getDate();
  const differenceInTimeMin = differenceInTimeMS / (1000 * 60);
  const differenceInTimeHour = Math.floor(differenceInTimeMS / (1000 * 60 * 60));
  const differenceInTimeHourMin = differenceInTimeMin % 60;

  if (differenceYear !== 0) {
   return differenceYear + ` years`;
  }
  else if (differenceMonth !== 0) {
    return differenceMonth + ` months`;
  }
  else if (differenceDay !== 0) {
    return differenceDay + ` days`;
  }
  else if (differenceInTimeHour !== 0) {
    return differenceInTimeHour + ` hours ` + differenceInTimeHourMin + ` minutes`;
  }
  else if (differenceInTimeMin !== 0) {
    return differenceInTimeMin + ` minutes`;
  }
};

console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));   // 20 minutes
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"));   // 1 hours 30 minutes
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"));   // 2 days
console.log(calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));   // 3 months
console.log(calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30"));   // 2 years
debugger;