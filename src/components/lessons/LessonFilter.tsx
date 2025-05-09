
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface LessonFilterProps {
  grades: string[];
  onFilterChange: (grade: string) => void;
  activeGrade: string;
}

const LessonFilter = ({ grades, onFilterChange, activeGrade }: LessonFilterProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">تصفية حسب المستوى</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          key="all"
          variant={activeGrade === 'all' ? 'default' : 'outline'}
          className={activeGrade === 'all' ? 'bg-primary text-white' : 'border-primary text-primary'}
          onClick={() => onFilterChange('all')}
        >
          الكل
        </Button>
        {grades.map((grade) => (
          <Button
            key={grade}
            variant={activeGrade === grade ? 'default' : 'outline'}
            className={activeGrade === grade ? 'bg-primary text-white' : 'border-primary text-primary'}
            onClick={() => onFilterChange(grade)}
          >
            {grade}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LessonFilter;
