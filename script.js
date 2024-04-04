


  //Mute audio
  const audioElements = document.querySelectorAll('audio');
  const audioToggle = document.getElementById('audio-toggle');
  
  let audioEnabled = true;
  
  audioToggle.addEventListener('click', function() {
    console.log("audio clicked");
      if (audioEnabled) {
          audioElements.forEach(audio => {
              audio.pause();
          });
          audioEnabled = false;
          audioToggle.style.opacity = '50%';
      } else {
          audioElements.forEach(audio => {
              audio.play();
          });
          audioEnabled = true;
          audioToggle.style.opacity = '100%';
      }
  });
  
  //NAVIGATION
  
  //Navigation menu
  let logo = document.getElementById('logo');
  let navContent = document.querySelector(".global-nav-content");
  let logoExpand = false;
  let navItems = document.querySelectorAll(".global-nav-item");
  
  logo.addEventListener('click', function(){
    if(!logoExpand){
      logo.style.transform = "rotate(90deg)";
      navContent.classList.toggle('slide');
      logoExpand = true;
    }else{
      logo.style.transform = "rotate(0deg)";
      navContent.classList.toggle('slide');
      logoExpand = false;
    }
  
    
  });
  
  navItems.forEach(item =>{
    item.addEventListener('mouseover', () => {
      var btnColor = window.getComputedStyle(item);;
      console.log("0px 0px 6.5px 4px" + btnColor.color + '');
      item.style.boxShadow = "0px 0px 6.5px 4px " + btnColor.color + '';
    })
    item.addEventListener('mouseleave', () => {
     
      item.style.boxShadow = "none";
    })
  })


let verticalSigns = document.querySelectorAll(".v-s-inner-container");

verticalSigns.forEach(item =>{
  let vsContent = item.children;
  item.addEventListener('mouseover', () =>{
    console.log("hover", item);
    for(let i = 0; i< vsContent.length; i++ ){
      console.log("boxshadow");
      vsContent[i].style.boxShadow = "0px 0px 24px 4px #FF540F";
    }
  })
  item.addEventListener('mouseleave', () =>{
    console.log("hover", item);
    for(let i = 0; i< vsContent.length; i++ ){
      console.log("boxshadow");
      vsContent[i].style.boxShadow = "none";
    }
  })
})


