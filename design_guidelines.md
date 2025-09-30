# Dog MBTI Test Website - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from successful personality test platforms (16Personalities, Korean test sites like Ktestone) and playful Korean service designs (Toss, Karrot Market). The design prioritizes shareability, emotional engagement, and delightful user experience.

**Design Principles**:
- **Playful & Approachable**: Warm, friendly aesthetics that celebrate dogs
- **Viral-Ready**: Every screen designed for social sharing
- **Progressive Delight**: Each interaction feels rewarding
- **Korean UX Patterns**: Familiar patterns for Korean users

---

## Core Design Elements

### A. Color Palette

**Primary Colors** (Dog-themed warm palette):
- **Light Mode**: 
  - Primary: 45 85% 60% (Warm orange/golden - energetic, friendly)
  - Secondary: 200 70% 55% (Sky blue - trustworthy, calm)
  - Accent: 280 70% 65% (Playful purple - creative, fun)
  
- **Dark Mode**:
  - Primary: 45 75% 50%
  - Secondary: 200 60% 45%
  - Accent: 280 60% 55%

**Supporting Colors**:
- Success: 150 60% 50% (For completion states)
- Background variants for card depth and hierarchy
- Neutral grays with warm undertones

**Usage Strategy**:
- Hero section uses gradient overlay on dog imagery
- Each personality type gets a unique accent color variation
- Progress indicators use primary color with smooth animations
- CTA buttons use vibrant primary with subtle glow effects

### B. Typography

**Font Families** (via Google Fonts):
- **Primary**: 'Pretendard' or 'Noto Sans KR' - Clean, modern Korean font
- **Display**: 'Jua' or 'Gaegu' - Playful, rounded Korean font for headings
- **Body**: Same as Primary for consistency

**Type Scale**:
- Hero Title: text-5xl to text-7xl, font-bold (Display font)
- Section Headings: text-3xl to text-4xl, font-bold
- Question Text: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg
- Button Text: text-base, font-semibold

**Korean Typography Considerations**:
- Slightly increased line-height (1.7-1.8) for readability
- Letter-spacing adjusted for Hangul characters
- Emoji integration for personality type names

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-4 to p-8
- Section spacing: py-12 to py-24 (responsive)
- Card gaps: gap-6 to gap-8
- Button padding: px-6 py-3

**Grid Strategy**:
- Landing: Full-width hero + centered content (max-w-4xl)
- Test Questions: Single column, max-w-2xl for focus
- Results: 2-column layout on desktop (personality + details)
- Feature sections: 3-column grid (lg:grid-cols-3)

**Container Widths**:
- Hero: Full width with overlay
- Content: max-w-6xl
- Test content: max-w-2xl (narrow for readability)
- Results cards: max-w-5xl

### D. Component Library

**Navigation** (Optional for landing, not needed for test flow):
- Simple top bar with logo and language toggle
- Sticky progress bar during test

**Hero Section**:
- Full-width background with playful dog illustration/photo
- Gradient overlay (primary color with transparency)
- Large heading with emoji: "🐾 나의 강아지 MBTI 테스트"
- Subheading explaining the test value
- Prominent CTA button with glow effect
- Trust indicator: "이미 X만명이 테스트했어요!"

**Test Question Cards**:
- Large, centered card with shadow and rounded corners (rounded-2xl)
- Progress bar at top showing completion (1/60)
- Question number + total
- Question text in large, readable font
- 5-7 answer options as large clickable cards
- Answer cards with hover states and smooth transitions
- "이전" and "다음" navigation buttons

**Progress Indicator**:
- Linear progress bar with gradient fill
- Percentage or fraction display
- Smooth animation on progress
- Sticky to top during test

**Results Card**:
- Large personality type display with emoji + Korean name
- Personality type code (e.g., ENFP) in badge format
- Detailed breakdown sections:
  - "성격 특징" with icon bullets
  - "숨은 감정" with emotional insights
  - "추천 놀이" with activity suggestions
  - "잘 맞는 견종" compatibility section
- Illustrated or photo representation of personality
- Statistics/percentage bars for traits

