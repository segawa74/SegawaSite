import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  title: string;
  date: string;
  responsibilities: string[];
}

const ExperienceCard = ({ title, date, responsibilities }: ExperienceProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Badge variant="secondary" className="w-fit">
          {date}
        </Badge>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
