function salvarDados() {


    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;

    
    if (email === "" || nome === "" || cpf === "" || telefone === "") {
        Swal.fire({
            title: 'Erro!',
            text: 'Preencha todos os campos!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    
    let usuario = {
        email: email,
        nome: nome,
        cpf: cpf,
        telefone: telefone
    };


    localStorage.setItem("usuario", JSON.stringify(usuario));

    Swal.fire({
        title: 'Sucesso!',
        text: 'Dados salvos com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = "PG3.html";
    });

}