function getDate(name) {
  let date = new Date();
  hour = date.getHours();
  let timeOfDay;
  if (hour > 4 && hour < 12) {
    timeOfDay = "Morning";
  } else if (hour >= 12 && hour < 16) {
    timeOfDay = "Afternoon";
  } else if (hour >= 16 && hour < 20) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }
  return `Good ${timeOfDay} ${name}`;
}

console.log(getDate("Adhil"));
