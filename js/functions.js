function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

//innerHTML ustawia lub pobiera zbiór zawartych w danym elemencie znaczników razem z ich treścią.
//createElement - Tworzy element podanego typu. Zauważ, że zwracana instancja implementuje interfejs Element, zatem można manipulować atrybutami bezpośrednio na zwróconym obiekcie.
//appendChild - Metoda Node.appendChild() wstawia określony węzeł na koniec listy dzieci określonego rodzica. Jeśli węzeł ma już rodzica, jest on najpierw od niego oddzielany.
