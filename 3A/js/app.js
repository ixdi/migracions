$(document).foundation()
$(function(){
  $(".accordion-titulo").click(function(e){

        e.preventDefault();

        var contenido=$(this).next(".accordion-content");

        if(contenido.css("display")=="none"){ //open
          contenido.slideDown(250);
          $(this).addClass("open");
        }
        else{ //close
          contenido.slideUp(250);
          $(this).removeClass("open");
        }

      });
});

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});


function mostrar(enla) {
obj = document.getElementById('oculto'+enla);
obj.style.visibility = (obj.style.visibility == 'hidden') ? 'visible' : 'hidden';
}
