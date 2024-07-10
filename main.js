 
//get the section name
let skillsSection = document.querySelector('.skills-testimonials')
// get the skill bars

let bars = Array.from(document.querySelectorAll('.skill .progress'))

console.log(skillsSection)

// animation when you reach the section
window.onscroll = function(){
     if(window.scrollY >= skillsSection.offsetTop - 100 ){
          bars.forEach((bar)=>{
               console.log('reach')
               bar.style.width = bar.dataset.prog ;
               
          })
     }
}



//#########################################
//array from the sliders
let sliders = Array.from(document.querySelectorAll('.testimonials .slide'));

// console.log(sliders)

// sliders count
let slidersCount = sliders.length; 

//current slide
var currentSlide = 1;

// indecators pagination 
let indecators = document.querySelector('.indecators');

// create ul for the bullets
let paginationUl = document.createElement('ul');

// set attribute id 
paginationUl.setAttribute('id', 'pagination-ul')


// use loop to create li elements bullet
for(var i = 1 ; i <= slidersCount; i++){

     //create li element
     let bulletsLi = document.createElement('li');

     //set attribute
     bulletsLi.setAttribute('data-index', i)

     //set id attribute to style the bullets
     bulletsLi.setAttribute('class', 'dot')

     //append li to the ul element
     paginationUl.appendChild(bulletsLi)
}

//append the ul to the main element indecators
indecators.appendChild(paginationUl)

//make an array for the bullets
let bullets = Array.from(document.querySelectorAll('#pagination-ul li'))

console.log(bullets);


// //bullets click function
// for(var i = 0 ; i < bullets.length; i++){

//      bullets[i].onClick = function (){

//           currentSlide = parseInt(this.getAttribute('data-index'));
//           console.log(currentSlide);
//                check();

//      }
// }


bullets.forEach(function(bullet){
     bullet.addEventListener('click', function(){
          currentSlide = parseInt(this.getAttribute('data-index'))
          
          check()
     })
})




let deleteinterval = setInterval(function(){
if(currentSlide < slidersCount){
    currentSlide++
     
    check()
}else{
    currentSlide = 1
    check()
}
},2000)
// sliders.forEach(function(slide){
//      slide.addEventListener('mouseenter', function(){
         
//                clearInterval(deleteinterval);
             
//      })
  
// })

//check function

function check(){

     //remove active class
     removeActive()

     //add active class for the slide
     sliders[currentSlide - 1].classList.add('active');

     //add active class for the bullet
     bullets[currentSlide - 1].classList.add('active');

}


//remove all active class function
function removeActive (){


     sliders.forEach(function(slide){

          slide.classList.remove('active');
     })

     bullets.forEach(function(bullet){

          bullet.classList.remove('active');
     })
}