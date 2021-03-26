import { sendMail } from '../../util/sendmail';
import { Lead } from './lead';
export async function notifyContact(lead: Lead) {
  await sendMail(
    'albertobasalo71@gmail.com',
    'New lead',
    `<p>${lead.email}</p> <div><pre>${JSON.stringify(lead)}</pre></div>`
  );
  await sendMail(
    lead.email,
    'Thanks for your interest',
    `<p>Hi there, we will contact you ASAP!</p> <p><i>The Angular Builders</i></p>`
  );
}
