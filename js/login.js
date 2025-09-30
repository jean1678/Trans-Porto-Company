document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Função para buscar usuários cadastrados no localStorage
  function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }

  // Função para salvar usuários no localStorage
  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  // LOGIN
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuarioLogin").value;
    const senha = document.getElementById("senhaLogin").value;

    const users = getUsers();
    const userFound = users.find(
      (u) => u.usuario === usuario && u.senha === senha
    );

    if (userFound) {
      alert("✅ Login realizado com sucesso! Bem-vindo " + userFound.usuario);
      window.location.href = "index.html"; // Redireciona para a página principal
    } else {
      alert("❌ Usuário ou senha inválidos!");
    }
  });

  // CADASTRO
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!usuario || !email || !senha) {
      alert("⚠️ Preencha todos os campos!");
      return;
    }

    let users = getUsers();

    // Verifica se usuário já existe
    if (users.some((u) => u.usuario === usuario)) {
      alert("⚠️ Usuário já cadastrado! Escolha outro nome.");
      return;
    }

    // Adiciona novo usuário
    const newUser = { usuario, email, senha };
    users.push(newUser);
    saveUsers(users);

    alert("✅ Cadastro realizado com sucesso! Agora faça login.");
    registerForm.reset();
  });
});
