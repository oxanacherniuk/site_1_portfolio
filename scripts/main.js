function save(event) { 
    email = document.querySelector('.form__email').value

    localStorage.setItem("Email", email);
    clearSearch()
}

function clearSearch() {
    document.querySelector('.form__email').value = '';
}