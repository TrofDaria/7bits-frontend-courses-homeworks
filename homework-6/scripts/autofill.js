document.addEventListener("DOMContentLoaded", function () {
    var searchParams = new URLSearchParams(location.href);
    for (let param of searchParams) {
        let key = param[0];
        let value = param[1];
        if (key === "gender") {
            let radio = document.getElementById("gender-" + value);
            radio.checked = true;
            continue;
        }
        if (document.getElementById(key) != null) {
            let textField = document.getElementById(key);
            textField.value = value;

        }
    }
});
