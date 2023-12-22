function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
    )};

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
