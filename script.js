// back to top 
var backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (document.documentElement.scrollTop > 20 ) {
        backToTopButton.style.display = "block" ; 
    } else {
        backToTopButton.style.display = "none" ; 

    }
}

function scrollToTop(){
    window.scrollTo({ top : 0, behavior: 'smooth'});

}

// resize height 
//const setHeight = () => {
//    const currentHeight = window.innerHeight;
//    document.body.style.height = `${currentHeight}px`; 
//}; 
//window.addEventListener("resize", setHeight);
//setHeight();

// search box / nav menu with responsive image gallery

const search = document.querySelector(".search-container input"),
      images = document.querySelectorAll(".image-box");
      
// toutes menu
const toutesMenuItem = document.getElementById("toutes");
toutesMenuItem.addEventListener("click", () => {
    images.forEach( image => {
        let imageName = image.dataset.name.toLowerCase();
        console.log(imageName);
        if(imageName.includes("toutes")) {
            image.style.display = "block";
        }else {
            image.style.display = "none";
        }
    })
})

// dessiner menu
const dessinerMenuItem = document.getElementById("dessiner");
dessinerMenuItem.addEventListener("click", () => {
    images.forEach( image => {
        let imageName = image.dataset.name.toLowerCase();
        console.log(imageName);
        if(imageName.includes("dessiner")) {
            image.style.display = "block";
        }else {
            image.style.display = "none";
        }
    })
})

//3D menu 
const threedMenuItem = document.getElementById("3D");
threedMenuItem.addEventListener("click", () =>{
    images.forEach(image => {
        let imageName = image.dataset.name.toLowerCase();
        console.log(imageName);
        if(imageName.includes("3D")) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});


// danser menu 
const danserMenuItem = document.getElementById("danser");
danserMenuItem.addEventListener("click", () =>{
    images.forEach(image => {
        let imageName = image.dataset.name.toLowerCase();
        console.log(imageName);
        if(imageName.includes("danser")) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});

// search bar 
search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searchValue = search.value.toLowerCase();

            images.forEach(image => {
                let imageName = image.dataset.name.toLowerCase();

                if(imageName.includes(searchValue) || searchValue === "") {
                    image.style.display = "block";
                } else {
                image.style.display = "none";}
            });
            console.log(searchValue);
    } 
});

search.addEventListener("keyup", ()=>{
    if(search.value != "") return ; 

    images.forEach(image =>{
        image.style.display = "none" ;
    })
})






