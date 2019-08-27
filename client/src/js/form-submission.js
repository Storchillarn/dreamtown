const formSubmitHandler = (e, callback) => {
    e.preventDefault();
    
    const recaptchaToken = { token: grecaptcha.getResponse() };
    
    fetch('/api/recaptcha', {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recaptchaToken)
        })
        .then(res => {
            
            if (res.status === 200) {

                const purpose = e.target.purpose.value;
                const email = e.target.email.value;
                const message = e.target.message.value;

                let data = {
                    body: `<h2>Message from the Dreamtown website</h2>
                        <p><b>Purpose:</b> ${purpose}</p>
                        <p><b>Email:</b> ${email}</p>
                        <p><b>Message:</b> ${message}</p>`
                }

                e.target.reset();

                fetch('/api/mail', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(() => callback())
                    .catch(console.error);

            }
        })
        .catch(error => {
            console.log(error);
        });

    grecaptcha.reset();
}

export default formSubmitHandler;