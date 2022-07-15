(function () {
    const closeBtn = document.querySelectorAll('.icon-close')
    if (closeBtn !== null) {
        for (i = 0; i < closeBtn.length; ++i) {
            const btn = closeBtn[i];
            btn.addEventListener('click', function (e) {
                btn.parentElement.classList.add('hide');
            })
        }
    }
})();
