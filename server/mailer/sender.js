const transporter = require('./transporter');

const sender = ({ body }) => {
    
    const message = {
        from: 'no-reply@dreamtown.com',
        to: 'gustaflundstrom90@gmail.com',
        subject: 'Booking Request',
        text: body,
        html: body
    };

    // transporter.sendMail(message, (error, info) => {
    //     if (error) console.log(error);
    //     else console.log(info);
    // })
}

module.exports = sender;