window.addEventListener("load", () => {
  const canvas = document.querySelector(".canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let drawing = false;

  function startPosition(e) {
    drawing = true;
    draw(e);
  }
  function endPosition() {
    drawing = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.strokeStyle = "purple";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);
});
