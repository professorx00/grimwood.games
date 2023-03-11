import { config } from "../../../../config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
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
      .setSubject("Newsletter signup from Grimwood.Games")
      .setHtml(`<html><body><div>Email: ${email}</div></body></html>`)
      .setText("This is the text content");

    const response = await mailerSend.email.send(emailParams);

    if (response) {
      return {
        statusCode: 200,
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
