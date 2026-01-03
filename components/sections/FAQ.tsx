'use client';
import { useState } from 'react';
import { Container } from '../ui/Container';
import { FAQ_CONTENT } from '@/data/content';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section
      id='faq'
      className='py-24 bg-white'>
      <Container>
        <h2 className='text-4xl font-bold text-center text-slate-900 mb-16'>
          FAQ
        </h2>

        <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto'>
          {FAQ_CONTENT.map((item, idx) => (
            <div
              key={idx}
              className='border border-slate-200 rounded-lg h-fit'>
              <button
                onClick={() => toggle(idx)}
                className='flex items-center justify-between w-full p-6 text-left bg-white rounded-lg hover:bg-slate-50 transition-colors'
                aria-expanded={activeIndex === idx}>
                <span className='font-semibold text-slate-900 pr-4'>
                  {item.question}
                </span>
                {activeIndex === idx ? (
                  <ChevronUp className='flex-shrink-0 text-orange-500' />
                ) : (
                  <ChevronDown className='flex-shrink-0 text-slate-400' />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className='overflow-hidden'>
                    <div className='p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100'>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
