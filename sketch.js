//Inisiasi Variabel
let theta;                  // sudut awal
let pTali    = 10;         // panjang tali
let thetaVel = 0;           // kecepatan sudut awal
let thetaAcc = 0;           // percepatan sudut awal
let ballSize = 5;          // Ukuran bola
let gravity  = 9.8;           // gravitasi
let damping  = 0;           // redaman awal

//Gambar
let sudut;
let itera;
let mtk;

function preload(){
  sudut = loadImage("Sudut.png")
  itera = loadImage("ITERA.png")
  mtk = loadImage("mtk.png")
  barbs = loadImage("barbiegantung.png")
  barbs2 = loadImage("barbie2.png")
}


function resetNilai() {
  pTali    = 10; 
  gravity  = 9.8;
  ballSize = 5;
  theta    = 0;
  damping  = 0;
  s = 0;
}

//Tambah dan Kurangi Panjang Tali
function Ttali(){
  pTali += 10
}

function Ktali(){
  pTali -= 10
  
  if (pTali < 10) {
    pTali = 10;
 }
}

//Tambah dan Kurangi Besar Pendulum
function Tbola(){
  ballSize += 5
}

function Kbola(){
  ballSize -= 5
  
  if (ballSize < 0) {
    ballSize = 0;
 }
}

//Tambah dan Kurangi Gravitasi
function Tgravitasi(){
  gravity += 0.1
}

function Kgravitasi(){
  gravity -= 0.1
  
  if (gravity < 0) {
    gravity = 0;
 } 
}

//Tambah dan Kurangi Redaman
function Tdamping(){
  damping += 0.01
}

function Kdamping(){
  damping -= 0.01
  
  if (damping < 0) {
    damping = 0;
 }
}


function setup() {
  createCanvas( 1200, 550);
  
  //tombol Reset
  let tombolReset = createButton("Reset Angka");
  tombolReset.position(1085, 120);
  tombolReset.mousePressed(resetNilai)
  
  //tomboh tambah panjang
  let tTali = createButton("+")
  tTali.position (260,120)
  tTali.mousePressed(Ttali)
  
  //Tombol Kurangi Panjang
  let kTali = createButton("-")
  kTali.position (230,120)
  kTali.mousePressed(Ktali)
  
  
  //tomboh tambah besar bola
  let tBola = createButton("+")
  tBola.position (460,120)
  tBola.mousePressed(Tbola)
  
  //Tombol Kurangi Besar Bola
  let kBola = createButton("-")
  kBola.position (430,120)
  kBola.mousePressed(Kbola)
  
  
  //Tombol tambah Gravitasi
  let tGravitasi = createButton("+")
  tGravitasi.position (650,120)
  tGravitasi.mousePressed(Tgravitasi)
  
  //Tombol Kurangi Gravitasi
  let kGravitasi = createButton("-")
  kGravitasi.position (620,120)
  kGravitasi.mousePressed(Kgravitasi)
  
  
  //Tombol tambah Redaman
  let tDamping = createButton("+")
  tDamping.position (860,120)
  tDamping.mousePressed(Tdamping)
  
  //Tombol Kurangi Redaman
  let kDamping = createButton("-")
  kDamping.position (830,120)
  kDamping.mousePressed(Kdamping)
  
  
  //menambahkan besar sudut awal
  s = createInput(0)
  s.position(22, 120)
  s.changed(sudut)
  sudut();

function sudut(){
  theta = radians(s.value())
 } 
}

function draw() {
  background("#000210");
  
  //Header
  fill("#E6E7EB")
  rect(20,10,1160,70)
  
  fill("black")
  textSize(25)
  text("S I M U L A S I  G E R A K  P E N D U L U M"                 ,350,42)
  textSize(13)
  text("Mata Kuliah Visualisasi Dalam Sains"                ,500,65)
  
  
  image(mtk,870,15,50,50)
  image(itera,290,15,50,50)
 
  
  
  //Navigation Bar
  fill("#FFC0CB")
  rect(20,90,1160,60)
  
  
  //Content
  rect(20,160,790,300)
  
  
  //Sidebar
  rect(820,160,360,300)
  
  fill("black")
  textSize(14)
  text("Pendulum merupakan contoh sistem fisik yang",845,180)
  text("menggambarkan gerakan periodik. Gerakan"    ,845,200)
  text("pendulum dipengaruhi oleh gaya gravitasi"   ,845,220)
  text("yang bekerja pada massa pendulum, serta"    ,845,240)
  text("panjang dan sudut awalnya"                  ,845,260)
  
  text("Persamaan Pendulum Sederhana :",845,300)
  text("ω(t) = ω(t-∆t) + ((-g)/L(sin⁡(θ(t-∆t)))) * ∆t",845,320)
  text("θ(t)  = θ(t-∆t) + ω(t) * ∆t",845,345)
  
  text("Persamaan Pendulum Dengan Faktor Redaman :",845,390)
  text("ω(t) = ω(t-∆t) + ((-g)/L(sin⁡(θ(t-∆t)) - (Q.ω(t-∆t)))) * ∆t",845,410)
  text("θ(t)  = θ(t-∆t) + ω(t) * ∆t",845,435)
  
  
  //Fotter
  fill("#ED5C9B")
  rect(20,470,850,70)
  rect(880,470,300,70)
  
  fill("white")
  textSize(15)
  text("INFORMASI KELOMPOK 1 :",350,485)
  text("1. Dinda Salsabila (122160001)"    ,22,510)
  text("2. Rizky Ahmad Rifai (122160002)"  ,22,535)
  text("3. Indah Lusiana (122160007)"   ,300,510)
  text("4. Anisa Fitri (122160011)"  ,300,535)
  text("5. Rida Fitriani (122160013)"      ,590,510)
  text("6. Ratu Ajeng Fadila Husen (122160029)"         ,590,535)
  text("Program Studi Matematika" ,945,485)
  text("Fakultas Sains" ,985,510)
  text("Institut Teknologi Sumatera" ,945,535)
  
  
  //Navigation Control
  fill("black")
  textSize(16)
  text("Masukkan Sudut Awal :"     ,22,110)
  
  
  //Menampilkan nilai variabel
  textSize(16)
  fill("black")
  text("Panjang Tali : "+pTali           ,230,110)
  text("Besar Bola : "+ballSize          ,430,110)
  text("Gaya Gravitasi : "+gravity.toFixed(1)       ,620,110)
  text("Besar Redaman : "+damping.toFixed(2)        ,830,110)
  // text("Kecepatan Sudut :"               ,22,430)
  // text(""+thetaVel                       ,22,450)
  
  fill("black")
  rect(400,160,40,20)
  image(sudut,320,177,200,100)
  image(barbs, -70,160, 300, 300)
  image(barbs2, 585,160,300,300)
  
  
  
  //Koding Simulasi
  translate(width/2-180, 180); // Pusatkan canvas di tengah
  
  // Menghitung percepatan sudut
  thetaAcc = (-gravity / pTali) * sin(theta) -(damping * thetaVel);
  
  // Menghitung kecepatan sudut
  thetaVel += thetaAcc;
  
  // Menghitung sudut
  theta += thetaVel;
  
  // Hitung koordinat ujung tali
  let x = pTali * sin(theta);
  let y = pTali * cos(theta);
  
  // Gambar tali
  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  
  // Gambar bola
  noStroke();
  fill("#FF0022");
  ellipse(x, y, ballSize, ballSize);
  
  
}