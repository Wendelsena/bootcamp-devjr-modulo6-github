function search() {

    console.log("teste")
    var username = document.getElementById("inputName").value;
    var url = `https://api.github.com/users/${username}`; // api do github

    $.getJSON(url, (user) => { // fazendo a chamada e pegando a resposta
        showUserData(user);
        clearError();

    }).fail(() => {
        showUserData({});
        showError("User not found!");
    })
}

function showError(msg) {
    document.getElementById("error").innerHTML = `<div class='alert alert-danger mt-1' role='alert'>${msg}</div>`;
}

function clearError() {
    document.getElementById("error").innerHTML = "";
}

function showUserData(user) {
    document.getElementById("name").innerHTML           = user.name || "";
    document.getElementById("html_url").innerHTML       = user.html_url || "";
    document.getElementById("company").innerHTML        = user.company || "";

    // se avatar existir atribua ao innerHTML, caso contrario, faça nanda
    document.getElementById("avatar_url").innerHTML     = user.avatar_url ? `<img id="avatar_url" class="shadow rounded" src=${user.avatar_url} width="220" height="220">` : "";
}