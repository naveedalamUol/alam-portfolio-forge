
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github, Star } from 'lucide-react';

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

const FeaturedProject = ({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl, 
  highlights 
}: FeaturedProjectProps) => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-800 shadow-2xl">
      <div className="absolute top-4 left-4 z-10">
        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-3 py-1 shadow-lg">
          <Star className="w-4 h-4 mr-1" />
          Featured Project
        </Badge>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Features:</h4>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4">
            {liveUrl && (
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={18} />
                  View Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="lg" variant="outline" className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={18} />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedProject;
