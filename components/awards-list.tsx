import type { Recognition } from "@/data/awards";
import { RecognitionCard } from "@/components/award-card";

interface RecognitionListProps {
  recognitions: Recognition[];
}

export function RecognitionList({ recognitions }: RecognitionListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {recognitions.map((recognition) => (
        <RecognitionCard key={recognition.id} recognition={recognition} />
      ))}
    </div>
  );
}
