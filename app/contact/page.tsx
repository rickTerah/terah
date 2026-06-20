"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TerminalFrame } from "@/components/TerminalFrame";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-16">
      <div className="space-y-2">
        <p className="section-tag">~/contact</p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          I&apos;m always interested in hearing about new opportunities,
          collaborations, or just having a chat about technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">email</p>
                <a
                  href="mailto:patrickmwangi554@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  patrickmwangi554@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">location</p>
                <p className="text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 border-t border-border pt-4">
            <a
              href="https://www.linkedin.com/in/mwangipatrickn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-1.5 text-sm
                text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <span
                className="ml-auto opacity-0 group-hover:opacity-100
                  transition-opacity"
              >
                ↗
              </span>
            </a>
            <a
              href="https://github.com/rickTerah"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-1.5 text-sm
                text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
              <span
                className="ml-auto opacity-0 group-hover:opacity-100
                  transition-opacity"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <TerminalFrame title="message.sh" className="h-full">
            <div className="p-5 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs">
                      name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs">
                      email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-xs">
                    subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs">
                    message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="text-sm"
                  />
                </div>

                {submitStatus === "success" && (
                  <div
                    className="flex items-center gap-2 p-3 border
                      border-primary/50 bg-primary/5 text-sm text-primary"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Message sent successfully
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="flex items-center gap-2 p-3 border
                      border-destructive/50 bg-destructive/5 text-sm
                      text-destructive"
                  >
                    <XCircle className="h-4 w-4" />
                    Failed to send message
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-3 w-3" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </TerminalFrame>
        </div>
      </div>
    </div>
  );
}
