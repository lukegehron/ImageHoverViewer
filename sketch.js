let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img11;
let img21;
let img31;
let img41;
let img51;
let img61;
let img71;
let img12;
let img22;
let img32;
let img42;
let img52;
let img62;
let img72;
let img13;
let img23;
let img33;
let img43;
let img53;
let img63;
let img73;
let img14;
let img24;
let img34;
let img44;
let img54;
let img64;
let img74;
let img15;
let img25;
let img35;
let img45;
let img55;
let img65;
let img75;
let img16;
let img26;
let img36;
let img46;
let img56;
let img66;
let img76*1.5;



function preload() {
  img1 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion001.jpg");
  img2 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion002.jpg");
  img3 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion099.jpg");
  img4 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion003.jpg");
  img5 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion004.jpg");
  img6 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion005.jpg");
  img7 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion006.jpg");

  img11 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion013.jpg");
  img21 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion012.jpg");
  img31 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion011.jpg");
  img41 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion010.jpg");
  img51 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion009.jpg");
  img61 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion008.jpg");
  img71 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion007.jpg");

  img12 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion016.jpg");
  img22 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion017.jpg");
  img32 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion018.jpg");
  img42 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion019.jpg");
  img52 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion020.jpg");
  img62 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion021.jpg");
  img72 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion022.jpg");

  img13 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion029.jpg");
  img23 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion028.jpg");
  img33 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion027.jpg");
  img43 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion026.jpg");
  img53 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion025.jpg");
  img63 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion024.jpg");
  img73 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion023.jpg");

  img14 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion032.jpg");
  img24 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion033.jpg");
  img34 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion034.jpg");
  img44 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion035.jpg");
  img54 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion036.jpg");
  img64 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion037.jpg");
  img74 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion038.jpg");

  img15 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion045.jpg");
  img25 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion044.jpg");
  img35 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion043.jpg");
  img45 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion042.jpg");
  img55 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion041.jpg");
  img65 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion040.jpg");
  img75 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion039.jpg");


  // img16 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion045.jpg");
  // img26 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion043.jpg");
  // img36 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion044.jpg");
  // img46 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion045.jpg");
  // img56 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion046.jpg");
  // img66 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion047.jpg");
  // img76*1.5 = loadImage("https://raw.githubusercontent.com/lukegehron/ImageHoverViewer/master/assets/Animotion048.jpg");
}

function setup() {
  createCanvas(1536, 864);
}



function draw() {
  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
  //   image(img76*1.5, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
    image(img75, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
    image(img74, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
    image(img73, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
    image(img72, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
    image(img71, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 878*1.5 && mouseX < 1024*1.5) {
    image(img7, 0, 0);
  }


  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
  //   image(img66, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
    image(img65, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
    image(img64, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
    image(img63, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
    image(img62, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
    image(img61, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 731*1.5 && mouseX < 878*1.5) {
    image(img6, 0, 0);
  }

  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
  //   image(img56, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
    image(img55, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
    image(img54, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
    image(img53, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
    image(img52, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
    image(img51, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 585*1.5 && mouseX < 731*1.5) {
    image(img5, 0, 0);
  }

  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
  //   image(img46, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
    image(img45, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
    image(img44, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
    image(img43, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
    image(img42, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
    image(img41, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 439*1.5 && mouseX < 585*1.5) {
    image(img4, 0, 0);
  }

  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
  //   image(img36, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
    image(img35, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
    image(img34, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
    image(img33, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
    image(img32, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
    image(img31, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 293*1.5 && mouseX < 439*1.5) {
    image(img3, 0, 0);
  }

  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
  //   image(img26, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
    image(img25, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
    image(img24, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
    image(img23, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
    image(img22, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
    image(img21, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 146*1.5 && mouseX < 293*1.5) {
    image(img2, 0, 0);
  }

  // if (mouseY > 0 && mouseY < 76*1.5 && mouseX > 0 && mouseX < 146*1.5) {
  //   image(img16, 0, 0);
  // }
  if (mouseY > 76*1.5 && mouseY < 152*1.5 && mouseX > 0 && mouseX < 146*1.5) {
    image(img15, 0, 0);
  }
  if (mouseY > 152*1.5 && mouseY < 228*1.5 && mouseX > 0 && mouseX < 146*1.5) {
    image(img14, 0, 0);
  }
  if (mouseY > 228*1.5 && mouseY < 304*1.5 && mouseX > 0 && mouseX < 146*1.5) {
    image(img13, 0, 0);
  }
  if (mouseY > 304*1.5 && mouseY < 380*1.5 && mouseX > 0 && mouseX < 146*1.5) {
    image(img12, 0, 0);
  }
  if (mouseY > 380*1.5 && mouseY < 456*1.5 && mouseX > 0 && mouseX < 146*1.5) {
    image(img11, 0, 0);
  }
  if (mouseY > 456*1.5 && mouseY < 532*1.5 && mouseX > 0 && mouseX < 146*1.5) {
    image(img1, 0, 0);
  }
}
