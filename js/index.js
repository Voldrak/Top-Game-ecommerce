// Register

const user = {
    username: "",
    password: "",
};

const userReg = document.querySelector("#userReg");
const passReg = document.querySelector("#passReg");
const confPassReg = document.querySelector("#confPassReg");
const emailReg = document.querySelector("#emailReg");
const btnReg = document.querySelector("#btnRegSub")
const checkReg = document.querySelector("#checkReg")

    btnReg.addEventListener("click", (evt) => {

        if (userReg.value == ""){
            alert('Non hai inserito un nome!')
        }
        if (userReg.value.length < 3){
            alert('Nome troppo corto!')
        }
        else if (passReg.value.length < 5) {
            alert('Passworld troppo corta!')
        }
        else if (passReg.value.length > 16) {
            alert('Passworld troppo corta!')
        }
        else if (confPassReg.value != passReg.value) {
            alert('Le password non coincidono!')
        }
        else if (emailReg.value == "") {
            alert('Non hai inserito la email')
        }
        else if (checkReg == true) {
            alert('Non hai dato il consenso al trattamento dei dati personali!')
        }

        else {

            function saveCredentials(user, pass) {
                window.localStorage.setItem("username", user);
                window.localStorage.setItem("password", pass);
            }
            function loadCredentials(key) {
                return window.localStorage.getItem(key);
            }
            loadCredentials("username")

            user.username = userReg.value;
            user.password = passReg.value;

            saveCredentials(user.username, user.password);

            // const userStorage = window.localStorage.getItem("username");
            // sendCredentials(userStorage);

            alert('Grazie per esserti registrato su Top-Game!');
            // window.location.href = 'http://127.0.0.1:5500/index.html';
        };

    });