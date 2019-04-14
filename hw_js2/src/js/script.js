;(function(){
	let first = prompt('First number'), last = prompt('Last number'), i;
    let arr = [];
	function simple(first, last) 
	{
		if(last>3) 
		{
			arr.push(3);
			i=3;
		}
		else i=first;
		if(last>5) 
		{
			arr.push(5);
			i=5;
		}
		for(;i<=last;i++)
		{
			if(i<2) i=2;
			if((i%2)&&(i%3)&&(i%5))
				arr.push(i);
		}
		return arr;
	}
	alert(simple(first, last));
})();