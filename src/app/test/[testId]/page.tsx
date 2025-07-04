// app/test/[testId]/page.tsx
import { notFound } from 'next/navigation';
import { tests } from '@/data/tests';
import { TestClient } from '@/components/test/TestClient';
import type { Test } from '@/lib/types';

export async function generateStaticParams() {
  return tests.map((test) => ({
    testId: test.id,
  }));
}

async function getTestData(testId: string): Promise<Test | null> {
  const testData = tests.find(t => t.id === testId);
  if (!testData) return null;
  return testData;
}

export default async function TestPage({ 
  params 
}: { 
  params: { testId: string } 
}) {
  const { testId } = params;
  const test = await getTestData(testId);

  if (!test) {
    notFound();
  }

  return <TestClient test={test} />;
}
