$(function(){
	var currentText = '';
	var calculation = [];
	var oper;

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

/*-------------------------功能鍵------------------------------*/

	$('#btnPlus').on('click',function(){
		var operPlus;
		addValue(operPlus);
		render();
	});
	$('btnMinus').on('click',function(){
		var operMinus;
		addValue(operMinus);
		render();
	});
	$('btnMulti').on('click',function(){
		var operMulti;
		addValue(operMulti);
		render();
	});
	$('btnDivide').on('click',function(){
		var operDivide;
		addValue(operDivide);
	});
/*=============================================================*/

/*-------------------------等於和清空--------------------------*/
	$('btnEqual').on('click',function(){
		
		render();
		/*
		*/
	});
	$('#btnC').on('click',function(){
		clean();
		/*
		*/
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
		currentText = '';
		calculation.length() = 0;
	}

	function addValue(oper){
		calculation.push(currentText);
		currentText = '';
		operational(oper);
	}

	function operational(oper){
		var tmp = 0;

		switch(oper){
			case 'operPlus':
				tmp = parseInt(calculation.pop()) + parseInt(currentText);
				$('#output').text('tmp');
				break;
			case 'operMinus':
				tmp = parseInt(calculation.pop()) - parseInt(currentText);
				return tmp;
				break;
			case 'operMulti':
				tmp = parseInt(calculation.pop()) * parseInt(currentText);
				return tmp;
				break;
			case 'operDivide':

				break;
		}
		currentText = tmp.toString();
	}

});

