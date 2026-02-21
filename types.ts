
export enum UserRole {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
}

export interface Question {
  id: string;
  text: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Quiz {
  id: string;
  title: string;
  year: number;
  subject: string;
  questions: Question[];
  durationMinutes: number;
  totalAttempts?: number;
  isMockTest?: boolean;
}

export interface QuizAttempt {
  userId: string;
  userName: string;
  quizId: string;
  score: number; // Correct count
  incorrectCount: number;
  unattemptedCount: number;
  totalScore: number; // KEAM Calculated (+4/-1)
  totalQuestions: number;
  timestamp: number;
  answers: Record<string, number>;
  isMockTest?: boolean;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  text: string;
  timestamp: number;
  gifUrl?: string;
}

export interface Note {
  id: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  title: string;
  imageUrl: string;
  subject: string;
  timestamp: number;
}

export interface AppState {
  user: User | null;
  quizzes: Quiz[];
  attempts: QuizAttempt[];
  users: User[]; 
  comments: Comment[];
  notes: Note[];
}
