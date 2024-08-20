// =======Dropdown=========
//Seleção do Dropdown
const dropDowns = document.querySelectorAll('.dropdown');
//Todos os 
dropDowns.forEach(dropDowns => {
    const select = dropDowns.querySelector('.select');
    const iconDrop = dropDowns.querySelector('.icon-drop');
    const iconStyle = dropDowns.querySelector('.icon-style');
    const menu = dropDowns.querySelector('.menu');
    const options = dropDowns.querySelectorAll('.menu li');
    const selected = dropDowns.querySelector('.selected');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        iconStyle.classList.toggle('icon-style-clicked');
        iconDrop.classList.toggle('icon-drop-rotate');
        menu.classList.toggle('menu-open');
});
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            iconDrop.classList.remove('icon-drop-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
                select.classList.remove('select-clicked');
                iconStyle.classList.remove('icon-style-clicked');
            });
            option.classList.add('active');
        });
    });
});


// =======Mascara Telefone=========
var maskPhone = document.getElementById('telefone');

maskPhone.addEventListener("input", () => {

    // Remover os caracteres não numéricos usando a expressão regular /\D/g e limitar a 11 digitos.
    var limparValor = maskPhone.value.replace(/\D/g, "").substring(0,11);

    // Dividir a string em um array de caracteres individuais 
    var numerosArray = limparValor.split("");

    // Criar a variável para receber o numero formatado
    var numeroFormatado = "";

    // Acessa o IF quando a quantidade de números é maior do que zero
    if(numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    // Acessa o IF quando a quantidade de números é maior do que dois
    if(numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que sete
    if(numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    // Enviar para o campo o número formatado
    maskPhone.value = numeroFormatado;
});

// ### Checkbox 

// Seleciona todos os checkboxes com a classe 'check-wapper'
const checkboxes = document.querySelectorAll('.check-wapper');

// Altera sobre todos os checkboxes para adicionar o ouvinte de eventos
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        // Desmarca todos os checkboxes
        checkboxes.forEach((cb) => {
            cb.checked = false;
        });
        // Marca apenas o checkbox que foi clicado
        this.checked = true;
    });
});


//### Simulador 


const button = document.querySelector('.btn-simular');
const valorSimulation = document.querySelector('#valorSimulation');


const tattooStyles = {
    blackwork: {
        flash: "R$320 R$750",
        fechamento: "R$830 R$1190"
    },
    realismo: {
        flash: "R$490 R$990",
        fechamento: "R$990 R$1990"
    },   
    oldSchool: {
        flash: "R$330 R$730",
        fechamento: "R$850 R$1190"
    },
    fineLine: {
        flash: "R$310 R$750",
        fechamento: "R$840 R$1190"
    }
};

button.addEventListener('click', () => {
    valorSimulation.innerText = tattooStyles.blackwork.flash;
});

