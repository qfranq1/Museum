function raschitat() {
    let ticketType = document.getElementsByName('tickettype');
    let basicCost = document.getElementById('basic').value;
    let seniorCost = document.getElementById('senior').value;
        if (ticketType[0].checked) {
            let basicCena = 20;
            let seniorCena = 10;
            let stoimost = basicCena * basicCost + seniorCena * seniorCost;
            document.getElementById('stoimost').innerHTML = 'Total ' + '€' + stoimost;
        } else if(ticketType[1].checked) {
            let basicCena = 25;
            let seniorCena = 12.5;
            let stoimost = basicCena * basicCost + seniorCena * seniorCost;
            document.getElementById('stoimost').innerHTML = 'Total ' + '€' + stoimost;
        } else if(ticketType[2].checked) {
            let basicCena = 40;
            let seniorCena = 20;
            let stoimost = basicCena * basicCost + seniorCena * seniorCost;
            document.getElementById('stoimost').innerHTML = 'Total ' + '€' + stoimost;
        }  
}
document.getElementById('basicplus').addEventListener("click",raschitat);
document.getElementById('basicminus').addEventListener("click",raschitat);
document.getElementById('seniorplus').addEventListener("click",raschitat);
document.getElementById('seniorminus').addEventListener("click",raschitat);
document.getElementById('permanent').addEventListener("click",raschitat);
document.getElementById('temporary').addEventListener("click",raschitat);
document.getElementById('combined').addEventListener("click",raschitat);


function send() {
    const sendValues = document.getElementById('sendValues');
    basicPopUp.value = basic.value ;
    seniorPopUp.value = senior.value;
    input2.value =  basic.value;
    input3.value = senior.value;
}
document.getElementById('sendValues').addEventListener('click', send);





