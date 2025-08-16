"use client";

import { tests } from "@/data/tests";
import { TestsClient } from "@/components/test/TestsClient";
import type { Test } from "@/lib/types";

// Filter tests to only include Part B (Tests 1-7 for now)
const partBTests: Test[] = tests.filter(test => test.id.startsWith("test-"));

export default function PartBPage() {
  return <TestsClient tests={partBTests} />;
}
