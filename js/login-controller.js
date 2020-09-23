function handleLoginSubmit(event) {
    event.preventDefault();
    login();
    
}

function login() {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value

    if (!email || !password) {
       // handle missing credentials
    }
    
    /*
     * Login stuff...
     */
}