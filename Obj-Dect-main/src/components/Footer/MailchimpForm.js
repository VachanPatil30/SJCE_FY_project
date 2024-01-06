import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Footer} from "./Footer";
import React from "react";

function MailchimpForm(){
  const postUrl = `https://gmail.us9.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
;

  return (
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status,message }) => (
          <Footer
            status ={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
  )
}

export default MailchimpForm;