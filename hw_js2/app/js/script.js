;(function(){
	let first = prompt('First number'), last = prompt('Last number'), i;
    let arr = [];
	function simple(first, last) 
	{
		for(i=first;i<=last;i++)
		{
			if(i<2) continue;
			if((i%2)&&(i%3)&&(i%5))
			{
				arr.push(i);
			}
		}
		return arr;
	}
	alert(simple(first, last));
})();