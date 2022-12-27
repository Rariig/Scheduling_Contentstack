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

    
    
    
    console.log(startTime)
    var finalDSL = document.getElementById("DSLString").textContent
    finalDSL = "1 2 3 4 5_x x_"+differenceInDays
    console.log(finalDSL.split("_")[1].split(" ")[0])
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[0], startTime)
    console.log(finalDSL)
    console.log(finalDSL.split("_")[1].split(" ")[1]);
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[1], endTime)
    console.log(finalDSL)


    //find weekdays to run the task on
    var checkedDays = "";
    if(document.getElementById("weekday-mon").checked){
        checkedDays = "MON"
    } 
    if(document.getElementById("weekday-tue").checked){
        checkedDays = checkedDays  + "TUE" + "," 
    } 
    if(document.getElementById("weekday-wed").checked){
        checkedDays = checkedDays + "WED" + "," 
    } 
    if(document.getElementById("weekday-thu").checked){
        checkedDays = checkedDays + "THU" + "," 
    } 
    if(document.getElementById("weekday-fri").checked){
        checkedDays = checkedDays+ "FRI" + "," 
    } 
   if(document.getElementById("weekday-sat").checked){
        checkedDays = checkedDays + "SAT"+ "," 
    } 
    if(document.getElementById("weekday-sun").checked){
        checkedDays =  checkedDays +"SUN"+ ","  
    } 
    finalDSL = finalDSL.replace(finalDSL.split("_")[0].split(" ")[4], checkedDays)
    document.getElementById("DSLString").textContent = finalDSL
}
