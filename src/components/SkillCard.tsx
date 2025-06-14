
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  gradient: string;
}

const SkillCard = ({ title, skills, icon, gradient }: SkillCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-white dark:bg-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600">
      <CardContent className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} shadow-sm`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
