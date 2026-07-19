'use client';

import { motion } from 'motion/react';

interface Book {
  title: string;
  author: string;
  genre: string;
  tagline: string;
  icon: string;
}

const currentlyReading: Book[] = [
  {
    title: "Can't Hurt Me",
    author: 'David Goggins',
    genre: 'Memoir / Self-Discipline',
    tagline: 'Master your mind and defy the odds.',
    icon: '🔥',
  },
  {
    title: 'Unlimited Power',
    author: 'Anthony Robbins',
    genre: 'Personal Development',
    tagline: 'The science of personal achievement.',
    icon: '⚡',
  },
];

const booksRead: Book[] = [
  {
    title: 'I Am Malala',
    author: 'Malala Yousafzai & Christina Lamb',
    genre: 'Biography',
    tagline: 'One girl. One bullet. One indomitable voice for education.',
    icon: '✊',
  },
  {
    title: 'How to Stop Worrying and Start Living',
    author: 'Dale Carnegie',
    genre: 'Self-Help',
    tagline: 'Practical wisdom to break the cycle of anxiety and live fully.',
    icon: '🧘',
  },
  {
    title: 'Mindset',
    author: 'Carol S. Dweck',
    genre: 'Psychology',
    tagline: 'The power of believing you can improve — the growth mindset.',
    icon: '🧠',
  },
  {
    title: 'As a Man Thinketh',
    author: 'James Allen',
    genre: 'Philosophy',
    tagline: 'You are literally what you think — a timeless truth in 30 pages.',
    icon: '💭',
  },
  {
    title: '12th Fail',
    author: 'Anurag Pathak',
    genre: 'Biography / Inspiration',
    tagline: "Manoj Kumar Sharma's journey from failure to IPS — grit over circumstance.",
    icon: '🏆',
  },
];

function BookCard({ book, index, reading = false }: { book: Book; index: number; reading?: boolean }) {
  return (
    <motion.div
      className="glow-card p-5 flex flex-col gap-3 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-2xl">{book.icon}</span>
        {reading && (
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider shrink-0"
            style={{
              background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
              color: 'var(--accent)',
              border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
            }}
          >
            Reading
          </span>
        )}
      </div>

      <div>
        <h3 className="font-bold text-sm leading-snug mb-0.5 transition-colors group-hover:text-[var(--accent)]"
          style={{ color: 'var(--text-primary)' }}>
          {book.title}
        </h3>
        <p className="text-xs italic" style={{ color: 'var(--accent-2)' }}>{book.author}</p>
      </div>

      <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-faint)' }}>
        {book.tagline}
      </p>

      <div>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{ background: 'var(--tag-bg)', color: 'var(--text-muted)' }}
        >
          {book.genre}
        </span>
      </div>
    </motion.div>
  );
}

interface BookShelfProps {
  labelCurrently: string;
  labelFinished: string;
}

export default function BookShelf({ labelCurrently, labelFinished }: BookShelfProps) {
  return (
    <div className="space-y-10">
      {/* Currently reading */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
            {labelCurrently}
          </span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          <span className="text-xs animate-pulse" style={{ color: 'var(--accent)' }}>●</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {currentlyReading.map((book, i) => (
            <BookCard key={book.title} book={book} index={i} reading />
          ))}
        </div>
      </div>

      {/* Finished */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
            {labelFinished}
          </span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {booksRead.map((book, i) => (
            <BookCard key={book.title} book={book} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
