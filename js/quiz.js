function one() {
    document.getElementById('check1')
    .style.display = "block";
}

function two() {
    document.getElementById('check2')
    .style.display = "block";
}

function three() {
    var x = document.getElementById("img");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function four() {
    var x = document.getElementById("img");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function sumbit(){
    alert("Out of 4 question 2 answer is correct")
}