"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, ArrowRight } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
    setSubmitSuccess(false);
  };

  return (
    <main className="w-full min-h-screen bg-[#F6F7FB] pb-16">
      {/* 1. Header Banner */}
      <section className="relative w-full bg-primary text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 rounded-b-[3.5rem] overflow-hidden shadow-lg">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#3b7c74]/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] rounded-full bg-[#163B37] opacity-40 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-[800px] flex flex-col gap-6 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5cbaa5] px-3.5 py-1.5 rounded-full bg-white/10 w-fit">
            Get in Touch &bull; Contact Us
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none text-white">
            Contact Intro Travels India Holidays
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[640px]">
            We are here to help you plan your next unforgettable adventure. 
            Have a question about domestic packages, pricing, or custom itineraries? 
            Reach out and our specialists will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Email */}
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
              <Mail size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-lg text-primary">Email Us</h3>
              <p className="text-xs text-primary/45 font-semibold uppercase tracking-wider mb-2">Inquiries &amp; Support</p>
              <a href="mailto:info@introtravelsindiaholidays.com" className="text-base font-extrabold text-[#3b7c74] hover:underline">
                info@introtravelsindiaholidays.com
              </a>
              <span className="text-xs text-primary/60 mt-1">General support and corporate travel deals.</span>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
              <Phone size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-lg text-primary">Call Us</h3>
              <p className="text-xs text-primary/45 font-semibold uppercase tracking-wider mb-2">Speak to a specialist</p>
              <a href="tel:+919876543210" className="text-base font-extrabold text-[#3b7c74] hover:underline">
                +91 98765 43210
              </a>
              <span className="text-xs text-primary/60 mt-1">Monday to Saturday, 9:00 AM - 6:00 PM IST.</span>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-lg text-primary">Head Office</h3>
              <p className="text-xs text-primary/45 font-semibold uppercase tracking-wider mb-2">Visit our offices</p>
              <span className="text-base font-extrabold text-primary">
                Connaught Place, New Delhi
              </span>
              <span className="text-xs text-primary/60 mt-1">Metro Station Block-H, Delhi 110001, India.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Contact Form */}
      <section className="w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-[700px] mx-auto bg-white rounded-[2.5rem] border border-black/[0.03] shadow-lg p-8 md:p-12">
          {!submitSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-left mb-4">
                <span className="text-xs uppercase tracking-wider text-[#3b7c74] font-bold">
                  Send Message
                </span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-primary">
                  Leave Us a Message
                </h2>
                <p className="text-primary/60 text-xs md:text-sm">
                  Fill in the fields below, and our team will get in touch with you shortly.
                </p>
              </div>

              {/* Full Name */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="fullName" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`px-4 py-3 rounded-xl border bg-[#F6F7FB] text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                    formErrors.fullName ? "border-red-400" : "border-black/5"
                  }`}
                />
                {formErrors.fullName && (
                  <span className="text-[11px] text-red-500 font-semibold">{formErrors.fullName}</span>
                )}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className={`px-4 py-3 rounded-xl border bg-[#F6F7FB] text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                    formErrors.email ? "border-red-400" : "border-black/5"
                  }`}
                />
                {formErrors.email && (
                  <span className="text-[11px] text-red-500 font-semibold">{formErrors.email}</span>
                )}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="subject" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject of inquiry"
                  className={`px-4 py-3 rounded-xl border bg-[#F6F7FB] text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                    formErrors.subject ? "border-red-400" : "border-black/5"
                  }`}
                />
                {formErrors.subject && (
                  <span className="text-[11px] text-red-500 font-semibold">{formErrors.subject}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="message" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  className={`px-4 py-3 rounded-xl border bg-[#F6F7FB] text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y ${
                    formErrors.message ? "border-red-400" : "border-black/5"
                  }`}
                />
                {formErrors.message && (
                  <span className="text-[11px] text-red-500 font-semibold">{formErrors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary hover:bg-[#123632] text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} className="transform rotate-45 -translate-y-[0.5px]" />
                  </>
                )}
              </button>
            </form>
          ) : (
            // Success Feedback State Card
            <div className="flex flex-col items-center justify-center py-8 text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-[#3b7c74]">
                <CheckCircle size={40} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-2xl text-primary">Message Sent Successfully!</h3>
                <p className="text-primary/60 text-sm max-w-[450px]">
                  Thank you for contacting us, <span className="font-bold text-primary">{formData.fullName}</span>. 
                  Our specialist team has received your message and will reach back to you at <span className="font-bold text-primary">{formData.email}</span>.
                </p>
              </div>

              <button
                onClick={handleResetForm}
                className="px-8 py-3 bg-[#EAECEE] text-primary hover:bg-primary hover:text-white rounded-full font-bold text-xs transition-all cursor-pointer shadow-sm mt-4"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
