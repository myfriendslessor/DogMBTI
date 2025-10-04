import type { Question } from './questions';

export const questionsEn: Question[] = [
  {
    id: 'q1',
    text: 'What does your dog usually do when left alone?',
    choices: [
      { id: 'a', label: 'Rests or sleeps quietly.', weights: { I: 2 } },
      { id: 'b', label: 'Wanders around the house, exploring.', weights: { E: 2 } }
    ]
  },
  {
    id: 'q2',
    text: 'How does your dog react to meeting new dogs or people?',
    choices: [
      { id: 'a', label: 'Immediately approaches with a wagging tail to greet them.', weights: { E: 2, F: 1 } },
      { id: 'b', label: 'Observes from a distance before slowly approaching.', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Hides behind you or keeps a safe distance.', weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: 'q3',
    text: 'What happens when guests visit your home?',
    choices: [
      { id: 'a', label: 'Gets excited and greets them enthusiastically.', weights: { E: 2 } },
      { id: 'b', label: 'Is nervous at first but adapts quickly.', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Goes to their spot and stays quiet.', weights: { I: 2, J: 1 } }
    ]
  },
  {
    id: 'q4',
    text: 'When entering a new space (like a vet\'s office or a cafe), what do they do?',
    choices: [
      { id: 'a', label: 'Quickly explores and sniffs around.', weights: { E: 1, N: 1 } },
      { id: 'b', label: 'Observes their surroundings, moving slowly and cautiously.', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Stays close to you, feeling anxious.', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q5',
    text: 'What is their first reaction when you return home?',
    choices: [
      { id: 'a', label: 'Jumps, wags their tail, and gives a strong greeting.', weights: { E: 2, F: 2 } },
      { id: 'b', label: 'Calmly approaches and sniffs you or sits by your side.', weights: { I: 2, T: 2 } }
    ]
  },
  {
    id: 'q6',
    text: 'What is their walking style like?',
    choices: [
      { id: 'a', label: 'Leads the way, searching for new paths and scents.', weights: { E: 1, N: 1 } },
      { id: 'b', label: 'Walks steadily by your side, keeping pace with you.', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Their pace is flexible and changes with their mood that day.', weights: { N: 1, P: 1 } }
    ]
  },
  {
    id: 'q7',
    text: 'How do they react when the walk route changes?',
    choices: [
      { id: 'a', label: 'Enjoys it and shows a lot of excitement.', weights: { N: 2, P: 1 } },
      { id: 'b', label: 'Is a bit hesitant at first but adapts soon.', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Gets stressed or refuses to walk.', weights: { S: 2, J: 2, F: 1 } }
    ]
  },
  {
    id: 'q8',
    text: 'What is their reaction to a ball or toy?',
    choices: [
      { id: 'a', label: 'Immediately grabs it and starts playing.', weights: { E: 1, P: 1 } },
      { id: 'b', label: 'Sniffs and examines it before playing.', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Doesn\'t show much interest.', weights: { I: 1, T: 1 } }
    ]
  },
  {
    id: 'q9',
    text: 'How do they react to a new toy for the first time?',
    choices: [
      { id: 'a', label: 'Immediately bites and explores it.', weights: { E: 1, P: 2 } },
      { id: 'b', label: 'Carefully observes it before playing with it.', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Rarely uses it.', weights: { I: 1, J: 1 } }
    ]
  },
  {
    id: 'q10',
    text: 'What is their preferred play style?',
    choices: [
      { id: 'a', label: 'High-energy games like tug-of-war or fetch.', weights: { E: 1, P: 1 } },
      { id: 'b', label: 'Thoughtful games like puzzles or nose work.', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Quiet affection and physical touch.', weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: 'q11',
    text: 'How do they react to loud noises (doorbell, fireworks)?',
    choices: [
      { id: 'a', label: 'Runs towards the source of the sound to investigate.', weights: { E: 1, N: 1 } },
      { id: 'b', label: 'Pauses to assess the situation.', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Barks or hides.', weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: 'q12',
    text: 'When another dog barks loudly, how do they react?',
    choices: [
      { id: 'a', label: 'Acts assertively or approaches them.', weights: { E: 1, T: 1 } },
      { id: 'b', label: 'Looks to you for guidance on what to do.', weights: { J: 1, T: 1 } },
      { id: 'c', label: 'Avoids the other dog and retreats.', weights: { I: 1, F: 1 } }
    ]
  },
  {
    id: 'q13',
    text: 'What is their reaction when you leave the house?',
    choices: [
      { id: 'a', label: 'Watches for a bit, then goes about their own business.', weights: { I: 1, T: 1 } },
      { id: 'b', label: 'Waits by the door until you return.', weights: { F: 1, J: 1 } },
      { id: 'c', label: 'Whines or scratches at the door/furniture.', weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: 'q14',
    text: 'If left alone for a long time, what do they do?',
    choices: [
      { id: 'a', label: 'Finds a toy or puzzle to occupy themselves.', weights: { N: 1, P: 1 } },
      { id: 'b', label: 'Stays in their usual spot and rests.', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Gets stressed and engages in destructive behavior.', weights: { E: 1, F: 1 } }
    ]
  },
  {
    id: 'q15',
    text: 'How do they spend their time when relaxing in a new environment?',
    choices: [
      { id: 'a', label: 'Lies down comfortably and observes their surroundings.', weights: { N: 1, P: 1 } },
      { id: 'b', label: 'Stays on their mat or in their kennel.', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Stays very close to you.', weights: { F: 1, J: 1 } }
    ]
  },
  {
    id: 'q16',
    text: 'How quickly do they respond when you call their name?',
    choices: [
      { id: 'a', label: 'Comes immediately.', weights: { E: 1, F: 1 } },
      { id: 'b', label: 'Comes after you call them a second time.', weights: { I: 1, J: 1 } },
      { id: 'c', label: 'Comes more reliably if there\'s a treat involved.', weights: { T: 1, P: 1 } }
    ]
  },
  {
    id: 'q17',
    text: 'When you\'re in a bad mood, what does your dog do?',
    choices: [
      { id: 'a', label: 'Comes to your side quietly and leans on you.', weights: { I: 1, F: 1 } },
      { id: 'b', label: 'Tries to cheer you up by bringing a toy or getting you to play.', weights: { E: 1, N: 1 } },
      { id: 'c', label: 'Keeps their distance and watches you carefully.', weights: { T: 1, J: 1 } }
    ]
  },
  {
    id: 'q18',
    text: 'What does your dog do when you\'re busy?',
    choices: [
      { id: 'a', label: 'Entertains themselves or rests quietly.', weights: { I: 1, T: 1 } },
      { id: 'b', label: 'Tries to get your attention.', weights: { E: 1, F: 1 } },
      { id: 'c', label: 'Stays on their mat or in their designated spot.', weights: { J: 1, S: 1 } }
    ]
  },
  {
    id: 'q19',
    text: 'Where do they prefer to be when you\'re sitting down?',
    choices: [
      { id: 'a', label: 'Close by, leaning against you.', weights: { F: 1, I: 1 } },
      { id: 'b', label: 'Nearby, but moves around freely.', weights: { E: 1, P: 1 } },
      { id: 'c', label: 'In their own dedicated spot or bed.', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q20',
    text: 'Do they enjoy physical affection?',
    choices: [
      { id: 'a', label: 'Actively seeks out cuddles and pets.', weights: { F: 2 } },
      { id: 'b', label: 'Only when they\'re in the mood.', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Only tolerates brief touches.', weights: { T: 1, I: 1 } }
    ]
  },
  {
    id: 'q21',
    text: 'How do they react to basic commands (sit, stay)?',
    choices: [
      { id: 'a', label: 'Follows clear commands well.', weights: { S: 1, J: 2 } },
      { id: 'b', label: 'Responds better with a reward.', weights: { F: 1, P: 1 } },
      { id: 'c', label: 'Prefers playing over following commands.', weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: 'q22',
    text: 'What\'s their attitude toward training without a reward?',
    choices: [
      { id: 'a', label: 'Still performs the command perfectly.', weights: { J: 1, T: 1 } },
      { id: 'b', label: 'Shows a noticeable drop in motivation.', weights: { P: 1, T: 1 } },
      { id: 'c', label: 'Loses interest completely.', weights: { P: 2 } }
    ]
  },
  {
    id: 'q23',
    text: 'When you repeat the same command, how do they react?',
    choices: [
      { id: 'a', label: 'Continues to perform it consistently.', weights: { S: 1, J: 1 } },
      { id: 'b', label: 'Gets bored with the repetition.', weights: { N: 1, P: 1 } },
      { id: 'c', label: 'Tries to invent a new trick instead.', weights: { N: 1, P: 2 } }
    ]
  },
  {
    id: 'q24',
    text: 'How quickly do they learn new tricks?',
    choices: [
      { id: 'a', label: 'Understands and follows quickly.', weights: { N: 1, T: 1 } },
      { id: 'b', label: 'Learns after a few repetitions.', weights: { S: 1, J: 1 } },
      { id: 'c', label: 'Needs a lot of patient, consistent repetition.', weights: { S: 1, J: 1, I: 1 } }
    ]
  },
  {
    id: 'q25',
    text: 'How do they react when the leash is pulled (leash response)?',
    choices: [
      { id: 'a', label: 'Immediately adjusts their speed and pace.', weights: { J: 1, T: 1 } },
      { id: 'b', label: 'Reacts to the leash but is easily distracted by other things.', weights: { P: 1, N: 1 } },
      { id: 'c', label: 'Maintains a steady tension on the leash, walking calmly.', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q26',
    text: 'What is their favorite spot at home?',
    choices: [
      { id: 'a', label: 'Near you (next to the sofa or at your feet).', weights: { F: 1, I: 1 } },
      { id: 'b', label: 'A vantage point (by the window/balcony).', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Their own bed or a specific fixed spot.', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q27',
    text: 'How do they react to new food or treats?',
    choices: [
      { id: 'a', label: 'Eats it immediately with great curiosity.', weights: { E: 1, P: 1 } },
      { id: 'b', label: 'Sniffs and inspects it before eating.', weights: { N: 1, T: 1 } },
      { id: 'c', label: 'Prefers their usual food.', weights: { S: 1, J: 1 } }
    ]
  },
  {
    id: 'q28',
    text: 'How do they react to other pets (cats, birds, etc.)?',
    choices: [
      { id: 'a', label: 'Tries to be friends and approaches them easily.', weights: { E: 1, F: 1 } },
      { id: 'b', label: 'Respects their space and keeps a distance.', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Gets excited and tries to chase them.', weights: { E: 1, P: 1 } }
    ]
  },
  {
    id: 'q29',
    text: 'How do they react when you pet another dog?',
    choices: [
      { id: 'a', label: 'Gets jealous and tries to get in between you and the other dog.', weights: { E: 1, F: 1 } },
      { id: 'b', label: 'Watches from a distance quietly.', weights: { I: 1, T: 1 } },
      { id: 'c', label: 'Focuses on your command or signal.', weights: { J: 1, T: 1 } }
    ]
  },
  {
    id: 'q30',
    text: 'What\'s their most active time of day?',
    choices: [
      { id: 'a', label: 'Morning/early evening (in sync with walk times).', weights: { J: 1, S: 1 } },
      { id: 'b', label: 'Short bursts of energy throughout the day.', weights: { P: 1, N: 1 } },
      { id: 'c', label: 'It depends on your activity.', weights: { F: 1, I: 1 } }
    ]
  },
  {
    id: 'q31',
    text: 'On a walk, do they prefer familiar or new paths?',
    choices: [
      { id: 'a', label: 'They feel most comfortable on familiar paths.', weights: { S: 2 } },
      { id: 'b', label: 'They like familiar paths but enjoy a new one occasionally.', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'They get excited and lead the way on new paths.', weights: { N: 2 } }
    ]
  },
  {
    id: 'q32',
    text: 'What are their toy preferences?',
    choices: [
      { id: 'a', label: 'They love their familiar, well-used toys the most.', weights: { S: 2 } },
      { id: 'b', label: 'They play with both old and new toys depending on the mood.', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'They\'re more interested in new toys.', weights: { N: 2 } }
    ]
  },
  {
    id: 'q33',
    text: 'How do they react to new flavors of treats or food?',
    choices: [
      { id: 'a', label: 'They eat their usual flavor most readily.', weights: { S: 2 } },
      { id: 'b', label: 'They\'ll try new flavors but prefer their usual one.', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'They get excited and are more interested in new treats.', weights: { N: 2 } }
    ]
  },
  {
    id: 'q34',
    text: 'What\'s their preferred training style?',
    choices: [
      { id: 'a', label: 'They perform the same commands consistently.', weights: { S: 2 } },
      { id: 'b', label: 'They like to mix it up, with some repetition and some variety.', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'They love learning new tricks and enjoy change.', weights: { N: 2 } }
    ]
  },
  {
    id: 'q35',
    text: 'How do they behave in a new location (vet, groomer, etc.)?',
    choices: [
      { id: 'a', label: 'Sits in one spot and smells every detail around them.', weights: { S: 2 } },
      { id: 'b', label: 'Wanders around a bit but quickly adapts.', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Actively explores the entire space.', weights: { N: 2 } }
    ]
  },
  {
    id: 'q36',
    text: 'How do they react to changes in your behavior?',
    choices: [
      { id: 'a', label: 'Notices small changes like your tone of voice or walking speed.', weights: { S: 2 } },
      { id: 'b', label: 'Sometimes notices and sometimes doesn\'t.', weights: { S: 1, N: 1 } },
      { id: 'c', label: 'Only reacts to big changes in mood or atmosphere.', weights: { N: 2 } }
    ]
  }
];
