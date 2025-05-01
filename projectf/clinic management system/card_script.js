function updateDashboardCards() {
    // External Doctors Count
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_ext_doc.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log("External Doctors count:", xhr.responseText); // Log the response
            var externalDoctors = xhr.responseText.trim();
            if (externalDoctors !== "") {
                // Update the external-doctors-count card specifically
                document.querySelector('.dashboard-cards .card:nth-child(1) .external-doctors-count').textContent = externalDoctors;
            } else {
                console.error("Error: External Doctors count is empty");
            }
        } else {
            console.error("Error fetching External Doctors data");
        }
    };
    xhr.onerror = function() {
        console.error("Request failed for External Doctors");
    };
    xhr.send();

    // Appointments Count
    var xhrAppointments = new XMLHttpRequest();
    xhrAppointments.open('GET', 'get_opoint.php', true);
    xhrAppointments.onload = function() {
        if (xhrAppointments.status === 200) {
            console.log("Appointments count:", xhrAppointments.responseText); // Log the response
            var appointments = xhrAppointments.responseText.trim();
            if (appointments !== "") {
                // Update the appointments-count card specifically
                document.querySelector('.dashboard-cards .card:nth-child(2) .appointments-count').textContent = appointments;
            } else {
                console.error("Error: Appointments count is empty");
            }
        } else {
            console.error("Error fetching Appointments data");
        }
    };
    xhrAppointments.onerror = function() {
        console.error("Request failed for Appointments");
    };
    xhrAppointments.send();

    // Attended Count
    var xhrAttended = new XMLHttpRequest();
    xhrAttended.open('GET', 'get_attended.php', true);
    xhrAttended.onload = function() {
        if (xhrAttended.status === 200) {
            console.log("Attended count:", xhrAttended.responseText); // Log the response
            var attended = xhrAttended.responseText.trim();
            if (attended !== "") {
                // Update the attended-count card specifically
                document.querySelector('.dashboard-cards .card:nth-child(3) .attended-count').textContent = attended;
            } else {
                console.error("Error: Attended count is empty");
            }
        } else {
            console.error("Error fetching Attended data");
        }
    };
    xhrAttended.onerror = function() {
        console.error("Request failed for Attended");
    };
    xhrAttended.send();

    // Remaining Count
    var xhrRemaining = new XMLHttpRequest();
    xhrRemaining.open('GET', 'get_remaining.php', true);
    xhrRemaining.onload = function() {
        if (xhrRemaining.status === 200) {
            console.log("Remaining count:", xhrRemaining.responseText); // Log the response
            var remaining = xhrRemaining.responseText.trim();
            if (remaining !== "") {
                // Update the remaining-count card specifically
                document.querySelector('.dashboard-cards .card:nth-child(4) .remaining-count').textContent = remaining;
            } else {
                console.error("Error: Remaining count is empty");
            }
        } else {
            console.error("Error fetching Remaining data");
        }
    };
    xhrRemaining.onerror = function() {
        console.error("Request failed for Remaining");
    };
    xhrRemaining.send();
}

window.onload = updateDashboardCards;
