function fibonacci(end) {
	for(var i = 0; i < end; i++) {
		if(i === 0) {
			document.getElementById("tablebody").innerHTML = "<tr><td>"+i+"</td><td id="+i+">0</td></tr>";
		} else if(i === 1) {
			document.getElementById("tablebody").innerHTML = document.getElementById("tablebody").innerHTML+"<tr><td>"+i+"</td><td id="+i+">1</td></tr>";
		} else {
			prevprev = BigInt(document.getElementById(i-2).innerHTML);
			prev = BigInt(document.getElementById(i-1).innerHTML);
			next = BigInt(prevprev+prev);
			document.getElementById("tablebody").innerHTML = document.getElementById("tablebody").innerHTML+"<tr><td>"+i+"</td><td id="+i+">"+next+"</td></tr>";
		}
	}
}
