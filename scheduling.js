function generateDSL()
{
    var startDate = new Date (document.getElementById("startDate").value)
    var endDate = new Date (document.getElementById("endDate").value)
    var difference = endDate.getTime() - startDate.getTime()
      
    var differenceInDays = difference / (1000 * 3600 * 24)
    
    console.log(differenceInDays)
    document.getElementById("DSLString").textContent = differenceInDays
}
