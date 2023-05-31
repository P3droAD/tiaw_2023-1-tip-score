<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Página de Login</title>
  </head>
  <body>
    <h1>Página de Login</h1>
    <form>
      <label for="username">Usuário:</label>
      <input type="text" id="username" name="username"><br><br>
      <label for="password">Senha:</label>
      <input type="password" id="password" name="password"><br><br>
      <input type="button" value="Login" onclick="validateLogin()">
    </form>

    <script>
      function validateLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verifica se o login e senha são iguais aos fixos

        if (username === "usuario" && password === "senha") {
          // Redireciona para outra página
          window.location.href = "outra-pagina.html";
        } else {

          // Exibe mensagem de erro

          alert("Login ou senha incorretos.");
        }
      }
    </script>
  </body>
</html>
// Redireciona para outra página
          window.location.href = "outra-pagina.html";
        } else {
