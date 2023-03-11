import { config } from "../../../config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default defineEventHandler(async (event) => {
  const { email, name, message } = await readBody(event);
  try {
    const mailerSend = new MailerSend({
      apiKey: config.mailSenderApiKey,
    });

    const sentFrom = new Sender("noreply@grimwood.games", "Dave");

    const recipients = [new Recipient("support@grimwood.games", "Dave")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("New Message from Grimwood.Games")
      .setHtml(
        `<html><body><div>Email: ${email}</div><div>Name: ${name}</div> <div>message: ${message}</div></body></html>`
      )
      .setText("This is the text content");

    const response = await mailerSend.email.send(emailParams);

    if (response) {
      return {
        mailResponse: response,
      };
    }
    return {
      statusCode: 500,
      data: "Mail Server Error",
    };
  } catch (err) {
    return {
      statusCode: 500,
      data: err,
    };
  }
});
