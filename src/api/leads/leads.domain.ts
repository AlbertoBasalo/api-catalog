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
    `<p>Hi there ${
      lead.name || 'friend'
    }, we have received your request we will contact you ASAP!</p> <p><a href="https://www.angular.builders"><i>The Angular Builders</i></a></p>`
  );
}
