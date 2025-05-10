
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">الأستاذ ديهم عبد اللطيف</h3>
            <p className="mb-4">
              منصة تعليمية متخصصة في تدريس الرياضيات بطرق مبتكرة وفعالة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" aria-label="فيسبوك" className="hover:text-secondary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" aria-label="يوتيوب" className="hover:text-secondary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="واتساب" className="hover:text-secondary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M21.959 4.5a10.003 10.003 0 0 0-7.096-2.943 9.987 9.987 0 0 0-8.789 14.898L3 22.5l6.166-1.573A10.003 10.003 0 0 0 17.396 19.2a9.983 9.983 0 0 0 4.563-14.7ZM12.375 19.012a8.322 8.322 0 0 1-4.227-1.162l-.3-.18-3.132.827.845-3.094-.198-.314a8.321 8.321 0 0 1-1.276-4.413c0-4.595 3.738-8.332 8.332-8.332s8.336 3.738 8.336 8.332c0 4.595-3.738 8.336-8.336 8.336Z" clipRule="evenodd" />
                  <path d="M17.387 14.301c-.23-.113-1.354-.669-1.564-.745-.211-.076-.365-.113-.518.113-.153.227-.594.745-.729.898-.134.153-.268.172-.497.058-.23-.113-1.07-.394-2.037-1.257-.752-.671-1.26-1.5-1.408-1.752-.148-.253-.016-.389.112-.514.114-.115.249-.298.373-.447.124-.149.165-.255.247-.425.082-.171.041-.319-.02-.447-.062-.127-.518-1.248-.71-1.709-.187-.459-.377-.393-.518-.401-.134-.007-.288-.01-.442-.01-.153 0-.402.059-.611.295-.209.236-.8.782-.8 1.904s.819 2.207.935 2.359c.115.153 1.62 2.475 3.928 3.469.549.237.977.38 1.31.486.551.175 1.053.15 1.45.091.442-.066 1.36-.556 1.552-1.094.191-.537.191-.998.134-1.095-.058-.097-.211-.156-.44-.268Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition">الرئيسية</Link></li>
              <li><Link to="/lessons" className="hover:text-secondary transition">الدروس</Link></li>
              <li><Link to="/exercises" className="hover:text-secondary transition">التمارين</Link></li>
              <li><Link to="/videos" className="hover:text-secondary transition">الفيديوهات</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition">اتصل بنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <ul className="space-y-2">
              <li>البريد الإلكتروني: info@debbah-math.com</li>
              <li>الهاتف: +123456789</li>
              <li>العنوان: الجزائر</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-light mt-8 pt-6 text-center">
          <p>&copy; {currentYear} جميع الحقوق محفوظة للأستاذ ديهم عبد اللطيف</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
