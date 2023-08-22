(() => {
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

    const stateUser = document.querySelector('#choose-state');

    const form = document.querySelector('.main-section-form');

    const btnOptions = document.querySelector('.btn-send-options');

    const inputChoose = document.querySelector('#choose-state');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    stateUser.addEventListener('keydown', (e) => {

        if () {
            console.log(stateUser.value.length);
            stateUser.style.outlineColor = 'green';
            btnOptions.disabled = false;
        } else {
            stateUser.style.outlineColor = 'red';
            btnOptions.disabled = true;
        }
    })


})();