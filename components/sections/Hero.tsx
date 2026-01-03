import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { HERO_CONTENT, SITE_CONFIG } from '@/data/content';

export default function Hero() {
  return (
    // Section dengan tinggi minimal agar terlihat penuh di layar besar
    <section
      id='home'
      className='relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden'>
      {/* --- BACKGROUND IMAGE AREA START --- */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/hero.webp'
          alt={HERO_CONTENT.imageAlt}
          fill
          className='object-cover object-center'
          priority
        />
        {/* Overlay Putih Transparan agar teks terbaca jelas (sesuai screenshot) */}
        {/* Menggunakan gradient halus dari kiri ke kanan */}
        <div className='absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/60 lg:to-white/40'></div>
      </div>
      {/* --- BACKGROUND IMAGE AREA END --- */}

      <Container className='relative h-full'>
        <div className='grid lg:grid-cols-12 gap-8 w-full items-center'>
          {/* --- LEFT COLUMN: LOGO BESAR --- */}
          <div className='lg:col-span-5 flex flex-col items-start md:items-center lg:items-start mb-10 lg:mb-0'>
            <div className='flex items-center gap-4'>
              {/* Placeholder Ikon Logo Besar */}
              {/* GANTI src INI dengan ikon logo Anda, misal: "/images/logo-icon.png" */}
              <div className='relative w-96 h-96 shrink-0 drop-shadow-md'>
                <Image
                  src='/images/logo.png'
                  alt='LulusBareng Icon'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: HEADLINE & CTA --- */}
          {/* Offset ke kanan sedikit agar seimbang */}
          <div className='lg:col-span-7 lg:pl-12 flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 drop-shadow-sm'>
              {HERO_CONTENT.title}
            </h1>
            <p className='text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-sm'>
              {HERO_CONTENT.subtitle}
            </p>
            <Button
              href={`https://api.whatsapp.com/send/?phone=%2B${SITE_CONFIG.whatsapp}&text=Halo+Admin+LulusBareng+%2C+Saya+Mau+Konsultasi+Jasa+Skripsi%2FTesis&type=phone_number&app_absent=0`}
              target='_blank'
              aria-label='Hubungi kami via WhatsApp'
              // Menggunakan warna biru tua spesifik sesuai screenshot, bukan orange default
              className='w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all'>
              {HERO_CONTENT.ctaText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
