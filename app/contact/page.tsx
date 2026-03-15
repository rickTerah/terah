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
    <div className="space-y-16 pb-16">
      {/* Header */}
      <TerminalFrame title="contact.sh" animate>
        <div className="p-6 md:p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="section-tag">CONTACT</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              GET IN TOUCH
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              I&apos;M ALWAYS INTERESTED IN HEARING ABOUT NEW OPPORTUNITIES,
              COLLABORATIONS, OR JUST HAVING A CHAT ABOUT TECHNOLOGY.
            </p>
          </div>
        </div>
      </TerminalFrame>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          {/* Info Card */}
          <div className="terminal-frame">
            <div className="p-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-2 border border-border">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-0.5">
                    EMAIL
                  </p>
                  <a
                    href="mailto:patrickmwangi554@gmail.com"
                    className="hover:text-primary transition-colors font-mono
                      text-sm"
                  >
                    patrickmwangi554@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 border border-border">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground mb-0.5">
                    LOCATION
                  </p>
                  <p className="font-mono text-sm">NAIROBI, KENYA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="terminal-frame">
            <div className="p-3 space-y-1">
              <a
                href="https://www.linkedin.com/in/mwangipatrickn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-transparent
                  hover:border-border transition-all group"
              >
                <Linkedin
                  className="h-4 w-4 text-muted-foreground
                    group-hover:text-primary transition-colors"
                />
                <span className="font-mono text-sm">LINKEDIN</span>
                <span
                  className="ml-auto text-primary opacity-0
                    group-hover:opacity-100 transition-opacity"
                >
                  ↗
                </span>
              </a>
              <a
                href="https://github.com/rickTerah"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-transparent
                  hover:border-border transition-all group"
              >
                <Github
                  className="h-4 w-4 text-muted-foreground
                    group-hover:text-primary transition-colors"
                />
                <span className="font-mono text-sm">GITHUB</span>
                <span
                  className="ml-auto text-primary opacity-0
                    group-hover:opacity-100 transition-opacity"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <TerminalFrame title="message.sh" className="h-full">
            <div className="p-5 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-xs">
                      NAME
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="YOUR NAME"
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-xs">
                      EMAIL
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="YOUR@EMAIL.COM"
                      className="font-mono text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono text-xs">
                    SUBJECT
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="WHAT'S THIS ABOUT?"
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-xs">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR MESSAGE..."
                    className="font-mono text-sm"
                  />
                </div>

                {submitStatus === "success" && (
                  <div
                    className="flex items-center gap-2 p-3 border
                      border-primary/50 bg-primary/5 font-mono text-sm
                      text-primary"
                  >
                    <CheckCircle className="h-4 w-4" />
                    MESSAGE SENT SUCCESSFULLY
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="flex items-center gap-2 p-3 border
                      border-destructive/50 bg-destructive/5 font-mono text-sm
                      text-destructive"
                  >
                    <XCircle className="h-4 w-4" />
                    FAILED TO SEND MESSAGE
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-mono"
                >
                  {isSubmitting ? (
                    "SENDING..."
                  ) : (
                    <>
                      <Send className="mr-2 h-3 w-3" />
                      SEND MESSAGE
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
