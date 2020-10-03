
function tab(evt, tabName) {
    
    const tabcontent = document.getElementsByClassName("content");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tabs");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 
    let  time = 0;
    let running = 0;
 document.getElementById("start").addEventListener("click" ,function() {
     
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("start").textContent = "Stop";
    } else {
        running = 0;
        document.getElementById("start").textContent = "RESUME";
    }
}) 

document.getElementById("reset").addEventListener( 'click',  function(){
    running = 0;
    time = 0;
    document.getElementById("start").textContent = "Start";
    document.getElementById("output").textContent = "00:00";
}
);



function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
           
            if (mins < 10) {
              mins = "0" + mins;
            } 
            if (secs < 10) {
              secs = "0" + secs;
            }
            document.getElementById("output").textContent = mins + "m" + ":" + secs + "s"
            increment();
        },100);
    }
}

document.getElementById("timers").addEventListener("click" ,function() {
    let inputMin = document.getElementById("time").value;
    let time = inputMin * 60;
    if (inputMin >= 1) {
      let outputTimer = document.getElementById("outputTimer");
      if (running === 0) {
        interval = setInterval(updateCount, 1000);
        running = 1;
      } 
      function updateCount() {
        const min = Math.floor(time / 60);
        let sec = time % 60;
        outputTimer.textContent = min+"m"+":"+sec + "s";
        
        if (time > 0) {
          time--;
        } else {
          time = 0;
        }
      }
    } 
  }




);
