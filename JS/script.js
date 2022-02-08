console.log("Welcome to my profile")

let colorMode = document.getElementById('toggle-change');
let colorModeIcon = document.getElementsByClassName('fa-lightbulb');
colorMode.addEventListener('click',()=>{

     if(colorMode.classList.contains('light-b')){
          console.log("Light theme");
          colorMode.classList.remove('light-b');
          colorMode.classList.add('dark-b');
          document.documentElement.setAttribute('data-theme','light');
          localStorage.setItem('theme','light');
     }
     else{
          console.log("Dark theme");
          colorMode.classList.add('light-b');
          colorMode.classList.remove('dark-b');
          document.documentElement.setAttribute('data-theme','dark');
          localStorage.setItem('theme','dark');
     }
})

const mediaQuery = window.matchMedia('(max-width:710px)');
document.getElementById('toggle-option').addEventListener('click',()=>{
     if(mediaQuery.matches)
     {
          document.getElementById('dropdown-menu').style.transitionProperty = "opacity" ;
          document.getElementById('dropdown-menu').style.transitionDuration = "0.3s" ;

          if(document.getElementById('option-icon').classList.contains('fa-bars')){
               document.getElementById('option-icon').classList.remove('fa-bars');
               document.getElementById('option-icon').classList.add('fa-times');
               document.getElementById('dropdown-menu').style.display = "flex";
               document.getElementById('dropdown-menu').style.opacity = 1;
               document.getElementById('dropdown-menu').style.visibility = "visible";
          }
          else{
               document.getElementById('option-icon').classList.add('fa-bars');
               document.getElementById('option-icon').classList.remove('fa-times');
               document.getElementById('dropdown-menu').style.display = "none";
               document.getElementById('dropdown-menu').style.opacity = 0;
               document.getElementById('dropdown-menu').style.visibility = "hidden";
               document.getElementById('dropdown-menu').style.transitionDuration = "0.3s" ;
          }
     }
})