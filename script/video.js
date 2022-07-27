$(".play-icon").click(function () {
  const video =
    '<iframe allowfullscreen src="' +
    $(this).attr("data-video") +
    '"></iframe>';
  $(this).replaceWith(video);
});

$(".play-icon").mousemove(function (e) {
  const parentOffset = $(this).offset();
  const relX = e.pageX - parentOffset.left;
  const relY = e.pageY - parentOffset.top;
  $(".play-button").css({ left: relX, top: relY });
});
$(".play-icon").mouseout(function () {
  $(".play-button").css({ left: "50%", top: "50%" });
});

function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
