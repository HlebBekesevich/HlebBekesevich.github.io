;(function(){
	let first = +prompt('First number'), k, last = +prompt('Last number'), i;
	function simple(first, last) 
	{
		for(i=first;i<=last;i++)
		{
			if(i<=1) continue;
			for(k=2;k<i;k++) {
				if(i%k==1)
				{
					alert(i);
					i++;
					k=2;
				}
			}
		}
	}
	simple(first, last);
})();