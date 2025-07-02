export interface LeaderboardUser {
  id: number;
  name: string;
  email: string;
  score: number;
  avatarUrl: string;
}

export const users: LeaderboardUser[] = [
  { id: 1, name: 'Ava Williams', email: 'ava.w@example.com', score: 9850, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 2, name: 'Liam Johnson', email: 'liam.j@example.com', score: 9700, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 3, name: 'Olivia Smith', email: 'olivia.s@example.com', score: 9600, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 4, name: 'Noah Brown', email: 'noah.b@example.com', score: 9450, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 5, name: 'Emma Jones', email: 'emma.j@example.com', score: 9200, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 6, name: 'Oliver Garcia', email: 'oliver.g@example.com', score: 8900, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 7, name: 'Sophia Miller', email: 'sophia.m@example.com', score: 8750, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 8, name: 'Elijah Davis', email: 'elijah.d@example.com', score: 8500, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 9, name: 'Isabella Rodriguez', email: 'isabella.r@example.com', score: 8250, avatarUrl: 'https://placehold.co/40x40.png' },
  { id: 10, name: 'James Wilson', email: 'james.w@example.com', score: 8000, avatarUrl: 'https://placehold.co/40x40.png' },
];
