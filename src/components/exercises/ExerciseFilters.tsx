
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExerciseFiltersProps {
  grades: string[];
  difficulties: string[];
  onFilterChange: (filters: { grade: string; difficulty: string }) => void;
  activeFilters: { grade: string; difficulty: string };
}

const ExerciseFilters = ({ 
  grades, 
  difficulties, 
  onFilterChange, 
  activeFilters 
}: ExerciseFiltersProps) => {
  return (
    <div className="mb-8 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">تصفية حسب المستوى</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            key="all-grades"
            variant={activeFilters.grade === 'all' ? 'default' : 'outline'}
            className={activeFilters.grade === 'all' ? 'bg-primary text-white' : 'border-primary text-primary'}
            onClick={() => onFilterChange({ ...activeFilters, grade: 'all' })}
          >
            الكل
          </Button>
          {grades.map((grade) => (
            <Button
              key={grade}
              variant={activeFilters.grade === grade ? 'default' : 'outline'}
              className={activeFilters.grade === grade ? 'bg-primary text-white' : 'border-primary text-primary'}
              onClick={() => onFilterChange({ ...activeFilters, grade })}
            >
              {grade}
            </Button>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">تصفية حسب الصعوبة</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            key="all-difficulties"
            variant={activeFilters.difficulty === 'all' ? 'default' : 'outline'}
            className={activeFilters.difficulty === 'all' ? 'bg-primary text-white' : 'border-primary text-primary'}
            onClick={() => onFilterChange({ ...activeFilters, difficulty: 'all' })}
          >
            الكل
          </Button>
          {difficulties.map((difficulty) => (
            <Button
              key={difficulty}
              variant={activeFilters.difficulty === difficulty ? 'default' : 'outline'}
              className={activeFilters.difficulty === difficulty ? 'bg-primary text-white' : 'border-primary text-primary'}
              onClick={() => onFilterChange({ ...activeFilters, difficulty })}
            >
              {difficulty}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseFilters;
