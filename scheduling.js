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
    finalDSL = "* * * * *_x x_"+differenceInDays
    console.log(finalDSL.split("_")[1].split(" ")[0])
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[0], startTime)
    console.log(finalDSL)
    console.log(finalDSL.split("_")[1].split(" ")[1]);
    finalDSL = finalDSL.replace(finalDSL.split("_")[1].split(" ")[1], endTime)
    console.log(finalDSL)
    document.getElementById("DSLString").textContent = finalDSL
}
