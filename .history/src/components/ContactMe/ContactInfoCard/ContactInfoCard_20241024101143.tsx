import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github } from "lucide-react";

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
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
        >
          {text}
        </a>
      </CardContent>
    </Card>
  );
}

export default ContactInfoCard;
