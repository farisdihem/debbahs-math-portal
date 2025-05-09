
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import LessonDetail from '../components/lessons/LessonDetail';
import { Button } from '@/components/ui/button';
import SectionAnimation from '../components/ui/SectionAnimation';
import { LessonProps } from '../components/lessons/LessonCard';

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

const LessonDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [lesson, setLesson] = useState<LessonProps | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the lesson with the matching id
    const foundLesson = lessonData.find(l => l.id === id);
    setLesson(foundLesson || null);
  }, [id]);

  if (!lesson) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">الدرس غير موجود</h1>
            <p className="text-gray-600 mb-6">
              لم يتم العثور على الدرس المطلوب. يرجى العودة إلى صفحة الدروس وتحديد درس آخر.
            </p>
            <Button asChild>
              <Link to="/lessons">العودة إلى الدروس</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button asChild variant="outline" className="mb-6">
              <Link to="/lessons">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                العودة إلى الدروس
              </Link>
            </Button>
          </div>
          
          <SectionAnimation>
            <LessonDetail lesson={lesson} />
          </SectionAnimation>
          
          <SectionAnimation className="mt-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">دروس ذات صلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lessonData
                  .filter(l => l.id !== id && l.grade === lesson.grade)
                  .slice(0, 3)
                  .map(relatedLesson => (
                    <Link 
                      key={relatedLesson.id} 
                      to={`/lessons/${relatedLesson.id}`}
                      className="block p-4 border rounded-md hover:bg-gray-50 transition"
                    >
                      <h3 className="font-medium text-primary">{relatedLesson.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{relatedLesson.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </SectionAnimation>
        </div>
      </div>
    </Layout>
  );
};

export default LessonDetailPage;
