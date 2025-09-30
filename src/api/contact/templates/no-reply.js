module.exports = ({ name }) => {
  return {
    subject: "Wir haben Ihre Anfrage erhalten",
    text: `
Hallo ${name},

vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich.

Bitte antworten Sie nicht direkt auf diese E-Mail.

Beste Grüße
CS System
https://cssystem.de
    `,
    html: `
<!doctype html>
<html lang="de">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wir haben Ihre Anfrage erhalten</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f5f6; font-family:Helvetica,Arial,sans-serif; font-size:16px; line-height:1.4;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f4f5f6">
      <tr>
        <td align="center" style="padding:30px 15px;">
          <!-- Container -->
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" bgcolor="#ffffff" style="border-radius:16px; overflow:hidden; border:1px solid #eaebed;">
            <!-- Logo Header -->
            <tr>
              <td align="center" style="padding:10px;">
                <img src="https://cssystem.de/images/logo-transparent-farbe.png" alt="CS System Logo" width="300" height="auto" style="display:block; margin:0 auto;">
              </td>
            </tr>
            <!-- Content -->
            <tr>
              <td style="padding:20px 25px; color:#333333;">
                <p style="margin:0 0 15px;">Hallo ${name},</p>
                <p style="margin:0 0 15px;">vielen Dank für Ihre Anfrage. Wir werden diese so bald wie möglich bearbeiten und uns anschließend bei Ihnen melden.</p>
                <p style="margin:0 0 15px;">Bitte antworten Sie nicht direkt auf diese E-Mail, da dieses Postfach nicht überwacht wird.</p>
                <p style="margin:0 0 15px;">Bei Fragen kontaktieren Sie uns gerne unter <a href="mailto:info@cssystem.de" style="color:#0867ec; text-decoration:none;">info@cssystem.de</a>.</p>
                <p style="margin:0;">Mit freundlichen Grüßen,<br>Claudio Söndgen</p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td align="center" style="padding:20px; font-size:12px; color:#777777; border-top:1px solid #dddddd;">
                <p style="margin:0 0 8px;">
                  <a href="https://cssystem.de" style="color:#777777; text-decoration:none; margin:0 8px;">Webseite</a> |
                  <a href="https://cssystem.de/datenschutz" style="color:#777777; text-decoration:none; margin:0 8px;">Datenschutz</a> |
                  <a href="https://cssystem.de/impressum" style="color:#777777; text-decoration:none; margin:0 8px;">Impressum</a>
                </p>
                <p style="margin:0;">Hinweis: Diese E-Mail wurde automatisch generiert.</p>
              </td>
            </tr>
          </table>
          <!-- End Container -->
        </td>
      </tr>
    </table>
  </body>
</html>
    `,
  };
};
