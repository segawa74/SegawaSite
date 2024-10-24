import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfoCardProps {
  icon: React.ReactNode; // Type for the icon, which can be any valid React node
  text: string; // Text to display
  href: string; // URL for the link
}

// Function component with explicit typing
const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon,
  text,
  href,
}) => {
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
};

export default ContactInfoCard;
