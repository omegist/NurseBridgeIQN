
import { notFound } from 'next/navigation';
import { flashcardTopics } from '@/data/flashcards';
import { FlashcardClient } from '@/components/flashcards/FlashcardClient';
import type { FlashcardTopic } from '@/lib/types';

// Generate static paths for all topics that have flashcards
export function generateStaticParams() {
  return flashcardTopics.map((topic) => ({
    topicId: topic.id,
  }));
}

// Fetch the combined data for a specific topic
function getFlashcardTopicData(topicId: string): FlashcardTopic | undefined {
 return flashcardTopics.find((topic) => topic.id === topicId);
}

export default async function FlashcardTopicPage({ 
  params 
}: { 
  params: { topicId: string } 
}) {
  const topicWithIcon = getFlashcardTopicData(params.topicId);

  if (!topicWithIcon) {
    notFound();
  }

  const { icon, ...topic } = topicWithIcon;

  return <FlashcardClient topic={topic} />;
}
