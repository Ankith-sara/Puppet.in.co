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

// Helper function to format current date
const formatDate = () => {
  return new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const sendWelcomeMail = async (email, name = 'Admin') => {
  if (!email) {
    console.error('Missing email for welcome mail');
    return false;
  }

  const mailOptions = {
    from: `"PUPPET" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `WELCOME TO PUPPET ADMIN – ${name.toUpperCase()}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Puppet Admin</title>
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
                                  <p style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; letter-spacing: 4px; color: #a855f7; text-transform: uppercase; font-weight: 900;">ADMIN PORTAL ACCESS</p>
                              </td>
                          </tr>

                          <!-- Welcome Banner -->
                          <tr>
                              <td style="background: linear-gradient(135deg, #db2777 0%, #be185d 100%); padding: 20px 32px; text-align: center; border-top: 1px solid #f472b6; border-bottom: 1px solid #be185d;">
                                  <p style="margin: 0; font-family: Impact, sans-serif; font-size: 14px; color: #ffffff; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">🎉 ACCOUNT ACTIVATED SUCCESSFULLY</p>
                              </td>
                          </tr>

                          <!-- Main Welcome Content -->
                          <tr>
                              <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #1a0a2e 0%, #0f0520 100%);">
                                  <h2 style="margin: 0 0 20px 0; font-family: Impact, sans-serif; font-size: 42px; font-weight: 900; letter-spacing: 2px; color: #06b6d4; text-transform: uppercase; text-shadow: 1px 1px 0px #db2777;">WELCOME ${name.toUpperCase()}</h2>
                                  <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #a3a3a3; font-weight: 700; line-height: 1.8; max-width: 440px; margin: 0 auto; text-transform: uppercase; letter-spacing: 1px;">
                                      YOUR ADMIN ACCOUNT IS NOW ACTIVE. YOU'RE NOW PART OF THE PUPPET ADMIN TEAM.
                                  </p>
                              </td>
                          </tr>

                          <!-- Account Details Card -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border: 3px solid #06b6d4; box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1);">
                                      <tr>
                                          <td style="padding: 20px 24px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-bottom: 2px solid #22d3ee;">
                                              <h3 style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">📋 ACCOUNT DETAILS</h3>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding: 32px 24px;">
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                  <tr>
                                                      <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; width: 40%;">ADMIN NAME</td>
                                                      <td style="padding: 14px 0; font-family: 'Courier New', monospace; font-size: 16px; color: #06b6d4; font-weight: 900; letter-spacing: 1px;">${name}</td>
                                                  </tr>
                                                  <tr>
                                                      <td colspan="2" style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">EMAIL ADDRESS</td>
                                                      <td style="padding: 14px 0; font-family: 'Courier New', monospace; font-size: 14px; color: #06b6d4; font-weight: 700; letter-spacing: 0.5px;">${email}</td>
                                                  </tr>
                                                  <tr>
                                                      <td colspan="2" style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">ACCESS LEVEL</td>
                                                      <td style="padding: 14px 0;">
                                                          <span style="display: inline-block; background: linear-gradient(135deg, #db2777 0%, #be185d 100%); color: #ffffff; padding: 8px 16px; font-family: Impact, sans-serif; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; border: 2px solid #f472b6; box-shadow: 0 0 10px rgba(219, 39, 119, 0.5);">ADMIN</span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td colspan="2" style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">ACTIVATED ON</td>
                                                      <td style="padding: 14px 0; font-family: 'Courier New', monospace; font-size: 14px; color: #06b6d4; font-weight: 700;">${formatDate()}</td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Quick Start Guide -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 2px solid #a855f7; background: linear-gradient(135deg, #1a0a2e 0%, #000000 100%); box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);">
                                      <tr>
                                          <td style="padding: 20px 24px; background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); border-bottom: 2px solid #c084fc;">
                                              <h3 style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">🚀 QUICK START</h3>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding: 24px;">
                                              <!-- Step 1 -->
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 16px;">
                                                  <tr>
                                                      <td style="width: 50px; vertical-align: top;">
                                                          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #06b6d4, #0891b2); border: 2px solid #22d3ee; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);">
                                                              <span style="font-family: Impact, sans-serif; color: #ffffff; font-weight: 900; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">1</span>
                                                          </div>
                                                      </td>
                                                      <td style="padding-left: 16px;">
                                                          <h4 style="margin: 0 0 6px 0; font-family: Impact, sans-serif; font-size: 14px; font-weight: 900; color: #06b6d4; text-transform: uppercase; letter-spacing: 1px;">ACCESS DASHBOARD</h4>
                                                          <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">LOGIN TO YOUR ADMIN PANEL</p>
                                                      </td>
                                                  </tr>
                                              </table>

                                              <div style="height: 2px; background: linear-gradient(90deg, #db2777, transparent); margin: 16px 0;"></div>

                                              <!-- Step 2 -->
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 16px;">
                                                  <tr>
                                                      <td style="width: 50px; vertical-align: top;">
                                                          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #db2777, #be185d); border: 2px solid #f472b6; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(219, 39, 119, 0.6);">
                                                              <span style="font-family: Impact, sans-serif; color: #ffffff; font-weight: 900; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">2</span>
                                                          </div>
                                                      </td>
                                                      <td style="padding-left: 16px;">
                                                          <h4 style="margin: 0 0 6px 0; font-family: Impact, sans-serif; font-size: 14px; font-weight: 900; color: #db2777; text-transform: uppercase; letter-spacing: 1px;">CONFIGURE PROFILE</h4>
                                                          <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">SET UP YOUR PREFERENCES</p>
                                                      </td>
                                                  </tr>
                                              </table>

                                              <div style="height: 2px; background: linear-gradient(90deg, #db2777, transparent); margin: 16px 0;"></div>

                                              <!-- Step 3 -->
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                  <tr>
                                                      <td style="width: 50px; vertical-align: top;">
                                                          <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #a855f7, #7c3aed); border: 2px solid #c084fc; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(168, 85, 247, 0.6);">
                                                              <span style="font-family: Impact, sans-serif; color: #ffffff; font-weight: 900; font-size: 18px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">3</span>
                                                          </div>
                                                      </td>
                                                      <td style="padding-left: 16px;">
                                                          <h4 style="margin: 0 0 6px 0; font-family: Impact, sans-serif; font-size: 14px; font-weight: 900; color: #a855f7; text-transform: uppercase; letter-spacing: 1px;">START MANAGING</h4>
                                                          <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">MANAGE PRODUCTS & ORDERS</p>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Admin Features -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border: 3px solid #db2777; box-shadow: 0 0 20px rgba(219, 39, 119, 0.4);">
                                      <tr>
                                          <td style="padding: 20px 24px; background: linear-gradient(135deg, #db2777 0%, #be185d 100%); border-bottom: 2px solid #f472b6;">
                                              <h3 style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">⭐ ADMIN POWERS</h3>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="padding: 24px;">
                                              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                  <tr>
                                                      <td style="width: 50%; padding: 10px 0; font-family: Arial, sans-serif; font-size: 12px; color: #d4d4d4; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          <span style="color: #06b6d4; margin-right: 8px; font-size: 14px;">📦</span> PRODUCT CONTROL
                                                      </td>
                                                      <td style="width: 50%; padding: 10px 0; font-family: Arial, sans-serif; font-size: 12px; color: #d4d4d4; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          <span style="color: #db2777; margin-right: 8px; font-size: 14px;">📊</span> ANALYTICS ACCESS
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="width: 50%; padding: 10px 0; font-family: Arial, sans-serif; font-size: 12px; color: #d4d4d4; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          <span style="color: #a855f7; margin-right: 8px; font-size: 14px;">🛒</span> ORDER MANAGEMENT
                                                      </td>
                                                      <td style="width: 50%; padding: 10px 0; font-family: Arial, sans-serif; font-size: 12px; color: #d4d4d4; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          <span style="color: #06b6d4; margin-right: 8px; font-size: 14px;">👥</span> USER CONTROL
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="width: 50%; padding: 10px 0; font-family: Arial, sans-serif; font-size: 12px; color: #d4d4d4; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          <span style="color: #db2777; margin-right: 8px; font-size: 14px;">💰</span> REVENUE TRACKING
                                                      </td>
                                                      <td style="width: 50%; padding: 10px 0; font-family: Arial, sans-serif; font-size: 12px; color: #d4d4d4; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                                          <span style="color: #a855f7; margin-right: 8px; font-size: 14px;">📈</span> GROWTH INSIGHTS
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Support Section -->
                          <tr>
                              <td style="padding: 0 40px 30px;">
                                  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #451a03 0%, #78350f 100%); border: 2px solid #d97706; border-left: 6px solid #f59e0b; box-shadow: 0 0 20px rgba(217, 119, 6, 0.4);">
                                      <tr>
                                          <td style="padding: 20px 24px;">
                                              <h4 style="margin: 0 0 12px 0; font-family: Impact, sans-serif; font-size: 13px; font-weight: 900; letter-spacing: 2px; color: #fcd34d; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">💬 NEED SUPPORT?</h4>
                                              <p style="margin: 0 0 16px 0; font-family: Arial, sans-serif; font-size: 12px; color: #fde68a; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 0.5px;">
                                                  OUR TEAM IS HERE TO HELP 24/7
                                              </p>
                                              <table cellpadding="0" cellspacing="0" border="0">
                                                  <tr>
                                                      <td style="padding-right: 16px;">
                                                          <a href="mailto:dotkpuppet@gmail.com" style="font-family: Impact, sans-serif; font-size: 11px; color: #fcd34d; text-decoration: none; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #f59e0b; text-shadow: 0 0 10px rgba(252, 211, 77, 0.5);">📧 EMAIL</a>
                                                      </td>
                                                      <td style="padding-right: 16px;">
                                                          <a href="#" style="font-family: Impact, sans-serif; font-size: 11px; color: #fcd34d; text-decoration: none; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #f59e0b; text-shadow: 0 0 10px rgba(252, 211, 77, 0.5);">📖 GUIDE</a>
                                                      </td>
                                                      <td>
                                                          <a href="#" style="font-family: Impact, sans-serif; font-size: 11px; color: #fcd34d; text-decoration: none; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #f59e0b; text-shadow: 0 0 10px rgba(252, 211, 77, 0.5);">💬 CHAT</a>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <!-- Call to Action -->
                          <tr>
                              <td style="padding: 0 40px 40px; text-align: center;">
                                  <a href="https://admin.aharyas.com/" style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); color: #ffffff; padding: 18px 48px; font-family: Impact, sans-serif; font-size: 14px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border: 3px solid #22d3ee; box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), 0 4px 12px rgba(0, 0, 0, 0.4); text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">
                                      🚀 LAUNCH DASHBOARD
                                  </a>
                              </td>
                          </tr>

                          <!-- Closing Message -->
                          <tr>
                              <td style="padding: 30px 40px; text-align: center; background: linear-gradient(135deg, #1a0a2e 0%, #000000 100%); border-top: 2px solid #db2777;">
                                  <p style="margin: 0 0 8px 0; font-family: Impact, sans-serif; font-size: 16px; color: #06b6d4; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);">WELCOME TO THE TEAM</p>
                                  <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 1px;">
                                      LET'S PRESERVE HERITAGE TOGETHER
                                  </p>
                              </td>
                          </tr>

                          <!-- Footer -->
                          <tr>
                              <td style="padding: 30px 40px; text-align: center; background: #000000; border-top: 2px solid #db2777;">
                                  <p style="margin: 0 0 8px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a3a3a3; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">
                                      AUTOMATED WELCOME MESSAGE
                                  </p>
                                  <p style="margin: 0 0 20px 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                      SENT TO <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none; font-weight: 900; text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);">${email}</a>
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
    return true;
  } catch (error) {
    return false;
  }
};

export default sendWelcomeMail;