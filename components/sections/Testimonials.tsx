'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { TESTIMONIAL_IMAGES } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

export default function Testimonials() {
  // State untuk Lightbox
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // State untuk Slider
  // Kita menduplikasi data agar terlihat lebih banyak untuk demo slider
  const sliderData = [...TESTIMONIAL_IMAGES, ...TESTIMONIAL_IMAGES];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Cek kemampuan scroll saat slide berubah
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Toleransi 1px untuk pembulatan
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      // Scroll sejauh lebar container (1 halaman slide) atau lebar item
      const scrollAmount =
        direction === 'left' ? -clientWidth / 2 : clientWidth / 2;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });

      // Tunggu animasi scroll selesai baru cek tombol lagi
      setTimeout(checkScrollButtons, 500);
    }
  };

  return (
    <section
      id='testimoni'
      className='py-24 bg-slate-50 overflow-hidden relative'>
      <Container>
        <div className='mb-12 text-center md:text-left'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Kata Mereka yang Telah Sukses
          </h2>
          <p className='text-slate-600 max-w-2xl'>
            Bukti nyata dari ribuan mahasiswa yang telah kami bantu. Geser untuk
            melihat lebih banyak cerita sukses mereka.
          </p>
        </div>

        {/* --- SLIDER CONTAINER START --- */}
        <div className='relative group'>
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 bg-white text-slate-900 p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex'
              aria-label='Previous slide'>
              <ChevronLeft size={24} />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 bg-white text-slate-900 p-3 rounded-full shadow-xl border border-slate-100 hover:bg-orange-500 hover:text-white transition-all hidden md:flex'
              aria-label='Next slide'>
              <ChevronRight size={24} />
            </button>
          )}

          {/* Scrollable Area */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className='flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scrollbar-hide px-4 -mx-4'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {sliderData.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className='snap-center shrink-0 w-[280px] md:w-[320px] lg:w-[350px]'>
                <div
                  className='relative aspect-[9/16] bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer group/card hover:shadow-2xl transition-all duration-300'
                  onClick={() => setLightboxImage(src)}>
                  {/* Overlay Hover Icon */}
                  <div className='absolute inset-0 bg-slate-900/0 group-hover/card:bg-slate-900/20 transition-all z-10 flex items-center justify-center opacity-0 group-hover/card:opacity-100'>
                    <div className='bg-white/90 p-3 rounded-full text-slate-900 shadow-lg backdrop-blur-sm'>
                      <ZoomIn size={24} />
                    </div>
                  </div>

                  {/* Image */}
                  <Image
                    src={src}
                    alt={`Testimoni ${idx + 1}`}
                    fill
                    className='object-cover object-top'
                    sizes='(max-width: 768px) 280px, 350px'
                  />

                  {/* Caption (Optional) */}
                  <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent text-white opacity-0 group-hover/card:opacity-100 transition-opacity'>
                    <p className='text-sm font-medium'>
                      Klik untuk memperbesar
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* --- SLIDER CONTAINER END --- */}
      </Container>

      {/* --- LIGHTBOX MODAL START --- */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[60] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8'
            onClick={() => setLightboxImage(null)} // Close on click outside
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className='absolute top-6 right-6 text-white/80 hover:text-white bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full transition-colors z-50'>
              <X size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='relative w-full max-w-md max-h-[90vh] aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl'
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <Image
                src={lightboxImage}
                alt='Testimoni Detail'
                fill
                className='object-contain'
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- LIGHTBOX MODAL END --- */}
    </section>
  );
}
