import { init } from '@emailjs/browser';
// Initialize EmailJS with your public key
export const initEmailJS = () => {
    init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};
// Export the credentials for use in components
export const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};
