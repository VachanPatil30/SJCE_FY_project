import { Button } from '../../globalStyles';
import { useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

export const Footer = ({ status, message, onValidated }) => {
   const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    });
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
        </FooterSubText>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <FormInput value={email} label = "email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to=''>How it works</FooterLink>
            <FooterLink to='/Aboutus'>Developer's Details</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Services</FooterLinkTitle>
            <FooterLink to='/Video'>Video Dectection</FooterLink>
            <FooterLink to='/Image'>Image Dectection</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='https://www.instagram.com/'>Instagram</FooterLink>
            <FooterLink to='https://www.facebook.com/'>Facebook</FooterLink>
            <FooterLink to='https://www.youtube.com/'>Youtube</FooterLink>
            <FooterLink to='https://twitter.com/'>Twitter</FooterLink>
            <FooterLink to='https://github.com/'>Github</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            OBDect
          </SocialLogo>
          <WebsiteRights>OBDect © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href=
                'https://www.youtube.com/' target='_blank' aria-label='Youtube'>
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href='https://github.com/' target='_blank' aria-label='Twitter'>
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

