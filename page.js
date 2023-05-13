function showbubble(){
    const bubble = document.getElementsByClassName("speech-bubble");
    const windowwidth = window.innerWidth;
    const windowheight = window.innerHeight;

    const xline = Math.floor(Math.random()*(windowwidth- bubble.offsetWidth)) ;
    const yline = Math.floor(Math.random()*(windowheight-bubble.offsetHeight));
    bubble.style.left = xline + "px";
    bubble.style.top =yline+"px";
    bubble.style.display = "block";
    

}