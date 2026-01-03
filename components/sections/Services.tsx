import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { SERVICES_CONTENT, SITE_CONFIG } from '@/data/content';

export default function Services() {
  return (
    <section
      id='layanan'
      className='py-24 bg-slate-50'>
      <Container>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Layanan Kami
          </h2>
          <p className='text-slate-600 text-lg'>
            Solusi komprehensif untuk setiap tahap perjalanan akademik Anda.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {SERVICES_CONTENT.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col'>
                <div className='w-14 h-14 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6'>
                  <Icon size={32} />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-3'>
                  {service.title}
                </h3>
                <p className='text-slate-600 mb-8 flex-grow leading-relaxed'>
                  {service.description}
                </p>
                <Button
                  href={`https://api.whatsapp.com/send/?phone=%2B${SITE_CONFIG.whatsapp}&text=Halo+Admin+LulusBareng+%2C+Saya+Mau+Konsultasi+Jasa+Skripsi%2FTesis&type=phone_number&app_absent=0?text=Halo, saya tertarik dengan ${service.title}`}
                  variant='primary'
                  className='w-full bg-orange-500 hover:bg-orange-600'>
                  Hubungi Kami
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
