(() => {
    const cityUser = document.querySelector('#city');
    const btnSend = document.querySelector('.btn-send');


    //unlock send button
    cityUser.addEventListener('input', (e) => {
        let ts = cityUser.value;
        console.log(ts.lenght)
        if (e !== null && e !== ' ' && cityUser.value.lenght > 2) {
            
            btnSend.removeAttribute('disabled');
            btnSend.classList.remove('disabled');
        } else {
            btnSend.setAttribute('disabled', 'disabled');
        }
    })

    const TOKEN = new Request("http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=383e3b0dfd73c9eab3e5b2fa9bd85150");

    // const checkToken = (TOKEN) => {
    //     fetch(TOKEN).then((response) => {
    //         if (response.status === 400) {
    //             alert('ocorreu um erro no servidor, tente novamente mais tarde');
    //         }
    //     }
    //     )
    // }
    // checkToken(TOKEN);


})();