const showSuccessMessage = () => {
    const div = document.createElement('DIV');
    div.innerHTML = ''
    + '<div>'
    + '<h3 class="take-over__title">Thank you for contacting us!</h3>'
    + '<p class="take-over__subtitle">We will answer as soon as possible.</p>';
    + '</div>'
    
    div.classList.add('take-over');

    document.body.append(div);
    
    setTimeout(() => document.body.removeChild(div), 4000);
}

export default showSuccessMessage;