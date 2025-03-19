import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
const ContactForm = () => {
    const form = useRef(null);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        try {
            console.log('Sending email with data:', {
                service_id: EMAILJS_CONFIG.serviceId,
                template_id: EMAILJS_CONFIG.templateId,
                form_data: formData
            });
            const result = await emailjs.sendForm(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, form.current, EMAILJS_CONFIG.publicKey);
            console.log('Email sent successfully:', result);
            if (result.text === 'OK') {
                setSubmitStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' });
            }
            else {
                setSubmitStatus('error');
            }
        }
        catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("form", { ref: form, onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "user_name", className: "block text-sm font-medium text-gray-700 mb-1", children: "Name" }), _jsx("input", { type: "text", id: "user_name", name: "user_name", required: true, value: formData.user_name, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500", placeholder: "Your name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "user_email", className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }), _jsx("input", { type: "email", id: "user_email", name: "user_email", required: true, value: formData.user_email, onChange: handleChange, className: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500", placeholder: "your@email.com" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1", children: "Message" }), _jsx("textarea", { id: "message", name: "message", required: true, value: formData.message, onChange: handleChange, rows: 4, className: "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500", placeholder: "Your message here..." })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full py-3 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? 'Sending...' : 'Send Message' }), submitStatus === 'success' && (_jsx("div", { className: "p-3 bg-green-50 border border-green-200 text-green-600 rounded-md text-sm", children: "Thank you for your message! We'll get back to you soon." })), submitStatus === 'error' && (_jsx("div", { className: "p-3 bg-red-50 border border-red-200 text-red-600 rounded-md text-sm", children: "Sorry, there was an error sending your message. Please try again." }))] }));
};
export default ContactForm;
