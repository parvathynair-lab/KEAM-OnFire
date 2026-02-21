
import { Quiz } from './types';

export const MOCK_QUIZZES: Quiz[] = [
  {
    id: 'pyq-2023-math',
    title: 'KEAM 2023 - Mathematics Paper I',
    year: 2023,
    subject: 'Mathematics',
    durationMinutes: 60,
    questions: [
      {
        id: 'q1',
        text: 'If A and B are symmetric matrices of the same order, then AB – BA is a:',
        options: ['Skew-symmetric matrix', 'Symmetric matrix', 'Zero matrix', 'Identity matrix'],
        correctAnswer: 0,
        subject: 'Mathematics',
        difficulty: 'Medium'
      },
      {
        id: 'q2',
        text: 'The value of the integral ∫(sin²x) dx from 0 to π/2 is:',
        options: ['π/4', 'π/2', '1', '0'],
        correctAnswer: 0,
        subject: 'Mathematics',
        difficulty: 'Easy'
      }
    ]
  },
  {
    id: 'pyq-2022-phy',
    title: 'KEAM 2022 - Physics & Chemistry',
    year: 2022,
    subject: 'Physics',
    durationMinutes: 45,
    questions: [
      {
        id: 'p1',
        text: 'The dimensional formula for gravitational constant G is:',
        options: ['[M⁻¹L³T⁻²]', '[M L³T⁻²]', '[M⁻¹L²T⁻²]', '[M⁻¹L³T⁻¹]'],
        correctAnswer: 0,
        subject: 'Physics',
        difficulty: 'Easy'
      }
    ]
  }
];

export const THEME = {
  primary: '#FF5722',
  secondary: '#7E57C2',
  dark: '#121212',
  surface: '#1E1E1E'
};

export const KEAM_CHAPTERS = {
  Mathematics: [
    'Sets, Relations and Functions',
    'Complex Numbers',
    'Quadratic Equations',
    'Matrices and Determinants',
    'Permutations and Combinations',
    'Mathematical Induction',
    'Binomial Theorem',
    'Sequences and Series',
    'Limits, Continuity and Differentiability',
    'Differential Equations',
    'Vector Algebra',
    'Three Dimensional Geometry',
    'Probability',
    'Trigonometry',
    'Statistics'
  ],
  Physics: [
    'Units and Measurements',
    'Kinematics',
    'Laws of Motion',
    'Work, Energy and Power',
    'Rotational Motion',
    'Gravitation',
    'Properties of Solids and Liquids',
    'Thermodynamics',
    'Oscillations and Waves',
    'Electrostatics',
    'Current Electricity',
    'Magnetic Effects of Current and Magnetism',
    'Electromagnetic Induction',
    'Optics',
    'Dual Nature of Matter and Radiation',
    'Atoms and Nuclei',
    'Electronic Devices'
  ],
  Chemistry: [
    'Basic Concepts of Chemistry',
    'States of Matter',
    'Atomic Structure',
    'Chemical Bonding',
    'Chemical Thermodynamics',
    'Solutions',
    'Equilibrium',
    'Redox Reactions and Electrochemistry',
    'Chemical Kinetics',
    'Surface Chemistry',
    'Classification of Elements',
    'Hydrogen',
    's-Block Elements',
    'p-Block Elements',
    'd and f Block Elements',
    'Coordination Compounds',
    'Organic Chemistry - Basic Principles',
    'Hydrocarbons',
    'Polymers',
    'Biomolecules'
  ]
};
