$(document).ready(function () {

    $("#calcular").click(function () {

        let diaria = parseFloat($("#diaria").val());
        let dias = parseInt($("#dias").val());
        let pessoas = parseInt($("#pessoas").val());

        if (!diaria || !dias || !pessoas) {
            $("#resultado").val("Preencha todos os campos corretamente.");
            return;
        }

        let total = diaria * dias * pessoas;

        $("#resultado").val("R$ " + total.toFixed(2));
    });

});