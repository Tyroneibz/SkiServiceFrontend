document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('https://localhost:7285/api/Auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login fehlgeschlagen: Status ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem('token', data.token);
        window.location.href = 'current-orders.html'; // Aktualisiere die Weiterleitungs-URL
    })
    .catch(error => {
        console.error('Fehler beim Login:', error);
        // Hier können Sie zusätzlichen Code hinzufügen, um dem Benutzer Fehlermeldungen anzuzeigen
    });
});
