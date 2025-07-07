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
      { term: 'Sterile Urine Sample (Catheter)', definition: 'Aspirate urine from the sampling port using sterile technique. Never collect from the drainage bag.' },
      { term: 'Contact Precautions: C. diff', definition: 'Requires gloves and gown. Spores are resistant to alcohol, so handwashing with soap and water is crucial.' },
      { term: 'Secondary Prevention Goal', definition: 'Focuses on early detection and prompt treatment of disease to halt its progression (e.g., health screenings).' },
      { term: 'Signs of Hypoxia (Early vs. Late)', definition: 'Early Sign: Restlessness and agitation. Late Sign: Cyanosis (bluish skin discoloration).' },
      { term: 'Most Reliable Fluid Status Indicator', definition: 'Daily weight. It is more accurate than intake/output records, BP, or urine color for tracking fluid balance.' },
      { term: 'Pressure Ulcer Staging: Stage 1', definition: 'Intact skin with non-blanchable redness over a bony prominence.' },
      { term: 'Glasgow Coma Scale (GCS)', definition: 'Assesses level of consciousness based on eye opening, verbal response, and motor response. A lower score indicates deeper coma.' },
      { term: 'Pain Assessment in Non-Verbal Patients', definition: 'Use a specialized tool like the PAINAD scale, which observes breathing, vocalization, facial expression, body language, and consolability.' },
      { term: 'Aseptic Technique Principle', definition: 'Sterile items must only be touched by other sterile items. Keep sterile fields above waist level and do not turn your back on them.' },
      { term: 'Prioritizing Care: ABCs', definition: 'Airway, Breathing, and Circulation are the top priorities in any emergency situation.' },
    ],
  },
  // 🔁 Add other categories here the same way
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
      icon: 'BookOpen',
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
