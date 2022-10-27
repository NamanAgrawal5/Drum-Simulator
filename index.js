for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
          var button=this.innerHTML;
          switch(button){
            case "w":
                var audio=new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio=new Audio('sounds/tom-2.mp3');
                audio.play();   
                break;
            case "s":
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "k":
                var audio=new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "l":
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
          }
          animate(button);
        
    });
}

addEventListener("keypress",function(event){
    var button = event.key;
    switch(button){
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();   
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
      }
      animate(button);
});

function animate(button){
    var active_button = document.querySelector("."+button);
    active_button.classList.add("pressed");
    setTimeout(function() {
        active_button.classList.remove("pressed");
    },100);
    
}