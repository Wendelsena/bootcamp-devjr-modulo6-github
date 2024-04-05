var usersHistory = [];

function search() {
    var username = document.getElementById("inputName").value;
    var url = `https://api.github.com/users/${username}`;

    $.getJSON(url, function(user) {
        showUserData(user);
        showNewUserHistory(user);
        if (isNew(user)) {
            save(user);
        }
        clearError();
    }).fail(() => {
        showUserData({});
        showError("User not found!");
    })
}

function save(user) {
    usersHistory.push(user);
    // Mantenha apenas as últimas três imagens no histórico
    if (usersHistory.length > 3) {
        usersHistory.shift(); // Remova o primeiro elemento (o mais antigo)
    }
}

function isNew(user) {
    // Verifica se o login do usuário já existe no histórico
    return usersHistory.findIndex(u => u.login === user.login) === -1;
}

function showNewUserHistory(user) {
    // Limpa o conteúdo anterior do histórico
    document.getElementById("history").innerHTML = "";

    // Adiciona as três últimas imagens do histórico
    usersHistory.slice(-3).forEach(u => {
        document.getElementById("history").innerHTML += `
            <div class="col">
                <img class="shadow rounded" src=${u.avatar_url} width="110" height="110">
            </div>`;
    });
}

function showError(msg) {
    document.getElementById("error").innerHTML = `<div class='alert alert-danger mt-1' role='alert'>${msg}</div>`;
}

function clearError() {
    document.getElementById("error").innerHTML = "";
}

function showUserData(user) {
    document.getElementById("name").innerHTML = user.name || "";
    document.getElementById("html_url").innerHTML = user.html_url || "";
    document.getElementById("company").innerHTML = user.company || "";
    document.getElementById("avatar_url").innerHTML = user.avatar_url ? `<img class="shadow rounded" src=${user.avatar_url} width="220" height="220">` : "";
}
