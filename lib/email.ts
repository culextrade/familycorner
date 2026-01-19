import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Get your keys from: https://www.emailjs.com/
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

/**
 * Send contact form email via EmailJS
 */
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: 'Desi Pusparini, S.H.',
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );

        if (response.status === 200) {
            return {
                success: true,
                message: 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.',
            };
        }

        return {
            success: false,
            message: 'Terjadi kesalahan. Silakan coba lagi.',
        };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return {
            success: false,
            message: 'Gagal mengirim pesan. Silakan hubungi kami via WhatsApp.',
        };
    }
}
