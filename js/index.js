// window.addEventListener('load',);


// количество картинок в слайде
let amountOfSliders
// первый слайд
let currentFirstSlide=0
// ссылка на слайды
let sliders

window.addEventListener('DOMContentLoaded', function (){
    document.getElementById('arrow_previous').addEventListener('click', slidePrevious)
    document.getElementById('arrow_next').addEventListener('click', slideNext)
    sliders=document.querySelectorAll('.collections__slide')
    resize()
})

window.addEventListener('resize', resize)

function resize(){
    const width = document.documentElement.clientWidth
    if (width>=1400) amountOfSliders=3
    else if (width>=900) amountOfSliders=2
    else amountOfSliders=1
    updateSliders()
}

function slidePrevious(){
    if ((currentFirstSlide-amountOfSliders)>=0) currentFirstSlide-=amountOfSliders
        else currentFirstSlide=sliders.length-amountOfSliders
    updateSliders()
}

function slideNext(){
    // debugger;
    const full=((sliders.length-currentFirstSlide) / amountOfSliders)>1
    if (full) {
        currentFirstSlide+=amountOfSliders
    }
        else currentFirstSlide=0
    updateSliders()
}


function updateSliders(){
    sliders.forEach((item, index)=> {
        if (index>=currentFirstSlide && index<amountOfSliders+currentFirstSlide) item.style.display='block'
        else item.style.display='none'

    })

}
