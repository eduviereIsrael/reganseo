import React, {useState} from 'react'
import { Button, ButtonDiv, ContactDiv, FooterContainer, FooterDiv, FooterForm, FooterIntro, OuterButtonBorder } from './footer.styles'

const Footer = () => {
  const buttonText = {
    SEND: "Send",
    SENDING: "Sending",
    SENT: "Sent"
  }

  const [sending, setSending] = useState(false);

  return (
    <FooterContainer>
        <FooterDiv>
            <FooterIntro>
                <h1>GET IN TOUCH</h1>
                <p>What areas of your business can we improve for you to see increase in your profits?</p>
            </FooterIntro>
            <ContactDiv>

              <FooterForm action="#">
                <input type="text" name="text" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Enter your email' />
                <textarea type="text" name="text" id="" cols={30} rows={5} placeholder='Enter your message' />
                <ButtonDiv>
                  <OuterButtonBorder sending={sending} onClick={() => setSending(!sending)}>
                    
                  </OuterButtonBorder>
                  <Button>{buttonText.SEND}</Button>
                </ButtonDiv>
              </FooterForm>
            </ContactDiv>
        </FooterDiv>
    </FooterContainer>
  )
}

export default Footer