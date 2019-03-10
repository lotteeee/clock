window.onload = function(){
        function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn;
        }
          return standIn;
        }

        function clock() {
          var time = new Date(),
                
          hours = time.getHours(),
                  
          minutes = time.getMinutes(),
                
          seconds = time.getSeconds();

          document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ':' + harold(minutes) + ':' + harold(seconds);
          background();
          //animation();
        }
                
        setInterval(clock, 1000);



        function background() {
          var background = document.getElementsByTagName('body')[0];
        
          var currentTime = new Date().getHours();
          if (currentTime < 10) {
            background.style.backgroundColor = '#191919';
          
          }
          if (currentTime >= 6 && currentTime < 11) {
            background.style.backgroundColor = '#F9E784';
          
          }
          if (currentTime >= 11 && currentTime < 16) {
            background.style.backgroundColor = '#E58F65';
            
          }
          if (currentTime >= 16 && currentTime < 21) {
            background.style.backgroundColor = '#D05353';
            
          }
          if (currentTime >= 21 && currentTime <= 24) {
            background.style.backgroundColor = '#C2847A';
            
          }
        }

    };
    

    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

    

    // function animation(){
    //   var currentTime = 7;
    //   var currentTime = new Date().getHours();
    //   if (currentTime >= 6 && currentTime <= 21) {
    //     TweenMax.from("#sun", 3, {x:300, opacity:0, scale:0.5});
    //   }
    //   else {
    //     TweenMax.from("#moon", 3, {x:300, opacity:0, scale:0.5});
    //   }
    // }


  TweenMax.from("#sun", 3, {x:300, opacity:0, scale:0.5, delay:1});
  TweenMax.from("#moon", 3, {x:300, opacity:0, scale:0.5, delay:3});


