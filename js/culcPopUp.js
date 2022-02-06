function culcPopUp() {
    let typeOfTicket = document.getElementById('selecttype').value;
    let basicCost = document.getElementById('basicPopUp').value;
    let seniorCost = document.getElementById('seniorPopUp').value;
    switch (typeOfTicket) {
        case "Permanent exhibition":
            basicCena = 20;
            seniorCena = 10;
            stoimost = basicCena * basicCost + seniorCena * seniorCost;
            stoimostBasic = basicCena * basicCost;
            stoimostSenior = seniorCena * seniorCost;
            document.getElementById('sumPopUp').innerHTML = stoimost + ' €';
            document.getElementById('basicOne').innerHTML = stoimostBasic + ' €';
            document.getElementById('seniorOne').innerHTML = stoimostSenior + ' €';
            document.getElementById('costPopUpBasic').innerHTML = "Basic " + basicCena + ' €';
            document.getElementById('costPopUpSenior').innerHTML = "Senior " + seniorCena + ' €';
            break;
        case "Temporary exhibition":
            basicCena = 25;
            seniorCena = 12.5;
            stoimost = basicCena * basicCost + seniorCena * seniorCost;
            stoimostBasic = basicCena * basicCost;
            stoimostSenior = seniorCena * seniorCost;
            document.getElementById('sumPopUp').innerHTML = stoimost + ' €';
            document.getElementById('basicOne').innerHTML = stoimostBasic + ' €';
            document.getElementById('seniorOne').innerHTML = stoimostSenior + ' €';
            document.getElementById('costPopUpBasic').innerHTML = "Basic " + (basicCena + ' €');
            document.getElementById('costPopUpSenior').innerHTML = "Senior " + seniorCena + ' €';
            break;
        case "Combined Admission":
            basicCena = 40;
            seniorCena = 20;
            stoimost = basicCena * basicCost + seniorCena * seniorCost;
            stoimostBasic = basicCena * basicCost;
            stoimostSenior = seniorCena * seniorCost;
            document.getElementById('sumPopUp').innerHTML = stoimost + ' €';
            document.getElementById('basicOne').innerHTML = stoimostBasic + ' €';
            document.getElementById('seniorOne').innerHTML = stoimostSenior + ' €';
            document.getElementById('costPopUpBasic').innerHTML = "Basic " + (basicCena + ' €');
            document.getElementById('costPopUpSenior').innerHTML = "Senior " + seniorCena + ' €';
            break;

    }

}

document.getElementById('basicplusPopUp').addEventListener("click", culcPopUp);
document.getElementById('basicminusPopUp').addEventListener("click", culcPopUp);
document.getElementById('seniorplusPopUp').addEventListener("click", culcPopUp);
document.getElementById('seniorminusPopUp').addEventListener("click", culcPopUp);
document.getElementById('selecttype').addEventListener("click", culcPopUp);

function send() {
    const sendValues1 = document.getElementById("basicplusPopUp"); 
    const sendValues2 = document.getElementById("basicminusPopUp"); 
    const sendValues3 = document.getElementById("seniorplusPopUp"); 
    const sendValues4 = document.getElementById("seniorminusPopUp"); 
    input2.value = basicPopUp.value;
    input3.value = seniorPopUp.value;
}
document.getElementById('basicplusPopUp').addEventListener('click', send);
document.getElementById('basicminusPopUp').addEventListener('click', send);
document.getElementById('seniorplusPopUp').addEventListener('click', send);
document.getElementById('seniorminusPopUp').addEventListener('click', send);