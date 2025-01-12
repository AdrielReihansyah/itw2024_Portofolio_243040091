/* EMAIL JS */
const contactForm = document.getElementById('contact-form')
    contactMessage = document.getElementById('send-massage')

const sendEmail = (e) =>{
    e.preventDefault ()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_7n77pvf','template_62wqkc9','#contact-form','UUJzjWAqQbchFSEmT')

    .then(() =>{
        // kasi liat send massage
        contactMessage.textContent = 'Massage send succesfully.'

        setTimeout(() =>{
            contactMessage.textContent = ''
        },  5000)

        contactForm.reset ()
    }  () =>{
        contactMessage.textContent = 'Massage not sent.'
    })

}
contactForm.addEventListener('submit', sendEmail)