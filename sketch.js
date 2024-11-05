let angle = 0;
let r = 255, g = 0, b = 0;

function setup() {  //設定初始內容，只會執行一次
  createCanvas(windowWidth,windowHeight);  //產生一個畫布
  background("#415a77")   //設定背景顏色(天空色)
}

function draw() {  //畫圖，每秒會畫60次
  background(220);   //背景顏色，灰白色(0黑色~255白)
  background("#0077b6")
  rectMode(CENTER) 
  noFill()   //不要充滿顏色
  stroke("#ff8fab")
  strokeWeight(4)
  //宣告變數
  var rect_width = 50 + mouseX/100  //方形的寬度
  var bc_width = 50  + mouseY/10    //大園的寬度
  var sc_width = 25  +mouseX/100  //小圓的寬度
  
  
  
  //FOR迴圈
  //i=條件判斷
  for(let j=0;j<20;j=j+1){  //產生一列的物件
     for(let i=0;i<40;i=i+1){   //產生一排的物件
      if(j<5){   //第0~4排共5排設定的顏色
       stroke("#fcbf49")
      }else if(j<10) {  //5~9
        stroke("#6a994e")
      }else{   // 10後
        stroke("#99582a")
      }
        ellipse(25+50*i,25+50*j,bc_width)  //在座標(x: 25y:25)畫一個直徑的圓
        rect(25+50*i,25+50*j,rect_width)     //畫方形
        ellipse(50+50*i,50+50*j,sc_width)  //畫小圓
  }  
}

  // 更新 RGB 顏色值
  r = (r + 1) % 256;
  g = (g + 2) % 256;
  b = (b + 3) % 256;

  // 設定文字顏色為中空且外框變色
  noFill();
  stroke(r, g, b);
  strokeWeight(10);

  textSize(150);
  textAlign(CENTER, CENTER);
  
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  text('TKUET', 0, 0);
  pop();

  // 增加旋轉角度
  angle = angle+5
}
