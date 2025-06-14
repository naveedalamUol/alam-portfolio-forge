
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
    <Card className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5"></div>
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} shadow-lg`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="bg-white/10 hover:bg-white/20 text-gray-700 dark:text-gray-300 border border-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
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
