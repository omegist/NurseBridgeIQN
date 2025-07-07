// Server Component – no "use client"
import { notFound } from "next/navigation";
import { flashcardTopics } from "@/data/flashcards";
import { FlashcardClient } from "@/components/flashcards/FlashcardClient";

/** Tell Next.js to pre‑render a page for every topic */
export function generateStaticParams() {
  return flashcardTopics.map((t) => ({ topicId: t.id }));
}

/**
 * Next 15 passes `params` wrapped in a Promise, so:
 *   1) the function is async
 *   2) we await that promise to get the real object
 */
export default async function FlashcardTopicPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params; // unwrap the promise

  const topic = flashcardTopics.find((t) => t.id === topicId);
  if (!topic) notFound();

  return <FlashcardClient topic={topic} />;
}
