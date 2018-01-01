var num = Math.floor((10*Math.random()) + 1);
//console.log(num);
var count = 9;

function main() {
	if (count > 0){
		var usernum = document.getElementById('inum').value;
		var out = document.getElementById('out');
			
		if (usernum == num) {
			alert ('Ура вы угадали! Игра будет перезагружена.') (location.reload());
		}
		else if (usernum > num) {
			out.innerHTML = 'Ваше число больше';
		}
		else {
			out.innerHTML = 'Ваше число меньше';
		}
		document.getElementById('count').innerHTML = 'Осталось попыток: ' + count + ' из 10';
		count = count - 1;
	}
	else {
		alert ('Game over! Игра будет перезагружена. Число было: ' + num) (location.reload());
	}
}

function validate(evt) {
    var theEvent = evt || window.event;
    if (theEvent.charCode >= 48 && theEvent.charCode <= 57) {
		var key = theEvent.keyCode || theEvent.which;
        	key = String.fromCharCode( key );
            
        	var val = document.getElementById("inum").value + key;
        	if ( val > 0 && val < 11 ) {
        		return true
    		} 
	}
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
}

function check() {
    if (document.getElementById('inum').value != '') {
    	document.getElementById('checkB').disabled = false;
    }
    else {
        document.getElementById('checkB').disabled = true;
    }
}
