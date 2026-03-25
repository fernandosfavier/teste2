function filtrar() {

    let texto = $("#pesquisa").val().toLowerCase();
    let categoria = $("#categoria").val();

    $(".viagem").each(function () {

        let nome = $(this).text().toLowerCase();
        let ehCategoria = $(this).hasClass(categoria);

        let mostrarTexto = nome.includes(texto);
        let mostrarCategoria = (categoria === "todas" || ehCategoria);

        if (mostrarTexto && mostrarCategoria) {
            $(this).show(); 
        } else {
            $(this).hide(); 
        }

    });
}