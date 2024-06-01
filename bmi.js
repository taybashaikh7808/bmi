const weightrange = document.getElementById("weightrange");
const weightresult = document.getElementById("weightresult")
const submit = document.getElementById("button")


const heigthrange = document.getElementById("heigthrange");
const heightresult = document.getElementById("heightresult");


const bmires = document.getElementById("bmires")


function updateWeight(weightrange){
    weightresult.textContent = weightrange.value;
}


function updateHeight(heigthrange){
    heightresult.textContent = heigthrange.value;
}

submit.onclick = function(){
    const p = Number(weightrange.value);
    weightresult.textContent= p + '  Kg';
    const m = Number(heigthrange.value);
    heightresult.textContent= m + '  cm';


    const height = m/100;
    const bmi = (p/(height**2));
    bmires.textContent = Math.round(bmi,8) ;
}