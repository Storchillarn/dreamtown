const formSubmitHandler = (e, callback) => {
    e.preventDefault();

    const purpose = e.target.purpose.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const recaptchaToken = grecaptcha.getResponse();

    let data = {
        body: `<h2>Message from the Dreamtown website</h2>
            <p><b>Purpose:</b> ${purpose}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Message:</b> ${message}</p>`,
        recaptchaToken
    }

    fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => callback())
        .catch(console.error);


    e.target.reset();
    grecaptcha.reset();
}

export default formSubmitHandler;