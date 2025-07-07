// src/app/flashcards/[topicId]/page.tsx
// Server Component – don’t add "use client"

import { notFound } from "next/navigation";
import { flashcardTopics } from "@/data/flashcards";
import { FlashcardClient } from "@/components/flashcards/FlashcardClient";
import type { SerializableFlashcardTopic } from "@/lib/types";

export function generateStaticParams() {
  return flashcardTopics.map(t => ({ topicId: t.id }));
}

export default async function FlashcardTopicPage({
  // 🔑  NO explicit type here — let Next provide it
  params
}: any) {
  // (optional) narrow the type for IDE help
  const { topicId } = params as { topicId: string };

  const meta = flashcardTopics.find(t => t.id === topicId);
  if (!meta) return notFound();

  const { default: flashcards } = (await import(
    `@/data/flashcards-content/${meta.id}.json`
  )) as { default: SerializableFlashcardTopic["flashcards"] };

  const topic: SerializableFlashcardTopic = { ...meta, flashcards };

  return <FlashcardClient topic={topic} />;
}
