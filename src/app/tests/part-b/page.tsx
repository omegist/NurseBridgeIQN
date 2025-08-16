
"use client";

import { tests } from "@/data/tests";
import { TestsClient } from "@/components/test/TestsClient";

export default function PartBPage() {
  return <TestsClient tests={tests.partB} />;
}
