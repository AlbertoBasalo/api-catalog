import { sendMail } from '../../util/sendmail';
import { Lead } from './lead';

export function validateLead(lead: Lead) {
  if (!lead) return false;
  if (lead.email.length <= 5) return false;
}

export async function notifyContact(lead: Lead) {
  await sendMail(
    'albertobasalo71@gmail.com',
    'New lead',
    `<p>${lead.email}</p> <pre>${JSON.stringify(lead)}</pre>`
  );
  await sendMail(
    lead.email,
    'Thanks for your interest',
    `<p>Hi there ${
      lead.name || 'friend'
    }, we have received your request and we will contact you ASAP!</p> <p><a href="https://www.angular.builders"><i>The Angular Builders</i></a></p>`
  );
}
