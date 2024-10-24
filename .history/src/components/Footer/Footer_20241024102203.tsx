import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600">
      <Separator className="mb-6" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-16">
          <p className="text-sm">
            &copy; 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
