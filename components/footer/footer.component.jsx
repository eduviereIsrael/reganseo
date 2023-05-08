import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

import { THEME } from '../../styles/theme/theme';
import { 
  Button, 
  ButtonDiv, 
  ContactDiv, 
  FooterContainer, 
  FooterDiv, 
  FooterForm, 
  FooterIntro, 
  OuterButtonBorder, 
  FooterLink,
  FooterLinksDiv } from './footer.styles';



const Footer = () => {
  const buttonText = {
    SEND: "Send",
    SENDING: "Sending",
    SENT: "Sent"
  }

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const {fullName, email, message} = formValues;
  const [sending, setSending] = useState(false);
  const [buttonCta, setButtonCta] = useState(buttonText.SEND)
  const clearForm = () => {
    setFormValues({
      fullName: "",
      email: "",
      message: ""
    })
  }

  // const [sending, setSending] = useState(false)


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fullName && !email && !message){
      toast.error("Please check the fields and try again", {
        style: {
          background: THEME.colors.dark1,
          color: THEME.colors.light1,
          fontSize: THEME.font.text,
          fontFamily: "Calibri"
        }
      })
      return
    }
    try{
        setSending(true);
        setButtonCta(buttonText.SENDING);
        emailjs.send('service_hnraoev', 'template_54wq71r', formValues, 'USXynhiyjrRti7R1V')
        .then(function(response) {
            setSending(false)
            toast.success("We will contact you shortly", {
              style: {
                background: THEME.colors.dark1,
                color: THEME.colors.light1,
                fontSize: THEME.font.text,
                fontFamily: "Calibri"
              }
            })
            setSending(false);
            setButtonCta(buttonText.SENT);
            setTimeout(() => {
              setButtonCta(buttonText.SEND)
              clearForm()
            }, 1500)
        }, function(error) {
            console.log('FAILED...', error);
            toast.error("Oops, please check your internet and try again", {
              style: {
                background: THEME.colors.dark1,
                color: THEME.colors.light1,
                fontSize: THEME.font.text,
                fontFamily: "Calibri"
              }
            })
            setSending(false);
            setButtonCta(buttonText.SEND)

           

        });

    }catch(e){
      console.log("error while trying to sending email", e);
      toast.error("Please check the fields and try again", {
        style: {
          background: THEME.colors.dark1,
          color: THEME.colors.light1,
          fontSize: THEME.font.text,
          fontFamily: "Calibri"
        }
      })
      setSending(false);
      setButtonCta(buttonText.SEND)

    }
  }

  return (
    <FooterContainer>
        <FooterDiv>
            <FooterIntro>
                <h1>GET IN TOUCH</h1>
                <p>What areas of your business can we improve for you to see increase in your profits?</p>
            </FooterIntro>
            <ContactDiv>

              <FooterForm action="#">
                <input 
                  type="text" 
                  name="fullName" 
                  id="" 
                  value={fullName} 
                  placeholder='Your Name' 
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="email" 
                  name="email" 
                  id="" 
                  value={email} 
                  placeholder='Enter your email' 
                  onChange={handleInputChange}
                  required
                />
                <textarea 
                  type="text" 
                  name="message" 
                  value={message} 
                  id="" 
                  cols={30} 
                  rows={5} 
                  placeholder='Enter your message' 
                  onChange={handleInputChange}
                  required
                />
                <ButtonDiv>
                  <OuterButtonBorder sending={sending} onClick={handleSubmit}>
                    
                  </OuterButtonBorder>
                  <Button>{buttonCta}</Button>
                </ButtonDiv>
              </FooterForm>
            </ContactDiv>
            <FooterLinksDiv>
              <div>
                <h3>Find us on</h3>
                <FooterLink href={'/'} >WHATSAPP</FooterLink>
                <FooterLink href={'/'} >INSTAGRAM</FooterLink>
                <FooterLink href={'/'} >TWITTER</FooterLink>
              </div>
            </FooterLinksDiv>
        </FooterDiv>
        <Toaster />
    </FooterContainer>
  )
}

export default Footer