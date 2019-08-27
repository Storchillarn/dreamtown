const verifyRecaptcha = () => {
    const recaptchaToken = {
        token: grecaptcha.getResponse()
    };

    return fetch('/api/recaptcha', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recaptchaToken)
    })
}

export default verifyRecaptcha;