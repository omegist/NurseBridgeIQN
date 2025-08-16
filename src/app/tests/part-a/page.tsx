
"use client";

import { tests } from "@/data/tests";
import { TestsClient } from "@/components/test/TestsClient";

export default function PartAPage() {
  return <TestsClient tests={tests.partA} />;
}
