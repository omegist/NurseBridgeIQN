
import { notFound } from 'next/navigation';
import { flashcardTopics } from '@/data/flashcards';
import { FlashcardClient } from '@/components/flashcards/FlashcardClient';
import type { FlashcardTopic } from '@/lib/types';
import { topics } from '@/data/topics';

// Generate static paths for all topics that have flashcards
export async function generateStaticParams() {
  return flashcardTopics.map((topic) => ({
    topicId: topic.id,
  }));
}

// Fetch the combined data for a specific topic
function getFlashcardTopicData(topicId: string): FlashcardTopic | null {
  const flashcardSet = flashcardTopics.find(t => t.id === topicId);
  
  if (!flashcardSet) {
    return null;
  }

  // Find the corresponding base topic info to get the icon and description
  const topicInfo = topics.find(t => t.id === topicId);
  
  if (!topicInfo) return null;

  return {
    id: topicInfo.id,
    name: topicInfo.name,
    icon: topicInfo.icon,
    description: topicInfo.description,
    cards: flashcardSet.cards,
  };
}

export default async function FlashcardTopicPage({ 
  params 
}: { 
  params: { topicId: string } 
}) {
  const topic = getFlashcardTopicData(params.topicId);

  if (!topic) {
    notFound();
  }

  return <FlashcardClient topic={topic} />;
}
