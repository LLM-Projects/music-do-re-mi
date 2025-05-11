import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Award } from "@/data/awards";

interface AwardsCardProps {
  recognition: Award;
}

export function AwardsCard({ recognition }: AwardsCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant={recognition.type as any}>
            {recognition.type.charAt(0).toUpperCase() +
              recognition.type.slice(1)}
          </Badge>
          <div className="text-sm text-muted-foreground flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {recognition.date}
          </div>
        </div>
        <CardTitle className="text-xl">{recognition.award}</CardTitle>
        {recognition.description && (
          <CardDescription className="line-clamp-2">
            {recognition.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm font-medium">Student</div>
              <div className="text-sm text-muted-foreground">
                {recognition.student}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm font-medium">Teacher</div>
              <div className="text-sm text-muted-foreground">
                {recognition.teacher}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
