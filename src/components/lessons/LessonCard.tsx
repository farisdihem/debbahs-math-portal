
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface LessonProps {
  id: string;
  title: string;
  description: string;
  grade: string;
  pdfUrl?: string;
  videoUrl?: string;
}

const LessonCard = ({ lesson }: { lesson: LessonProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden shadow-hover">
      <div className="bg-primary-light/10 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-primary">{lesson.title}</h3>
          <span className="bg-secondary text-primary text-sm py-1 px-3 rounded-full">
            {lesson.grade}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4">{lesson.description}</p>
        
        <div className="flex flex-wrap gap-2 justify-between">
          {lesson.pdfUrl && (
            <Button variant="outline" size="sm" className="flex items-center gap-1 text-primary border-primary">
              <Download size={16} />
              <span>تحميل PDF</span>
            </Button>
          )}
          
          {lesson.videoUrl && (
            <Button asChild variant="secondary" size="sm" className="bg-primary text-white hover:bg-primary-dark">
              <Link to={`/lessons/${lesson.id}`}>
                <FileText size={16} className="mr-1" />
                <span>عرض الدرس</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
