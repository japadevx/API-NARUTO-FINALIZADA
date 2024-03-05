import data from '../data.json' assert{'type': 'json'};

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let user = document.getElementById('user').value.toLowerCase();
    let password = document.getElementById('password').value;
    console.log('User:', user);
    console.log('Password:', password);
    console.log('data:', data);  
    let login = data.find((obj) => {
        return obj.usuario == user && obj.senha == password  
    });
    console.log('Login attempt:', login);

    if (login) {
        window.location.href = '../index.html';
    } else {
        alert('usuario não encontrado');
    }
});