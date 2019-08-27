const transporter = require('./transporter');

const sender = body => {

    const message = {
        from: 'no-reply@dreamtown.com',
        to: 'gustaflundstrom90@gmail.com',
        subject: 'Booking Request',
        text: body,
        html: body
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            throw new Error (error);
        }
        else console.log(info);
    })
}

module.exports = sender;