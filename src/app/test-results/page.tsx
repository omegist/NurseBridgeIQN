import { TestResultsClient } from "@/components/test/TestResultsClient";
import { Suspense } from "react";

export default function TestResultsPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div></div>}>
            <TestResultsClient />
        </Suspense>
    )
}
