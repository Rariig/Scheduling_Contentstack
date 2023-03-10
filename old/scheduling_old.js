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

    var finalDSL = document.getElementById("DSLString").textContent
    finalDSL = "1 2 3 4 5_x x_"+differenceInDays
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[0], startTime)
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[1], endTime)

    console.log(finalDSL)
    


      // Find selected weekdays
      const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
      const selectedWeekdays = Array.from(document.getElementsByClassName("weekday"))
                      .filter(weekday => weekday.checked)
                      .map((weekday) => weekday.id.split("-")[1].toUpperCase())
      console.log(selectedWeekdays)
      
      //Update DSL string
      console.log(finalDSL)
      if (selectedWeekdays.length === 0) {
         finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[4], "*");
      } else {
          finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[4], selectedWeekdays);
      }


      console.log(finalDSL)
      finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[2], "*");
      finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[3], "*");

      var hours = document.getElementById("hours").value;
      var minutes = document.getElementById("minutes").value;

      if (minutes != "NaN" && minutes != "") {
        finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[0], "*/" + minutes);
      }
      else{finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[0], "*")}
  
      if (hours != "NaN" && hours != "") {
       finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[1], "*/" + hours);
      }
      else{finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[1], "*")}

      document.getElementById("DSLString").textContent = finalDSL

}




var additionalSettingsCheckbox = document.getElementById("additional-settings-checkbox");
var additionalSettings = document.getElementsByClassName("additional-settings");
var weekdayCheckboxes = document.getElementsByClassName("weekday");

additionalSettingsCheckbox.addEventListener("change", function() {
    if (this.checked) {
        for (var i = 0; i < additionalSettings.length; i++) {
            additionalSettings[i].style.opacity = "1";
            additionalSettings[i].style.pointerEvents = "auto";
        }
        for (var i = 0; i < weekdayCheckboxes.length; i++) {
            weekdayCheckboxes[i].checked = false;
        }
    } else {
        for (var i = 0; i < additionalSettings.length; i++) {
            additionalSettings[i].style.opacity = "0.5";
            additionalSettings[i].style.pointerEvents = "none";
        }
        for (var i = 0; i < weekdayCheckboxes.length; i++) {
            weekdayCheckboxes[i].checked = false;
        }
        hours.value = "";
        minutes.value = "";
    }
});



