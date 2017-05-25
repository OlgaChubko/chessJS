var chess = document.querySelector('.chessBoard');

var count = 0;
for(var i = 0; i < 64; i++) {
    var item = document.createElement('div');
    chess.appendChild(item);

    item.classList.add('chessLight');
    console.log(count);
    if (count % 2){item.classList.add('chessDark')}


    count+= ((count + 2) % 9) ? 1 : 2;

}