
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export interface ExerciseProps {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  grade: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب';
}

const ExerciseCard = ({ exercise }: { exercise: ExerciseProps }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (!showResult) {
      setSelectedOption(index);
    }
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setShowResult(false);
  };

  const getDifficultyColor = () => {
    switch (exercise.difficulty) {
      case 'سهل':
        return 'bg-green-100 text-green-700';
      case 'متوسط':
        return 'bg-yellow-100 text-yellow-700';
      case 'صعب':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary p-4 text-white">
        <div className="flex justify-between items-center">
          <span className="bg-white text-primary text-sm py-1 px-3 rounded-full">
            {exercise.grade}
          </span>
          <span className={`text-sm py-1 px-3 rounded-full ${getDifficultyColor()}`}>
            {exercise.difficulty}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold mb-4">{exercise.question}</h3>
        
        <div className="space-y-3 mb-4">
          {exercise.options.map((option, index) => (
            <button
              key={index}
              disabled={showResult}
              onClick={() => handleOptionClick(index)}
              className={`w-full text-right p-3 border rounded-lg transition-colors ${
                selectedOption === index 
                  ? 'border-primary bg-primary/10' 
                  : 'border-gray-200 hover:border-primary hover:bg-primary/5'
              } ${
                showResult && index === exercise.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : showResult && selectedOption === index && index !== exercise.correctAnswer
                  ? 'bg-red-100 border-red-500'
                  : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && index === exercise.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
                {showResult && selectedOption === index && index !== exercise.correctAnswer && (
                  <AlertCircle className="h-5 w-5 text-red-600" />
                )}
              </div>
            </button>
          ))}
        </div>
        
        {!showResult ? (
          <Button 
            onClick={handleCheckAnswer} 
            disabled={selectedOption === null}
            className="w-full bg-primary hover:bg-primary-dark"
          >
            تحقق من الإجابة
          </Button>
        ) : (
          <div className="space-y-4">
            <div className={`p-3 rounded-lg ${
              selectedOption === exercise.correctAnswer 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {selectedOption === exercise.correctAnswer ? (
                <p className="flex items-center">
                  <CheckCircle className="h-5 w-5 ml-2" />
                  إجابة صحيحة! أحسنت.
                </p>
              ) : (
                <p className="flex items-center">
                  <AlertCircle className="h-5 w-5 ml-2" />
                  إجابة خاطئة. الإجابة الصحيحة هي: {exercise.options[exercise.correctAnswer]}
                </p>
              )}
            </div>
            <Button 
              onClick={handleReset}
              variant="outline" 
              className="w-full"
            >
              حاول مرة أخرى
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
