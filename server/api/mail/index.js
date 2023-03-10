import {config} from '../../../config'
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";



export default defineEventHandler(async (event) => {
    try{
    const mailerSend = new MailerSend({
        apiKey: config.mailSenderApiKey,
      });
      

    const sentFrom = new Sender("support@grimwood.games", "Dave");

    const recipients = [
      new Recipient("support@grimwood.game", "Dave Client")
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("This is a Subject")
      .setHtml(`<html><body></body></html>`)
      .setText("This is the text content");

    const response = await mailerSend.email.send(emailParams);

    if(response){
      return {
        mailResponse: response
      }
    }
    return {
      statusCode: 500,
      data: "Mail Server Error"
    }
  }catch(err){
    return {
      statusCode: 500,
      data: err
    }
  }
})