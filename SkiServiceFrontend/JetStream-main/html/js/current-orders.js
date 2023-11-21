// current-orders.js

// Funktion zum Abrufen und Anzeigen von Aufträgen
async function loadOrders() {
    try {
        // Rufen Sie Aufträge von Ihrer API ab (ersetzen Sie die URL durch Ihren API-Endpunkt)
        const response = await fetch('https://localhost:7285/api/orders', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'), // Fügen Sie den JWT-Token hinzu
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Fehler beim Abrufen von Aufträgen: ' + response.statusText);
        }

        const orders = await response.json();

        // Hier sollten Sie den Code zum Anzeigen der Aufträge anpassen
        const ordersContainer = document.getElementById('ordersContainer');
        orders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.textContent = `Auftrag ${order.id}: ${order.description}`;
            ordersContainer.appendChild(orderDiv);
        });
    } catch (error) {
        console.error('Fehler beim Abrufen von Aufträgen:', error);
        // Hier können Sie Fehlermeldungen anzeigen oder weitere Fehlerbehandlung durchführen
    }
}

// Funktion aufrufen, um Aufträge zu laden, wenn die Seite geladen wird
window.addEventListener('load', loadOrders);
