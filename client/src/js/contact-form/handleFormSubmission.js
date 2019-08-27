const handleFormSubmission = (e, res) => {
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

        return fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .catch(console.error);

    } else {
        throw new Error(`Form submission failed. Status code: ${res.status}.`);
    }
}

export default handleFormSubmission;