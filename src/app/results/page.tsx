import { ResultsClient } from "@/components/quiz/ResultsClient";
import { Suspense } from "react";

export default function ResultsPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div></div>}>
            <ResultsClient />
        </Suspense>
    )
}
