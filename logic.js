let input;
let img;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("contenedor-canvas");
  input = createFileInput(handleFile);
}

function draw() {
  background("lightgray");
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  print(file);
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
  } else {
    img = null;
  }
}
