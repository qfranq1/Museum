
const pictureInnerContainer = document.querySelector('.picture-inner__container'); 
let imgArray = [`./assets/img/gallery/galery1.jpg`,
`./assets/img/gallery/galery2.jpg`,
`./assets/img/gallery/galery3.jpg`,
 `./assets/img/gallery/galery4.jpg`,
 `./assets/img/gallery/galery5.jpg`,
`./assets/img/gallery/galery6.jpg`,
`./assets/img/gallery/galery7.jpg`,
`./assets/img/gallery/galery8.jpg`,
`./assets/img/gallery/galery9.jpg`,
`./assets/img/gallery/galery10.jpg`,
`./assets/img/gallery/galery11.jpg`,
`./assets/img/gallery/galery12.jpg`,
`./assets/img/gallery/galery13.jpg`,
`./assets/img/gallery/galery14.jpg`,
`./assets/img/gallery/galery15.jpg`];
function shuffle() {
    imgArray.sort(() => Math.random()- 0.5);
}
shuffle(imgArray);
    let addImg = imgArray.map(myFucntion);

function myFucntion(link) {
    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = link;
    pictureInnerContainer.append(img);
}
addImg();




