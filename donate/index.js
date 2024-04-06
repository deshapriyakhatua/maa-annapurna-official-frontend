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
        threshold: .2
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

  });
  
  