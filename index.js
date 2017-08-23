console.log("Hello World!");

var numbers = [];

$(document).ready(function(){
	$('button').click(function(){
		numbers.push(1)
		console.log(numbers)
		$('#h-calcDisplay').text("01")
	});
});
