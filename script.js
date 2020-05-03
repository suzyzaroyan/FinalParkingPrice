function checkentry(evt) {
  var time = parseFloat(evt.currentTarget.value);

  if (time > 0 && time <= 24) {
    console.log("Correct Value");
    evt.currentTarget.style.color = "black";
    enableBtn();
  } else {
    console.log("Wrong value");
    evt.currentTarget.style.color = "red";
    disableBtn();
  }
}

function disableBtn() {
    document.getElementById("myBtn").disabled = true;
}
function enableBtn() {
    document.getElementById("myBtn").disabled = false;
}

function calculatePrice() {
  var price1 = parseFloat(document.getElementById ("price1").value);
  var currentprice = price1 * 100;
  document.getElementById("CurrentPriceVAL").innerHTML = currentprice;


const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let now = new Date();
now.setHours(now.getHours()+price1);

let countDown = now.getTime();

let x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;
          
        
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    }, second)

}
