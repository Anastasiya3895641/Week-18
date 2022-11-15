let errors = [];

function checkValidity(input) {

    let validity = input.validity;
    /*let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let telFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;*/

    if (validity.valueMissing) 
    { errors.push('Вы не заполнили поле' + input.placeholder); }

    if (validity.patternMismatch) 
		{ errors.push('Неверный формат заполнения'); }

	if (validity.rangeOverflow) 
		{ let max = getAttributeValue (input, 'max') ;
			errors.push('Максимальное значение не может быть больше чем ' + max); }
    
	if (validity.rangeUnderflow) 
		{ let min = getAttributeValue (input, 'min') ;;
			errors.push('Минимальное значение не может быть больше чем ' + min); }


    if (document.getElementById('password').value == document.getElementById('password2').value) {
            }
            else {
                errors.push('Пароли не совпадают');
                return false;
            }
        
    
            /*if (emailFormat.test(document.getElementById('emailField').value)) {
                return true;
            }
            else {
                errors.push("Ваш адрес электронной почты введен неверно!");
                return false;
            }

            if (telFormat.test(document.getElementById('number').value)) {
                return true;
            }
            else {
                errors.push("Ваш телефон введен неверно!");
                return false;
            }*/


}

function ValidateEmail() {
    let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailFormat.math(document.getElementById('email').value)) {
        return true;
    }
    else {
        errors.push("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}
ValidateEmail()


/*function ValidateTel(telField) {
    let telFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (telField.value.test(telFormat)) {
        return true;
    }
    else {
        errors.push("Ваш телефон введен неверно!");
        return false;
    }
}

function ValidatePassword(passField) {
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    if (passField.value.test(passFormat)) {
        return true;
    }
    else {
        errors.push("Ваш пароль введен неверно, используйте заглавные буквы и знаки - !@#$&*");
        return false;
    }
}*/





function checkAll() {

    errors = []
	
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input); 
    }



    let errorDiv = document.querySelector('.errorMessage');
    errorDiv.innerHTML = errors.join('. \n');
}

function checkEmail() {
	
    let inputs = document.getElementById('email').value;


    for (let email of inputs) {
        checkValidity(email); 
    }



    let errorDiv = document.querySelector('.errorMessage');
    errorDiv.innerHTML = errors.join('. \n');
}






document.getElementById('click_registr').addEventListener('click', checkEmail())



