document.addEventListener('DOMContentLoaded', () => {
    const availabilityBtn = document.getElementById('availability-btn');
    let freePlaces = 0; // Ändere die Zahl hier für die Verfügbarkeit
  
    if (freePlaces === 0) {
      availabilityBtn.textContent = 'Leider keine Plätze frei';
      availabilityBtn.classList.add('out-of-places');
      availabilityBtn.onclick = () => {
        alert('Rufen Sie uns an, um auf die Warteliste zu kommen!');
      };
    } else {
      availabilityBtn.textContent = `Freie Plätze: ${freePlaces}`;
      availabilityBtn.onclick = () => {
        window.location.href = 'https://jugendamt-stade.de'; // Link zum Jugendamt
      };
    }
  
    // Hamburger menu toggle functionality
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navUl = document.querySelector('nav ul');
    if (hamburgerBtn && navUl) {
        hamburgerBtn.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }
});
