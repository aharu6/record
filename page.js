const windowwidth = window.innerWidth;
const windowheight = window.innerHeight;

const speechrecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new speechrecognition();
  recognition.continuous = true;
  recognition.lang = "ja-JP";
  recognition.interimResults = false;


function showbubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("speech-bubble");
  bubble.classList.add("content");
  document.body.appendChild(bubble);

  const xline = Math.floor(Math.random() * (windowwidth - bubble.offsetWidth));
  const yline = Math.floor(
    Math.random() * (windowheight - bubble.offsetHeight)
  );
  bubble.style.left = `${xline}px`;
  bubble.style.top = `${yline}px`;
  bubble.style.display = "block";
}

recognition.addEventListener("result",(event)=>{
  showbubble();
  const transcript = event.results[event.results.length -1][0].transcript;
  const output = document.querySelector("content");
  content.textContent = transcript

});
recognition.start();