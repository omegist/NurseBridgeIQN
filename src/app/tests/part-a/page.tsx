
"use client";

import { tests } from "@/data/tests";
import { TestsClient } from "@/components/test/TestsClient";
import { Header } from "@/components/layout/Header";

export default function PartAPage() {
  return (
    <>
      <Header />
      <TestsClient tests={tests.partA} />
    </>
  );
}
