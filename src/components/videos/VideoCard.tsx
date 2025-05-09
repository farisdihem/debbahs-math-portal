
import { Video, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface VideoProps {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl: string;
  grade: string;
  duration: string;
}

const VideoCard = ({ video }: { video: VideoProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden shadow-hover">
      <div className="relative">
        <img 
          src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-primary text-white text-sm py-1 px-3 rounded-bl-lg">
          {video.duration}
        </div>
        <div className="absolute top-0 left-0 bg-secondary text-primary text-sm py-1 px-3 rounded-br-lg">
          {video.grade}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
          <Video size={48} className="text-white" />
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{video.description}</p>
        
        <Button asChild className="w-full bg-primary hover:bg-primary-dark flex items-center gap-2">
          <a href={`https://www.youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer">
            <span>مشاهدة الفيديو</span>
            <ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
