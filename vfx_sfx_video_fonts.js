// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded successfully.");

    // Select all the Buy buttons
    const buyButtons = document.querySelectorAll('button');

    // Attach a click event listener to each Buy button
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Retrieve the product name from the preceding h3 element
            const productName = this.previousElementSibling ? this.previousElementSibling.innerText : 'Product';
            console.log(`${productName} Buy button clicked.`);
        });
    });
});
