
import SectionAnimation from '../ui/SectionAnimation';

const AboutTeacher = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <SectionAnimation animationType="right">
            <div className="relative">
              <div className="bg-white shadow-lg rounded-lg p-4 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="الأستاذ دباح عبد اللطيف" 
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-primary rounded-full opacity-20 z-0"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-secondary rounded-full opacity-40 z-0"></div>
            </div>
          </SectionAnimation>

          <SectionAnimation animationType="left">
            <h2 className="text-3xl font-bold text-primary mb-6">الأستاذ دباح عبد اللطيف</h2>
            <p className="text-lg text-gray-700 mb-4">
              أستاذ رياضيات ذو خبرة أكثر من 15 عامًا في تدريس الرياضيات لمختلف المراحل التعليمية.
              حاصل على شهادة الماجستير في الرياضيات من جامعة مرموقة، وله العديد من الإنجازات في مجال التعليم.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              يؤمن الأستاذ دباح أن كل طالب يمتلك القدرة على فهم وإتقان الرياضيات مع التوجيه المناسب والشرح المبسط.
              يتميز أسلوبه التعليمي بالوضوح والتفاعلية وربط المفاهيم الرياضية بالحياة اليومية.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <div className="text-3xl font-bold text-primary mb-1">+1000</div>
                <div className="text-gray-600">طالب متميز</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="text-3xl font-bold text-primary mb-1">+500</div>
                <div className="text-gray-600">درس تعليمي</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="text-3xl font-bold text-primary mb-1">+15</div>
                <div className="text-gray-600">سنوات خبرة</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="text-3xl font-bold text-primary mb-1">%97</div>
                <div className="text-gray-600">نسبة نجاح</div>
              </div>
            </div>
          </SectionAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutTeacher;
