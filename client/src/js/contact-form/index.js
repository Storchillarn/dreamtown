import verifyRecaptcha from './verifyRecaptcha';
import handleFormSubmission from './handleFormSubmission';

const formSubmitHandler = (e, callback) => {
    e.preventDefault();
    
    verifyRecaptcha()
        .then(res => handleFormSubmission(e, res))
        .then(() => callback())
        .catch(error => console.error(error));

    grecaptcha.reset();
}

export default formSubmitHandler;