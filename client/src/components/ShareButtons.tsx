import { Button } from '@/components/ui/button';
import { Share2, MessageCircle, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  mbtiType: string;
  personalityName: string;
}

export default function ShareButtons({ mbtiType, personalityName }: ShareButtonsProps) {
  const { toast } = useToast();

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `나의 강아지 MBTI는 ${mbtiType} - ${personalityName}! 🐾`;

  const handleKakaoShare = () => {
    console.log('KakaoTalk share clicked');
    toast({
      title: "카카오톡 공유",
      description: "카카오톡 공유 기능은 실제 앱에서 구현됩니다.",
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "링크 복사 완료!",
        description: "결과 링크가 클립보드에 복사되었습니다.",
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleGeneralShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '강아지 MBTI 테스트 결과',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <Button
        onClick={handleKakaoShare}
        className="bg-[#FEE500] hover:bg-[#FDD835] text-black font-semibold min-w-[200px]"
        data-testid="button-share-kakao"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        카카오톡 공유
      </Button>
      
      <Button
        onClick={handleGeneralShare}
        variant="outline"
        className="min-w-[200px]"
        data-testid="button-share-general"
      >
        <Share2 className="w-4 h-4 mr-2" />
        결과 공유하기
      </Button>

      <Button
        onClick={handleCopyLink}
        variant="outline"
        className="min-w-[200px]"
        data-testid="button-copy-link"
      >
        <Copy className="w-4 h-4 mr-2" />
        링크 복사
      </Button>
    </div>
  );
}
