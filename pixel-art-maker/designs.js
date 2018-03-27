
var h,w,color;
$(document).ready(function(){
	$('#sizePicker').submit(function(event){
		event.preventDefault();
		// Select size input
		h=$('#inputHeight').val();
		w=$('#inputWeight').val();
		makeGrid(h,w);
  });
	// When size is submitted by the user, call makeGrid()
		function makeGrid(x,y){
			$('tr').remove();//reseting grid on default
			for(var i=1;i<=h;i++){
		$("#pixelCanvas").append('<tr id=idbox'+i+'></tr>');
				for(var n=1;n<=w;n++){
				$('#idbox'+i).append('<td></td>');
			}
		}

	// on click check if box has a style if it has remove color else add color
		$('td').click(function addColor(){
			// Select color input
			 color = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style');
		}
		else{
			$(this).css('background-color',color);
		}
		});
  }
});
