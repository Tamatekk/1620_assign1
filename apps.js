document.getElementById("Dark").addEventListener("click", myFunction);
document.getElementById("Dark").addEventListener("click", change); 
function myFunction() {
   var e = document.body;
   e.classList.toggle("dark-mode");

}
var top = document.getElementsByClassName("Top")
var middle = document.getElementsByClassName("middle")
var bottom = document.getElementsByClassName("Bottom")
var main = document.getElementsByClassName("Main")
var textbox = document.getElementsByClassName("Textbox")
function change(){
  var x = document.getElementById("Dark");
    if (x.innerHTML == "dark mode") {
    x.innerHTML = "light mode";
  } else {
    x.innerHTML = "dark mode";
  }
  if(top.style.background-color == rgb(167, 93, 93)) {
    top.style.background-color == 'black';
  } else {
    top.style.background-color == 'red'
  }
    }

    document.getElementById("h").addEventListener("click", hide)
    function hide(){
    document.getElementById('form').hidden = true;
    document.getElementById('output').hidden = true;
    }
    
    document.getElementById("r").addEventListener("click", reappear)
    function reappear(){
    document.getElementById('form').hidden = false;
    document.getElementById('output').hidden = true;
    }

    var Titles = [];

    var sidebar = [];
    document.getElementById("Save").addEventListener("click", add);
    
    function add(){
      var inputs = document.querySelectorAll('input');
      var newTitle = {};
      for (var i = 0; i < inputs.length; i++) {
        newTitle[inputs[i].name] = inputs[i].value;
        inputs[i].value = '';
      }
      Titles.push(newTitle);
      console.log(Titles);
    for (var e = 0; e < Titles.length; e++){
    var new_title = (JSON.stringify(Titles[e]['title']))
    }
    
    sidebar.push("<button>" + new_title.replace(/['",]+/g, '') +"</button> <br>" )
    
    document.getElementById('sidebar').innerHTML = sidebar;
    document.getElementById('sidebar').children[0].addEventListener('click',display0);
    
    function display0(){
    document.getElementById('output').innerHTML = JSON.stringify(Titles[0]);
    }
    
    document.getElementById('sidebar').children[2].addEventListener('click',display1);
    
    function display1(){
    document.getElementById('output').innerHTML = JSON.stringify(Titles[1]);
    }
    
    document.getElementById('sidebar').children[4].addEventListener('click',display2);
    
    function display2(){
    document.getElementById('output').innerHTML = JSON.stringify(Titles[2]);
    }
    document.getElementById('sidebar').children[6].addEventListener('click',display2);
    
    function display2(){
    document.getElementById('output').innerHTML = JSON.stringify(Titles[2]);
    }
    document.getElementById('sidebar').children[8].addEventListener('click',display2);
    
    function display2(){
    document.getElementById('output').innerHTML = JSON.stringify(Titles[2]);
    }
    document.getElementById('sidebar').children[10].addEventListener('click',display2);
    
    function display2(){
    document.getElementById('output').innerHTML = JSON.stringify(Titles[2]);
    }
    }
    