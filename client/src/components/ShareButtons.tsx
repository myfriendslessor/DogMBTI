import { Button } from '@/components/ui/button';
import { Share2, MessageCircle, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@shared/i18n';

interface ShareButtonsProps {
  mbtiType: string;
  personalityName: string;
}

export default function ShareButtons({ mbtiType, personalityName }: ShareButtonsProps) {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = getTranslations(language);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = t.share.shareText(mbtiType, personalityName);

  const handleKakaoShare = () => {
    console.log('KakaoTalk share clicked');
    toast({
      title: t.share.kakaoToast.title,
      description: t.share.kakaoToast.description,
    });
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: t.share.copySuccess.title,
        description: t.share.copySuccess.description,
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleWhatsAppShare = () => {
    const whatsappText = encodeURIComponent(`${shareText}\n${shareUrl}`);
    const whatsappUrl = `https://wa.me/?text=${whatsappText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleGeneralShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.share.shareTitle,
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
        {t.share.kakao}
      </Button>

      <Button
        onClick={handleWhatsAppShare}
        className="bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold min-w-[200px]"
        data-testid="button-share-whatsapp"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        {t.share.whatsapp}
      </Button>
      
      <Button
        onClick={handleGeneralShare}
        variant="outline"
        className="min-w-[200px]"
        data-testid="button-share-general"
      >
        <Share2 className="w-4 h-4 mr-2" />
        {t.share.general}
      </Button>

      <Button
        onClick={handleCopyLink}
        variant="outline"
        className="min-w-[200px]"
        data-testid="button-copy-link"
      >
        <Copy className="w-4 h-4 mr-2" />
        {t.share.copyLink}
      </Button>
    </div>
  );
}
