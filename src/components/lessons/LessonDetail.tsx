
import { useState } from 'react';
import { LessonProps } from './LessonCard';
import { Button } from '@/components/ui/button';
import { Download, Video } from 'lucide-react';
import SectionAnimation from '../ui/SectionAnimation';

const LessonDetail = ({ lesson }: { lesson: LessonProps }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'video'>('content');
  
  if (!lesson) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary text-white p-6">
        <h1 className="text-2xl md:text-3xl font-bold">{lesson.title}</h1>
        <div className="flex items-center mt-2">
          <span className="bg-white text-primary py-1 px-3 rounded-full text-sm">
            {lesson.grade}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex border-b mb-6">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'content'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setActiveTab('content')}
          >
            محتوى الدرس
          </button>
          {lesson.videoUrl && (
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === 'video'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-500 hover:text-primary'
              }`}
              onClick={() => setActiveTab('video')}
            >
              فيديو الشرح
            </button>
          )}
        </div>
        
        {activeTab === 'content' ? (
          <SectionAnimation>
            <div className="prose max-w-none">
              <p className="mb-4 text-gray-700">{lesson.description}</p>
              
              {/* Here we would put the actual lesson content */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-2">محتوى الدرس</h3>
                <p>
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.
                </p>
                <p className="mt-3">
                  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربي زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربي مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل في كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                </p>
              </div>

              {/* Equations section */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-2">المعادلات الرياضية</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <div className="text-center text-xl">ax² + bx + c = 0</div>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <div className="text-center text-xl">x = (-b ± √(b² - 4ac)) / 2a</div>
                  </div>
                </div>
              </div>

              {/* Example section */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2">مثال تطبيقي</h3>
                <div className="p-3 bg-white rounded border border-gray-200 mb-4">
                  <p><strong>المسألة:</strong> حل المعادلة التربيعية: 2x² + 5x - 3 = 0</p>
                </div>
                <div className="p-3 bg-white rounded border border-gray-200">
                  <p><strong>الحل:</strong></p>
                  <p>a = 2, b = 5, c = -3</p>
                  <p className="mt-2">نستخدم القانون العام:</p>
                  <p className="my-2">x = (-5 ± √(5² - 4(2)(-3))) / 2(2)</p>
                  <p>x = (-5 ± √(25 + 24)) / 4</p>
                  <p>x = (-5 ± √49) / 4</p>
                  <p>x = (-5 ± 7) / 4</p>
                  <p className="mt-2">x₁ = (-5 + 7) / 4 = 2 / 4 = 0.5</p>
                  <p>x₂ = (-5 - 7) / 4 = -12 / 4 = -3</p>
                  <p className="mt-2"><strong>إذن الحلول هي: x = 0.5 أو x = -3</strong></p>
                </div>
              </div>
              
              {lesson.pdfUrl && (
                <div className="mt-6">
                  <Button className="bg-primary hover:bg-primary-dark">
                    <Download size={18} className="mr-2" />
                    تحميل ملف الدرس PDF
                  </Button>
                </div>
              )}
            </div>
          </SectionAnimation>
        ) : (
          <SectionAnimation key="video">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src={lesson.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">عن هذا الفيديو</h3>
              <p className="text-gray-700">
                في هذا الفيديو يشرح الأستاذ دباح {lesson.title} بطريقة مبسطة ومفهومة، مع أمثلة تطبيقية لترسيخ المعلومات.
              </p>
            </div>
          </SectionAnimation>
        )}
      </div>
    </div>
  );
};

export default LessonDetail;
