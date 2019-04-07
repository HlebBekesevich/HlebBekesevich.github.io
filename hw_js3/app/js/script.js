;(function(){
	function square(x) {return x*x;}
	function qube(x) {return x*x*x;}
	function map(fn, array) {
		let new_arr = [];
		for (let i=0;i<array.length;i++)
			new_arr[i]=fn(array[i]);
		return new_arr;
	}


    let arr = [1, 2, 3, 4];
    let i;
	console.log(arr);
	console.log(map(square, arr));
	console.log(map(qube, arr));

	
	for(i=0;i<4;i++)
		arr[i]=prompt("Input number");
	alert(map(square, arr));
	alert(map(qube, arr));
})();