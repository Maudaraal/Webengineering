function Person( name, age ){
	this.name = name;
	this.age = age;
}

function Auto( farbe, besitzer ){
	this.farbe = farbe;
	this.besitzer = besitzer;
}

function conflict(Auto1, Auto2){
	if( Auto1.besitzer =! Auto2.besitzer){
		return false;
	}
}
