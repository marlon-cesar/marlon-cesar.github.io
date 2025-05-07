window.addEventListener('DOMContentLoaded', event => {

    setAge();
    setExperience();
    
    animatedNumberInterval('projects-count', 15); 
    animatedNumberInterval('certification-count', 3, 200); 
})


function setAge(){
    const now = Date.now();
    const birthday = new Date('1998-03-02')

    const ageDiff = now - birthday;
    const ageDate = new Date(ageDiff);

    const age = ageDate.getFullYear() - 1970;

    animatedNumberInterval('age', age, 50);
}

function setExperience(){
    const now = Date.now();
    const startOfExperience = new Date('2019-05-02')

    const yearDiff = now - startOfExperience;
    const yearDate = new Date(yearDiff);

    const year = yearDate.getFullYear() - 1970;

    animatedNumberInterval('years-of-experience', year);    
}



function animatedNumberInterval(elementId, target, time = 100){
    let number = 0
    var interval = setInterval(function () {
        document.getElementById(elementId).innerHTML = number;
        if (number >= target) clearInterval(interval);
        number++;
    }, time);
}