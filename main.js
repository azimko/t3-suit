function cekComputer(){
	var computer = ['batu','gunting','kertas']
	var index = Math.floor(Math.random() * computer.length)
	var hasil = computer[index]
	document.getElementById('enemy').setAttribute("src","img/"+hasil+".png");
	document.getElementById('hasil1').setAttribute("src","img/"+hasil+".png");
	return hasil
}

function logic(com, you){
	if (com == you){
		document.getElementById('audio').setAttribute("src","audio/drow.m4a");
		return 'Drow'
	}else if(com == 'batu' && you == 'gunting'){
		document.getElementById('audio').setAttribute("src","audio/lose.m4a");
		return 'You Lose'
	}else if(com == 'batu' && you == 'kertas'){
		document.getElementById('audio').setAttribute("src","audio/win.m4a");
		return 'You Win'
	}else if(com == 'gunting' && you == 'batu'){
		document.getElementById('audio').setAttribute("src","audio/win.m4a");
		return 'You win'
	}else if(com == 'gunting' && you == 'kertas'){
		document.getElementById('audio').setAttribute("src","audio/lose.m4a");
		return 'You Lose'
	}else if(com == 'kertas' && you == 'batu'){
		document.getElementById('audio').setAttribute("src","audio/lose.m4a");
		return 'You Lose'
	}else if(com == 'kertas' && you == 'gunting'){
		document.getElementById('audio').setAttribute("src","audio/win.m4a");
		return 'You win'
	}
}

function batu(){
	alert('Apakah Anda Ingin Memilih Batu?')
	var com = cekComputer()
	var you = 'batu'
	document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
	document.getElementById('status').textContent = logic(com, you)
}
function gunting(){
	alert('Apakah Anda Ingin Memilih Gunting?')
	var com = cekComputer()
	var you = 'gunting'
	document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
	document.getElementById('status').textContent = logic(com, you)
}
function kertas(){
	alert('Apakah Anda Ingin Memilih Kertas?')
	var com = cekComputer()
	var you = 'kertas'
	document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
	document.getElementById('status').textContent = logic(com, you)
}