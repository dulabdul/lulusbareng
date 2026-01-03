import { Container } from '../ui/Container';
import { SITE_CONFIG, NAVIGATION } from '@/data/content';
import { GraduationCap, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-slate-300 py-12 border-t border-slate-800'>
      <Container>
        <div className='grid md:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='p-2 bg-white rounded-lg text-slate-900'>
                <GraduationCap size={24} />
              </div>
              <span className='text-xl font-bold text-white'>
                LulusBareng.com
              </span>
            </div>
            <p className='max-w-sm mb-6 leading-relaxed'>
              Partner terbaik untuk mewujudkan kelulusan impian Anda.
              Profesional, Amanah, dan Terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-bold mb-6'>Menu</h4>
            <ul className='space-y-3'>
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='hover:text-orange-500 transition-colors'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-white font-bold mb-6'>Kontak</h4>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <Phone
                  size={20}
                  className='text-orange-500 mt-1'
                />
                <span>+62 812-3456-7890 (WhatsApp Only)</span>
              </li>
              <li className='flex items-start gap-3'>
                <Mail
                  size={20}
                  className='text-orange-500 mt-1'
                />
                <span>{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-slate-800 text-center text-sm'>
          <p>
            &copy; {new Date().getFullYear()} LulusBareng.com. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
