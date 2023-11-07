var id= null;
    function fishSwim() {
        var fish = document.getElementById('fishPic');
        var fishPos= 0;
        clearInterval(id);
        id = setInterval(fishFrame, 15);
        function fishFrame() {
            if (fishPos == 1800) {
                clearInterval(id);
            } else {
                fishPos += 3;
                fish.style.right = fishPos + 'px';
            }
        }
    }
    var id= null;
    function fishSwim2() {
        var fish2 = document.getElementById('fishPic2');
        var fishPos2= 0;
        clearInterval(id);
        id = setInterval(fishFrame2, 15);
        function fishFrame2() {
            if (fishPos2 == 1800) {
                clearInterval(id);
            } else {
                fishPos2 += 3;
                fish2.style.left = fishPos2 + 'px';
            }
        }
    }