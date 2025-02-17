"use client"; // Required for client-side interactivity in Next.js

import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // React Icons for contact info

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] text-center mb-12">
          Get in Touch
        </h2>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-[#8892b0] mb-6">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Feel free to reach out to me via email or connect
            with me on social media.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/nicolasgauthierdev" // Replace with your LinkedIn profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Juntakk" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#ccd6f6] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-[#112240] border-[#1f2a48] rounded-lg text-[#ccd6f6] focus:border-[#64ffda] focus:ring-[#64ffda] transition-colors duration-300"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#ccd6f6] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-[#112240] border-[#1f2a48] rounded-lg text-[#ccd6f6] focus:border-[#64ffda] focus:ring-[#64ffda] transition-colors duration-300"
                placeholder="your-email@example.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#ccd6f6] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 bg-[#112240] border-[#1f2a48] rounded-lg text-[#ccd6f6] focus:border-[#64ffda] focus:ring-[#64ffda] transition-colors duration-300"
                placeholder="Your Message"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                variant="outline"
                type="submit"
                className="text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
