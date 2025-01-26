
const txt = 'Will you be my valentine?'; /* The text */
const speed = 200; /* The speed/duration of the effect in milliseconds */
function typeWriter(i) {
    if (i < txt.length) {
        document.getElementById("writer").innerHTML += txt.charAt(i);
        setTimeout(() => typeWriter(++i), speed);
    }else{
        setTimeout(function(){
            $('button.icon-btn').css('display', 'block')
            $('button.icon-btn').addClass("animate__fadeInDown")
        }, 500)
    }
}

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '320',
        width: '100%',
        videoId: 'lDK9QqIzhwk',
        controls: 0,
    });
    typeWriter(0);
}

$(document).ready(function (){
    $('#no-button').click(function (){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Try again.',
            footer: '<i>Are you serious?</i>'
          })
    })

    $("#yes-button").click(function (){
        player.playVideo();
        setTimeout(() => {
            $('.writer-yes-no-block').addClass('animate__fadeOut')
            setTimeout(() => {
                $('div.pyro').css('display', 'block');
            }, 5000);

            $('div.spinning-loader').css('display', 'block');
            $('div.spinning-loader').addClass("animate__fadeIn");
    
            setTimeout(() => {
                $('div.living-on-a-prayer').css('display', 'flex');
                $('div.living-on-a-prayer').addClass("animate__fadeIn");
            }, 1200);            
        }, 1200);
    });
});
