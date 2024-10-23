import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github } from "lucide-react";
import Link from "next/link";

export default function ContactMe() {
  return (
    <section id="contact-me" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <ContactInfoCard
            icon={<Mail className="w-6 h-6" />}
            text="segawa74dev@gmail.com"
            href="mailto:segawa74dev@gmail.com"
          />
          <ContactInfoCard
            icon={<Github className="w-6 h-6" />}
            text="github.com/segawa74"
            href="https://github.com/segawa74"
          />
        </div>
      </div>
    </section>
  );
}

interface ContactInfoCardProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

function ContactInfoCard({ icon, text, href }: ContactInfoCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        <div className="mr-4 text-primary">{icon}</div>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
        >
          {text}
        </Link>
      </CardContent>
    </Card>
  );
}

export default ContactMe;
