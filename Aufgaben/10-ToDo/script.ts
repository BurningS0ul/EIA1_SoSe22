window.addEventListener("load", Click);

function Click() {
document.querySelector(".addBtn").addEventListener('click', newElement);
};

var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "trash";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

var trash = document.getElementsByClassName("trash");
var i;
for (i = 0; i < trash.length; i++) {
    trash[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var done = document.querySelector('ul');
done.addEventListener('click', function(){

  if (done.tagName === 'LI') {
    done.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "trash";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < trash.length; i++) {
    trash[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}