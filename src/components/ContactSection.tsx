import React, { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent (simulated)");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT SIDE: Context & Info */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                Contact
              </h4>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white mb-8">
                Let’s build something <br className="hidden md:block" />
                <span className="text-gray-400 dark:text-gray-600">meaningful.</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                I'm currently available for freelance work. If you have a project that needs a creative touch, I'd love to hear about it.
              </p>
            </div>

            {/* Minimal Contact Details */}
            <div className="mt-12 lg:mt-0 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email</p>
                <a 
                  href="mailto:hello@yourname.com" 
                  className="text-2xl md:text-3xl text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-900 dark:hover:border-white pb-1 inline-block"
                >
                  hello@yourname.com
                </a>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Socials</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a></li>
                    <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter / X</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">4:00 PM (GMT+6)</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Minimal Form */}
          <div className="lg:pt-12">
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-xl text-gray-900 dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-gray-500 text-xl transition-all duration-300 
                             peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400
                             peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                >
                  What's your name?
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-xl text-gray-900 dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-gray-500 text-xl transition-all duration-300 
                             peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400
                             peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                >
                  Your email address
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows={4}
                  className="peer w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-3 text-xl text-gray-900 dark:text-white focus:border-black dark:focus:border-white outline-none transition-colors resize-none"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-gray-500 text-xl transition-all duration-300 
                             peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400
                             peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gray-400"
                >
                  Tell me about your project...
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden rounded-full bg-black dark:bg-white px-10 py-4 text-white dark:text-black transition-transform active:scale-95 disabled:opacity-70"
                >
                  <span className="relative z-10 font-medium text-lg">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {/* Subtle hover effect overlay */}
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-gray-700 dark:bg-gray-200 transition-transform duration-300 group-hover:scale-110 opacity-20"></div>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};