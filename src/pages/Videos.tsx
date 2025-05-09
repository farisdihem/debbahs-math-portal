
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import VideoCard, { VideoProps } from '../components/videos/VideoCard';
import VideoFilters from '../components/videos/VideoFilters';
import SectionAnimation from '../components/ui/SectionAnimation';

// Mock video data
const videoData: VideoProps[] = [
  {
    id: '1',
    title: 'شرح المعادلات التربيعية',
    description: 'في هذا الفيديو، نشرح حل المعادلات التربيعية باستخدام الصيغة العامة والتحليل إلى عوامل.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    grade: 'الصف التاسع',
    duration: '15:24'
  },
  {
    id: '2',
    title: 'شرح النسب المثلثية وتطبيقاتها',
    description: 'شرح مفصل للنسب المثلثية الأساسية (الجيب، جيب التمام، الظل) وتطبيقاتها في المسائل الهندسية.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    grade: 'الصف العاشر',
    duration: '22:15'
  },
  {
    id: '3',
    title: 'مقدمة في التفاضل والتكامل',
    description: 'الجزء الأول من سلسلة التفاضل والتكامل: المشتقات، قواعد الاشتقاق، ومفهوم المماس.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    grade: 'الصف الثاني عشر',
    duration: '31:42'
  },
  {
    id: '4',
    title: 'شرح نظرية فيثاغورس',
    description: 'تعلم نظرية فيثاغورس وتطبيقاتها في المثلثات القائمة الزاوية، مع أمثلة عملية.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    grade: 'الصف الثامن',
    duration: '18:36'
  },
  {
    id: '5',
    title: 'الدوال الأسية واللوغاريتمية',
    description: 'شرح خصائص الدوال الأسية واللوغاريتمية، مع حل أمثلة وتمارين متنوعة.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    grade: 'الصف الحادي عشر',
    duration: '25:50'
  },
  {
    id: '6',
    title: 'المصفوفات والجبر الخطي',
    description: 'مقدمة في المصفوفات وعملياتها وتطبيقاتها في حل أنظمة المعادلات الخطية.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    grade: 'الصف الحادي عشر',
    duration: '27:15'
  },
];

const Videos = () => {
  const [activeGrade, setActiveGrade] = useState('all');
  const [filteredVideos, setFilteredVideos] = useState<VideoProps[]>(videoData);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const grades = [...new Set(videoData.map(video => video.grade))];

  const handleFilterChange = (grade: string) => {
    setActiveGrade(grade);
    if (grade === 'all') {
      setFilteredVideos(videoData);
    } else {
      setFilteredVideos(videoData.filter(video => video.grade === grade));
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">فيديوهات تعليمية</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                مجموعة من الفيديوهات التعليمية التي تشرح مفاهيم الرياضيات بطريقة مبسطة وواضحة لجميع المستويات
              </p>
            </div>
          </SectionAnimation>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <SectionAnimation animationType="right">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <VideoFilters
                    grades={grades}
                    onFilterChange={handleFilterChange}
                    activeGrade={activeGrade}
                  />
                </div>
              </SectionAnimation>
            </div>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredVideos.map((video, index) => (
                  <SectionAnimation key={video.id} className={`delay-${index*100}`}>
                    <VideoCard video={video} />
                  </SectionAnimation>
                ))}
              </div>

              {filteredVideos.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد فيديوهات متاحة</h3>
                  <p className="text-gray-600">
                    لا توجد فيديوهات متاحة للفلتر المحدد. يرجى تحديد مستوى آخر أو الاتصال بنا لطلب محتوى معين.
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

export default Videos;
