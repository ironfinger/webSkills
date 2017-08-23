console.log("Hello World!");

var numbers = [];
var currentContext = [];
var operators = [];
var total = []

// MARK: Equals

$(document).ready(function(){ // FIX THIS!!!!
	$('#btn-equals').click(function(){
		numbers.forEach(function(num, numIndex){
			var currentOperator = operators[numIndex];
			if (currentOperator == "+") {
				if (numIndex == 0) {
					total = numbers[num];
				}else{
					total = total + numbers[numIndex +1];
				}
			}
		});
		console.log(total);
		$('#h-calcDisplay').text(total);
	});
});

// MARK: Operators

$(document).ready(function(){
	$('#btn-add').click(function(){
		operators.push("+");
		console.log(operators)
		$('#h-calcDisplay').text("+");
	});
});

// MARK: Numbers

$(document).ready(function(){
	$('#btn-01').click(function(){
		numbers.push(1)
		console.log(numbers)
		$('#h-calcDisplay').text("01")
	});
});

$(document).ready(function(){
	$('#btn-02').click(function(){
		numbers.push(2)
		console.log(numbers)
		$('#h-calcDisplay').text("02")
	});
});

$(document).ready(function(){
	$('#btn-03').click(function(){
		numbers.push(3)
		console.log(numbers)
		$('#h-calcDisplay').text("03")
	});
});

$(document).ready(function(){
	$('#btn-04').click(function(){
		numbers.push(4)
		console.log(numbers)
		$('#h-calcDisplay').text("04")
	});
});

$(document).ready(function(){
	$('#btn-05').click(function(){
		numbers.push(5)
		console.log(numbers)
		$('#h-calcDisplay').text("05")
	});
});

$(document).ready(function(){
	$('#btn-06').click(function(){
		numbers.push(6)
		console.log(numbers)
		$('#h-calcDisplay').text("06")
	});
});

$(document).ready(function(){
	$('#btn-07').click(function(){
		numbers.push(7)
		console.log(numbers)
		$('#h-calcDisplay').text("07")
	});
});

$(document).ready(function(){
	$('#btn-08').click(function(){
		numbers.push(8)
		console.log(numbers)
		$('#h-calcDisplay').text("08")
	});
});

$(document).ready(function(){
	$('#btn-09').click(function(){
		numbers.push(9)
		console.log(numbers)
		$('#h-calcDisplay').text("09")
	});
});

$(document).ready(function(){
	$('#btn-00').click(function(){
		numbers.push(0)
		console.log(numbers)
		$('#h-calcDisplay').text("00")
	});
});