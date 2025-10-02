document.addEventListener("DOMContentLoaded", () => {
  // Nome do usuário vindo do login
  const usuario = localStorage.getItem("usuario") || "Convidado";
  document.getElementById("usuarioNome").textContent = usuario;

  // Mostrar hora em tempo real
  function atualizarHora() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("hora").textContent = hora;
  }
  atualizarHora();
  setInterval(atualizarHora, 60000);
});