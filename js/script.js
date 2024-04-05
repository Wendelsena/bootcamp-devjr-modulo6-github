function search() {

    console.log("teste")
    var username = document.getElementById("inputName").value;
    var url = `https://api.github.com/users/${username}`; // api do github

    $.getJSON(url, (user) => { // fazendo a chamada e pegando a resposta

        document.getElementById("name").innerHTML           = user.name;
        document.getElementById("html_url").innerHTML       = user.html_url;
        document.getElementById("company").innerHTML        = user.company;
        document.getElementById("avatar_url").innerHTML     = `<img id="avatar_url" class="shadow rounded" src=${user.avatar_url} width="220" height="220">`;
    });
}