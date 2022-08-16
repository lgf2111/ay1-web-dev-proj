let modal = document.querySelector('#feedback')
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

let star1 = document.querySelector('#star1')
let star2 = document.querySelector('#star2')
let star3 = document.querySelector('#star3')
let star4 = document.querySelector('#star4')
let star5 = document.querySelector('#star5')


function rating0() {
    star1.className = 'fa fa-star'
    star2.className = 'fa fa-star'
    star3.className = 'fa fa-star'
    star4.className = 'fa fa-star'
    star5.className = 'fa fa-star'
}
function rating1() {
    star1.className = 'fa fa-star checked'
}
function rating2() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
}
function rating3() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star checked'
}
function rating4() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star checked'
    star4.className = 'fa fa-star checked'
}
function rating5() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star checked'
    star4.className = 'fa fa-star checked'
    star5.className = 'fa fa-star checked'
}

let rate = 0

function rate1() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star'
    star3.className = 'fa fa-star'
    star4.className = 'fa fa-star'
    star5.className = 'fa fa-star'
    star1.removeAttribute("onmouseover") 
    star1.removeAttribute("onmouseout") 
    star2.removeAttribute("onmouseover") 
    star2.removeAttribute("onmouseout") 
    star3.removeAttribute("onmouseover") 
    star3.removeAttribute("onmouseout") 
    star4.removeAttribute("onmouseover") 
    star4.removeAttribute("onmouseout") 
    star5.removeAttribute("onmouseover") 
    star5.removeAttribute("onmouseout") 
    rate = 1
}
function rate2() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star'
    star4.className = 'fa fa-star'
    star5.className = 'fa fa-star'
    star1.removeAttribute("onmouseover") 
    star1.removeAttribute("onmouseout") 
    star2.removeAttribute("onmouseover") 
    star2.removeAttribute("onmouseout") 
    star3.removeAttribute("onmouseover") 
    star3.removeAttribute("onmouseout") 
    star4.removeAttribute("onmouseover") 
    star4.removeAttribute("onmouseout") 
    star5.removeAttribute("onmouseover") 
    star5.removeAttribute("onmouseout") 
    rate = 2
}
function rate3() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star checked'
    star4.className = 'fa fa-star'
    star5.className = 'fa fa-star'
    star1.removeAttribute("onmouseover") 
    star1.removeAttribute("onmouseout") 
    star2.removeAttribute("onmouseover") 
    star2.removeAttribute("onmouseout") 
    star3.removeAttribute("onmouseover") 
    star3.removeAttribute("onmouseout") 
    star4.removeAttribute("onmouseover") 
    star4.removeAttribute("onmouseout") 
    star5.removeAttribute("onmouseover") 
    star5.removeAttribute("onmouseout") 
    rate = 3
}
function rate4() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star checked'
    star4.className = 'fa fa-star checked'
    star5.className = 'fa fa-star'
    star1.removeAttribute("onmouseover") 
    star1.removeAttribute("onmouseout") 
    star2.removeAttribute("onmouseover") 
    star2.removeAttribute("onmouseout") 
    star3.removeAttribute("onmouseover") 
    star3.removeAttribute("onmouseout") 
    star4.removeAttribute("onmouseover") 
    star4.removeAttribute("onmouseout") 
    star5.removeAttribute("onmouseover") 
    star5.removeAttribute("onmouseout") 
    rate = 4
}
function rate5() {
    star1.className = 'fa fa-star checked'
    star2.className = 'fa fa-star checked'
    star3.className = 'fa fa-star checked'
    star4.className = 'fa fa-star checked'
    star5.className = 'fa fa-star checked'
    star1.removeAttribute("onmouseover") 
    star1.removeAttribute("onmouseout") 
    star2.removeAttribute("onmouseover") 
    star2.removeAttribute("onmouseout") 
    star3.removeAttribute("onmouseover") 
    star3.removeAttribute("onmouseout") 
    star4.removeAttribute("onmouseover") 
    star4.removeAttribute("onmouseout") 
    star5.removeAttribute("onmouseover") 
    star5.removeAttribute("onmouseout") 
    rate = 5
}

function submit() {
    let Feedback = document.querySelector('#Feedback')
    if (rate == 1 && Feedback.value != '') {
        alert(`Thank you for your rating (${rate} star) and your feedback, we really appreciate it!`)
    }
    else if (rate > 1 && Feedback.value != '') {
        alert(`Thank you for your rating (${rate} stars) and your feedback, we really appreciate it!`)
    }
    else if (rate == 1 && Feedback.value == '') {
        alert(`Thank you for your rating (${rate} star), we really appreciate it!`)
    }
    else if (rate > 1 && Feedback.value == '') {
        alert(`Thank you for your rating (${rate} stars), we really appreciate it!`)
    }
    else if (rate == 0 && Feedback.value != '') {
        alert(`Thank you for your feedback, we really appreciate it!`)
    }
    else if (rate == 0 && Feedback.value == '') {
        alert(`To submit, you will need to either give a rating or a feedback.\rBest if both 😃.`)
    }
    star1.className = 'fa fa-star'
    star2.className = 'fa fa-star'
    star3.className = 'fa fa-star'
    star4.className = 'fa fa-star'
    star5.className = 'fa fa-star'
    star1.setAttribute("onmouseover", "rating1()") 
    star1.setAttribute("onmouseout" , "rating0()")
    star2.setAttribute("onmouseover", "rating2()") 
    star2.setAttribute("onmouseout" , "rating0()")
    star3.setAttribute("onmouseover", "rating3()") 
    star3.setAttribute("onmouseout" , "rating0()")
    star4.setAttribute("onmouseover", "rating4()") 
    star4.setAttribute("onmouseout" , "rating0()")
    star5.setAttribute("onmouseover", "rating5()") 
    star5.setAttribute("onmouseout" , "rating0()")
    window.open(`feedback.html?rating=${rate}&feedback=${Feedback.value}`)
    rate = 0
    Feedback.value = ''
    modal.style.display = 'none'
}