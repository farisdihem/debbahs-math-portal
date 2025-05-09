
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ExerciseCard, { ExerciseProps } from '../components/exercises/ExerciseCard';
import ExerciseFilters from '../components/exercises/ExerciseFilters';
import SectionAnimation from '../components/ui/SectionAnimation';

// Mock exercises data
const exerciseData: ExerciseProps[] = [
  {
    id: '1',
    question: 'ما هو ناتج 3x² + 5x - 2 عندما x = 2؟',
    options: ['16', '18', '20', '22'],
    correctAnswer: 1, // index of correct answer (18)
    grade: 'الصف التاسع',
    difficulty: 'متوسط'
  },
  {
    id: '2',
    question: 'في مثلث قائم الزاوية، إذا كان طول الوتر 10 وأحد الأضلاع 6، ما هو طول الضلع الآخر؟',
    options: ['4', '8', '6', '9'],
    correctAnswer: 1, // index of correct answer (8)
    grade: 'الصف الثامن',
    difficulty: 'سهل'
  },
  {
    id: '3',
    question: 'ما هو التكامل لـ 2x + 3؟',
    options: ['x² + 3x + C', 'x² + 3x', '2x² + 3x', 'x² + 3x - C'],
    correctAnswer: 0, // index of correct answer (x² + 3x + C)
    grade: 'الصف الثاني عشر',
    difficulty: 'صعب'
  },
  {
    id: '4',
    question: 'ما هو حل المعادلة: log₂(x) = 3؟',
    options: ['x = 6', 'x = 8', 'x = 9', 'x = 16'],
    correctAnswer: 1, // index of correct answer (x = 8, because 2³ = 8)
    grade: 'الصف الحادي عشر',
    difficulty: 'متوسط'
  },
  {
    id: '5',
    question: 'إذا كان sin(θ) = 0.5، ما هي قيمة θ؟',
    options: ['30°', '45°', '60°', '90°'],
    correctAnswer: 0, // index of correct answer (30°)
    grade: 'الصف العاشر',
    difficulty: 'سهل'
  },
  {
    id: '6',
    question: 'ما هي النهاية limₓ→∞ (2x² + x) / (x² + 1)?',
    options: ['0', '1', '2', 'غير معرفة'],
    correctAnswer: 2, // index of correct answer (2)
    grade: 'الصف الثاني عشر',
    difficulty: 'صعب'
  },
];

const Exercises = () => {
  const [filters, setFilters] = useState({
    grade: 'all',
    difficulty: 'all'
  });
  const [filteredExercises, setFilteredExercises] = useState<ExerciseProps[]>(exerciseData);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const grades = [...new Set(exerciseData.map(exercise => exercise.grade))];
  const difficulties = [...new Set(exerciseData.map(exercise => exercise.difficulty))];

  useEffect(() => {
    let result = exerciseData;
    
    if (filters.grade !== 'all') {
      result = result.filter(exercise => exercise.grade === filters.grade);
    }
    
    if (filters.difficulty !== 'all') {
      result = result.filter(exercise => exercise.difficulty === filters.difficulty);
    }
    
    setFilteredExercises(result);
  }, [filters]);

  const handleFilterChange = (newFilters: { grade: string; difficulty: string }) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionAnimation>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">تمارين تفاعلية</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                اختبر فهمك للمفاهيم الرياضية من خلال مجموعة متنوعة من التمارين التفاعلية مع تصحيح فوري وشرح للإجابات
              </p>
            </div>
          </SectionAnimation>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <SectionAnimation animationType="right">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <ExerciseFilters
                    grades={grades}
                    difficulties={difficulties}
                    onFilterChange={handleFilterChange}
                    activeFilters={filters}
                  />
                </div>
              </SectionAnimation>
            </div>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredExercises.map((exercise, index) => (
                  <SectionAnimation key={exercise.id} className={`delay-${index*100}`}>
                    <ExerciseCard exercise={exercise} />
                  </SectionAnimation>
                ))}
              </div>

              {filteredExercises.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">لا توجد تمارين متاحة</h3>
                  <p className="text-gray-600">
                    لا توجد تمارين متاحة للفلاتر المحددة. يرجى تغيير معايير التصفية أو الاتصال بنا لطلب محتوى معين.
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

export default Exercises;
