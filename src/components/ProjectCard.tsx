
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-700 hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          {liveUrl && (
            <Button size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
              </a>
            </Button>
          )}
        </div>
      </div>
      
      <CardContent className="p-6 relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge 
              key={tag} 
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-400 border border-blue-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
