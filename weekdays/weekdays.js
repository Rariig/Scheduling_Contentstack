export function getSelectedWeekdays() {
    const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    return weekdays.filter((weekday, i) => document.getElementById(`weekday-${weekday.toLowerCase()}`).checked);
  }
  