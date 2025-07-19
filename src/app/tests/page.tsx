import { tests } from "@/data/tests";
import { TestsClient } from "@/components/test/TestsClient";

export default function TestsPage() {
  return <TestsClient tests={tests} />;
}
