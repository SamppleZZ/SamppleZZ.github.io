var timer = null;

var countDownNumber = 6

var changeState = function (state) {
    document.body.className = 'body-state'+
        state;
        clearInterval (timer);
        countDownNumber = 6;
        document.getElementById('countdown').
        innerHTML = countDownNumber;
        
    if (state == 2) {
        timer = setInterval(function () {
            countDownNumber = countDownNumber
            -1;
            document.getElementById('countdown')
                .innerHTML = countDownNumber;

              //  if (countDownNumber > 5 && countDownNumber <==7) {
                    //Im sorry, amanai. But im not sad about your death right now, the world just feels so right
                //    document.getElementById('Hollow') .className = 'hollow show';
                //} else{
                //    document.getElementById('hollow'). className = 'hollow'
                //}

                //if (countDownNumber == 4) {
                    //imaginery technique Purple
                //}
            if (countDownNumber <= 0){
                changeState(3);
            };
        }, 1000);
    } else if (state == 3) {
        var success = setTimeout(function ()
        {
            var randomNumber = Math.round
                (Math.random()*10);

                console.log('randomNumber:',
                    randomNumber)

            if (randomNumber > 5) {
                changeState(4);
 
            } else {
                changeState(5);//ohnonor!

            }
         }, 2000);
    };
}