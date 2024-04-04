
  
  
  //TOP NAVIGATION
  
  //Chaning Background 
  const els = document.querySelectorAll('.styled-button');
      // Add click event listener to each button
      els.forEach(button => {
          button.addEventListener('click', function() {
              // Remove 'green' class from all buttons
              els.forEach(btn => {
                  btn.classList.remove('bg-btn-active');
              });
  
              // Add 'green' class to the clicked button
              this.classList.add('bg-btn-active');
              changeBackground(this.id);
          });
      });
  
  function changeBackground(id) {
    // document.querySelectorAll('[id^="background"]');
    // var classes = console.log(document.querySelector("body").classList.length);
    // clear all background classes from body
    const cls = [
      "bg-img-wooden",
      "bg-img-inox",
      "bg-img-pinkgreen"
    ];
    document.querySelector("body").classList.remove(...cls);
  
    switch (id) {
      case "wooden":
        document.querySelector("body").classList.add("bg-img-wooden");
        break;
      case "inox":
        document
          .querySelector("body")
          .classList.add("bg-img-inox");
        break;
      case "pinkgreen":
        document.querySelector("body").classList.add("bg-img-pinkgreen");
        break;
      default:
        console.log("switch caught nothing");
        break;
    }
  }

  
  //BOTTOM RIGHT NAVIGATION
  let guides = document.querySelector(".guide-content");
  
  //EATING ACTIVITY
  
  //cursor
  var customCursor = document.getElementById('cursor');
  
  // Listen for mousemove event on the document
  document.addEventListener('mousemove', function(e) {
    // Set custom cursor position to match mouse position
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });
  
  // Listen for mousedown event on the document
  document.addEventListener('mousedown', function() {
    // Change cursor background image when mouse is down
    customCursor.style.backgroundImage = "url('img/dua.png')";
  });
  
  // Listen for mouseup event on the document
  document.addEventListener('mouseup', function() {
    // Change cursor background image back to normal when mouse is up
    customCursor.style.backgroundImage = "url('img/dua2.png')";
  });
  
  //Eating the rice
  const ricebowl = document.getElementById('tocom');
  var ancom = ricebowl.children;
  var bowlstages = [
    'img/com-0.png',
    'img/com-1.png',
    'img/com-3.png',
    'img/com-4.png'
  ];
  
  
  const cakho = document.getElementById('cakho');
  var cakhostages = ['img/ca1.png','img/ca2.png','img/ca3.png'];
  let cakho_counter = 0;
  
  const rauxao = document.getElementById('rauxao');
  var rauxaostages = ['img/rau-1.png','img/rau-2.png','img/rau-3.png'];
  let rauxao_counter = 0;
  
  const canhchua = document.getElementById('canhchua');
  var canhchuastages = ['img/canh-1.png','img/canh-2.png','img/canh-3.png'];
  let canhchua_counter = 0;
  
  cakho.addEventListener("click", function () {
    if(cakho_counter<3 && !dragmode){
      guides.style.top = "100%";
      var newChild = document.createElement('img');
      newChild.className = 'food-cutout ca-stages';
      newChild.style.width = "70%"
    
      newChild.src = cakhostages[cakho_counter];
      if(cakho_counter == 0){
        newChild.style.paddingTop = "20px";
      }
     newChild.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
      //console.log(newChild);
      ricebowl.appendChild(newChild);
      cakho_counter++;
    
    }
    
  
  })
  
  rauxao.addEventListener("click", function () {
    if(rauxao_counter<3 && !dragmode){
      guides.style.top = "100%";
      var newChild = document.createElement('img');
      newChild.className = 'food-cutout rau-stages';
      newChild.style.width = "60%";
      newChild.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
      newChild.src = rauxaostages[rauxao_counter];
      
      //console.log(newChild);
      ricebowl.appendChild(newChild);
      rauxao_counter++;
    
    }
    
  
  })
  
  canhchua.addEventListener("click", function () {
    if(canhchua_counter<3 && !dragmode){
      guides.style.top = "100%";
      var newChild = document.createElement('img');
      newChild.className = 'food-cutout canh-stages';
      newChild.style.width = "80%"
      newChild.style.transform = 'rotate(' + Math.floor(Math.random() * 360) + 'deg)';
      newChild.src = canhchuastages[canhchua_counter];
      
      //console.log(newChild);
      ricebowl.appendChild(newChild);
      canhchua_counter++;
    
    }
    
  
  })
  
  
  
  
  ricebowl.addEventListener("click", function () {
    if (ancom.length >1 && !dragmode){
      guides.style.top = "100%";
      if(ancom[ancom.length-1].classList.contains("ca-stages")){
        cakho_counter--;
      }else if(ancom[ancom.length-1].classList.contains("rau-stages")){
        rauxao_counter--;
      }else if(ancom[ancom.length-1].classList.contains("canh-stages")){
        canhchua_counter--;
      }
      ancom[ancom.length-1].remove();
      console.log(dragmode);
    }
    if(ancom.length == 1){
      console.log("boi com");
      setTimeout(function() {
        // Re-add all three original child divs
        
        //ricebowl.innerHTML = ""; // Clear the parent div
        for (var i = 1; i < 3; i++) {
          
            var newChild = document.createElement('img');
            newChild.className = 'bowl-stages';
            newChild.src = bowlstages[i];
            console.log(newChild);
            ricebowl.appendChild(newChild);
        }
    }, 3000); // 3000 milliseconds = 3 seconds
    }
    
    
  
  })
  
  //Setting the table (Dragging the bowls and plate)
  let dragmode = false;
  var container = document.querySelector("#food-container");
      var activeItem = null;
  
      var active = false;
  
      container.addEventListener("touchstart", dragStart, false);
      container.addEventListener("touchend", dragEnd, false);
      container.addEventListener("touchmove", drag, false);
  
      container.addEventListener("mousedown", dragStart, false);
      container.addEventListener("mouseup", dragEnd, false);
      container.addEventListener("mousemove", drag, false);
  
      function dragStart(e) {
        
        if ( e.target !== e.currentTarget) {
          
          active = true;
          
          // this is the item we are interacting with
          activeItem = e.target;
  
          if (activeItem !== null) {
            if (!activeItem.xOffset) {
              activeItem.xOffset = 0;
            }
  
            if (!activeItem.yOffset) {
              activeItem.yOffset = 0;
            }
  
            if (e.type === "touchstart") {
              activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
              activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
            } else {
              console.log("doing something!");
              activeItem.initialX = e.clientX - activeItem.xOffset;
              activeItem.initialY = e.clientY - activeItem.yOffset;
            }
          
          }
        }
      }
  
      function dragEnd(e) {
        if (activeItem !== null) {
          activeItem.initialX = activeItem.currentX;
          activeItem.initialY = activeItem.currentY;
          
        }
  
        active = false;
        activeItem = null;
        
        
      }
  
      function drag(e) {
        if (active) {
          
          e.preventDefault();
                  if(e.type === "touchmove"){
  
            activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
            activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
          } else {
            activeItem.currentX = e.clientX - activeItem.initialX;
            activeItem.currentY = e.clientY - activeItem.initialY;
          }
  
          activeItem.xOffset = activeItem.currentX;
          activeItem.yOffset = activeItem.currentY;
  
          setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
        }else{
          dragmode = false;
        }
        
      }
  
      function setTranslate(xPos, yPos, el) {
        while (el !== null && !el.classList.contains("drag-food-item")) {
          el = el.parentNode;
      }
  
        if(el && el.classList.contains("drag-food-item")){
          guides.style.top = "100%";
          allFoodItems.forEach(item => {
            item.style.transition = "none";
          });
          el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
          dragmode = true;
      }
     
      }
  
  /* Close Quiz */
  let closeQuiz = document.getElementById('close-quiz');
  let quizContainer = document.querySelector(".quiz-container");
  let quizBorder = document.querySelector(".quiz-borders");
  /*let quizStt = true;
  
  if (quizStt){
    closeQuiz.addEventListener("click", function () {
      console.log(quizStt);
      quizContainer.style.transform = "translateX(65vw)";
      quizStt = false;
    })
  }
    quizContainer.addEventListener("click", function () {
      console.log(quizStt);
     
      if (!quizStt){
        quizContainer.style.transform = "translateX(-65vw)";
      quizStt = true;
      }
    })*/
  
    closeQuiz.addEventListener("click", function () {
      console.log('clicked');
      quizContainer.style.transform = "translateX(65vw)";
    })
  
    quizBorder.addEventListener("click", function () {
      console.log('clicked');
      quizContainer.style.transform = "translateX(0)";
    })
  
    
  /* Quiz checking */
  var currentQuestion = 0;
  var totalQuestion = 5;
  var score = 0;
  let quizOptions = document.querySelectorAll(".btn-option");
  let quizQuestions = document.querySelectorAll(".quiz-content");
  let wrongPopup = document.getElementById('wrong-popup');
  let correctPopup = document.querySelectorAll(".correct-popup");
  
  quizOptions.forEach(button => {
      button.addEventListener("click", function () {
        console.log("clicked");
        checkAnswer(button);
        
      })
  })
  
  function checkAnswer(selectedAnswer) {
    var correctAnswer;
    if (currentQuestion === 0) {
      correctAnswer = quizOptions[1];
    } else if (currentQuestion === 1) {
      correctAnswer = quizOptions[5];
    } else if (currentQuestion === 2) {
      correctAnswer = quizOptions[10];
    }
  
    if (selectedAnswer === correctAnswer) {
      console.log("correct");
      selectedAnswer.classList.add('btn-correct');
      correctPopup[score].style.visibility= 'visible';
      score++;
    }else{
      selectedAnswer.classList.add('btn-wrong');
      wrongPopup.style.opacity = '100%';
      if (score-1>= 0){
      correctPopup[score-1].style.visibility= 'hidden';
    }
      console.log("incorrect");
    }
    setTimeout(function() {
    if (currentQuestion < totalQuestion) {
      
      quizQuestions[currentQuestion].classList.remove('question-active');
      wrongPopup.style.opacity = '0%';
      
      currentQuestion++;
      quizQuestions[currentQuestion].classList.add('question-active');
    } else {
      showResult();
    }
  }, 3000);
  }
  
  function showResult() {
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = "<h2>Quiz Result</h2><p>You scored " + score + " out of " + totalQuestions + " questions.</p>";
  }
  
  
  //Intro
  
  let allFoodItems = document.querySelectorAll(".drag-food-item");
  
  window.addEventListener('load', function() {

    
    canhchua.style.transform = "translate(-20vw, -70vh)";
    ricebowl.style.transform = "translate(-27vw, -132vh)";
    quizContainer.style.transform = "translate(65vw)";
    allFoodItems.forEach(item => {
      item.style.transition = "transform .3s ease";
    })
    setTimeout(function() {
    rauxao.style.transform = "translate(-10vw,100vh)";

    cakho.style.transform = "translate(0, 100vh)";
      canhchua.style.transform = "translate(0,0)";
      ricebowl.style.transform = "translate(0,0)";
      quizContainer.style.transform = "translate(0)";
      
      console.log('guide 0');
    }, 2000);
    setTimeout(function() {
      console.log('guide 1');
      guides.style.top = "50%";
    }, 4000);
    setTimeout(function() {
      guides.style.top = "0";
    }, 6000);
    
    
  });
  
  
  
  /*allFoodItems.forEach(item => {
    item.style.transition = "none";
  })*/
  