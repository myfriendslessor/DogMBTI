import type { Question } from './questions';

// English version of questions (sample - first 10 questions translated)
export const questionsEn: Question[] = [
  {
    id: 'q1',
    text: 'When encountering a new person or dog during a walk',
    choices: [
      {
        id: 'a',
        label: 'Immediately approaches with tail wagging to say hello',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 1 }
      },
      {
        id: 'b',
        label: 'Observes from afar and cautiously approaches',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 1, F: 0, J: 1, P: 0 }
      }
    ]
  },
  {
    id: 'q2',
    text: 'When encountering an unfamiliar situation during a walk',
    choices: [
      {
        id: 'a',
        label: 'Curious and excitedly explores right away',
        weights: { E: 2, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 2 }
      },
      {
        id: 'b',
        label: 'Stays cautious and observes carefully',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 1, F: 0, J: 2, P: 0 }
      }
    ]
  },
  {
    id: 'q3',
    text: 'When guests visit home',
    choices: [
      {
        id: 'a',
        label: 'Excitedly runs around greeting everyone',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 1 }
      },
      {
        id: 'b',
        label: 'Quietly watches from a corner or own space',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 1, F: 0, J: 1, P: 0 }
      }
    ]
  },
  {
    id: 'q4',
    text: 'How does your dog spend time at home?',
    choices: [
      {
        id: 'a',
        label: 'Constantly wants to play or interact with family',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 1 }
      },
      {
        id: 'b',
        label: 'Enjoys relaxing alone in favorite spot',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 1, F: 0, J: 0, P: 0 }
      }
    ]
  },
  {
    id: 'q5',
    text: 'When family returns home',
    choices: [
      {
        id: 'a',
        label: 'Jumps around excitedly expressing joy',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 1 }
      },
      {
        id: 'b',
        label: 'Wags tail subtly or quietly comes close',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 0, F: 1, J: 1, P: 0 }
      }
    ]
  },
  {
    id: 'q6',
    text: 'At the dog park',
    choices: [
      {
        id: 'a',
        label: 'Actively approaches to play with other dogs',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 2 }
      },
      {
        id: 'b',
        label: 'Stays close to owner or plays alone',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 1, F: 0, J: 1, P: 0 }
      }
    ]
  },
  {
    id: 'q7',
    text: 'When learning a new trick',
    choices: [
      {
        id: 'a',
        label: 'Approaches as fun play and tries actively',
        weights: { E: 1, I: 0, S: 0, N: 1, T: 0, F: 0, J: 0, P: 2 }
      },
      {
        id: 'b',
        label: 'Takes time to understand then follows step by step',
        weights: { E: 0, I: 1, S: 1, N: 0, T: 1, F: 0, J: 2, P: 0 }
      }
    ]
  },
  {
    id: 'q8',
    text: 'When wanting something from family',
    choices: [
      {
        id: 'a',
        label: 'Barks directly or pats with paw to get attention',
        weights: { E: 2, I: 0, S: 1, N: 0, T: 1, F: 0, J: 0, P: 1 }
      },
      {
        id: 'b',
        label: 'Sits near silently staring or staying close',
        weights: { E: 0, I: 2, S: 0, N: 1, T: 0, F: 1, J: 1, P: 0 }
      }
    ]
  },
  {
    id: 'q9',
    text: 'After walking outside',
    choices: [
      {
        id: 'a',
        label: 'Still energetic wanting to play more',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
      },
      {
        id: 'b',
        label: 'Quickly rests and recharges energy',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 0, F: 0, J: 1, P: 0 }
      }
    ]
  },
  {
    id: 'q10',
    text: 'When playing with toys',
    choices: [
      {
        id: 'a',
        label: 'Prefers playing together with family',
        weights: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 1, J: 0, P: 0 }
      },
      {
        id: 'b',
        label: 'Prefers playing alone with toys',
        weights: { E: 0, I: 2, S: 1, N: 0, T: 1, F: 0, J: 0, P: 0 }
      }
    ]
  }
];
