;(function(){
	let first = prompt('First number'), last = prompt('Last number'), i;
    let arr = [];
	function simple(first, last) 
	{
		if(last<2&&first<2) return 'ERROR';
		if(last>=2&&first<=2) arr.push(2);
		if(last>=3&&first<=2) arr.push(3);
		if(last>=5&&first<=5) 
		{
			arr.push(5);
			i=5;
		}
		else if(first>5) i=first;
		else return arr;
		for(;i<=last;i++)
		{
			if((i%2)&&(i%3)&&(i%5))
				arr.push(i);
		}
		return arr;
	}
	alert(simple(first, last));
})();