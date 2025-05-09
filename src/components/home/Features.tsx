
import { Book, Video, FileText, CheckCircle } from 'lucide-react';
import SectionAnimation from '../ui/SectionAnimation';

const Features = () => {
  const features = [
    {
      icon: <Book size={48} className="text-primary mx-auto mb-4" />,
      title: "دروس شاملة",
      description: "دروس منظمة ومبسطة تغطي جميع مستويات المناهج الدراسية."
    },
    {
      icon: <FileText size={48} className="text-primary mx-auto mb-4" />,
      title: "تمارين تفاعلية",
      description: "تمارين متنوعة مع حلول مفصلة تساعد على فهم المفاهيم وترسيخها."
    },
    {
      icon: <Video size={48} className="text-primary mx-auto mb-4" />,
      title: "شروحات فيديو",
      description: "مقاطع فيديو تعليمية تشرح المفاهيم الرياضية بطريقة مبسطة."
    },
    {
      icon: <CheckCircle size={48} className="text-primary mx-auto mb-4" />,
      title: "متابعة مستمرة",
      description: "دعم وإرشاد مستمر للطلاب لتجاوز الصعوبات التي تواجههم."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ما نقدمه لطلابنا</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نحن ملتزمون بتقديم تجربة تعليمية متكاملة تساعد الطلاب على تحقيق أهدافهم في مادة الرياضيات
            </p>
          </div>
        </SectionAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <SectionAnimation key={index} className="delay-100">
              <div className="bg-white rounded-lg p-6 shadow-hover text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </SectionAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
