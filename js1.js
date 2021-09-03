var images=document.querySelectorAll("img");
var para=document.querySelector("#para");

console.log("Donate");

setInterval(() => {
    images[0].setAttribute('src','https://cdni0.trtworld.com/w960/h540/q75/44681_INDCycloneGajaTamilNadu20181116Reuters_1542491080205.jpeg');
    images[1].setAttribute('src','https://newslivetv.com/wp-content/uploads/2021/05/Cyclone-Yaas-201-relief-camps-set-up-596-people-evacuated-in-Jharkhands-West-Singhbhum.jpg');
    images[2].setAttribute('src','https://images.opoyi.net/opoyi_Rswk4AdNxE6.jpg?tr=w-345,q-70,dpr-2');
    
}, 3500);
setInterval(() => {
    images[0].setAttribute('src','https://assets.telegraphindia.com/telegraph/2021/May/1622233370_cc4.jpg');
    images[1].setAttribute('src','https://mumbaimirror.indiatimes.com/photo/82675013.cms');
    images[2].setAttribute('src','https://s01.sgp1.cdn.digitaloceanspaces.com/article/gvbglgsoga-1539329554.jpg');
}, 7000);

setInterval(() => {
    para.classList.toggle("animae");
}, 4000);
