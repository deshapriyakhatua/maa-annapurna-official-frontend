

window.onscroll = function () {
    const carouselContainer = document.getElementById('carousel_container');
    if (carouselContainer) {
        if (window.pageYOffset > 1) {
            carouselContainer.classList.add("active");
        } else {
            carouselContainer.classList.remove("active");
        }
    }
}

window.addEventListener("load", ()=>{

    let carouselItems = document.querySelectorAll(".carousel-item");
    let itemIndex = 0;
    let carouselInterval = setInterval(()=>{
        if(itemIndex >= carouselItems.length){
            itemIndex = 0;
        }
        carouselItems.forEach((elem,i)=>{
            if(elem.classList.contains("visible_carousel")){
                elem.classList.remove("visible_carousel");
            }
            if(itemIndex == i){
                elem.classList.add("visible_carousel");
            }
        });
        itemIndex++;
    }, 3000);









})