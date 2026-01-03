import Image from 'next/image';
import { Container } from '../ui/Container';
import { ABOUT_CONTENT } from '@/data/content';

export default function About() {
  return (
    <section
      id='tentang-kami'
      className='py-20 bg-white'>
      <Container>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Image */}
          <div className='relative w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src='/images/tentang-kami.jpg'
              alt='Tentang LulusBareng'
              fill
              className='object-cover hover:scale-105 transition-transform duration-500'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>

          {/* Content */}
          <div>
            <div className='inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-900 font-semibold text-sm mb-4'>
              Siapa Kami?
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
              {ABOUT_CONTENT.title}
            </h2>
            <div className='prose prose-lg text-slate-600 leading-relaxed whitespace-pre-line'>
              {ABOUT_CONTENT.description}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
