import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import VisitCTA from '../components/ui/VisitCTA';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Bridal Suite Consultation',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Gandevikar Jewellers - Girishbhai Alkapuri Vadodara';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Reach Gandevikar Jewellers - Girishbhai at Jetalpur Road Char Rasta, opp. Kashi Vishweshwar Temple, Alkapuri, Vadodara for bridal suites, gold rate inquiries & appointments.'
      );
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please share your inquiry or requirements.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setIsSubmitting(true);
      // Simulate professional request dispatch and open mailto
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);

        const mailtoUrl = `mailto:mandargandevikar@gmail.com?subject=${encodeURIComponent(
          `[GGJ Website] ${formData.subject} - ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        )}`;

        window.open(mailtoUrl, '_blank');
      }, 600);
    }
  };

  return (
    <div className="bg-surface-dark pt-28">
      {/* 1. HERO SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gold-500/15 relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              Direct Atelier Concierge
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-100 tracking-tight leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-warm-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              For jewellery enquiries, bridal consultations, gold rate updates, or bespoke
              commissions, our family is here to assist you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. THREE QUICK CONCIERGE CARDS */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface-darker/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <AnimatedSection delay={0.1}>
              <Card className="text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-400 block mb-1">
                    Direct Concierge
                  </span>
                  <div className="font-heading text-xl font-bold text-warm-100 mb-2">
                    +91 99255 79633
                  </div>
                  <p className="text-xs text-warm-300">
                    Call our showroom team for instant assistance and appointments.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gold-500/15">
                  <a
                    href="tel:+919925579633"
                    className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300"
                  >
                    Call Now →
                  </a>
                </div>
              </Card>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection delay={0.2}>
              <Card className="text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-400 block mb-1">
                    24/7 Inquiries
                  </span>
                  <div className="font-heading text-xl font-bold text-warm-100 mb-2 break-all">
                    mandargandevikar@gmail.com
                  </div>
                  <p className="text-xs text-warm-300">
                    Drop a detailed email with design references or corporate requests.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gold-500/15">
                  <a
                    href="mailto:mandargandevikar@gmail.com"
                    className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300"
                  >
                    Email Us →
                  </a>
                </div>
              </Card>
            </AnimatedSection>

            {/* Flagship Showroom */}
            <AnimatedSection delay={0.3}>
              <Card className="text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-400 block mb-1">
                    Flagship Atelier
                  </span>
                  <div className="font-heading text-xl font-bold text-warm-100 mb-2">
                    Vadodara, Gujarat
                  </div>
                  <p className="text-xs text-warm-300">
                    Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Alkapuri.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gold-500/15">
                  <a
                    href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.307462,73.1740238,806m"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300"
                  >
                    Open in Maps →
                  </a>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & LOCATION MAP SECTION */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="bg-surface-card border border-gold-500/20 rounded-xs p-8 sm:p-10 shadow-2xl">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 block mb-2">
                    Drop Us a Note
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-warm-100 mb-3">
                    We're always open to a conversation.
                  </h2>
                  <p className="text-warm-300 text-sm leading-relaxed mb-8">
                    For jewellery enquiries, collaborations, media, partnerships, or anything else
                    you'd like to discuss, drop us a note. We'll get back to you soon.
                  </p>

                  {submitted ? (
                    <div className="p-6 bg-gold-500/10 border border-gold-400 rounded-xs text-center space-y-3">
                      <CheckCircle className="w-10 h-10 text-gold-400 mx-auto" />
                      <h3 className="font-heading text-2xl font-bold text-warm-100">
                        Thank You, {formData.name}
                      </h3>
                      <p className="text-sm text-warm-300">
                        Your inquiry has been prepared. Our atelier team will get in touch with you
                        shortly at <strong className="text-warm-100">{formData.phone}</strong>.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            subject: 'Bridal Suite Consultation',
                            message: '',
                          });
                        }}
                        className="mt-4 text-xs font-semibold tracking-wider uppercase text-gold-400 hover:underline"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs uppercase font-semibold tracking-wider text-warm-300 mb-2"
                          >
                            Full Name <span className="text-gold-400">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className={`w-full bg-surface-dark border rounded-xs px-4 py-3 text-warm-100 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors ${
                              errors.name ? 'border-red-400' : 'border-gold-500/20'
                            }`}
                            placeholder="e.g. Priyanshu Patel"
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-xs uppercase font-semibold tracking-wider text-warm-300 mb-2"
                          >
                            Phone / WhatsApp <span className="text-gold-400">*</span>
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className={`w-full bg-surface-dark border rounded-xs px-4 py-3 text-warm-100 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors ${
                              errors.phone ? 'border-red-400' : 'border-gold-500/20'
                            }`}
                            placeholder="+91 98765 43210"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs uppercase font-semibold tracking-wider text-warm-300 mb-2"
                          >
                            Email Address <span className="text-gold-400">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className={`w-full bg-surface-dark border rounded-xs px-4 py-3 text-warm-100 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors ${
                              errors.email ? 'border-red-400' : 'border-gold-500/20'
                            }`}
                            placeholder="name@example.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                          )}
                        </div>

                        {/* Subject */}
                        <div>
                          <label
                            htmlFor="contact-subject"
                            className="block text-xs uppercase font-semibold tracking-wider text-warm-300 mb-2"
                          >
                            Inquiry Type
                          </label>
                          <select
                            id="contact-subject"
                            value={formData.subject}
                            onChange={(e) =>
                              setFormData({ ...formData, subject: e.target.value })
                            }
                            className="w-full bg-surface-dark border border-gold-500/20 rounded-xs px-4 py-3 text-warm-100 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors"
                          >
                            <option value="Bridal Suite Consultation">Bridal Suite Consultation</option>
                            <option value="11+1 Gold Scheme Enrollment">11+1 Gold Scheme Enrollment</option>
                            <option value="Old Gold XRF Exchange">Old Gold XRF Exchange</option>
                            <option value="Custom Bespoke Design">Custom Bespoke Design</option>
                            <option value="AMYA 925 Silver Inquiries">AMYA 925 Silver Inquiries</option>
                            <option value="Today's Gold Rate Query">Today's Gold Rate Query</option>
                            <option value="General Conversation">General Conversation</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs uppercase font-semibold tracking-wider text-warm-300 mb-2"
                        >
                          Message / Requirements <span className="text-gold-400">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className={`w-full bg-surface-dark border rounded-xs p-4 text-warm-100 text-sm focus-visible:outline-2 focus-visible:outline-gold-400 transition-colors ${
                            errors.message ? 'border-red-400' : 'border-gold-500/20'
                          }`}
                          placeholder="Tell us about your wedding dates, budget, or specific jewellery design requirements..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="lg"
                        className="w-full"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Submitting...' : 'Send Inquiry to GGJ Atelier'}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Address & Embedded Map Column */}
            <div className="lg:col-span-5 space-y-8">
              <AnimatedSection delay={0.2}>
                <Card className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 block mb-1">
                      Our Showroom Address
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-warm-100 mb-3">
                      Gandevikar Jewellers - Girishbhai
                    </h3>
                    <address className="not-italic text-warm-300 text-sm leading-relaxed">
                      Jetalpur Road Char Rasta, Opp. Kashi Vishweshwar Temple, Anand Nagar,
                      Alkapuri, Vadodara, Gujarat 390007
                    </address>
                  </div>

                  <div className="pt-4 border-t border-gold-500/15 space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-3 text-warm-300">
                      <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>Monday to Sunday: 10:30 AM – 8:30 PM</span>
                    </div>
                    <div className="flex items-center gap-3 text-warm-300">
                      <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>+91 99255 79633 / +91 97238 22916</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      href="https://www.google.com/maps/place/Gandevikar+Jewellers+-+Girishbhai/@22.30574,73.1686487,3223m/data=!3m1!1e3!4m6!3m5!1s0x395fc8ae4ff2788d:0xa9bd9105f9bb0c29!8m2!3d22.307462!4d73.1740238!16s%2Fg%2F11bwq90nrw"
                      variant="outline"
                      size="md"
                      className="w-full"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps App
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Embedded Google Maps */}
              <AnimatedSection delay={0.3}>
                <div className="rounded-xs overflow-hidden border border-gold-500/20 shadow-2xl h-72 sm:h-80 bg-surface-darker">
                  <iframe
                    title="Gandevikar Jewellers - Girishbhai Vadodara Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.066497275037!2d73.17144887600854!3d22.307461979679105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ae4ff2788d%3A0xa9bd9105f9bb0c29!2sGandevikar%20Jewellers%20-%20Girishbhai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISIT CTA */}
      <VisitCTA />
    </div>
  );
}
