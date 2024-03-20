function generatorGoogleBackup() {
    
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = '';

    for (let i = 0; i < 8; i++) {
        let index = Math.floor(Math.random() * num.length);
        result += num[index];
        num.splice(index, 1);
    }

    //var inputCode = document.getElementById('backupCodePin');

    //inputCode.value = result;

    //var enter = new KeyboardEvent('keydown', { key: 'Enter'});
    
    //inputCode.dispatchEvent(enter);

    return parseInt(result);
}

generatorGoogleBackup();
