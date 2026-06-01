"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, Compass, Shield, Award } from "lucide-react";

const domesticPackages = [
  { id: "agra", title: "Majestic Agra Tour", duration: "3 Days 2 Nights" },
  { id: "andaman", title: "Andaman Tropical Escapes", duration: "6 Days 5 Nights" },
  { id: "delhi", title: "Heritage Delhi Exploration", duration: "3 Days 2 Nights" },
  { id: "jaipur", title: "Royal Jaipur Experience", duration: "4 Days 3 Nights" },
  { id: "kerala", title: "Kerala Backwater Serenity", duration: "5 Days 4 Nights" },
  { id: "udaipur", title: "Romantic Udaipur Getaway", duration: "4 Days 3 Nights" },
  { id: "goa", title: "Sunny Goa Beach Vacation", duration: "5 Days 4 Nights" },
  { id: "himachal", title: "Himachal Valley Adventure", duration: "6 Days 5 Nights" },
  { id: "kashmir", title: "Kashmir Paradise Escape", duration: "5 Days 4 Nights" },
  { id: "leh-ladakh", title: "Leh Ladakh Highlands", duration: "7 Days 6 Nights" },
  { id: "varanasi", title: "Spiritual Varanasi Journey", duration: "3 Days 2 Nights" }
];
/**
 * @param {object} props
 * @param {string} [props.activePackage]
 */
const BookingForm = ({ activePackage = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedPackage: "agra",
    travelDate: "",
    travelers: "2",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Sync selected package if prop changes (e.g. Inquire Now clicked on card)
  useEffect(() => {
    if (activePackage) {
      setFormData((prev) => ({ ...prev, selectedPackage: activePackage }));
    }
  }, [activePackage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required.";
    if (!formData.travelDate) errors.travelDate = "Please choose a departure date.";
    if (Number(formData.travelers) < 1) errors.travelers = "Must have at least 1 traveler.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      selectedPackage: activePackage || "agra",
      travelDate: "",
      travelers: "2",
      message: ""
    });
    setSubmitSuccess(false);
  };

  const selectedPackageObj = domesticPackages.find((p) => p.id === formData.selectedPackage);

  return (
    <section id="inquiry-form" className="w-full px-6 md:px-12 lg:px-24 py-16 scroll-mt-20">
      <div className="max-w-[1150px] mx-auto bg-white rounded-[2.5rem] border border-black/[0.03] shadow-lg p-8 md:p-12">
        {!submitSuccess ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Brand & Information */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left lg:pr-4">
              <span className="text-xs uppercase tracking-wider text-[#3b7c74] font-bold">
                Why Book With Us
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary leading-tight">
                Plan Your Perfect <br />
                Indian Holiday
              </h2>
              <p className="text-primary/70 text-sm leading-relaxed">
                Intro Travels India Holidays is your trusted companion for exploring the soul of India. We design customized itineraries tailored to your unique preferences, budget, and travel style.
              </p>
              
              <div className="flex flex-col gap-5 mt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-[#3b7c74] shrink-0">
                    <Compass size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary">Tailor-Made Packages</h4>
                    <p className="text-xs text-primary/60 mt-1">We adjust schedules, routes, and experiences exactly to your needs.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-[#3b7c74] shrink-0">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary">Trusted & Safe Travel</h4>
                    <p className="text-xs text-primary/60 mt-1">Vetted transport providers and certified local guides for a secure trip.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-[#3b7c74] shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary">Best Price Guarantee</h4>
                    <p className="text-xs text-primary/60 mt-1">Premium experiences at competitive pricing with $0 booking fees.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F6F7FB] p-6 md:p-8 rounded-[2rem] border border-black/[0.02] w-full">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2.5 text-left border-b border-black/[0.04] pb-4 mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#3b7c74] font-bold">
                    Quick Inquiry
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-primary">
                    Request a Custom Quote
                  </h3>
                  <p className="text-primary/60 text-xs">
                    Let us know your travel preferences, and our travel specialists will construct a customized package according to your needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        formErrors.fullName ? "border-red-400" : "border-black/5"
                      }`}
                    />
                    {formErrors.fullName && (
                      <span className="text-[11px] text-red-500 font-semibold">{formErrors.fullName}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
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
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        formErrors.email ? "border-red-400" : "border-black/5"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-500 font-semibold">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        formErrors.phone ? "border-red-400" : "border-black/5"
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-[11px] text-red-500 font-semibold">{formErrors.phone}</span>
                    )}
                  </div>

                  {/* Selected Package Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="selectedPackage" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                      Preferred Package
                    </label>
                    <div className="relative">
                      <select
                        id="selectedPackage"
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-black/5 bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer appearance-none"
                      >
                        {domesticPackages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.title} ({pkg.duration})
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary/40">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Departure Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="travelDate" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                      Preferred Travel Date
                    </label>
                    <input
                      type="date"
                      id="travelDate"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer ${
                        formErrors.travelDate ? "border-red-400" : "border-black/5"
                      }`}
                    />
                    {formErrors.travelDate && (
                      <span className="text-[11px] text-red-500 font-semibold">{formErrors.travelDate}</span>
                    )}
                  </div>

                  {/* Number of Travelers */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="travelers" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      id="travelers"
                      name="travelers"
                      min="1"
                      max="50"
                      value={formData.travelers}
                      onChange={handleInputChange}
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                        formErrors.travelers ? "border-red-400" : "border-black/5"
                      }`}
                    />
                    {formErrors.travelers && (
                      <span className="text-[11px] text-red-500 font-semibold">{formErrors.travelers}</span>
                    )}
                  </div>
                </div>

                {/* Special Requests Message */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="message" className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                    Special Notes / Custom Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your desired changes, dietary requirements, or any customized package requests..."
                    className="px-4 py-2.5 rounded-xl border border-black/5 bg-white text-sm text-primary focus:outline-none focus:ring-1 focus:ring-primary resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-primary hover:bg-[#123632] text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Travel Inquiry</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Success Card */
          <div className="flex flex-col items-center justify-center py-8 text-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-[#3b7c74]">
              <CheckCircle size={40} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-2xl text-primary">Inquiry Submitted Successfully!</h3>
              <p className="text-primary/60 text-sm max-w-[450px]">
                Thank you for reaching out, <span className="font-bold text-primary">{formData.fullName}</span>. 
                Our travel specialist has received your booking preferences and will email you with personalized itinerary details.
              </p>
            </div>

            <div className="w-full max-w-[500px] bg-[#F6F7FB] border border-black/[0.03] rounded-2xl p-6 text-left my-4 flex flex-col gap-4">
              <h4 className="text-xs uppercase font-extrabold text-[#3b7c74] tracking-wider border-b border-black/[0.04] pb-2">
                Inquiry Summary
              </h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-semibold text-primary/70">
                <div>
                  <span className="block text-[10px] text-primary/40 uppercase">Selected Destination</span>
                  <span className="font-bold text-primary">{selectedPackageObj?.title}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-primary/40 uppercase">Travel Date</span>
                  <span>{formData.travelDate}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-primary/40 uppercase">Number of Travelers</span>
                  <span>{formData.travelers} Guests</span>
                </div>
                <div>
                  <span className="block text-[10px] text-primary/40 uppercase">Phone Contact</span>
                  <span>{formData.phone}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleResetForm}
              className="px-8 py-3 bg-[#EAECEE] text-primary hover:bg-primary hover:text-white rounded-full font-bold text-xs transition-all cursor-pointer shadow-sm"
            >
              Inquire Another Package
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
