import { notFound } from 'next/navigation';
import { tests } from '@/data/tests';
import { TestClient } from '@/components/test/TestClient';
import type { Test } from '@/lib/types';

export function generateStaticParams() {
  return tests.map((test) => ({
    testId: test.id,
  }));
}

async function getTestData(testId: string): Promise<Test | null> {
  const testData = tests.find((t) => t.id === testId);
  return testData ?? null;
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const { testId } = await params;
  const test = await getTestData(testId);

  if (!test) {
    notFound();
  }

  return <TestClient test={test} />;
}

