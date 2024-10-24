import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceDetails {
  title: string;
  date: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<{ details: ExperienceDetails }> = ({
  details,
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{details.title}</CardTitle>
        <Badge variant="secondary" className="w-fit">
          {details.date}
        </Badge>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          {details.responsibilities.map((item, index) => (
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
