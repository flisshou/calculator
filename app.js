$(function(){
	var currentText = '';

	$('#btn1').on('click',function(){
		currentText = currentText + 1;
		render();
	});
	$('#btn2').on('click',function({
		currentText = currentText + 2;
		render();
	}))
	$('#btn3').on('click',function(){
		currentText = currentText + 3;
		render();
	})



	
});
function render(){
		$('#output').text(currentText);
	}