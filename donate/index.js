document.addEventListener("DOMContentLoaded", function () {
        
    let gridObserver = new IntersectionObserver((entries)=> {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("rotate_grid");
                gridObserver.unobserve(entry.target)
            }
        })
    },
    {
        threshold: .5
    });

    let buttonObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                buttonObserver.unobserve(entry.target)
            }
        })
    },
    {
        threshold: .8
    })
    
    function applyObserver(observer, elements) {
        elements.forEach(function (element) {
          observer.observe(element);
        });
    }


    const imagesForObserve = Array.from(document.querySelectorAll(".achive_container .right .grid"));
    applyObserver(gridObserver, imagesForObserve);

    const buttonsToObserve = Array.from(document.querySelectorAll("button , p , span, .left"));
    applyObserver(buttonObserver,buttonsToObserve);



    /*----------- animation for donor container -----------*/

    const colors = [
        ["black","white"],["yellow","violet"],["red","white"],["yellow","black"],["green","white"],["orange","white"],["blue","white"],["yellow", "red"],["violet","white"],["gray","white"],["yellow","gray"],["orange","yellow"],["yellow","blue"]
    ]
    let animateCards = document.querySelectorAll(".donor_contianer .animate");

    let cardIndex = 1;
    let colorIndex = 0;

    setInterval(()=>{
        if(cardIndex >= animateCards.length){
            cardIndex = 0;
        }
        if(colorIndex >= colors.length){
            colorIndex = 0;
        }
        animateCards.forEach((elem,index)=>{
            if(index == cardIndex){
                elem.classList.add("start_animation");
                elem.style.backgroundColor = colors[colorIndex][0];
                elem.style.color = colors[colorIndex][1];
                //elem.parentElement.style.backgroundColor = colors[colorIndex][0];
                console.log(elem.parentElement)
            }else{
                elem.classList.remove("start_animation");
            }
        });
        colorIndex++;
        cardIndex++;
    }, 4000);

  });
  
  