import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { CONTACT_CTA_CONTENT, SITE_CONFIG } from '@/data/content';

export default function ContactCTA() {
  return (
    // UBAH 1: Section dibuat relative dengan tinggi minimum agar background image muncul penuh
    <section className='relative min-h-[450px] lg:min-h-[550px] flex items-center overflow-hidden mt-12 md:mt-0'>
      {/* UBAH 2: Area Background Image "Panjang" mengisi seluruh section */}
      <div className='absolute inset-0 -z-10'>
        {/* PENTING: Anda harus menggunakan gambar wide/panorama asli di mana
             wanita ada di sebelah kanan dan sisi kiri agak kosong/terang untuk teks.
         */}
        <Image
          // Placeholder ini mensimulasikan gambar lebar. Ganti dengan gambar asli Anda.
          src='/images/contact.jpg'
          alt={CONTACT_CTA_CONTENT.imageAlt || 'Hubungi Kami'}
          fill
          // 'object-cover' agar mengisi area.
          // 'object-[75%_center]' atau 'object-right' membantu menjaga fokus ke wanita di kanan pada layar kecil.
          className='object-cover object-[75%_center] md:object-center'
          sizes='100vw'
          priority
        />
        {/* Opsional: Overlay gradient sangat tipis dari kiri ke kanan agar teks lebih 'pop-up' jika background terlalu ramai */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/10 to-transparent"></div> */}
      </div>

      {/* UBAH 3: Kontainer Teks diletakkan di atas (overlay) di sisi kiri */}
      <Container className='relative z-10 h-full flex items-start mx-24'>
        <div className='flex flex-col items-start text-left max-w-xl py-12 md:py-0'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] mb-8 drop-shadow-sm'>
            Siap Mewujudkan <br className='hidden lg:block' />
            Kelulusanmu? Hubungi <br className='hidden lg:block' />
            Kami Sekarang!
          </h2>

          <Button
            href={`https://api.whatsapp.com/send/?phone=%2B${SITE_CONFIG.whatsapp}&text=Halo+Admin+LulusBareng+%2C+Saya+Mau+Konsultasi+Jasa+Skripsi%2FTesis&type=phone_number&app_absent=0`}
            target='_blank'
            // Menggunakan kode warna hex spesifik dari screenshot untuk tombol oranye-pink
            className='bg-[#EAA983] hover:bg-[#d89a75] text-white px-10 py-4 text-lg rounded rounded-md font-bold shadow-md transition-transform hover:-translate-y-1'>
            Hubungi Kami
          </Button>
        </div>
      </Container>
    </section>
  );
}
