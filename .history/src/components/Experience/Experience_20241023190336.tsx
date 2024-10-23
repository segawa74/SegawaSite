import { EXPERIENCE } from "../../utils/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceDetails {
  title: string;
  date: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  return (
    <section id="exp" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ExperienceCard({ details }: { details: ExperienceDetails }) {
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
}
export default Experience;
