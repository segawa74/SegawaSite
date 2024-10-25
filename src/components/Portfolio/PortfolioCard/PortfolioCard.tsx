import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  link: string;
  title: string;
  img: string;
  comment?: string;
}

function PortfolioCard({ details }: { details: PortfolioItem }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{details.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={details.img}
          alt={details.title}
          className="w-full h-48 object-cover rounded-md"
        />
        {details.comment && (
          <p className="mt-4 text-sm text-muted-foreground">
            {details.comment}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={details.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PortfolioCard;
