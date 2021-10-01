var i = 0n;
var fibo = [];

function fibonacci( number ){
	fibo[0] = 0n;
	fibo[1] = 1n;
	console.log( "1" + " " + "0" );
	console.log( "2" + " " + "1" );
	for( i = 2n; i <= number-1; i++ ){
		fibo[i] = fibo[ i-2 ] + fibo[ i-1 ];
		console.log( i+1 +" "+ fibo[i] );
	}
}

fibonacci( 2000n );
