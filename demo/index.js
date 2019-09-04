$(".showbox").click(function(){
    $("#jq3_box").removeClass("hidden_elm");
});

$(".hidebox").click(function(){
    $("#jq3_box").addClass("hidden_elm");
});

$(".togglebox").click(function(){
    $("#jq3_box").toggleClass("hidden_elm");
});

$("#jqs-8 div").css('display', 'none');
$("#jqs-8 button.fadeIn").click(function() {
   $("#jqs-8 div:not(:animated)").fadeIn('slow');
}); 
$("#jqs-8 button.fadeOut").click(function() {
   $("#jqs-8 div:not(:animated)").fadeOut('slow');
});
  