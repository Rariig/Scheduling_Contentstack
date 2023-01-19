function generateDSL()
{
    //find running days logic
    var startDate = new Date (document.getElementById("startDate").value)
    var endDate = new Date (document.getElementById("endDate").value)
    var difference = endDate.getTime() - startDate.getTime()
    var differenceInDays = difference / (1000 * 3600 * 24)

    //find task length and running times logic
    var startTime = document.getElementById("startTime").value
    var endTime = document.getElementById("endTime").value

    
    
    
  
    let finalDSL = document.getElementById("DSLString").textContent
    finalDSL = "1 2 3 4 5_x x_"+differenceInDays
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[0], startTime)
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[1], endTime)
    


      // Find selected weekdays
      const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
      const selectedWeekdays = Array.from(document.getElementsByClassName("weekday"))
                      .filter(weekday => weekday.checked)
                      .map((weekday) => weekday.id.split("-")[1].toUpperCase());
      console.log(selectedWeekdays);
      
      //Update DSL string
      finalDSL = document.getElementById("DSLString").textContent;
      if (selectedWeekdays.length === 0) {
         finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[4], "*");
      } else {
          finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[4], selectedWeekdays);
      }
      document.getElementById("DSLString").textContent = finalDSL;  




   /* //find months to run the task on
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const selectedMonths = months.filter((month, i) => document.getElementById(`month-${month.toLowerCase()}`).checked);
    const checkedMonths = selectedMonths.join(",");
    finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[3], checkedMonths)
    document.getElementById("DSLString").textContent = finalDSL


    finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[2], selectedDate)*/
}


const button = document.getElementById('toggle-button');
const element = document.getElementById('hidden-element');

button.addEventListener('click', () => {
  if (element.style.display === 'none') {
    element.style.display = 'block';
    button.classList.add('active');
  } else {
    element.style.display = 'none';
    button.classList.remove('active');
  }
});

flatpickr("#date-input", {
    dateFormat: "d",
    mode: "multiple"
});

var dateInput = document.getElementById("date-input");
var selectedDate = "";

flatpickr(dateInput, {
  onChange: function(selectedDates, dateStr, instance) {
    selectedDate = dateStr;
  }
});