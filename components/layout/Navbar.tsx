'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { SITE_CONFIG, NAVIGATION } from '@/data/content';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-2 group'>
            <div className='p-2 bg-slate-900 rounded-lg text-white group-hover:bg-orange-500 transition-colors'>
              <GraduationCap size={24} />
            </div>
            <span className='text-xl font-bold text-slate-900 tracking-tight'>
              LulusBareng<span className='text-orange-500'>.com</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors'>
                {item.name}
              </Link>
            ))}
            <Link
              href={`https://api.whatsapp.com/send/?phone=%2B${SITE_CONFIG.whatsapp}&text=Halo+Admin+LulusBareng+%2C+Saya+Mau+Konsultasi+Jasa+Skripsi%2FTesis&type=phone_number&app_absent=0`}
              target='_blank'
              className='px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all'>
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className='md:hidden p-2 text-slate-600'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white border-t border-gray-100 overflow-hidden'>
            <Container className='py-4 flex flex-col gap-4'>
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-base font-medium text-slate-700 py-2 border-b border-gray-50'
                  onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
