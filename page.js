//speech to text
const windowwidth = window.innerWidth;
const windowheight = window.innerHeight;

const speechrecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new speechrecognition();
recognition.continuous = true;
recognition.lang = "ja-JP";
recognition.interimResults = false;

recognition.addEventListener("result", (event) => {
  const transcript = event.results[event.results.length - 1][0].transcript;

  if (transcript.split("") != "") {
    //boxset
    const bubble = document.createElement("div");
    bubble.classList.add("speech-bubble");
    bubble.classList.add("scalein");  
    const textbox = document.createElement("div");
    textbox.classList.add("content");
    bubble.appendChild(textbox);
    document.body.appendChild(bubble);

    //bubble text
    const xline = Math.floor(
      Math.random() * (windowwidth - bubble.offsetWidth)
    );
    const yline = Math.floor(
      Math.random() * (windowheight - bubble.offsetHeight)
    );
    bubble.style.left = `${xline}px`;
    bubble.style.top = `${yline}px`;
    bubble.style.display = "block";
    bubble.addEventListener("click", function () {
      this.classList.add("bounce");
      this.classList.remove("scalein");
      this.addEventListener("animationend", function () {
        this.classList.remove("bounce");
      });
    });

    //textbox.style.left = `${xline}px`;
    //textbox.style.top = `${yline + 30}px`;
    textbox.style.display = "block";

    const splitword = transcript.split("");
    const simpleword = splitword.filter(function (word) {
      return !/\b(て|に|を|は|れる|られる|せる|させる|たい|たがる|う|よう|まい|らしい|そうだ|ようだ|ます|です|かもしれない)\b/.test(
        word
      );
    });
    textbox.textContent = simpleword.join("");

    const popup = document.createElement("div");
    popup.classList.add("popup");
    textbox.appendChild(popup);
    document.body.appendChild(bubble);

    popup.style.top = `${yline}-10px`;
    popup.style.left = `${xline}-10px`;
    popup.textContent = "";
    popup.classList.add("show");
    popup.classList.remove("none");

    //popup
    bubble.addEventListener("mouseover", function () {
      popup.classList.add("show");
      popup.classList.remove("none");
    });
    bubble.addEventListener("mouseout", function () {
      popup.classList.add("none");
      popup.classList.remove("show");
    });
  }
});

recognition.start();
