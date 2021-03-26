import * as nodemailer from 'nodemailer';
import { emailConfig } from './config';

const defaultTransporter = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: emailConfig.user,
    pass: emailConfig.password,
  },
};
const configTransporter = nodemailer.createTransport(defaultTransporter);

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
    const result = await transporter.sendMail(message);
    console.log(JSON.stringify(result));
    return result;
  } catch (err) {
    console.error(JSON.stringify(err));
    return null;
  }
}
