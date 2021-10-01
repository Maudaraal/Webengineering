function applyf(z){
	return z;
}

function mul(x){
	return function(y){
		return x*y;
	}
}

function add(x){
	return function(y){
		return x+y;
	}
}

console.log(applyf(mul)(5)(6));
console.log(applyf(add)(5)(6));
