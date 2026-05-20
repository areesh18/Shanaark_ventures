import { useState } from "react";

const Contact = () => {
  // Simple state to handle the interactive pill buttons in the form
  const [selectedService, setSelectedService] = useState("Marketing & Communication");

  const services = [
    "Marketing & Communication", 
    "Business Consulting", 
    "Caribbean Corridor", 
    "Other"
  ];

  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Brand Messaging & Locations */}
          <div className="flex flex-col animate-fade-up">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-8 w-max">
              <span className="flex h-2 w-2 rounded-full bg-(--color-accent) relative">
                <span className="absolute inline-flex h-full w-full rounded-full bg-(--color-accent) opacity-75 animate-ping"></span>
              </span>
              <span className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
                Accepting New Clients
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) leading-[1.05] mb-6">
              Let's build something <br className="hidden md:block"/>
              <span className="font-serif-italic font-normal text-slate-500">exceptional.</span>
            </h1>
            
            <p className="text-lg font-light tracking-tight text-(--color-text-secondary) mb-12 max-w-md leading-relaxed">
              Whether you need a full marketing team, high-level CEO advisory, or cross-border trade facilitation, our experts are ready to guide your growth.
            </p>

            {/* Offices Section */}
            <div className="space-y-8 mt-auto">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-(--color-text-primary) border-b border-(--color-border) pb-4">
                Our Offices
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Office 1 */}
                <div className="group">
                  <div className="h-10 w-10 rounded-full bg-(--color-bg-secondary) border border-(--color-border) flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-(--color-text-primary)"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <h4 className="text-lg font-medium text-(--color-text-primary) mb-1 tracking-tight">Shaanark Delivery Center</h4>
                  <p className="text-sm font-light text-(--color-text-secondary) leading-relaxed">
                    HQ Address<br />
                    Paramaribo, Suriname
                  </p>
                </div>

                {/* Office 2 */}
                <div className="group">
                  <div className="h-10 w-10 rounded-full bg-(--color-bg-secondary) border border-(--color-border) flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-(--color-text-primary)"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <h4 className="text-lg font-medium text-(--color-text-primary) mb-1 tracking-tight">India Delivery Center</h4>
                  <p className="text-sm font-light text-(--color-text-secondary) leading-relaxed">
                    DumDum Address<br />
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>

              {/* Direct Contact Links */}
              <div className="pt-8 flex flex-col sm:flex-row gap-6">
                <a href="mailto:hello@shaanark.com" className="inline-flex items-center gap-2 text-sm font-medium text-(--color-text-primary) hover:opacity-70 transition-opacity">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  hello@shaanark.com
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="bg-(--color-bg-secondary) rounded-[2.5rem] p-8 md:p-12 border border-(--color-border) shadow-sm animate-fade-up delay-200">
            <form className="flex flex-col gap-8">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-white border border-(--color-border) rounded-2xl px-4 py-3.5 text-sm font-medium text-(--color-text-primary) focus:outline-none focus:border-(--color-dark) focus:ring-1 focus:ring-(--color-dark) transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@company.com"
                    className="w-full bg-white border border-(--color-border) rounded-2xl px-4 py-3.5 text-sm font-medium text-(--color-text-primary) focus:outline-none focus:border-(--color-dark) focus:ring-1 focus:ring-(--color-dark) transition-all"
                  />
                </div>
              </div>

              {/* Interactive Service Selector (Inspired by 'Viral' mockup) */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">What can we help you with?</label>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-tight transition-all duration-200 border ${
                        selectedService === service 
                          ? 'bg-(--color-dark) text-white border-(--color-dark) shadow-md' 
                          : 'bg-white text-(--color-text-secondary) border-(--color-border) hover:bg-slate-50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">Tell us about your project</label>
                <textarea 
                  id="message"
                  rows="4"
                  placeholder="How can we help you scale..."
                  className="w-full bg-white border border-(--color-border) rounded-2xl px-4 py-3.5 text-sm font-medium text-(--color-text-primary) focus:outline-none focus:border-(--color-dark) focus:ring-1 focus:ring-(--color-dark) transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-(--color-dark) text-white rounded-full py-4 text-sm font-medium hover:bg-opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;