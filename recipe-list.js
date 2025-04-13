// Get the filter dropdown and all the recipe cards
const filterDropdown = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.card');

// Event listener for the filter dropdown change
filterDropdown.addEventListener('change', function() {
    const selectedCategory = this.value; // Get the selected category

    // Loop through all the cards and display based on the selected category
    cards.forEach(card => {
        const category = card.getAttribute('data-category'); // Get the category of the card

        // If 'all' is selected, show all cards, otherwise show cards matching the category
        if (selectedCategory === 'all' || selectedCategory === category) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});
