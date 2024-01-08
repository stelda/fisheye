function displayModal() {
    const modal = document.getElementById("contact_modal");

    modal.style.display = "block";
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    )
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            const formFields = document.querySelectorAll('form input, form textarea, form button');
            var currentIndex = Array.from(formFields).indexOf(document.activeElement);
            var nextIndex = (currentIndex + 1) % formFields.length;
            formFields[nextIndex].focus();
        }
    });
};

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
