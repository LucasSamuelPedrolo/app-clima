(() => {
    const cityUser = document.querySelector('#city');
    const btnSend = document.querySelector('.btn-send');

    function unlockBtnSend() {
        if (cityUser.value !== '' && cityUser.value !== null && cityUser.value.lenght !== 1 || 0) {
            console.log('teste')
        }
    }

    //marcar ideia :::: testar utilizar 'document.onclick' e 'focus' para verificar input vazio

    cityUser.addEventListener('keydown', (e) => {
        let inputValue = cityUser.innerText;
        console.log(inputValue.lenght)
    })
    unlockBtnSend();



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