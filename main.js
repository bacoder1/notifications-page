var numberElement = document.getElementById("number");

var currentNumber = 3;

function decrementNumber(event) {
    var element = event.target;
    if (currentNumber > 0) {
      currentNumber--;
      numberElement.textContent = currentNumber;
      console.log(element);
      element.removeAttribute("onclick");
    }
  }
  


function setupCommentClickEvent(commentId, circleId) {
    var comment = document.getElementById(commentId);
    var circle = document.getElementById(circleId);

    comment.addEventListener("click", function () {
      comment.style.background = "none";
      comment.style.cursor = "default";
      circle.style.display = "none";
    });
  }

  setupCommentClickEvent("comment1", "circle1");
  setupCommentClickEvent("comment2", "circle2");
  setupCommentClickEvent("comment3", "circle3");
  
  var comment1 = document.getElementById('comment1');
  var comment2 = document.getElementById('comment2');
  var comment3 = document.getElementById('comment3');

  var circle1 = document.getElementById('circle1');
  var circle2 = document.getElementById('circle2');
  var circle3 = document.getElementById('circle3');


  function resetNumber() {
    currentNumber = 0;
    numberElement.textContent = currentNumber;
    comment1.style.background = "none";
    comment2.style.background = "none";
    comment3.style.background = "none";

    comment1.style.cursor = "default";
    comment2.style.cursor = "default";
    comment3.style.cursor = "default";

    circle1.style.display = "none";
    circle2.style.display = "none";
    circle3.style.display = "none";
  };