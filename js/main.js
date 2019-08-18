//To handle transform using the .animate fn
//set animate function, then put any value in the object, deining a number after it. This number defines the limit of the animation
//not really sure why it works that way
//Then, after the comma add another object containing the step parameter, make a fn that passes through now and fx. now can be used to get the value as it moves.
//set now in the place where you want the css to change
//set duration in object
//'linear' defines what type of animation

//Q: why does transform: -10; do what it does, why can I put borderSpacing, and why not height or something else.
function shake () {
  $(".wrapper").animate({  transform: -10 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform','translateX('+now+'px)');
        $(this).css('-moz-transform','translateX('+now+'px)');
        $(this).css('transform','translateX('+now+'px)');
      },
      duration: 100,
      complete: function () {
        $(".wrapper").animate({  transform: 10 }, {
            step: function(now, fx) {
              $(this).css('-webkit-transform','translateX('+now+'px)');
              $(this).css('-moz-transform','translateX('+now+'px)');
              $(this).css('transform','translateX('+now+'px)');
            },
            duration: 100,
            complete: function () {
              $(".wrapper").animate({  transform: 0 }, {
                  step: function(now, fx) {
                    $(this).css('-webkit-transform','translateX('+now+'px)');
                    $(this).css('-moz-transform','translateX('+now+'px)');
                    $(this).css('transform','translateX('+now+'px)');
                  },
                  duration: 100,
              },'linear');
            }
        },'linear');
      }
  },'linear');
}

//TODO red error message come up if information incomplete
const loginBtn = $("#login").on("click", checkInput);
function checkInput () {

  const u = $(".username").val();
  const p = $(".password").val();
  //check all input fields.
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  localStorage.getItem("username", u);
  localStorage.getItem("password", p);

  let message = [];
  if (username === u &&
      password === p) {
        console.log("success");
        clearError();
        slideUp();
      }
  else {
    if (username != u) {
      message.push("username");
    }
    if (password != p) {
      message.push("password");
    }

    if (message.length > 1) {
      message = message.join(" and ");
    }
    shake();
    errorMsg(message);
  }
}

const signupBtn = $("#signUp").on("click", signUp);
function signUp () {
  const u = $(".signInUsername").val();
  const p = $(".signInPassword").val();
  //check all input fields.
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  localStorage.setItem("username", u);
  localStorage.setItem("password", p);

  // TODO if remember me, save in loading.

  // TODO Go to next page.
  window.location.href = "notes.html";
}


function errorMsg (error) {
  //the .length can be used to check if the element exists on the page yet
  if ($(".error").length) {
    $(".error").show();
    $(".error").text(`Sorry, ${error} was incorrect.`);

  }
  else {
    $(`<p class="error">Sorry, ${error} was incorrect.</p>`).insertAfter("#login")
  }

}

function clearError () {
  if ($(".error").length) {
    $(".error").hide();
  }
}

//native flip
$(".signUpNav").on("click", flip);
$(".logInNav").on("click", flip);
function flip (event) {
  $(".card").toggleClass("flip");
}

function slideUp () {
  $(".card").addClass("slideUp");
  $(".welcome").addClass("slideIn");
}

$(".forgot").on("click", function () {
  localStorage.clear();
})




// TODO 3D flip transform if correct to load next page or to sign up page
// TODO play audio on button Click
// TODO design focus aesthetic
// TODO password strength checker
// TODO save username and pw into variables and show a welcome screen
