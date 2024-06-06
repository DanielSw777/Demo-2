document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById('loginForm');
    localStorage.setItem("storedUsername", "Daniel");
    localStorage.setItem("storedPassword", "1234567");

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;


        const storedUsername = localStorage.getItem('storedUsername');
        const storedPassword = localStorage.getItem('storedPassword');

        console.log(username);
        console.log(password);

        if (storedUsername && storedPassword) {

            if (username === storedUsername && password === storedPassword) {
                alert('Inicio de sesión exitoso');
                localStorage.removeItem('storedUsername');
                localStorage.removeItem('storedPassword');
                window.location.href = '../index.html';
            } else {
                alert('Nombre de usuario o contraseña incorrectos');
            }
        } else {

            localStorage.setItem('storedUsername', username);
            localStorage.setItem('storedPassword', password);
            alert('Por favor, ingrese nuevamente su nombre de usuario y contraseña para confirmar.');
            loginForm.reset();
        }
    });
});
