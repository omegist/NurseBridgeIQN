
"use client";

import { tests } from "@/data/tests";
import { TestsClient } from "@/components/test/TestsClient";
import { Header } from "@/components/layout/Header";

export default function PartBPage() {
  return (
    <>
      <Header />
      <TestsClient tests={tests.partB} />
    </>
  );
}
