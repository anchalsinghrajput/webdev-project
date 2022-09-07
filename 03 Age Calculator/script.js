const calbtn = document.querySelector("#btn");

btn.addEventListener('click',(e) =>
{

    // =================== getting user date input =================
    var userdate = new Date(document.querySelector("#dob").value);
    var inputdata = 
    {
        year : userdate.getFullYear(),
        month : userdate.getMonth(),
        day : userdate.getDate()
    }

    // ======================= getting current date ==================////
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var month = [31,28,31,30,31,30,31,31,30,31,30,31];

    // ============================= calculation =============================
    /*
    07/09/2022
    25/04/2002
    ==========
    13 day
    4 month 
    20 year
    */

    if(inputdata.day > d)
    {
        d = d + month[m-1];  
        m = m - 1        
    }
    if(inputdata.month>m)
    {
        m = m + 12
        y = y - 1
    }

    var fd = d - inputdata.day
    var fm = m - inputdata.month
    var fy = y - inputdata.year

    document.querySelector("#year").innerHTML = fy
    document.querySelector("#month").innerHTML = fm
    document.querySelector("#day").innerHTML = fd
  
})