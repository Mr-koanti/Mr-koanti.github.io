(function () {
    const submitBtn = document.querySelector('#submitBtn')
    const loginForm = document.querySelector('#login')
    if (submitBtn !== null && loginForm !== null) {
        loginForm.addEventListener('submit', function(e) {
            // Belt and braces, shouldn't happen
            if (submitBtn.disabled) {
                e.preventDefault();
                return false;
            }
            submitBtn.disabled = true;
            submitBtn.classList.add('hide');
            document.querySelector('#loginProgress').classList.remove('hide');
        })
    }
})();
