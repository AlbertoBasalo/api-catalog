import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { emailConfig } from './config';

const options: SMTPTransport.Options;

const configTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.password,
  },
});

export async function sendMail(
  recipient: string,
  subject: string,
  htmlContent: string,
  transporter = configTransporter
) {
  const sender = `"${emailConfig.senderName}" ${emailConfig.senderEmail}`;
  const message = {
    from: sender,
    to: recipient,
    subject: subject,
    html: htmlContent,
  };
  try {
    return await transporter.sendMail(message);
  } catch (err) {
    console.log(JSON.stringify(emailConfig));
    return null;
  }
}
