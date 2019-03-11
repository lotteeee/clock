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
          //als de pagina geladen is, voer functie background uit
          //animation();
        }
                
        setInterval(clock, 1000);
        //als de klok 60 bereikt springt de tijd over.


        function background() {
          var background = document.getElementsByTagName('body')[0];
          //pak het body element
        
          var currentTime = new Date().getHours();
          if (currentTime < 5) {
            background.style.backgroundColor = '#191919';
          //als de tijd kleiner is dan 5 geef andere achtergrondkleur
          
          }
          if (currentTime >= 6 && currentTime < 11) {
            background.style.backgroundColor = '#F9E784';
          //als de tijd groter is dan 6 en kleiner dan 11, geef andere achtergrondkleur
          }
          if (currentTime >= 11 && currentTime < 16) {
            background.style.backgroundColor = '#E58F65';
            //als de tijd groter is dan 11 en kleiner dan 16, geef andere achtergrondkleur
          }
          if (currentTime >= 16 && currentTime < 21) {
            background.style.backgroundColor = '#D05353';
            //als de tijd groter is dan 16 en kleiner dan 21, geef andere achtergrondkleur
            
          }
          if (currentTime >= 21 && currentTime <= 24) {
            background.style.backgroundColor = '#C2847A';
            //als de tijd groter is dan 21 en kleiner dan 24, geef andere achtergrondkleur
          }
        }

    };
    

    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
    //pak het jaar, maand en dag element en weergeef het in de div date


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
  //pak de image met het id sun verplaats deze 300px naar links, 
  //hij is onzichtbaar tot die in beeld komt, hij vergroot naar mate in het beeld,
  //met 1 sec ertussen
  TweenMax.from("#moon", 3, {x:300, opacity:0, scale:0.5, delay:3});
  // pak de image met het id moon verplaats deze 300px naar links, 
  // hij is onzichtbaar tot die in beeld komt, hij vergroot naar mate in het beeld,
  // met 3 sec ertussen

