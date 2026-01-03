import { Container } from '../ui/Container';
import { FEATURES_CONTENT } from '@/data/content';

export default function Features() {
  return (
    <section
      id='fitur'
      className='py-24 bg-white'>
      <Container>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
            Mengapa <span className='text-blue-900'>LulusBareng.com</span>{' '}
            Adalah Pilihan Tepat?
          </h2>
          <p className='text-slate-600 max-w-2xl mx-auto'>
            Kami tidak hanya sekadar membantu, kami menjamin pengalaman terbaik
            untuk kelulusan Anda.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {FEATURES_CONTENT.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className='text-center p-6'>
                <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-blue-800 mb-6 ring-8 ring-blue-50/50'>
                  <Icon size={40} />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-slate-600'>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
