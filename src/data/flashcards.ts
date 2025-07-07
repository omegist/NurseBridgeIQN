import type { FlashcardTopic, Flashcard } from '@/lib/types';
import { topics } from './topics';

// Define an interface for raw card entries before transformation
interface RawFlashcardSet {
  id: string;
  cards: {
    term: string;
    definition: string;
  }[];
}

// Your raw flashcard data (term + definition)
const rawFlashcardData: RawFlashcardSet[] = [
  {
    id: 'fundamentals',
    cards: [
      { term: 'Pressure Injury: First Intervention', definition: 'Reposition the patient off the affected area. Relieving pressure is the key first step to prevent progression.' },
      { term: 'Airborne Precautions: Key PPE', definition: 'An N95 respirator is required for diseases like pulmonary tuberculosis to filter airborne particles.' },
    ],
  },
  {
    id: 'pharmacology',
    cards: [
        { term: 'Warfarin (Coumadin) Antidote', definition: 'Vitamin K is the antidote for warfarin overdose.' },
        { term: 'Digoxin Therapeutic Range', definition: 'The therapeutic range for digoxin is typically 0.5-2.0 ng/mL. Levels above this increase the risk of toxicity.' },
    ],
  },
  {
    id: 'medical-surgical',
    cards: [
        { term: 'Classic Sign of Appendicitis', definition: "Rebound tenderness at McBurney's point (located in the right lower quadrant of the abdomen)." },
        { term: 'COPD: Primary Nursing Goal', definition: 'Improve gas exchange by maintaining a patent airway and providing appropriate oxygen therapy.' },
    ],
  },
  {
    id: 'mental-health',
    cards: [
        { term: 'Therapeutic Communication', definition: 'Using techniques like open-ended questions and active listening to build rapport and facilitate patient expression.' },
        { term: 'Signs of Lithium Toxicity', definition: 'Early signs include fine hand tremors, nausea, vomiting, and diarrhea. Severe signs include ataxia and confusion.' },
    ],
  },
  {
    id: 'maternity-paediatric',
    cards: [
        { term: 'APGAR Score', definition: "A quick assessment of a newborn's health at 1 and 5 minutes after birth, evaluating Appearance, Pulse, Grimace, Activity, and Respiration." },
        { term: 'Postpartum Hemorrhage Priority Action', definition: 'Firmly massage the uterine fundus to stimulate contraction and control bleeding.' },
    ],
  },
  {
    id: 'maternity-child-quest',
    cards: [
      { term: 'What is the APGAR score used for?', definition: 'Rapid assessment of the newborn’s transition to extra‑uterine life at 1 and 5 minutes after birth.' },
      { term: 'Normal birth weight range for a term newborn?', definition: '2.5 kg – 4 kg.' },
    ],
  },
  {
    id: 'nz-nursing-context',
    cards: [
      { term: 'Define cultural safety in New Zealand nursing practice.', definition: 'Providing care that is respectful of and responsive to the cultural identity and needs of the person.' },
      { term: 'What is Te Tiriti o Waitangi?', definition: 'The Treaty of Waitangi, New Zealand’s founding document between Māori and the Crown.' },
    ],
  },
  {
    id: 'most-repeated-questions',
    cards: [
      { term: 'What is the normal arterial blood pH?', definition: '7.35 – 7.45.' },
      { term: 'Define tachycardia.', definition: 'A heart rate greater than 100 beats per minute in an adult.' },
    ],
  },
  {
    id: 'most-repeated-questions-b',
    cards: [
      { term: 'Normal serum sodium level?', definition: '135 – 145 mEq/L.' },
      { term: 'Primary clinical use of insulin?', definition: 'To lower elevated blood glucose in patients with diabetes mellitus.' },
    ],
  },
  {
    id: 'mental-health-iqn',
    cards: [
      { term: 'What does CBT stand for?', definition: 'Cognitive Behavioral Therapy.' },
      { term: 'Define bipolar disorder.', definition: 'A mood disorder with alternating episodes of depression and mania or hypomania.' },
    ],
  },
  {
    id: 'cardiology-quest-iqn',
    cards: [
      { term: 'Function of the heart valves?', definition: 'Ensure unidirectional flow of blood through the heart chambers.' },
      { term: 'What is bradycardia?', definition: 'A heart rate less than 60 beats per minute in an adult.' },
    ],
  },
  {
    id: 'gastro-quest-iqn',
    cards: [
      { term: 'Primary function of the liver?', definition: 'Metabolism of nutrients, detoxification, and bile production.' },
      { term: 'What is GERD?', definition: 'Gastro‑oesophageal reflux disease—chronic reflux of stomach acid into the oesophagus.' },
    ]
  }
];


// Convert raw cards to Flashcard[] (with prompt, answer, and id)
function convertToFlashcards(rawCards: { term: string; definition: string }[], topicId: string): Flashcard[] {
  return rawCards.map((card, index) => ({
    id: `${topicId}-${index}`,
    prompt: card.term,
    answer: card.definition,
  }));
}

// Final export with FlashcardTopic[]
export const flashcardTopics: FlashcardTopic[] = rawFlashcardData.map((fd) => {
  const topicInfo = topics.find((t) => t.id === fd.id);

  if (!topicInfo) {
    console.warn(`Warning: Quiz topic info not found for flashcard set with id: ${fd.id}. Using default values.`);
    const flashcards = convertToFlashcards(fd.cards, fd.id);

    return {
      id: fd.id,
      name: `Flashcard Topic ${fd.id}`,
      description: 'No description available.',
      icon: 'bookMarked', // Default icon
      flashcards,
      flashcardCount: flashcards.length,
    };
  }

  const flashcards = convertToFlashcards(fd.cards, fd.id);

  return {
    id: fd.id,
    name: topicInfo.name,
    description: topicInfo.description,
    icon: topicInfo.icon,
    flashcards,
    flashcardCount: flashcards.length,
  };
});
