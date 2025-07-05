import { notFound } from 'next/navigation';
// IMPORTANT: Make sure these imports match your actual project structure.
// 'quizTopics' MUST be imported and NOT commented out here for the quiz page.
import { quizTopics } from '@/data/quizzes'; 
import { QuizClient } from '@/components/quiz/QuizClient'; 
import type { QuizTopic } from '@/lib/types'; 

interface QuizTopicPageProps {
  params: Promise<{
    topicId: string;
  }>; // params is a Promise for Next.js 15
  // If you also need searchParams, you can add them here, also as a Promise:
  // searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export function generateStaticParams() {
  return quizTopics.map((topic) => ({
    topicId: topic.id,
  }));
}

function getQuizTopicData(topicId: string): QuizTopic | undefined {
  return quizTopics.find((topic) => topic.id === topicId);
}

export default async function QuizTopicPage({ 
  params 
}: QuizTopicPageProps) {
  const resolvedParams = await params; // Await params for Next.js 15
  const quizData = getQuizTopicData(resolvedParams.topicId);

  if (!quizData) {
    notFound();
  }

  return <QuizClient topic={quizData} />; 
}











