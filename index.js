function appendValue(value) {
    document.getElementById('display').value += value;
    console.log()
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
<<<<<<< HEAD
}
=======
}

document.addEventListener('keypress',function(event){
    var ky = event.key;
    switch(ky){
        case '0':
            appendValue(ky);
            break;
        case '1':
            appendValue(ky);
            break;
        case '2':
            appendValue(ky);
            break;
        case '3':
            appendValue(ky);
            break;
        case '4':
            appendValue(ky);
            break;
        case '5':
            appendValue(ky);
            break;
        case '6':
            appendValue(ky);
            break;
        case '7':
            appendValue(ky);
            break;
        case '8':
            appendValue(ky);
            break;
        case '9':
            appendValue(ky);
            break;
        case '+':
            appendValue(ky);
            break;
        case '-':
            appendValue(ky);
            break;
        case '*':
            appendValue(ky);
            break;
        case '/':
            appendValue(ky);
            break;
        case '=':
            calculate();
            break;
        case "Enter":
            calculate();
            break;
        case 'C':
            clearDisplay();
            break;  
        default:
            break;
    }

})
>>>>>>> 093229f (Button keypress response has been added)
