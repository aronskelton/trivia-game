

$(document).ready(function(){
    $("#start-button").click(function(){


        var number = 45;
        alert("The let game begin!");
      $("#start-button").on("click", start);  
      $("#submit").on("click", finish);  
      $("#restart").on("click", restart); 

      function start(){
          counter = setInterval(timer, 1000);
          hideMe("#start-button");
      }
      function timer(){
        number--; 
        $("#countdown").html("<h2>" + number + "</h2>" );
        if (number === 0){
          alert("Game Over!")
          stop(); 
          alert("Answers:\nQuestion1: Beth\nQuestion2: To avoid therapy\nQuestion3: Terry\nQuestion4: Gazorpazorp\nQuestion5: Grandfather")
        }
      }
      function stop(){
          clearInterval(counter); 
    
      }
      function finish(){
          number = 1; 
          clearInterval(counter); 
          timer();
      }
  
      function restart(){
          number = 50;
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
  
        start(); 
    });
  });