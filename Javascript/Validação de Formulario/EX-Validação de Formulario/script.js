function validar() {
	var valor = document.getElementById("numero").value;

	if (valor.length > 2) {
		alert("Apenas numeros de dois algoritimos sao permitidos!")
		return false;
	} else {
		return true;
	}
}