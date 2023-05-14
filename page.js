const windowwidth = window.innerWidth;
const windowheight = window.innerHeight;

const speechrecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new speechrecognition();
recognition.continuous = true;
recognition.lang = "ja-JP";
recognition.interimResults = false;

recognition.addEventListener("result", (event) => {
  const bubble = document.createElement("div");
  bubble.classList.add("speech-bubble");

  const textbox = document.createElement("div");
  textbox.classList.add("content");
  bubble.appendChild(textbox);
  document.body.appendChild(bubble);

  const xline = Math.floor(Math.random() * (windowwidth - bubble.offsetWidth));
  const yline = Math.floor(
    Math.random() * (windowheight - bubble.offsetHeight)
  );
  bubble.style.left = `${xline}px`;
  bubble.style.top = `${yline}px`;
  bubble.style.display = "block";

  textbox.style.left = `${xline}px`;
  textbox.styletop = `${yline}px`;
  textbox.style.display = "block";
  const transcript = event.results[event.results.length - 1][0].transcript;
  textbox.textContent = transcript;
});
recognition.start();

setTimeout(function() => {
  location.reload();
}, 5*60*1000);

