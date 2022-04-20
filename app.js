const app = () => {
    const input = document.querySelector('#text-input');
    const result = document.querySelector('#text-result');
    const encryptButton = document.querySelector('#encrypt');
    const decryptButton = document.querySelector('#decrypt');
    const copyButton = document.querySelector('#copy-button');


    const encrypt = (text) => {
        return text.replace(/e/g, 'enter')
                   .replace(/i/g, 'imes')
                   .replace(/a/g, 'ai')
                   .replace(/o/g, 'ober')
                   .replace(/u/g, 'ufat');
    };

    const decrypt = (text) => {
        return text.replace(/enter/g, 'e')
                   .replace(/imes/g, 'i')
                   .replace(/ai/g, 'a')
                   .replace(/ober/g, 'o')
                   .replace(/ufat/g, 'u');
    };

    encryptButton.addEventListener('click', () => {if(input.value) result.innerHTML = encrypt(input.value)});
    decryptButton.addEventListener('click', () => {if(input.value) result.innerHTML = decrypt(input.value)});
    copyButton.addEventListener('click', () => navigator.clipboard.writeText(result.innerHTML));
};

app();