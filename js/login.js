function LoginForm(Username, Password) {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;

    if (Username == "Larica Mizumukai" && Password == "02052022marido" || Username == "Gosavo Vieira" && Password == "02052022muie") {
        window.location.pathname = "./home.html";
    } else {
        alert("Usuário ou Senha inválidos :(");
    }
}