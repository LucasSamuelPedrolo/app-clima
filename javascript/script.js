(() => {
    const userState = document.querySelector('#state');
    const btnSend = document.querySelector('.btn-send');
    const divState = document.querySelector('#main-state');
    const divCity = document.querySelector('#main-city');
    const userCity = document.querySelector('#search-city');
    const btnSendCity = document.querySelector('#btn-send-city');
    const awaitApi =  document.querySelector(".loading");

    const elemOption = () => document.createElement('option');

    //prevent number in input
    userState.addEventListener('keydown', (e) => {
        if (!(e.keyCode >= 65 && e.keyCode <= 90) && e.keyCode !== 8 && e.keyCode !== 13) {
            e.preventDefault();
        }
    }
    )

    //unlock send button state
    userState.addEventListener('input', (e) => {
        let elem = userState.value;
        if (e !== null && e !== ' ' && elem.length === 2) {
            btnSend.disabled = false;
            btnSend.classList.remove('disabled');
            return;
        } else {
            btnSend.classList.add('disabled');
            btnSend.disabled = true;
        }
    })
    let APIresponse;

    //send state
    btnSend.addEventListener('click', (e) => {
        awaitApi.style.display = 'flex';
        APIresponse = searchState(userState.value.toUpperCase()).catch(err =>{alert('Ops ocorreu um erro porfavor recarregue a página')});
        const APIValidatorState = APIresponse.then(con => { getInvalidStates(con) });
        awaitApi.style.display = 'none';
    })

    //unlock send button city
    userCity.addEventListener('input', (e) => {
        if (e !== null && e !== ' ') {
            btnSendCity.disabled = false;
            btnSendCity.classList.remove('disabled-city');
        } else {
            btnSendCity.classList.add('disabled-city');
            btnSendCity.disabled = true;
        }
    })

    //send city
    btnSendCity.addEventListener('click', () => {
        awaitApi.style.display = 'flex';
        const APIValidatorCity = APIresponse.then(con2 => { getInvalidCities(con2) });
        awaitApi.style.display = 'none';
    })

    //conects with API 'clima tempo'
    async function searchState(stateUser) {
        const TOKEN = '383e3b0dfd73c9eab3e5b2fa9bd85150';
        const URL = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?state=${stateUser}&token=${TOKEN}`;

        const methods = { method: 'GET' };

        const request = await fetch(URL, methods);

        return request.json();
    };


    function getInvalidStates(dataState) {
        if (dataState.length <= 0) {
            alert('Coloque um estado valido');
            return false;
        } else {
            divState.classList.add('hidden');
            divCity.classList.remove('hidden');
            writtenAllCityHtml(dataState);
            return true;
        }
    }

    function getInvalidCities(dataCity) {
        const dataFilter = dataCity.find((elem) => {
            return userCity.value === elem.name;
        })
        console.log(dataFilter)
    }

    //const URLCONFIRM = 'http://apiadvisor.climatempo.com.br/api-manager/user-token/:your-app-token/locales';

    //writes all cities in html
    function writtenAllCityHtml(jsonCity) {
        const allCity = document.querySelector('#all-city');

        jsonCity.map((elem) => {
            allCity.appendChild(elemOption()).innerHTML = elem.name;
        })
    }

})();