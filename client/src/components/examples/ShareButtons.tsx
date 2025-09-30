import ShareButtons from '../ShareButtons';
import { Toaster } from '@/components/ui/toaster';

export default function ShareButtonsExample() {
  return (
    <div className="p-8 bg-background">
      <ShareButtons 
        mbtiType="ENFP" 
        personalityName="🌟 별을 좇는 모험가" 
      />
      <Toaster />
    </div>
  );
}
