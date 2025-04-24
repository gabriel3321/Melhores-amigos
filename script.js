const users = {
  "Gabbz": "230112",
  "Branquelo": "?"
};

let currentUser = "";

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username] === password) {
    currentUser = username;
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-container").style.display = "block";
    document.getElementById("welcome-message").innerHTML =
      `<p>Bem-vindo, <strong>${username}</strong>! ${
        username === 'Branquelo' ? 'Gabbz está te esperando! 😎' : ''
      }</p>`;

    // Só Gabbz pode mudar o emoji
    document.getElementById("felicidade-slider").style.display = 
      username === "Gabbz" ? "block" : "none";
  } else {
    document.getElementById("login-error").innerText = "Usuário ou senha inválidos.";
  }
}

function enviarMensagem() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (msg) {
    const chatBox = document.getElementById("chat-box");
    const novaMsg = document.createElement("div");
    novaMsg.innerHTML = `<strong>${currentUser}:</strong> ${msg}`;
    chatBox.appendChild(novaMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}

function atualizarEmoji() {
  const slider = document.getElementById("felicidade-slider").value;
  const emoji = document.getElementById("emoji");

  const estados = ["😢", "🙂", "😄", "🤩"];
  emoji.textContent = estados[slider];
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
