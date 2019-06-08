;(function(){
	let first = prompt('First number'), last = prompt('Last number'), i, k;
    let arr = [];
	function simple(first, last) 
	{
		if(last<2&&first<2) return 'ERROR';
		if(first<2) first=2;
		for(i=first;i<=last;i++)
		{
			for(k=first;k<=last;k++)
				if((i%k)&&(i!=k)) continue;
				arr.push(i);
		}
		return arr;
	}
	alert(simple(first, last));
})();