(function () {
    const loginId = document.querySelector('#loginId');

    if (loginId !== null) {
        // We set the state of the button using an interval as the username may be filled in
        // by a password manager and there is no reliable event to listen on for that scenario
        const intervalId = setInterval(function () {
            // This special pseudo class is applied when a field is auto filled. but it doesn't work on IE
            // whereas passwordInput.value doesn't work on Chrome/Windows
            // so try both.
            const isAutoFilled = getAutoFilled();
            if (isAutoFilled !== null || loginId.value.length > 0) {
                document.querySelector('#submitBtn').disabled = false;
                clearInterval(intervalId);
            }
        }, 200)


        var loginIdCheck = function (e) {
            document.querySelector('#submitBtn').disabled = e.target.value.length <= 0
        }
        /**
         * enable the continue button when text is entered
         */
        loginId.addEventListener('keyup', loginIdCheck);
        loginId.addEventListener('blur', loginIdCheck);
        loginId.addEventListener('paste', loginIdCheck);

        /**
         * As the submit btn is disabled when the loginId field is empty this shouldn't happen
         */
        document.querySelector('#submitBtn').addEventListener('click', function (e) {
            if (loginId.value.length === 0) {
                document.querySelector('#requiredMsg').classList.remove('hidden');
                e.preventDefault();
            }

        });

        /**
         * put the cursor at the end of the text
         */
        document.addEventListener("DOMContentLoaded", function () {
            loginId.selectionStart = loginId.selectionEnd = loginId.value.length;
        });


        /**
         * set hidden field to indicate if the request is within an iframe
         */
        const inIframe = function () {
            try {
                 return window.self !== window.top;
            } catch (e) {
                return true
            }
        }

        document.getElementById("iframeRequest").value = inIframe()


        /**
         * set the segment anonymousId in a hidden field for server side processing
         */
        analytics.ready(function() {
            document.getElementById('segmentAnonymousId').value = analytics.user().anonymousId();
        });
    }
})();