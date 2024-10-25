import React from "react";
import { Mail } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe: React.FC = () => {
  return (
    <section id="contact-me" className="py-40 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <ContactInfoCard
            icon={<Mail className="w-6 h-6" />}
            text="segawa74dev@gmail.com"
            href="mailto:segawa74dev@gmail.com"
          />
          <ContactInfoCard
            icon={
              <img
                src="/assets/images/github.svg"
                alt="GitHub"
                className="w-6 h-6"
              />
            }
            text="github.com/segawa74"
            href="https://github.com/segawa74"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
