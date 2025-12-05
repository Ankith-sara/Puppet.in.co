import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
});

const sendOtpMail = async (email, otp, role = 'user') => {
  if (!email || !otp) {
    console.error('Missing email or OTP for verification mail');
    return false;
  }

  const isAdmin = role === 'admin';
  const portalType = isAdmin ? 'ADMIN PORTAL' : 'CUSTOMER ACCESS';
  const registrationType = isAdmin ? 'admin registration' : 'account registration';

  const mailOptions = {
    from: `"PUPPET" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `${isAdmin ? 'ADMIN ' : ' '}VERIFICATION CODE – PUPPET`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification - PUPPET</title>
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Impact&display=swap');
          </style>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Arial Black', Impact, sans-serif; background: #000000; color: #ffffff;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #000000; min-height: 100vh; position: relative;">
              <!-- Grid Background Effect -->
              <tr>
                  <td style="position: relative;">
                      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: repeating-linear-gradient(0deg, rgba(219, 39, 119, 0.1) 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(219, 39, 119, 0.1) 0px, transparent 1px, transparent 40px); opacity: 0.3; pointer-events: none;"></div>
                  </td>
              </tr>
              <tr>
                  <td align="center" style="padding: 40px 20px; position: relative; z-index: 1;">
                      <table cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background: linear-gradient(135deg, #1a0a2e 0%, #0f0520 100%); box-shadow: 0 0 40px rgba(219, 39, 119, 0.3), 0 0 80px rgba(6, 182, 212, 0.2); border: 2px solid #db2777;">
                          
                          <!-- Top Neon Border -->
                          <tr>
                              <td style="height: 4px; background: linear-gradient(90deg, #06b6d4 0%, #db2777 50%, #a855f7 100%);"></td>
                          </tr>

                          <!-- Header with Glitch Effect -->
                          <tr>
                              <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border-bottom: 2px solid #db2777; position: relative;">
                                  <h1 style="margin: 0 0 12px 0; font-family: Impact, 'Arial Black', sans-serif; font-size: 56px; font-weight: 900; letter-spacing: 8px; color: #06b6d4; text-transform: uppercase; text-shadow: 2px 2px 0px #db2777, 4px 4px 0px rgba(219, 39, 119, 0.5); transform: skewY(-2deg);">PUPPET</h1>
                                  <div style="width: 120px; height: 2px; background: linear-gradient(90deg, #db2777, #06b6d4, #a855f7); margin: 0 auto 16px;"></div>
                                  <p style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; letter-spacing: 4px; color: #a855f7; text-transform: uppercase; font-weight: 900;">${portalType}</p>
                              </td>
                          </tr>

                          ${isAdmin ? `
                          <!-- Admin Alert Banner -->
                          <tr>
                              <td style="background: linear-gradient(135deg, #db2777 0%, #be185d 100%); padding: 16px 32px; text-align: center; border-top: 1px solid #f472b6; border-bottom: 1px solid #be185d;">
                                  <p style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; color: #ffffff; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">ADMIN ACCESS VERIFICATION</p>
                              </td>
                          </tr>
                          ` : ''}

                          <!-- Main Content -->
                          <tr>
                              <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #1a0a2e 0%, #0f0520 100%);">
                                  <h2 style="margin: 0 0 20px 0; font-family: Impact, sans-serif; font-size: 36px; font-weight: 900; letter-spacing: 2px; color: #06b6d4; text-transform: uppercase; text-shadow: 1px 1px 0px #db2777;">EMAIL VERIFICATION</h2>
                                  <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #a3a3a3; font-weight: 700; line-height: 1.8; max-width: 440px; margin: 0 auto; text-transform: uppercase; letter-spacing: 1px;">
                                      WE'VE SENT YOU A VERIFICATION CODE TO COMPLETE YOUR ${registrationType.toUpperCase()}. ENTER THE CODE BELOW TO VERIFY.
                                  </p>
                              </td>
                          </tr>

                          <!-- OTP Display Card -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border: 3px solid #06b6d4; box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1);">
                                      <tr>
                                          <td style="padding: 40px 32px; text-align: center;">
                                              <p style="margin: 0 0 24px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 3px; text-transform: uppercase;">YOUR VERIFICATION CODE</p>
                                              
                                              <!-- OTP Code with Neon Effect -->
                                              <div style="font-family: 'Courier New', Courier, monospace; font-size: 52px; font-weight: 900; color: #06b6d4; letter-spacing: 16px; margin: 0 0 24px 0; text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #db2777, 2px 2px 0px #db2777;">
                                                  ${otp}
                                              </div>
                                              
                                              <div style="display: inline-block; background: linear-gradient(135deg, #db2777 0%, #be185d 100%); border: 2px solid #f472b6; padding: 12px 24px; box-shadow: 0 4px 12px rgba(219, 39, 119, 0.4);">
                                                  <p style="margin: 0; font-family: Impact, sans-serif; font-size: 11px; color: #ffffff; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">
                                                       EXPIRES IN <strong style="color: #ffffff; font-weight: 900;">5 MINUTES</strong>
                                                  </p>
                                              </div>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Instructions -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 2px solid #a855f7; background: linear-gradient(135deg, #1a0a2e 0%, #000000 100%); box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);">
                                      <tr>
                                          <td style="padding: 20px 24px; background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); border-bottom: 2px solid #c084fc;">
                                              <h3 style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">NEXT STEPS</h3>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding: 24px;">
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                  <tr>
                                                      <td style="padding: 10px 0; font-family: Arial, sans-serif; font-size: 13px; color: #d4d4d4; font-weight: 700; line-height: 1.8; text-transform: uppercase; letter-spacing: 1px;">
                                                          <strong style="color: #06b6d4; font-weight: 900; font-size: 16px;">1.</strong> RETURN TO THE ${isAdmin ? 'ADMIN ' : ''}REGISTRATION PAGE
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 10px 0; font-family: Arial, sans-serif; font-size: 13px; color: #d4d4d4; font-weight: 700; line-height: 1.8; text-transform: uppercase; letter-spacing: 1px;">
                                                          <strong style="color: #06b6d4; font-weight: 900; font-size: 16px;">2.</strong> ENTER THE 6-DIGIT CODE SHOWN ABOVE
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 10px 0; font-family: Arial, sans-serif; font-size: 13px; color: #d4d4d4; font-weight: 700; line-height: 1.8; text-transform: uppercase; letter-spacing: 1px;">
                                                          <strong style="color: #06b6d4; font-weight: 900; font-size: 16px;">3.</strong> CLICK "VERIFY & CREATE ACCOUNT"
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          ${isAdmin ? `
                          <!-- Admin Notice -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%); border: 2px solid #dc2626; border-left: 6px solid #dc2626; box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);">
                                      <tr>
                                          <td style="padding: 20px 24px;">
                                              <h4 style="margin: 0 0 12px 0; font-family: Impact, sans-serif; font-size: 13px; font-weight: 900; letter-spacing: 2px; color: #fca5a5; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">ADMIN ACCESS NOTICE</h4>
                                              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; color: #fecaca; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">
                                                  THIS VERIFICATION IS FOR ADMINISTRATIVE ACCESS. ONLY AUTHORIZED PERSONNEL SHOULD COMPLETE THIS PROCESS.
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                          ` : ''}

                          <!-- Security Notice -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #451a03 0%, #78350f 100%); border: 2px solid #d97706; border-left: 6px solid #f59e0b; box-shadow: 0 0 20px rgba(217, 119, 6, 0.4);">
                                      <tr>
                                          <td style="padding: 20px 24px;">
                                              <h4 style="margin: 0 0 16px 0; font-family: Impact, sans-serif; font-size: 13px; font-weight: 900; letter-spacing: 2px; color: #fcd34d; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">SECURITY NOTICE</h4>
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                  <tr>
                                                      <td style="padding: 6px 0; font-family: Arial, sans-serif; font-size: 12px; color: #fde68a; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          • NEVER SHARE THIS CODE
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 6px 0; font-family: Arial, sans-serif; font-size: 12px; color: #fde68a; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          • WE'LL NEVER ASK FOR YOUR CODE
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 6px 0; font-family: Arial, sans-serif; font-size: 12px; color: #fde68a; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          • VALID FOR 5 MINUTES ONLY
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 6px 0; font-family: Arial, sans-serif; font-size: 12px; color: #fde68a; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          • DIDN'T REQUEST? IGNORE THIS
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Help Section -->
                          <tr>
                              <td style="padding: 0 40px 40px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border: 2px solid #06b6d4; box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);">
                                      <tr>
                                          <td style="padding: 24px; text-align: center;">
                                              <h4 style="margin: 0 0 12px 0; font-family: Impact, sans-serif; font-size: 14px; font-weight: 900; color: #06b6d4; text-transform: uppercase; letter-spacing: 2px;">HAVING TROUBLE?</h4>
                                              <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; line-height: 1.8; text-transform: uppercase; letter-spacing: 0.5px;">
                                                  CHECK CODE CAREFULLY • VERIFY NOT EXPIRED • REQUEST NEW CODE • CONTACT SUPPORT
                                              </p>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Footer -->
                          <tr>
                              <td style="padding: 30px 40px; text-align: center; background: #000000; border-top: 2px solid #db2777;">
                                  <p style="margin: 0 0 8px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a3a3a3; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">
                                      AUTOMATED VERIFICATION EMAIL
                                  </p>
                                  <p style="margin: 0 0 20px 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                      NEED HELP? <a href="mailto:dotkpuppet@gmail.com" style="color: #06b6d4; text-decoration: none; font-weight: 900; text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);">dotkpuppet@gmail.com</a>
                                  </p>
                                  <div style="margin: 20px 0 0 0; padding-top: 20px; border-top: 1px solid #db2777;">
                                      <p style="margin: 0; font-family: Impact, sans-serif; font-size: 10px; color: #737373; font-weight: 900; line-height: 1.6; letter-spacing: 2px; text-transform: uppercase;">
                                          © ${new Date().getFullYear()} PUPPET. ALL RIGHTS RESERVED.<br>
                                          <span style="color: #a855f7;">PRESERVING HERITAGE, ONE THREAD AT A TIME.</span>
                                      </p>
                                  </div>
                              </td>
                          </tr>

                          <!-- Bottom Neon Border -->
                          <tr>
                              <td style="height: 4px; background: linear-gradient(90deg, #a855f7 0%, #db2777 50%, #06b6d4 100%);"></td>
                          </tr>

                      </table>
                  </td>
              </tr>
          </table>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`OTP email sent successfully for ${role} registration to ${email}`);
    return true;
  } catch (error) {
    console.error('Failed to send OTP email:', error.message);
    return false;
  }
};

export default sendOtpMail;