import { notFound } from 'next/navigation';
import { flashcardTopics } from '@/data/flashcards'; // Correct import for flashcards data
import { FlashcardClient } from '@/components/flashcards/FlashcardClient';
import type { FlashcardTopic } from '@/lib/types';

interface FlashcardTopicPageProps {
  params: Promise<{
    topicId: string;
  }>;
  // If you also need searchParams, you can add them here, also as a Promise:
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export function generateStaticParams() {
  return flashcardTopics.map((topic) => ({
    topicId: topic.id,
  }));
}

function getFlashcardTopicData(topicId: string): FlashcardTopic | undefined {
  return flashcardTopics.find((topic) => topic.id === topicId);
}

export default async function FlashcardTopicPage({ 
  params 
}: FlashcardTopicPageProps) {
  const resolvedParams = await params; // Await params for Next.js 15
  const topicWithIcon = getFlashcardTopicData(resolvedParams.topicId);

  if (!topicWithIcon) {
    notFound();
  }

  const { icon, ...topic } = topicWithIcon;

  return <FlashcardClient topic={topic} />;
}