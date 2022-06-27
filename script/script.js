$(function($){

    $("inserir").submit(function(event){

        event.preventDefault();
        
        $.ajax({
        url: "https://formspree.io/f/geovanefiirst@hotmail.com",
        method: "POST",
        data: {
            name: $("#name").val(),
            email: $("#email").val()
        },
        dataType: "json"
        }).done(function(){
            $("#name").val("");
            $("#email").val("");
            alert("Email enviado com sucesso");
        }).fail(function(){
            alert("Erro ao enviar email");
        });
    });
});