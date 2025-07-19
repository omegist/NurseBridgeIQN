"use client";

import { topics } from "@/data/topics";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn, iconMap } from "@/lib/utils";
import {
  Clock,
  BookOpen,
  FlaskConical,
  RotateCw,
  Check,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // ✅ FIXED: Import db directly
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

export default function TopicsPage() {
  const { user } = useAuth();
  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        const progressData: Record<string, number> = {};

        const docSnapshots = await Promise.all(
          topics.map((topic) =>
            getDoc(doc(db, "users", user.uid, "quizProgress", topic.id)) // ✅ using `db` directly
          )
        );

        docSnapshots.forEach((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            const topicId = data.topicId;
            const topic = topics.find((t) => t.id === topicId);
            if (topic) {
              if (data.completed === true) {
                progressData[topicId] = 100;
              } else {
                const userAnswers = data.userAnswers || [];
                const totalQuestions = topic.questionCount || 0;
                if (totalQuestions > 0) {
                  const answeredCount = userAnswers.filter(
                    (answer: null | number) => answer !== null
                  ).length;
                  const percentage = (answeredCount / totalQuestions) * 100;
                  progressData[topicId] = percentage;
                }
              }
            }
          }
        });

        setTopicProgress(progressData);
      } catch (error) {
        console.error(
          "Error fetching topic progress. Likely a Firestore security rules issue.",
          error
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchProgress();
  }, [user]);

  // 🔽 [rest of the render code remains unchanged] 🔽
  // ...
}

