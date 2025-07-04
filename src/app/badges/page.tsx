"use client"

// The Badges feature has been removed to resolve persistent data-fetching issues.
export default function BadgesPage() {
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
  return null;
}
