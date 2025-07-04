"use client";

// The Leaderboard feature has been removed to resolve persistent data-fetching issues.
export default function LeaderboardPage() {
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
  return null;
}
