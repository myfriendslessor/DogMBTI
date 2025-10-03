import type { PersonalityType } from './personalityTypes';

// English version of personality types (sample - first 4 types translated)
export const personalityTypesEn: Record<string, PersonalityType> = {
  ENFP: {
    type: 'ENFP',
    emoji: '🎾',
    name: 'The Energetic Tail-Wagger!',
    subtitle: 'Curious about everything, spreading joy with endless bright energy',
    description: 'ENFP (Enthusiastic Campaigner) dogs are highly optimistic and social. They love new encounters and experiences, treating every moment like playtime.',
    traits: [
      'Explores new environments and scents with overflowing curiosity',
      'Approaches people and dogs fearlessly to make friends',
      'Expresses emotions through vigorous tail wagging',
      'Shows spontaneous and exploratory behavior'
    ],
    hiddenEmotions: [
      'Dislikes boring repetitive training',
      'Gets stressed staying in confined spaces'
    ],
    recommendedActivities: [
      'Varied and fun play-based training',
      'Wide parks and outdoor activities',
      'New walking routes and rotating toys',
      'Activities similar to Samoyeds and Spaniel breeds'
    ],
    color: 'from-yellow-400 to-orange-400',
    title: 'Enthusiastic Campaigner',
    summary: 'Curious about everything in the world, constantly making everyone happy with bright energy. ENFP (Enthusiastic Campaigner) dogs are highly optimistic and social.',
    detailedTraits: {
      title: 'Key Traits & Communication Style',
      description: 'Loves new encounters and experiences, enjoying every moment like play.',
      points: [
        {
          heading: 'Overflowing Curiosity',
          text: 'Feels curious about everything - new environments, toys, and scents. Shows spontaneous and exploratory behavior, like taking unexpected paths during walks or suddenly changing direction during training.'
        },
        {
          heading: 'Outstanding Sociability',
          text: 'Approaches new people and dogs fearlessly with friendly greetings. Views every encounter as joyful play and has no hesitation in making friends.'
        },
        {
          heading: 'Rich Emotional Expression',
          text: 'Expresses emotions with their whole body - vigorously wagging tail, jumping to show joy, whimpering when wanting to play, honestly conveying their feelings.'
        }
      ]
    },
    guide: {
      title: 'Recommended Training & Care Guide',
      points: [
        {
          heading: 'Fun Training',
          text: 'Dislikes boring repetitive training. Make training varied and fun like play. Reward-based training with treats or toys works well, and they show positive responses when learning new tricks.'
        },
        {
          heading: 'Sufficient Activity',
          text: 'Has very high energy that needs release through plenty of walks and play. Can get stressed staying only in confined spaces, so frequent visits to wide parks or outdoor activities are recommended.'
        },
        {
          heading: 'Freedom to Experience',
          text: 'Loves experiencing new things. Add variety to daily walking routes or frequently rotate new toys.'
        }
      ]
    },
    message: 'To my beloved family, making you smile is my favorite thing in the world! When I shake my whole body, bark, and run around, it\'s because I\'m so happy in this moment. You are my most beloved beings in the world. Let\'s keep making happy memories together!'
  },
  
  ENTP: {
    type: 'ENTP',
    emoji: '💡',
    name: 'Logical Problem Solver',
    subtitle: 'Curious about everything, constantly finding new solutions - the inventor type',
    description: 'ENTP (Logical Inventor) dogs are highly creative and logical. They enjoy exploring new things and solving problems in ingenious ways.',
    traits: [
      'Enjoys intellectual play like puzzles and hide-and-seek',
      'Handles unpredictable situations flexibly',
      'Acts spontaneously, driven by curiosity',
      'Understands command intentions and tries new methods'
    ],
    hiddenEmotions: [
      'Strongly dislikes boring repetitive training',
      'Wants owner\'s attention and affection'
    ],
    recommendedActivities: [
      'Varied and fun play-based training',
      'Free play in wide spaces',
      'New tricks and intellectual stimulation',
      'Activities similar to Jack Russell Terriers, Papillons, Belgian Malinois'
    ],
    color: 'from-purple-400 to-pink-400',
    title: 'Logical Problem Solver',
    summary: 'Curious about everything in the world, constantly finding new solutions - an inventor-type dog. ENTP (Logical Inventor) dogs are highly creative and logical.',
    detailedTraits: {
      title: 'Key Traits & Communication Style',
      description: 'Enjoys exploring new things and solving problems in ingenious ways.',
      points: [
        {
          heading: 'Enjoys Intellectual Play',
          text: 'Gets bored with simple, repetitive play. Loves toys or activities requiring thinking - enjoys problem-solving games like puzzles, hide-and-seek, or nose work.'
        },
        {
          heading: 'Flexible Thinking',
          text: 'Handles unpredictable situations flexibly. When unexpected problems arise during walks or training, tries to solve them themselves rather than panicking.'
        },
        {
          heading: 'Spontaneous and Curious',
          text: 'Acts spontaneously, driven by curiosity. When seeing something new, doesn\'t hesitate to approach and explore. Understands command intentions and sometimes tries new methods.'
        }
      ]
    },
    guide: {
      title: 'Recommended Training & Care Guide',
      points: [
        {
          heading: 'Varied Training',
          text: 'Strongly dislikes boring, repetitive training. Provide varied training methods and new activities. Learning through new tricks or problem-solving enhances their motivation.'
        },
        {
          heading: 'Sufficient Space',
          text: 'Needs plenty of space to release high energy and satisfy intellectual curiosity. Large parks or wide outdoor areas are ideal for free exploration.'
        },
        {
          heading: 'Intellectual Stimulation',
          text: 'Intellectual stimulation is as important as physical exercise. Activities like puzzle toys, new tricks, or exploring new environments keep their curiosity satisfied.'
        }
      ]
    },
    message: 'To my beloved family, I sometimes get too curious and cause trouble, but it\'s all out of wanting to learn more. I want to try everything in this world with you. You are my most beloved beings in the world!'
  },

  // Fallback - other types will use Korean version for now
  // Add more translations as needed
};
