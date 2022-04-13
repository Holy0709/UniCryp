// Генерация пароля
function generatePassword(){
	let lengthEL = document.getElementById("scale_lenght").innerHTML;
	res = '';
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=';
    let charset_upper_rus = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ';
    let charset_lower_rus = 'йцукенгшщзхъфывапролджэячсмитьбю';
    let upperEl  = document.getElementById("checkbox_uppercase_letter").checked;
    let lowerEl = document.getElementById("checkbox_lower_letter").checked;
    let numberEl = document.getElementById("checkbox_numbers").checked;
    let symbolEl = document.getElementById("checkbox_symbols").checked;
    let cyrillicUpperEl = document.getElementById("checkbox_cyrillic_uppercase_letter").checked;
    let cyrillicLowerEl = document.getElementById("checkbox_cyrillic_lower_letter").checked;


    if(upperEl === false) {
        charset = charset.toLowerCase()
    }
    if(lowerEl === false) {
        charset = charset.toUpperCase()
    }
    if(numberEl === false) {
        charset = charset.replace(/[0-9]/g, '');
    }
    if(symbolEl === false) {
        charset = charset.replace(/[^a-zа-яё0-9\s]/gi, '');
    }
    if(upperEl === false & lowerEl === false) {
        charset = charset.replace(/[a-z]/gi, '');
    }
    if(cyrillicUpperEl === true) {
        charset = charset + charset_upper_rus;
    }
    if(cyrillicLowerEl === true) {
        charset = charset + charset_lower_rus;
    }

    console.log(charset)

	for (var i = 0, n = charset.length; i < lengthEL; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n));
        res = res.replace(/\s/g, '');
	}
    if(res.length == 0) {
        res = 'Выберите один из пунктов!'
    }
	return res;
}

document.getElementById("result__pass").innerHTML = generatePassword();