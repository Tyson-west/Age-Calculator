

const form  = document.querySelector("form")

// const inputDay = document.querySelector('.input');


form.addEventListener('submit',calculate);
function calculate(e) {
    

    let today = new Date();

    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();



    let date = Number(document.getElementById("day").value)
    let month = Number(document.getElementById("month").value)
    let year = Number(document.getElementById("year").value)

    let stroke = document.querySelector(".stroke")
    let stroke1 = document.querySelector(".stroke1")
    let stroke2 = document.querySelector(".stroke2")

    let valid = document.querySelector(".valid")
    let valid1 = document.querySelector(".valid1")
    let valid2 = document.querySelector(".valid2")

    let dayAnswer = document.querySelector(".days")
    let monthAnswer = document.querySelector(".months")
    let yearAnswer = document.querySelector(".years")

    // code for day

    if (date === 0) {
        stroke.style.display = "inline"
        valid.style.display = "none"
        
    } else if (date > 31) {
        stroke.style.display = "none"
    valid.style.display = "inline"
    }
    else {
    valid.style.display = "none" 
    stroke.style.display = "none"
    birthDate   = currentDate-date
        dayAnswer.innerHTML = birthDate
    }


    // code for month


    if (month === 0) {
        stroke1.style.display = "inline"
        valid1.style.display = "none"
        
    } else if (month > 12) {
        stroke1.style.display = "none"
    valid1.style.display = "inline"
    }
    else {
    valid1.style.display = "none" 
    stroke1.style.display = "none"
    birthMonth   = currentMonth-month
        monthAnswer.innerHTML = birthMonth
    }

    // code for year

    if (year === 0) {
        stroke2.style.display = "inline"
        valid2.style.display = "none"
        
    } else if (year < 1 || year > currentYear) {
        stroke2.style.display = "none"
        valid2.style.display = "inline"
    }
    else {
    valid2.style.display = "none" 
    stroke2.style.display = "none"
    birthYear   = currentYear-year
        yearAnswer.innerHTML = birthYear
    }
   e.preventDefault();
}





// var actualAge = document.querySelector('.actual-age')
// actualAge.addEventListener("click",calculatedActualAge)
// function calculatedActualAge() {
//     var date = document.getElementById("day").value
//     var month =  document.getElementById("month").value
//     var year = document.getElementById("year").value

//     var days = Number(19 - date)
//     var months = Number(7 - month)
//     if (months == -months) {
//         document.querySelector(".months").innerHTML = 12-months
//     }
//     else if (months == +months) {
//         document.querySelector(".months").innerHTML = months
//     }
//     var years = Number(2023 - year)-1
//     document.querySelector(".years").innerHTML = years
  
// }