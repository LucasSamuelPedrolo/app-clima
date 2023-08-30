(() => {
    const cityUser = document.querySelector('#city');
    const btnSend = document.querySelector('.btn-send');

    //prevent number
    cityUser.addEventListener('keydown', (e) => {
        console.log(!(e.keyCode >= 65 && e.keyCode <= 90))
        if (!(e.keyCode >= 65 && e.keyCode <= 90) && e.keyCode !== 8 && e.keyCode !== 13) {
            e.preventDefault();
        }
    }
    )

    //unlock send button
    cityUser.addEventListener('input', (e) => {
        let elem = cityUser.value;
        if (e !== null && e !== ' ' && elem.length === 2) {
            btnSend.disabled = false;
            btnSend.classList.remove('disabled');
            return;
        } else {
            btnSend.classList.add('disabled');
            btnSend.disabled = true;
        }
    })


    function searchState(stateUser) {
        const TOKEN = '383e3b0dfd73c9eab3e5b2fa9bd85150';

        const URL = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?state=${stateUser}&token=${TOKEN}`;

        const URLCONFIG = {
            method: 'GET',
            cache: 'default'
        };

        fetch(URL).then(function (RESPONSE) {
            console.log(RESPONSE.json())
        })
    };

    searchState('PR')



})();