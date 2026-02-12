"use client";

import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "../../components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, you'd send this to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1
          className="text-3xl font-bold text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg mb-4"
        >
          Get In Touch
        </h1>
        <p
          className="text-gruvbox-light-fg/80 dark:text-gruvbox-dark-fg/80
            text-lg"
        >
          I'm always interested in hearing about new opportunities,
          collaborations, or just having a chat about technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div
          className="bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 p-6
            rounded-lg border border-gruvbox-light-border
            dark:border-gruvbox-dark-border"
        >
          <h2
            className="text-xl font-semibold text-gruvbox-light-fg
              dark:text-gruvbox-dark-fg mb-6 flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg mb-1"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gruvbox-light-border
                  dark:border-gruvbox-dark-border rounded-md bg-white
                  dark:bg-gruvbox-dark-bg text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg focus:outline-none focus:ring-2
                  focus:ring-gruvbox-light-accent
                  dark:focus:ring-gruvbox-dark-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gruvbox-light-border
                  dark:border-gruvbox-dark-border rounded-md bg-white
                  dark:bg-gruvbox-dark-bg text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg focus:outline-none focus:ring-2
                  focus:ring-gruvbox-light-accent
                  dark:focus:ring-gruvbox-dark-accent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg mb-1"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gruvbox-light-border
                  dark:border-gruvbox-dark-border rounded-md bg-white
                  dark:bg-gruvbox-dark-bg text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg focus:outline-none focus:ring-2
                  focus:ring-gruvbox-light-accent
                  dark:focus:ring-gruvbox-dark-accent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gruvbox-light-border
                  dark:border-gruvbox-dark-border rounded-md bg-white
                  dark:bg-gruvbox-dark-bg text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg focus:outline-none focus:ring-2
                  focus:ring-gruvbox-light-accent
                  dark:focus:ring-gruvbox-dark-accent resize-vertical"
              />
            </div>

            {submitStatus === "success" && (
              <div
                className="p-3 bg-green-100 dark:bg-green-900 text-green-800
                  dark:text-green-200 rounded-md"
              >
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="p-3 bg-red-100 dark:bg-red-900 text-red-800
                  dark:text-red-200 rounded-md"
              >
                Oops! Something went wrong. Please try again or email me
                directly.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div
            className="bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 p-6
              rounded-lg border border-gruvbox-light-border
              dark:border-gruvbox-dark-border"
          >
            <h2
              className="text-xl font-semibold text-gruvbox-light-fg
                dark:text-gruvbox-dark-fg mb-4"
            >
              Let's Connect
            </h2>
            <p
              className="text-gruvbox-light-fg/80 dark:text-gruvbox-dark-fg/80
                mb-6"
            >
              Whether you're looking for a senior engineer, want to discuss a
              project, or just want to chat about technology, I'd love to hear
              from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail
                  className="w-5 h-5 text-gruvbox-light-accent
                    dark:text-gruvbox-dark-accent"
                />
                <a
                  href="mailto:patrick@terah.dev"
                  className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg
                    hover:text-gruvbox-light-accent
                    dark:hover:text-gruvbox-dark-accent transition-colors"
                >
                  patrick@terah.dev
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  className="w-5 h-5 text-gruvbox-light-accent
                    dark:text-gruvbox-dark-accent"
                />
                <span
                  className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg"
                >
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>

          <div
            className="bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 p-6
              rounded-lg border border-gruvbox-light-border
              dark:border-gruvbox-dark-border"
          >
            <h2
              className="text-xl font-semibold text-gruvbox-light-fg
                dark:text-gruvbox-dark-fg mb-4"
            >
              Social Profiles
            </h2>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/patrickmwangi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg hover:text-gruvbox-light-accent
                  dark:hover:text-gruvbox-dark-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>

              <a
                href="https://github.com/patrickmwangi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gruvbox-light-fg
                  dark:text-gruvbox-dark-fg hover:text-gruvbox-light-accent
                  dark:hover:text-gruvbox-dark-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </div>
          </div>

          <div
            className="bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 p-6
              rounded-lg border border-gruvbox-light-border
              dark:border-gruvbox-dark-border"
          >
            <h2
              className="text-xl font-semibold text-gruvbox-light-fg
                dark:text-gruvbox-dark-fg mb-4"
            >
              Response Time
            </h2>
            <p className="text-gruvbox-light-fg/80 dark:text-gruvbox-dark-fg/80">
              I typically respond within 24-48 hours. For urgent matters, please
              mention it in your message subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
