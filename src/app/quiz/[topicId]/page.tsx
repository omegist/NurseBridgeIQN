// app/quiz/[topicId]/page.tsx
import { notFound } from 'next/navigation';
import { topics } from '@/data/topics';
import { QuizClient } from '@/components/quiz/QuizClient';
import type { Topic, Question } from '@/lib/types';

/* ---------- generate static params ---------- */
export async function generateStaticParams() {
  return topics.map((topic) => ({
    topicId: topic.id,
  }));
}

/* ---------- helper ---------- */
async function getTopicData(
  topicId: string,
): Promise<Omit<Topic, 'icon'> | null> {
  const topicInfo = topics.find(t => t.id === topicId);
  if (!topicInfo) return null;

  try {
    const { questions } = await import(`@/data/questions/${topicId}`);
    const { icon, ...serialisableTopic } = topicInfo;
    return {
      ...serialisableTopic,
      questions: questions as Question[],
    };
  } catch (err) {
    console.error(`❌ Failed to load questions for ${topicId}`, err);
    return null;
  }
}

/* ---------- page component ---------- */
export default async function QuizTopicPage({ 
  params 
}: { 
  params: Promise<{ topicId: string }> 
}) {
  const { topicId } = await params;
  const topic = await getTopicData(topicId);
  if (!topic) notFound();

  return <QuizClient topic={topic} />;
}










