// TODO make whole screen shake when you input incorect info
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
  const u = "Lucy";
  const p = "lucy";
  //check all input fields.
  const username = $(".username").val();
  const password = $(".password").val();

  let message = [];
  if (username === "Lucy" &&
      password === "lucy") {
        console.log("success");
        clearError();
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

//jquery flip -- wont flip back
// $(".signUpNav").on("click", {num: "180"}, flip);
// $(".logInNav").on("click", {num: "-180"}, flip);
// function flip (event) {
//   $(".card").animate({ transform: event.data.num }, {
//       step: function(now, fx) {
//         console.log(now);
//         $(this).css('-webkit-transform','rotateY('+now+'deg)');
//         $(this).css('-moz-transform','rotateY('+now+'deg)');
//         $(this).css('transform','rotateY('+now+'deg)');
//       },
//         duration: 2000
//   },'linear');
// }

//native flip
$(".signUpNav").on("click", flip);
$(".logInNav").on("click", flip);
function flip (event) {
  $(".card").toggleClass("flip");
}







// TODO 3D flip transform if correct to load next page or to sign up page
// TODO play audio on button Click
// TODO design focus aesthetic
// TODO password strength checker
// TODO save username and pw into variables and show a welcome screen
