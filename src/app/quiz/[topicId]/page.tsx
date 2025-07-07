import { notFound } from 'next/navigation';
import { quizTopics } from '@/data/quizzes';
import { QuizClient } from '@/components/quiz/QuizClient';
import type { Topic } from '@/lib/types';

export function generateStaticParams() {
  return quizTopics.map((topic) => ({
    topicId: topic.id,
  }));
}

function getQuizTopicData(topicId: string): Topic | undefined {
  return quizTopics.find((topic) => topic.id === topicId);
}

export default async function QuizTopicPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;

  const quizData = getQuizTopicData(topicId);

  if (!quizData) {
    notFound();
  }

  return <QuizClient topic={quizData} />;
}











