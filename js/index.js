
document.addEventListener("DOMContentLoaded", () => {
    const submenuLink = document.querySelector(".submenu > a");
    const submenuList = document.querySelector(".submenu ul");
  
    // Abre/fecha submenu ao clicar em "Configurações"
    submenuLink.addEventListener("click", (e) => {
      e.preventDefault();
      submenuList.classList.toggle("open");
    });
  
    // Fecha o submenu ao clicar fora dele
    document.addEventListener("click", (e) => {
      if (!submenuLink.contains(e.target) && !submenuList.contains(e.target)) {
        submenuList.classList.remove("open");
      }
    });
  
    // Botão "Sair" com confirmação
    const sairBtn = document.querySelector(".submenu ul li:last-child a");
    sairBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmar = confirm("Tem certeza que deseja sair?");
      if (confirmar) {
        window.location.href = "login.html"; // redireciona
      }
    });
  
    // Botão "Linguagem" (alternar PT/EN)
    const linguagemBtn = document.querySelector(".submenu ul li:first-child a");
    linguagemBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const welcomeBox = document.querySelector(".welcome");
      if (welcomeBox.dataset.lang === "pt") {
        welcomeBox.querySelector("h3").innerText = "Welcome Fernando!";
        welcomeBox.querySelector("p").innerText =
          "Here you will find job opportunities in the port area, providing more flexibility.";
        welcomeBox.dataset.lang = "en";
      } else {
        welcomeBox.querySelector("h3").innerText = "Bem Vindo Fernando!";
        welcomeBox.querySelector("p").innerText =
          "Aqui você encontrará oportunidades de trabalho na área portuária, que proporcionarão mais flexibilidade.";
        welcomeBox.dataset.lang = "pt";
      }
    });
  });
  
  
  