import * as nodemailer from 'nodemailer';

it('WHEN call sendMail THEN sent it', done => {
  // Arrange
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      user: 'xxxx@gmail.com',
      pass: 'abcd1234',
    },
  });
  const message = {
    from: '"Angular Builders" angular.builders@gmail.com',
    to: 'albertobasalo71@gmail.com',
    subject: 'This is a test email',
    html: '<h1>Hello again</h1>',
  };
  // Act
  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
      done(error);
    } else {
      console.log('Email sent: ' + info.response);
      const actual = info;
      const expected = 'albertobasalo71@gmail.com';
      expect(actual.accepted[0]).toBe(expected);
      done();
    }
  });
});
