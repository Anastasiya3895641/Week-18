let errors = [];

const number = document.getElementById('number').value;
const click_registr= document.getElementById('click_registr').value;
let email  = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;



function checkValidity(input) {

    let validity = input.validity;


    if (validity.valueMissing) 
    { errors.push('Вы не заполнили поле - ' + input.placeholder);
    return false; }

    if (validity.typeMismatch) 
		{ errors.push('Неверный формат заполнения');
        return false; }

	if (validity.rangeOverflow) 
		{ const max = getAttributeValue (input, 'max') ;
			errors.push('Максимальное значение не может быть больше чем ' + max);
            return false; }
    
	if (validity.rangeUnderflow) 
		{ const min = getAttributeValue (input, 'min') ;;
			errors.push('Минимальное значение не может быть больше чем ' + min);
            return false; }

};


function checkForm() {

        let tel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        let pass = /^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

        if (document.getElementById('password').value == document.getElementById('password2').value) {
            
    }
        else {
        errors.push('Пароли не совпадают');
        return false;
};
    if (tel.test(document.getElementById("number").value)) { }
    

    else {
        errors.push('Ваш телефон введен неверно!');
    return false;
    };

    if (pass.test(document.getElementById("password").value)) { }
    

    else {
        errors.push(
        'Ваш пароль введен неверно, используйте заглавные буквы и знаки - !@#$&*!');
    return false;
    };

};


/*function ValidateTel() {
    let telFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let valid = telFormat.test(number.value);
    if (!valid) {

        errors.push("Ваш телефон введен неверно!");
        return false;
    }
    return true;
};*/

/*function ValidatePassword() {
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    let valid = passFormat.test((document.getElementById('password').value));
    if (!valid) {
        errors.push("Ваш пароль введен неверно, используйте заглавные буквы и знаки - !@#$&*");
        return false;
    }
    return true;
};*/



function checkAll() {

    errors = []
	
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input); 
    }

    checkForm();


   const errorDiv = document.querySelector('.errorMessage');
    errorDiv.innerHTML = errors.join('</br>');

    if (errorDiv.innerHTML === ''){
        alert('Спасибо за регистрацию, ' + document.getElementById('first_name').value);
    }

    
};


console.log(checkForm())



    /*let emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    let telFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let passFormat = /pattern="^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"/;*/




document.getElementById('click_registr').addEventListener('click', checkAll)