**Share Buttons**:
- Horizontal row of social icons
- KakaoTalk (primary), Facebook, Twitter, Instagram, Link copy
- Bright colors matching each platform
- Click to generate shareable image + text

**CTA Sections**:
- Premium report upgrade card
- "다른 테스트 해보기" recommendations
- Newsletter signup (optional)

**Footer**:
- Logo, copyright, privacy policy links
- Social media links
- "만든 사람" credits
- Minimal, doesn't compete with results

### E. Imagery Strategy

**Required Images**:
1. **Hero Section**: Large, high-quality photo of happy diverse dogs (3-4 dogs) in playful setting - conveys joy and personality variety
2. **Results Pages**: Each of 16 personality types gets a unique illustration or photo representing that type's characteristics
3. **Feature Icons**: SVG icons for personality traits (use Heroicons)
4. **Decorative Elements**: Paw prints, dog silhouettes as subtle background patterns

**Image Treatment**:
- Rounded corners (rounded-xl to rounded-2xl)
- Subtle shadow for depth
- Overlay gradients where text appears on images
- High-quality, optimized for web

### F. Animations & Interactions

**Minimal, Purposeful Animations**:
- Page transitions: Smooth fade (300ms)
- Question transitions: Slide animation (400ms)
- Progress bar: Smooth width transition
- Button hover: Subtle scale (scale-105) + shadow increase
- Answer selection: Quick scale feedback + color change
- Results reveal: Staggered fade-in for sections

**No Distracting Effects**:
- Avoid parallax
- No auto-playing videos
- No excessive particle effects
- Focus on functional micro-interactions

---

## Page-Specific Guidelines

### Landing Page

**Structure** (5-6 sections):
1. **Hero**: Full-viewport with background image, centered content, primary CTA
2. **신뢰 지표**: Statistics row (total tests, satisfaction rate, social proof)
3. **테스트 소개**: 3-column grid explaining what the test reveals (personality, emotions, compatibility)
4. **인기 성격 유형**: Showcase 3-4 popular types with mini previews
5. **후기**: 2-3 column testimonials from users (with dog photos)
6. **Final CTA**: Large centered button to start test

**Visual Hierarchy**:
- Hero takes 80vh, rest flows naturally
- Generous whitespace between sections (py-20)
- Each section has clear heading + supporting content
- Alternating background colors for visual rhythm

### Test Flow Pages

**Question Page**:
- Clean, distraction-free layout
- Single question focus
- Large answer buttons (full-width on mobile)
- Smooth transitions between questions
- Always show progress indicator

**Answer Options**:
- 5-7 point scale OR binary choice depending on question
- Visual feedback on hover and selection
- Clear selected state (bold border + fill color)

### Results Page

**Structure**:
1. **Personality Reveal**: Large animated reveal of type + emoji + name
2. **Core Traits**: Visual breakdown with icons and descriptions
3. **상세 분석**: 
   - 성격 특징 (4-6 bullet points)
   - 숨은 감정 (2-3 paragraphs)
   - 추천 놀이 (3-4 activity cards)
4. **Share Section**: Prominent social sharing buttons
5. **Upgrade CTA**: Premium report option
6. **Related Tests**: Other personality tests to try

**Layout**:
- Desktop: 2-column for personality display + details
- Mobile: Stacked single column
- Plenty of breathing room around each section

---

## Korean UX Best Practices

- Use familiar Korean button patterns ("시작하기", "다음", "공유하기")
- Include KakaoTalk as primary share option
- Emoji usage is encouraged and familiar
- Warm, friendly tone in all copy
- Trust indicators (user count, ratings) prominent
- Mobile-first responsive design (Korea has high mobile usage)

---

## Accessibility & Dark Mode

- **Dark Mode**: Consistent implementation across all pages
- High contrast ratios for text
- Focus states on all interactive elements
- Touch targets minimum 44x44px for mobile
- Alt text for all images
- Semantic HTML structure

---

## Technical Notes

- Single-page application feel with smooth transitions
- Local storage to save progress
- Generate shareable OG images for social media
- Optimize for Core Web Vitals
- Fast load times critical for viral spread