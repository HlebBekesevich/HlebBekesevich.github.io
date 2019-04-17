;(function(){
	var playList = [
	{
		author: "LED ZEPPELIN",
		song:"STAIRWAY TO HEAVEN"
	},
	{
		author: "QUEEN",
		song:"BOHEMIAN RHAPSODY"
	},
	{
		author: "LYNYRD SKYNYRD",
		song:"FREE BIRD"
	},
	{
		author: "DEEP PURPLE",
		song:"SMOKE ON THE WATER"
	},
	{
		author: "JIMI HENDRIX",
		song:"ALL ALONG THE WATCHTOWER"
	},
	{
		author: "AC/DC",
		song:"BACK IN BLACK"
	},
	{
		author: "QUEEN",
		song:"WE WILL ROCK YOU"
	},
	{
		author: "METALLICA",
		song:"ENTER SANDMAN"
	}
	];
	button.onclick=function() {
		document.querySelector('.playlist').innerHTML+='<h1 class="title">'+'Music list'+'</h1>';
		for (let i=0;i<playList.length;i++) 
		{
			let j=i+1;
			document.querySelector('.playlist').innerHTML+='<p class="list">'+j+'.  '+playList[i].author + ': <span class="song">'+playList[i].song+'</span></p>';
		}
	}
})();