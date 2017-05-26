var chess = document.querySelector('.chessBoard');

var count = 0;
for(var i = 0; i < 64; i++) {
    var item = document.createElement('div');
    chess.appendChild(item);

    item.classList.add('chessLight');
    //console.log(count);
    if (count % 2){item.classList.add('chessDark')}
    count+= ((count + 2) % 9) ? 1 : 2;
}

var children1 = chess.childNodes[0];
var blLd = document.createElement('div');
blLd.classList.add('BlLd');
children1.appendChild(blLd);

var children2 = chess.childNodes[1];
var blHor = document.createElement('div');
blHor.classList.add('blHor');
children2.appendChild(blHor);

var children3 = chess.childNodes[2];
var blEl = document.createElement('div');
blEl.classList.add('blEl');
children3.appendChild(blEl);

var children4 = chess.childNodes[3];
var blF = document.createElement('div');
blF.classList.add('blF');
children4.appendChild(blF);

var children5 = chess.childNodes[4];
var blKing = document.createElement('div');
blKing.classList.add('blKing');
children5.appendChild(blKing);

var children6 = chess.childNodes[5];
var blEl = document.createElement('div');
blEl.classList.add('blEl');
children6.appendChild(blEl);

var children7 = chess.childNodes[6];
var blHor = document.createElement('div');
blHor.classList.add('blHor');
children7.appendChild(blHor);

var children8 = chess.childNodes[7];
var blLd = document.createElement('div');
blLd.classList.add('BlLd');
children8.appendChild(blLd);

var children9 = chess.childNodes[8];
var blP = document.createElement('div');
blP.classList.add('blP');
children9.appendChild(blP);

var children10 = chess.childNodes[9];
var blP = document.createElement('div');
blP.classList.add('blP');
children10.appendChild(blP);

var children11 = chess.childNodes[10];
var blP = document.createElement('div');
blP.classList.add('blP');
children11.appendChild(blP);

var children12 = chess.childNodes[11];
var blP = document.createElement('div');
blP.classList.add('blP');
children12.appendChild(blP);

var children13 = chess.childNodes[12];
var blP = document.createElement('div');
blP.classList.add('blP');
children13.appendChild(blP);

var children14 = chess.childNodes[13];
var blP = document.createElement('div');
blP.classList.add('blP');
children14.appendChild(blP);

var children15 = chess.childNodes[14];
var blP = document.createElement('div');
blP.classList.add('blP');
children15.appendChild(blP);

var children16 = chess.childNodes[15];
var blP = document.createElement('div');
blP.classList.add('blP');
children16.appendChild(blP);

var children49 = chess.childNodes[48];
var wP = document.createElement('div');
wP.classList.add('wP');
children49.appendChild(wP);

var children50 = chess.childNodes[49];
var wP = document.createElement('div');
wP.classList.add('wP');
children50.appendChild(wP);

var children51 = chess.childNodes[50];
var wP = document.createElement('div');
wP.classList.add('wP');
children51.appendChild(wP);

var children52 = chess.childNodes[51];
var wP = document.createElement('div');
wP.classList.add('wP');
children52.appendChild(wP);

var children53 = chess.childNodes[52];
var wP = document.createElement('div');
wP.classList.add('wP');
children53.appendChild(wP);

var children54 = chess.childNodes[53];
var wP = document.createElement('div');
wP.classList.add('wP');
children54.appendChild(wP);

var children55 = chess.childNodes[54];
var wP = document.createElement('div');
wP.classList.add('wP');
children55.appendChild(wP);

var children56 = chess.childNodes[55];
var wP = document.createElement('div');
wP.classList.add('wP');
children56.appendChild(wP)

var children57 = chess.childNodes[56];
var wL = document.createElement('div');
wL.classList.add('wL');
children57.appendChild(wL);

var children58 = chess.childNodes[57];
var wHor = document.createElement('div');
wHor.classList.add('wHor');
children58.appendChild(wHor);

var children59 = chess.childNodes[58];
var wEl = document.createElement('div');
wEl.classList.add('wEl');
children59.appendChild(wEl);

var children60 = chess.childNodes[59];
var wF = document.createElement('div');
wF.classList.add('wF');
children60.appendChild(wF);

var children61 = chess.childNodes[60];
var wKing = document.createElement('div');
wKing.classList.add('wKing');
children61.appendChild(wKing);

var children62 = chess.childNodes[61];
var wEl = document.createElement('div');
wEl.classList.add('wEl');
children62.appendChild(wEl);

var children63 = chess.childNodes[62];
var wHor = document.createElement('div');
wHor.classList.add('wHor');
children63.appendChild(wHor);

var children64 = chess.childNodes[63];
var wL = document.createElement('div');
wL.classList.add('wL');
children64.appendChild(wL);