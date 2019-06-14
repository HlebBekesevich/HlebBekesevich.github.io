;(function(){
	slicesOfBread = 10;
	sandwichesMade = 0;

	newSandwiches = makeMeASandwich(slicesOfBread);
	sandwichesMade += newSandwiches;

	alert("I made you " + sandwichesMade + " sandwiches.");

	function makeMeASandwich(slicesOfBread) {
		sandwichesMade = Math.floor(slicesOfBread / 2);

		return sandwichesMade;
	}
})();