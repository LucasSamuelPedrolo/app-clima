(() => {
    const userState = document.querySelector('#state');
    const btnSend = document.querySelector('.btn-send');
    const divState = document.querySelector('#main-state');
    

    const elemOption = () => document.createElement('option');

    //prevent number
    userState.addEventListener('keydown', (e) => {
        if (!(e.keyCode >= 65 && e.keyCode <= 90) && e.keyCode !== 8 && e.keyCode !== 13) {
            e.preventDefault();
        }
    }
    )

    //unlock send button
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

    btnSend.addEventListener('click', (e) => {
        searchState(userState.value.toUpperCase());
        divState.classList.add('hidden');
    })

    async function searchState(stateUser) {
        const TOKEN = '383e3b0dfd73c9eab3e5b2fa9bd85150';
        const URL = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?state=${stateUser}&token=${TOKEN}`;

        const city = await fetch(URL).then(function (RESPONSE) {
            return RESPONSE
        })
        const cityConverted = await city.json();
        writenAllCityHtml(cityConverted);
        const URLCONFIRM = 'http://apiadvisor.climatempo.com.br/api-manager/user-token/:your-app-token/locales';
    };


    function writenAllCityHtml(jsonCity) {
        const allCity = document.querySelector('#all-city');

        jsonCity.map((elem)=>{
            allCity.appendChild(elemOption()).innerHTML = elem.name;
            
        })

    }




})();