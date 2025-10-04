import type { Question } from './questions';

export const questionsEn: Question[] = [
  {
    id: 'q1',
    text: 'What does your dog usually do when left alone?',
    choices: [
      { id: 'a', label: 'Rests or sleeps quietly', weights: { I: 2 } },
      { id: 'b', label: 'Wanders around the house exploring', weights: { E: 2 } },
      { id: 'c', label: 'Whines or paces near the door', weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: 'q2',
    text: 'How does your dog react when meeting new dogs or people?',
    choices: [
      { id: 'a', label: 'Quickly approaches and greets them', weights: { E: 2, F: 1 } },
      { id: 'b', label: 'Observes first, then slowly approaches', weights: { I: 2, N: 1 } },
      { id: 'c', label: 'Hides behind owner or keeps distance', weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: 'q3',
    text: 'What happens when guests visit your home?',
    choices: [
      { id: 'a', label: 'Gets excited and actively greets them', weights: { E: 2 } },
      { id: 'b', label: 'Nervous at first but adapts quickly', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Goes to their spot and stays quiet', weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: 'q4',
    text: 'When entering an unfamiliar space (vet/cafe), what do they do?',
    choices: [
      { id: 'a', label: 'Quickly looks around and explores', weights: { E: 1, N: 1 } },
      { id: 'b', label: 'Observes surroundings, moves slowly', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Stays close to owner, anxious', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q5',
    text: 'What is their first reaction when you return home?',
    choices: [
      { id: 'a', label: 'Jumps/wags tail with strong greeting', weights: { E: 2, F: 2 } },
      { id: 'b', label: 'Calmly approaches and sniffs you', weights: { I: 2, T: 2 } },
      { id: 'c', label: 'Stays close and won\'t leave your side for a while', weights: { F: 1, P: 1 } }
    ]
  },
  {
    id: 'q6',
    text: 'What is their walking style?',
    choices: [
      { id: 'a', label: 'Leads the way, searching for new paths/scents', weights: { E: 2, N: 1 } },
      { id: 'b', label: 'Walks steadily by your side at a consistent pace', weights: { S: 2, J: 2 } },
      { id: 'c', label: 'Pace changes flexibly depending on mood', weights: { N: 1, P: 2 } }
    ]
  },
  {
    id: 'q7',
    text: 'How do they react when the walking route changes?',
    choices: [
      { id: 'a', label: 'Finds it interesting and enjoys it', weights: { N: 2, P: 1 } },
      { id: 'b', label: 'Unfamiliar at first but adapts soon', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Gets stressed or refuses to walk', weights: { S: 2, J: 2, F: 1 } }
    ]
  },
  {
    id: 'q8',
    text: 'What is their reaction to a ball or toy?',
    choices: [
      { id: 'a', label: 'Immediately grabs it or plays with it', weights: { E: 2, P: 2 } },
      { id: 'b', label: 'Sniffs and examines it before playing', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Not very interested', weights: { I: 1, T: 1 } }
    ]
  },
  {
    id: 'q9',
    text: 'What is their first reaction to a new toy?',
    choices: [
      { id: 'a', label: 'Immediately bites and explores it', weights: { E: 2, P: 2 } },
      { id: 'b', label: 'Carefully observes then slowly uses it', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Rarely uses it', weights: { I: 2, J: 2 } }
    ]
  },
  {
    id: 'q10',
    text: 'What is their preferred play style?',
    choices: [
      { id: 'a', label: 'High-energy play like tug-of-war/fetch', weights: { E: 2, P: 2 } },
      { id: 'b', label: 'Thinking games like scent work/puzzles', weights: { N: 1, T: 3 } },
      { id: 'c', label: 'Quiet physical affection/bonding', weights: { I: 2, F: 2 } }
    ]
  },
  {
    id: 'q11',
    text: 'How do they react to loud noises (doorbell, fireworks)?',
    choices: [
      { id: 'a', label: 'Moves toward the sound to investigate', weights: { E: 2, N: 2 } },
      { id: 'b', label: 'Pauses and assesses the situation', weights: { I: 2, T: 2 } },
      { id: 'c', label: 'Barks or hides', weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: 'q12',
    text: 'When an unfamiliar dog barks loudly?',
    choices: [
      { id: 'a', label: 'Acts assertively or approaches them', weights: { E: 2, T: 2 } },
      { id: 'b', label: 'Looks to owner for guidance', weights: { J: 1, T: 1 } },
      { id: 'c', label: 'Keeps distance and avoids them', weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: 'q13',
    text: 'What is their reaction when you leave the house?',
    choices: [
      { id: 'a', label: 'Watches briefly then does their own thing', weights: { I: 2, T: 2 } },
      { id: 'b', label: 'Waits by the door', weights: { F: 1, J: 1 } },
      { id: 'c', label: 'Whines or scratches sofa/door', weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: 'q14',
    text: 'If left alone for a long time?',
    choices: [
      { id: 'a', label: 'Spends time with toys/scent work', weights: { N: 1, P: 1 } },
      { id: 'b', label: 'Sleeps or rests in their usual spot', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Shows stress/destructive behavior', weights: { E: 2, F: 2 } }
    ]
  },
  {
    id: 'q15',
    text: 'How do they spend rest time in an unfamiliar environment?',
    choices: [
      { id: 'a', label: 'Lies down comfortably and observes surroundings', weights: { N: 1, P: 1 } },
      { id: 'b', label: 'Rests on their mat/in their crate', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Stays very close to owner', weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: 'q16',
    text: 'How quickly do they respond when you call their name?',
    choices: [
      { id: 'a', label: 'Comes immediately', weights: { E: 2, F: 2 } },
      { id: 'b', label: 'Comes when called a second time', weights: { I: 2, J: 2 } },
      { id: 'c', label: 'Comes better when there\'s a reward', weights: { T: 2, P: 2 } }
    ]
  },
  {
    id: 'q17',
    text: 'What does your dog do when you\'re in a bad mood?',
    choices: [
      { id: 'a', label: 'Quietly comes to your side and leans on you', weights: { I: 2, F: 2 } },
      { id: 'b', label: 'Tries to cheer you up with walks/play', weights: { E: 2, N: 2 } },
      { id: 'c', label: 'Reads the room and keeps distance', weights: { T: 2, J: 2 } }
    ]
  },
  {
    id: 'q18',
    text: 'What does your dog do when you\'re busy?',
    choices: [
      { id: 'a', label: 'Naturally plays alone or rests', weights: { I: 2, T: 2 } },
      { id: 'b', label: 'Tries to get your attention', weights: { E: 2, F: 2 } },
      { id: 'c', label: 'Stays on mat/in crate as instructed', weights: { J: 1, S: 1 } }
    ]
  },
  {
    id: 'q19',
    text: 'Where do they usually stay when you\'re sitting down?',
    choices: [
      { id: 'a', label: 'Close by, leaning against you', weights: { F: 2, I: 2 } },
      { id: 'b', label: 'Nearby but moving around freely', weights: { E: 2, P: 2 } },
      { id: 'c', label: 'In their own spot/mat', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q20',
    text: 'Do they enjoy physical affection?',
    choices: [
      { id: 'a', label: 'Actively seeks petting/hugs', weights: { F: 2 } },
      { id: 'b', label: 'Only when they\'re in the mood', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Only tolerates brief touches', weights: { T: 1, I: 1 } }
    ]
  },
  {
    id: 'q21',
    text: 'How do they respond to basic commands (sit/stay)?',
    choices: [
      { id: 'a', label: 'Follows clear commands well', weights: { S: 2, J: 1 } },
      { id: 'b', label: 'Responds better with a reward', weights: { F: 1, P: 1 } },
      { id: 'c', label: 'Prefers playing over following commands', weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: 'q22',
    text: 'What\'s their attitude toward training without rewards?',
    choices: [
      { id: 'a', label: 'Performs commands well enough', weights: { J: 1, T: 1 } },
      { id: 'b', label: 'Noticeably less motivated', weights: { P: 1, T: 1 } },
      { id: 'c', label: 'Interest drops sharply', weights: { P: 2 } }
    ]
  },
  {
    id: 'q23',
    text: 'When you repeat the same command?',
    choices: [
      { id: 'a', label: 'Continues to perform it steadily', weights: { S: 1, J: 1 } },
      { id: 'b', label: 'Gets increasingly bored', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Wants to try a new trick', weights: { N: 1, P: 2 } }
    ]
  },
  {
    id: 'q24',
    text: 'How quickly do they learn new tricks?',
    choices: [
      { id: 'a', label: 'Understands and follows quickly', weights: { N: 1, T: 3 } },
      { id: 'b', label: 'Learns after a few repetitions', weights: { S: 2, J: 1 } },
      { id: 'c', label: 'Needs slow, consistent repetition', weights: { S: 1, J: 1, I: 1 } }
    ]
  },
  {
    id: 'q25',
    text: 'How do they react when the leash is pulled during walks?',
    choices: [
      { id: 'a', label: 'Immediately adjusts speed to match yours', weights: { J: 1, T: 1 } },
      { id: 'b', label: 'Reacts to leash but easily distracted by interesting things', weights: { P: 2, N: 1 } },
      { id: 'c', label: 'Maintains steady tension and walks stably', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q26',
    text: 'What is their favorite spot at home?',
    choices: [
      { id: 'a', label: 'Near owner (next to sofa/at your feet)', weights: { F: 1, I: 1 } },
      { id: 'b', label: 'Observation point (window/balcony)', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Their own house/mat fixed spot', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q27',
    text: 'What is their attitude toward new food/treats?',
    choices: [
      { id: 'a', label: 'Very curious, tries it right away', weights: { E: 1, P: 2 } },
      { id: 'b', label: 'Checks smell/texture before eating', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Prefers their usual food', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q28',
    text: 'When they see other pets (cats/birds)?',
    choices: [
      { id: 'a', label: 'Easily approaches to be friends', weights: { E: 1, F: 1 } },
      { id: 'b', label: 'Respects each other\'s distance', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Gets excited or tries to chase', weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: 'q29',
    text: 'When you pet another dog?',
    choices: [
      { id: 'a', label: 'Gets jealous or intervenes', weights: { E: 1, F: 1 } },
      { id: 'b', label: 'Quietly watches from the side', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Focuses on your call/signal', weights: { J: 1, T: 1 } }
    ]
  },
  {
    id: 'q30',
    text: 'When is your dog most active during the day?',
    choices: [
      { id: 'a', label: 'Morning/early evening (active around walk time)', weights: { J: 1, S: 1 } },
      { id: 'b', label: 'Short bursts throughout the day', weights: { P: 1, N: 1 } },
      { id: 'c', label: 'Matches owner\'s activity rather than specific time', weights: { F: 1, I: 1 } }
    ]
  },
  {
    id: 'q31',
    text: 'On walks, do they prefer familiar or new paths?',
    choices: [
      { id: 'a', label: 'Comfortable with the usual familiar path', weights: { S: 2, J: 1 } },
      { id: 'b', label: 'Mostly familiar paths but occasionally new ones are good', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Gets excited and leads the way on new paths', weights: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q32',
    text: 'What are their toy preferences?',
    choices: [
      { id: 'a', label: 'Loves their familiar, well-used toys the most', weights: { S: 2, J: 1 } },
      { id: 'b', label: 'Chooses familiar or new depending on situation', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Shows more interest in new toys', weights: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q33',
    text: 'How do they react to new treat/food flavors?',
    choices: [
      { id: 'a', label: 'Eats their usual familiar flavor best', weights: { S: 2, J: 1 } },
      { id: 'b', label: 'Tries new flavors but prefers familiar ones', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Shows more interest when new treats appear', weights: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q34',
    text: 'What training style do they prefer?',
    choices: [
      { id: 'a', label: 'Repeats same actions and performs stably', weights: { S: 2, J: 2 } },
      { id: 'b', label: 'Repeats basics but occasionally changes it up', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Frequently learns new actions and enjoys change', weights: { N: 2, P: 2 } }
    ]
  },
  {
    id: 'q35',
    text: 'How do they behave in unfamiliar places (vet, groomer)?',
    choices: [
      { id: 'a', label: 'Sits in one spot and sniffs/observes details', weights: { S: 2, T: 1 } },
      { id: 'b', label: 'Looks around a bit but adapts quickly', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Quickly explores the entire space', weights: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q36',
    text: 'When detecting changes in your behavior?',
    choices: [
      { id: 'a', label: 'Notices small changes like voice tone/walking pace', weights: { S: 2, J: 1 } },
      { id: 'b', label: 'Sometimes notices, sometimes doesn\'t', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Only reacts to big mood/atmosphere changes', weights: { N: 2, I: 1 } }
    ]
  }
];
