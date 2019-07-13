function vireaza() {
  console.log("vireaza");
}
function accelereaza() {
  let curentPosition = document.getElementById("car").style.left || "0px";
  let nextPosition = parseInt(curentPosition) + 50;
  document.getElementById("car").style.left = nextPosition + "px";
}
function franeaza() {
  console.log("franeaza");
}
function semnalizeaza() {
  console.log("semnalizeaza");
}
function reverse(){
    let curentPosition= document.getElementById("car").style.left || 0;
    let nextPosition= parseInt(curentPosition) - 50;
    document.getElementById("car").style.left= nextPosition+"px";

}

document.getElementById("volan").addEventListener("click", function() {
  vireaza();
});

document.getElementById("acceleratie").addEventListener("click", function() {
  accelereaza();
});

document.getElementById("frana").addEventListener("click", function() {
  franeaza();
});

document.getElementById("semnalizare").addEventListener("click", function() {
  semnalizeaza();
});

document.getElementById("reverse").addEventListener("click", function() {
  reverse();
});


