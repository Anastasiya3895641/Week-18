
document.addEventListener("DOMContentLoaded", function (event) {

    let name = localStorage.getItem('name');
    let foto = localStorage.getItem('foto');

    if (name != null){
        document.getElementById('author').value = name;
    };

    
    if (foto != null){
        document.getElementById('ava').value = foto;
    };
    
});

function sendMessage(ava, author, comment){
    document.getElementById("message").innerHTML += `<img width=80vw height=80vh src="${ava}" alt="user Icon"><span>${author}:</span> ${comment}`;
};

function checkMessage() {
    
    let author = document.getElementById("author").value;
    let comment = document.getElementById('comment').value;
    let ava = document.getElementById('ava').value;

    

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    };

    if (localStorage.getItem('foto') == null) {
        localStorage.setItem('foto', ava);
    };

    sendMessage(ava, author, comment);
};

