import PersonalityCard from '../PersonalityCard';
import { personalityTypes } from '@shared/personalityTypes';

export default function PersonalityCardExample() {
  return (
    <div className="p-8 bg-background">
      <PersonalityCard personality={personalityTypes.ENFP} />
    </div>
  );
}
