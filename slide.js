 let imagevar = document.getElementById("image");
 let imageArray = ["img/slide1.jpg", "img/slide2.jpeg", "img/slide3.jpeg", "img/slide4.jpeg", "img/slide5.jpg",];
 let imaageindex = 0;

 function slideshow(){
    //setAttribute is used to set or change a particular atribute in html, in our case the src
    imagevar.setAttribute("src", imageArray[imaageindex]);  
    imaageindex++; 

    if(imaageindex >= imageArray.length){
        imaageindex = 0;
    }
 }
//a function that calls our function slideshow after 3000milli seconds repeatedly.
 setInterval(slideshow, 3000);
 