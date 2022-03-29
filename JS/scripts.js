function tipCalculate(slider,bill){
    var tip = document.getElementById("tip")
    var slideValue = document.getElementById("slideValue")
    var bill = document.getElementById("bill").value
    var percent = slider * 0.01
    tip.innerHTML = "$"+(bill*percent).toFixed(2)
    slideValue.innerHTML = slider+"%"
};

// console.log(bill)