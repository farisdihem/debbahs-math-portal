
import { useState } from 'react';
import SectionAnimation from '../ui/SectionAnimation';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمود",
      role: "طالب جامعي",
      content: "تعلمت الكثير من الأستاذ دباح. طريقته في الشرح واضحة وسهلة الفهم، ساعدتني على تخطي صعوبات الرياضيات والتفوق في دراستي.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "سارة علي",
      role: "طالبة ثانوية",
      content: "كنت أعاني من صعوبة في فهم الرياضيات، لكن بفضل دروس الأستاذ دباح أصبحت المادة المفضلة لدي وتحسنت درجاتي بشكل كبير.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "خالد عبد الرحمن",
      role: "ولي أمر",
      content: "لاحظت تحسناً كبيراً في مستوى ابني بعد متابعته لدروس الأستاذ دباح. أسلوبه التعليمي ممتاز ويراعي الفروق الفردية بين الطلاب.",
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-primary-light/5">
      <div className="container mx-auto px-4">
        <SectionAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">آراء طلابنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نفتخر بما يقوله طلابنا عن تجربتهم معنا وكيف ساهمنا في تحسين مستواهم في الرياضيات
            </p>
          </div>
        </SectionAnimation>

        <div className="max-w-4xl mx-auto relative">
          <SectionAnimation key={activeIndex} className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-secondary"
                />
              </div>
              <div>
                <p className="text-gray-700 text-lg italic mb-4">"{testimonials[activeIndex].content}"</p>
                <div className="font-bold text-primary">{testimonials[activeIndex].name}</div>
                <div className="text-gray-500">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </SectionAnimation>

          <div className="flex justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide} 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white transition"
              aria-label="السابق"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`انتقل إلى الشهادة ${index + 1}`}
              />
            ))}
            <button 
              onClick={nextSlide} 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white transition"
              aria-label="التالي"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
