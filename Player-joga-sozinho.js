alert("Vamos para corrida")
    var px = 300;

    var py = 0;  

    var obj = document.getElementById("ia")

    setTimeout(mover, 18)

   

    function mover() {

        var mv = Math.floor(Math.random() * 5)//0=e 1=d 2=c 3, 4,=b
        if(mv == 0){
            px -= 10;
            obj.style.left = px + "px"
        } 

        if(mv == 1){
            px += 10;
            obj.style.left = px + "px"
        }

        if(mv == 2){
            py -= 10;
            obj.style.top = py + "px"
        }

        if((mv == 3) || (mv == 4) || (mv || 5)){
            py += 10;
            obj.style.top = py + "px"
        }

        if(py > 750){
            alert("O 'verde' ganhol")
            return;
        }

        setTimeout(mover, 25)

    }

    var x = 600;
    var y = 0;



    document.addEventListener("keydown",function(event) {
      var d = document.getElementById("dv1");
      var tecla = event.keyCode
      if(tecla == 65){
        x-=10
        d.style.left = x + "px"
      }
      if(tecla == 68){
        x+=10
        d.style.left = x + "px"
      }
      if(tecla == 87) {
        y-=10
        d.style.top = y + "px"
      }

      if(tecla == 83) {
        y+=10
        d.style.top = y + "px"
      }

      if(y > 750){
            alert("O 'azul' ganhol")
        }
     
    })
