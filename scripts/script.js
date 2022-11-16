emailjs.init('trJIpYDNWGZtYjR29');

function sendMail(e) {
    e.preventDefault();
    document.getElementById('form-spinner').style.display = "inline-block";

    this.contact_number.value = Math.random() * 100000 | 0;
    if (
        !this.reply_to.value ||
        !this.from_name.value ||
        !this.subject.value ||
        !this.message.value
    ) {
        document.getElementById('form-validation').innerText = "populate all fields before submiting*";
        return
    } else {
        document.getElementById('form-validation').innerText = ""
    }

    emailjs.sendForm('service_4dzn59g', 'template_q9n8izi', this )
    .then(() => {
        console.log('success');
        document.getElementById('form-spinner').style.display = "none";
        const formBtn = document.getElementById('form-btn')
        formBtn.disabled = true;
        formBtn.value = "Sent";
        formBtn.classList.remove('btn-primary');
        formBtn.classList.add('btn-success');
    }, (err) => {
        console.log(('failed...', err));
        document.getElementById('form-validation').innerText = "An Error occurred: failed to send form.*";
    })
}

document.getElementById('contact-form').addEventListener('submit', sendMail)