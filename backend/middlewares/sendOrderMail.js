import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import productModel from '../models/ProductModal.js';

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

const sendOrderMail = async (email, subject, text, html) => {
    if (!email || !subject) {
        console.error('Missing email or subject for order mail');
        return false;
    }
    const mailOptions = {
        from: `"PUPPET" <${process.env.EMAIL_USER}>`,
        to: email,
        subject,
        text,
        html,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Order email sent successfully to ${email}:`, info.messageId);
        return true;
    } catch (error) {
        console.error(`Error sending order email to ${email}:`, error.message);
        return false;
    }
};

const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const getPaymentBadge = (paymentMethod, isPaid) => {
    if (paymentMethod === 'COD') {
        return '<span style="display: inline-block; background: linear-gradient(135deg, #a855f7, #7c3aed); color: #ffffff; padding: 10px 20px; font-family: Impact, sans-serif; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; border: 2px solid #c084fc; box-shadow: 0 0 15px rgba(168, 85, 247, 0.6); text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">💵 CASH ON DELIVERY</span>';
    }
    return isPaid ?
        '<span style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: #ffffff; padding: 10px 20px; font-family: Impact, sans-serif; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; border: 2px solid #34d399; box-shadow: 0 0 15px rgba(16, 185, 129, 0.6); text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">✓ PAID</span>' :
        '<span style="display: inline-block; background: linear-gradient(135deg, #ef4444, #dc2626); color: #ffffff; padding: 10px 20px; font-family: Impact, sans-serif; font-size: 10px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; border: 2px solid #f87171; box-shadow: 0 0 15px rgba(239, 68, 68, 0.6); text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">⏳ PENDING</span>';
};

// Professional function to send both customer and admin emails
const sendOrderEmails = async (orderData, user) => {
    try {
        const { _id: orderId, amount, items, address, paymentMethod, payment, date } = orderData;

        if (!user || !user.email || !user.name) {
            console.error('User data is incomplete:', user);
            return false;
        }

        if (!items || items.length === 0) {
            console.error('No items in order');
            return false;
        }

        console.log(`Starting email send for order ${orderId} to ${user.email}`);

        // === CUSTOMER EMAIL ===
        const customerSubject = `🎉 ORDER CONFIRMED #${orderId.toString().slice(-6)} – PUPPET`;

        const customerHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Order Confirmation - PUPPET</title>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Impact&display=swap');
                </style>
            </head>
            <body style="margin: 0; padding: 0; font-family: 'Arial Black', Impact, sans-serif; background: #000000; color: #ffffff;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: #000000; min-height: 100vh; position: relative;">
                    <!-- Grid Background -->
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

                                <!-- Header -->
                                <tr>
                                    <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border-bottom: 2px solid #db2777;">
                                        <h1 style="margin: 0 0 12px 0; font-family: Impact, 'Arial Black', sans-serif; font-size: 56px; font-weight: 900; letter-spacing: 8px; color: #06b6d4; text-transform: uppercase; text-shadow: 2px 2px 0px #db2777, 4px 4px 0px rgba(219, 39, 119, 0.5); transform: skewY(-2deg);">PUPPET</h1>
                                        <div style="width: 120px; height: 2px; background: linear-gradient(90deg, #db2777, #06b6d4, #a855f7); margin: 0 auto 16px;"></div>
                                        <p style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; letter-spacing: 4px; color: #a855f7; text-transform: uppercase; font-weight: 900;">ORDER CONFIRMED</p>
                                    </td>
                                </tr>

                                <!-- Success Banner -->
                                <tr>
                                    <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 20px 32px; text-align: center; border-top: 1px solid #34d399; border-bottom: 1px solid #059669;">
                                        <p style="margin: 0; font-family: Impact, sans-serif; font-size: 14px; color: #ffffff; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">✓ ORDER PLACED SUCCESSFULLY</p>
                                    </td>
                                </tr>

                                <!-- Welcome Message -->
                                <tr>
                                    <td style="padding: 40px 40px 30px; text-align: center; background: linear-gradient(135deg, #1a0a2e 0%, #0f0520 100%);">
                                        <h2 style="margin: 0 0 20px 0; font-family: Impact, sans-serif; font-size: 42px; font-weight: 900; letter-spacing: 2px; color: #06b6d4; text-transform: uppercase; text-shadow: 1px 1px 0px #db2777;">THANKS ${user.name.toUpperCase()}</h2>
                                        <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #a3a3a3; font-weight: 700; line-height: 1.8; max-width: 440px; margin: 0 auto; text-transform: uppercase; letter-spacing: 1px;">
                                            YOUR ORDER HAS BEEN CONFIRMED. WE'RE PREPARING YOUR HANDCRAFTED PIECES WITH CARE.
                                        </p>
                                    </td>
                                </tr>

                                <!-- Order Summary -->
                                <tr>
                                    <td style="padding: 0 40px 30px;">
                                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border: 3px solid #06b6d4; box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 20px rgba(6, 182, 212, 0.1);">
                                            <tr>
                                                <td style="padding: 20px 24px; background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); border-bottom: 2px solid #22d3ee;">
                                                    <h3 style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">📋 ORDER DETAILS</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 32px 24px;">
                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                        <tr>
                                                            <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; width: 40%;">ORDER ID</td>
                                                            <td style="padding: 14px 0; font-family: 'Courier New', monospace; font-size: 16px; color: #06b6d4; font-weight: 900; letter-spacing: 1px;">#${orderId}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">ORDER DATE</td>
                                                            <td style="padding: 14px 0; font-family: 'Courier New', monospace; font-size: 14px; color: #06b6d4; font-weight: 700;">${formatDate(date)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" style="height: 2px; background: linear-gradient(90deg, #db2777, transparent);"></td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 14px 0; font-family: Impact, sans-serif; font-size: 11px; color: #a855f7; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">PAYMENT</td>
                                                            <td style="padding: 14px 0;">${getPaymentBadge(paymentMethod, payment)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2" style="height: 3px; background: linear-gradient(90deg, #db2777, #06b6d4);"></td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding: 20px 0 0 0; font-family: Impact, sans-serif; font-size: 12px; color: #db2777; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">TOTAL AMOUNT</td>
                                                            <td style="padding: 20px 0 0 0; font-family: Impact, sans-serif; font-size: 42px; color: #06b6d4; font-weight: 900; text-shadow: 0 0 20px rgba(6, 182, 212, 0.5);">₹${amount.toLocaleString('en-IN')}</td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Order Items -->
                                <tr>
                                    <td style="padding: 0 40px 30px;">
                                        <h3 style="margin: 0 0 20px 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #db2777; text-shadow: 0 0 10px rgba(219, 39, 119, 0.5);">🛍️ YOUR ITEMS</h3>
                                        ${items.map((item, index) => `
                                            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: ${index < items.length - 1 ? '16px' : '0'}; border: 2px solid ${index % 2 === 0 ? '#06b6d4' : '#db2777'}; background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); box-shadow: 0 0 15px ${index % 2 === 0 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(219, 39, 119, 0.3)'};">
                                                <tr>
                                                    <td style="padding: 24px;">
                                                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                            <tr>
                                                                <td style="width: 100px; vertical-align: top;">
                                                                    <img src="${item.image || item.images?.[0] || ''}" alt="${item.name}" style="width: 90px; height: 90px; object-fit: cover; border: 3px solid ${index % 2 === 0 ? '#06b6d4' : '#db2777'}; box-shadow: 0 0 15px ${index % 2 === 0 ? 'rgba(6, 182, 212, 0.5)' : 'rgba(219, 39, 119, 0.5)'}; display: block;" />
                                                                </td>
                                                                <td style="padding-left: 20px; vertical-align: top;">
                                                                    <h4 style="margin: 0 0 12px 0; font-family: Impact, sans-serif; font-size: 18px; font-weight: 900; color: ${index % 2 === 0 ? '#06b6d4' : '#db2777'}; text-transform: uppercase; letter-spacing: 1px;">${item.name || 'PRODUCT'}</h4>
                                                                    <table cellpadding="0" cellspacing="0" border="0">
                                                                        <tr>
                                                                            <td style="padding: 4px 16px 4px 0; font-family: Arial, sans-serif; font-size: 11px; color: #a3a3a3; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                                                                QTY: <span style="color: #ffffff; font-weight: 900;">${item.quantity}</span>
                                                                            </td>
                                                                            ${item.size ? `
                                                                            <td style="padding: 4px 0; font-family: Arial, sans-serif; font-size: 11px; color: #a3a3a3; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                                                                SIZE: <span style="color: #ffffff; font-weight: 900;">${item.size}</span>
                                                                            </td>
                                                                            ` : ''}
                                                                        </tr>
                                                                    </table>
                                                                    <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #db2777;">
                                                                        <span style="font-family: Impact, sans-serif; font-size: 24px; color: #a855f7; font-weight: 900; text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        `).join('')}
                                    </td>
                                </tr>

                                <!-- Delivery Address -->
                                <tr>
                                    <td style="padding: 0 40px 30px;">
                                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 2px solid #a855f7; background: linear-gradient(135deg, #1a0a2e 0%, #000000 100%); box-shadow: 0 0 15px rgba(168, 85, 247, 0.3);">
                                            <tr>
                                                <td style="padding: 20px 24px; background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%); border-bottom: 2px solid #c084fc;">
                                                    <h3 style="margin: 0; font-family: Impact, sans-serif; font-size: 12px; font-weight: 900; letter-spacing: 3px; text-transform: uppercase; color: #ffffff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">📍 DELIVERY ADDRESS</h3>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 24px;">
                                                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 14px; color: #ffffff; font-weight: 700; line-height: 1.9; letter-spacing: 0.5px;">
                                                        <strong style="font-weight: 900; color: #a855f7; text-transform: uppercase;">${address.firstName || ''} ${address.lastName || ''}</strong><br>
                                                        ${address.street || ''}<br>
                                                        ${address.city || ''}, ${address.state || ''} ${address.zipcode || ''}<br>
                                                        ${address.country || ''}<br>
                                                        <span style="color: #06b6d4; margin-top: 8px; display: inline-block; font-weight: 900;">📞 ${address.phone || 'N/A'}</span>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- What's Next -->
                                <tr>
                                    <td style="padding: 0 40px 30px;">
                                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #000000 0%, #1a0a2e 100%); border: 3px solid #db2777; border-left: 6px solid #db2777; box-shadow: 0 0 20px rgba(219, 39, 119, 0.4);">
                                            <tr>
                                                <td style="padding: 24px;">
                                                    <h3 style="margin: 0 0 16px 0; font-family: Impact, sans-serif; font-size: 16px; font-weight: 900; letter-spacing: 2px; color: #db2777; text-transform: uppercase; text-shadow: 0 0 10px rgba(219, 39, 119, 0.5);">⚡ WHAT'S NEXT?</h3>
                                                    <p style="margin: 0; font-family: Arial, sans-serif; font-size: 13px; color: #d4d4d4; font-weight: 700; line-height: 1.8; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        ${paymentMethod === 'COD' ?
                                                            'YOUR ORDER IS BEING PREPARED. WE\'LL NOTIFY YOU WITH TRACKING DETAILS ONCE IT SHIPS. <span style="color: #a855f7; font-weight: 900;">KEEP EXACT CASH READY ON DELIVERY.</span>' :
                                                            'PAYMENT CONFIRMED! OUR ARTISANS ARE PREPARING YOUR ORDER WITH CARE. YOU\'LL RECEIVE TRACKING INFO ONCE DISPATCHED.'
                                                        }
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Support -->
                                <tr>
                                    <td style="padding: 0 40px 30px;">
                                        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #451a03 0%, #78350f 100%); border: 2px solid #d97706; border-left: 6px solid #f59e0b; box-shadow: 0 0 20px rgba(217, 119, 6, 0.4);">
                                            <tr>
                                                <td style="padding: 20px 24px; text-align: center;">
                                                    <h4 style="margin: 0 0 12px 0; font-family: Impact, sans-serif; font-size: 13px; font-weight: 900; letter-spacing: 2px; color: #fcd34d; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">💬 NEED HELP?</h4>
                                                    <p style="margin: 0 0 12px 0; font-family: Arial, sans-serif; font-size: 11px; color: #fde68a; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                                        QUESTIONS? REACH US AT
                                                    </p>
                                                    <a href="mailto: dotkpuppet@gmail.com" style="font-family: Impact, sans-serif; font-size: 11px; color: #fcd34d; text-decoration: none; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #f59e0b; text-shadow: 0 0 10px rgba(252, 211, 77, 0.5);">📧 dotkpuppet@gmail.com</a>
                                                    <span style="color: #fde68a; margin: 0 8px;">|</span>
                                                    <a href="tel:+919063284008" style="font-family: Impact, sans-serif; font-size: 11px; color: #fcd34d; text-decoration: none; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; border-bottom: 2px solid #f59e0b; text-shadow: 0 0 10px rgba(252, 211, 77, 0.5);">📞 +91 9063284008</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Closing -->
                                <tr>
                                    <td style="padding: 30px 40px; text-align: center; background: linear-gradient(135deg, #1a0a2e 0%, #000000 100%); border-top: 2px solid #db2777;">
                                        <p style="margin: 0 0 8px 0; font-family: Impact, sans-serif; font-size: 16px; color: #06b6d4; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);">THANK YOU FOR CHOOSING PUPPET</p>
                                        <p style="margin: 0; font-family: Arial, sans-serif; font-size: 12px; color: #a3a3a3; font-weight: 700; line-height: 1.7; text-transform: uppercase; letter-spacing: 1px;">
                                            PRESERVING HERITAGE TOGETHER
                                        </p>
                                    </td>
                                </tr>

                                <!-- Footer -->
                                <tr>
                                    <td style="padding: 30px 40px; text-align: center; background: #000000; border-top: 2px solid #db2777;">
                                        <p style="margin: 0; font-family: Impact, sans-serif; font-size: 10px; color: #737373; font-weight: 900; line-height: 1.6; letter-spacing: 2px; text-transform: uppercase;">
                                            © ${new Date().getFullYear()} PUPPET. ALL RIGHTS RESERVED.<br>
                                            <span style="color: #a855f7;">PRESERVING HERITAGE, ONE THREAD AT A TIME.</span>
                                        </p>
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
        `;

        const customerEmailSent = await sendOrderMail(user.email, customerSubject, '', customerHtml);
        return customerEmailSent;

    } catch (error) {
        console.error('Error in sendOrderEmails:', error);
        return false;
    }
};

export { sendOrderMail, sendOrderEmails };
export default sendOrderEmails;