export const getCurrentDay = () => {
  const date = new Date();

  //   const daysOfWeek = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ];
  const currentDayOfWeek = date.getDay();

  return currentDayOfWeek;
};
