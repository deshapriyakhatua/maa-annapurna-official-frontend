

function changeImage(max){
    index = index>13 ?1 :index;
    let box = document.querySelector("#container");
    //box.innerHTML = "";
    let image = createImage(`/maa-annapurna-official-frontend/global/files/images/${index++}.jpg`);
    image.addEventListener("animationend", (event)=>{
        console.log(event.target.remove())
    });
    box.append(image);    
    
}

function createImage(src){
    let image = document.createElement("img");
    image.className = "slider_image";
    image.src = src;
    image.loading = "lazy";
    return image;
}
const animationTime = 30;
const delay = (animationTime/5.7) * 1000;
let index = 1;
changeImage(index, 13);
setInterval(changeImage, delay, 13);
