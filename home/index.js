

window.addEventListener("scroll", () => {
    const carouselContainer = document.getElementById('carousel_container');
    if (carouselContainer) {
        if (window.scrollY > 400) {
            carouselContainer.classList.add("active");
        } else {
            carouselContainer.classList.remove("active");
        }
    }
});

window.addEventListener("load", ()=>{

    let carouselItems = document.querySelectorAll(".carousel-item");
    let itemIndex = 1;
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
    }, 5000);


    let animeItems = document.querySelectorAll(".animate");
    let animeIndex = 1;
    let animeInterval = setInterval(()=>{
        if(animeIndex >= carouselItems.length){
            animeIndex = 0;
        }
        animeItems.forEach((elem,i)=>{
            if(elem.classList.contains("start_anime")){
                elem.classList.remove("start_anime");
            }
            if(animeIndex == i){
                elem.classList.add("start_anime");
            }
        });
        animeIndex++;
    }, 6000);







})