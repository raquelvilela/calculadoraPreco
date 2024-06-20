function calculateML() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Por favor, digite um valor válido.');
        return;
    }
    const result = inputValue * 1.1; // Exemplo: adicionar 10%
    document.getElementById('result').innerText = formatCurrency(result);
}

function calculateShein() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Por favor, digite um valor válido.');
        return;
    }
    const result = inputValue * 1.2; // Exemplo: adicionar 20%
    document.getElementById('result').innerText = formatCurrency(result);
}

function calculateShopee() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Por favor, digite um valor válido.');
        return;
    }
    const result = inputValue * 1.3; // Exemplo: adicionar 30%
    document.getElementById('result').innerText = formatCurrency(result);
}

function calculateAmazon() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Por favor, digite um valor válido.');
        return;
    }
    const result = inputValue * 1.4; // Exemplo: adicionar 40%
    document.getElementById('result').innerText = formatCurrency(result);
}

function calculateMagalu() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    if (isNaN(inputValue)) {
        alert('Por favor, digite um valor válido.');
        return;
    }
    const result = inputValue * 1.5; // Exemplo: adicionar 50%
    document.getElementById('result').innerText = formatCurrency(result);
}

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
