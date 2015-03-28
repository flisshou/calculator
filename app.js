$(function(){
	var currentText = '';
	var preVal = 0;
	var index = 0;
	var nextVal = 0;

/*-------------------------數字鍵------------------------------*/

	$('#btn0').on('click',function(){
		currentText = currentText + 0;
		render();
	});
	$('#btn1').on('click',function(){
		currentText = currentText + 1;
		render();
	});
	$('#btn2').on('click',function(){
		currentText = currentText + 2;
		render();
	});
	$('#btn3').on('click',function(){
		currentText = currentText + 3;
		render();
	});	
	$('#btn4').on('click',function(){
		currentText = currentText + 4;
		render();
	});
	$('#btn5').on('click',function(){
		currentText = currentText + 5;
		render();
	});
	$('#btn6').on('click',function(){
		currentText = currentText + 6;
		render();
	});
	$('#btn7').on('click',function(){
		currentText = currentText + 7;
		render();
	});
	$('#btn8').on('click',function(){
		currentText = currentText + 8;
		render();
	});
	$('#btn9').on('click',function(){
		currentText = currentText + 9;
		render();
	});
/*=============================================================*/

/*------------------------四則運算鍵---------------------------*/

	$('#btnPlus').on('click',function(){
		setValues('operPlus');
	});
	$('btnMinus').on('click',function(){
		setValues('operMinus');
	});
	$('btnMulti').on('click',function(){
		setValues('operMulti');
	});
	$('btnDivide').on('click',function(){
		setValues('operDivide');
	});
/*=============================================================*/

/*-------------------------等於和清空--------------------------*/
	/*$('btnEqual').on('click',function(){
	
	});*/
	$('#btnC').on('click',function(){
		clean();
	});
/*=============================================================*/

/*---------------------------函式運算--------------------------*/
	function render(){
		$('#output').text(currentText);
		/*
		*/
	}

	function clean(){
		$('#output').text(0);
		currentText = '0'; 
		preVal = 0;
		index = 0;
		nextVal = 0;
	}

	function setValues(oper){
		preVal = parseInt(currentText);
		
		index = currentText.length;
		$('.num').on('click',function(){
			nextVal = parseInt(currentText.slice(index));
			render();
			
			$('#btnEqual').on('click',function(){
				operational(oper);
			});
			
		});
		

	}

	function operational(flag){
		var a = preVal;
		var b = nextVal;
		
			switch(flag){
				case 'operPlus':
					currentText = (a+b).toString();
					render();
					break;
				case 'operMinus':
					currentText = (a-b).toString();
					render();
					break;
				case 'operMulti':
					currentText = (a*b).toString();
					render();
					break;
				case 'operDivide':
					a = parseFloat(a);
					b = parseFloat(b);
					currentText = (a/b).toString();
					render();
					break;
			}
	}

	

	

});

