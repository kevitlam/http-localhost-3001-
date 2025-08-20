import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Header */}
        <div className="grid-responsive items-center mb-20">
          <div>
            <h2 className="text-display mb-6">Contact</h2>
            <p className="text-body-large">
              Ready to build the future together? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid-responsive gap-16">
          
          {/* Contact Form */}
          <div>
            <h3 className="text-heading mb-8">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-body-small font-medium text-stone-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-body-small font-medium text-stone-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-body-small font-medium text-stone-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-body-small font-medium text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-input resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-heading mb-8">Direct Contact</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-medium text-stone-900 mb-2">General Inquiries</h4>
                <p className="text-body mb-1">@miebachventures.com</p>
                <p className="text-body-small text-stone-600">Questions about our fund and portfolio</p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-stone-900 mb-2">Investment Pitches</h4>
                <p className="text-body mb-1">pitch@miebachventures.com</p>
                <p className="text-body-small text-stone-600">Submit your startup for consideration</p>
              </div>
              
              <div>
                <h4 className="text-xl font-medium text-stone-900 mb-2">Media Inquiries</h4>
                <p className="text-body mb-1">press@miebachventures.com</p>
                <p className="text-body-small text-stone-600">Press requests and interviews</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-stone-50 rounded-lg">
              <h4 className="text-lg font-medium text-stone-900 mb-4">Response Times</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-body">Investment Pitches</span>
                  <span className="text-body font-medium">48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body">General Inquiries</span>
                  <span className="text-body font-medium">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body">Media Requests</span>
                  <span className="text-body font-medium">4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
