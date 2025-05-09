
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import LessonCard, { LessonProps } from '../components/lessons/LessonCard';
import LessonFilter from '../components/lessons/LessonFilter';
import SectionAnimation from '../components/ui/SectionAnimation';

// Mock lesson data
const lessonData: LessonProps[] = [
  {
    id: '1',
    title: 'المعادلات التربيعية',
    description: 'شرح مفصل للمعادلات التربيعية وطرق حلها المختلفة مع أمثلة توضيحية.',
    grade: 'الصف التاسع',
    pdfUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'حساب المثلثات',
    description: 'تعلم أساسيات حساب المثلثات والنسب المثلثية وتطبيقاتها في حل المسائل الهندسية.',
    grade: 'الصف العاشر',
    pdfUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'الاشتقاق والتكامل',
    description: 'مقدمة في التفاضل والتكامل وتطبيقاتها في حل مسائل الرياضيات المتقدمة.',
    grade: 'الصف الثاني عشر',
    pdfUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'نظرية فيثاغورس',
    description: 'شرح نظرية فيثاغورس وتطبيقاتها في المثلثات القائمة الزاوية.',
    grade: 'الصف الثامن',
    pdfUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '5',
    title: 'الدوال الأسية واللوغاريتمية',
    description: 'شرح الدوال الأسية واللوغاريتمية وخصائصها وتطبيقاتها.',
    grade: 'الصف الحادي عشر',
    pdfUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'المصفوفات',
    description: 'تعلم أساسيات المصفوفات والعمليات عليها وتطبيقاتها في حل أنظمة المعادلات.',
    grade: 'الصف الحادي عشر',
    pdfUrl: '#',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
];

const Lessons = () => {
  const [activeGrade, setActiveGrade] = useState('all');
  const [filteredLessons, setFilteredLessons] = useState<LessonProps[]>(lessonData);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const grades = [...new Set(lessonData.map(lesson => lesson.grade))];

  const handleFilterChange = (grade: string) => {
    setActiveGrade(grade);
    if (grade === 'all') {
      setFilteredLessons(lessonData);
    } else {
      setFilteredLessons(lessonData.filter(lesson => lesson.grade === grade));
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">الدروس والمحتوى التعليمي</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                استكشف مجموعة متنوعة من الدروس المنظمة حسب المستوى التعليمي، مع شروحات مفصلة وملفات PDF للتحميل وفيديوهات توضيحية
              </p>
            </div>
          </SectionAnimation>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <SectionAnimation animationType="right">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <LessonFilter
                    grades={grades}
                    onFilterChange={handleFilterChange}
                    activeGrade={activeGrade}
                  />
                </div>
              </SectionAnimation>
            </div>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredLessons.map((lesson, index) => (
                  <SectionAnimation key={lesson.id} className={`delay-${index*100}`}>
                    <LessonCard lesson={lesson} />
                  </SectionAnimation>
                ))}
              </div>

              {filteredLessons.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد دروس متاحة</h3>
                  <p className="text-gray-600">
                    لا توجد دروس متاحة للفلتر المحدد. يرجى تحديد مستوى آخر أو الاتصال بنا لطلب محتوى معين.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lessons;
