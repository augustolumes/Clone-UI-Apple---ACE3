$(document).ready(function (){
    $(".hamburguer").click(function (){
        $(this).toggleClass("hamburguer-active");
        //Toggle do Menu, final da aulda
        $(".nav-list-mobile").toggleClass("active");
    });
});