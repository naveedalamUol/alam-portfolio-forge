import { useEffect, useState } from 'react';
import { ArrowUp, Mail, MapPin, ExternalLink, Download, Star, Code, Palette, Settings, Zap, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import Header from '@/components/Header';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : systemPrefersDark;
    setDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
  };
  const navItems = [{
    label: 'Home',
    href: 'hero'
  }, {
    label: 'About',
    href: 'about'
  }, {
    label: 'Skills',
    href: 'skills'
  }, {
    label: 'Experience',
    href: 'experience'
  }, {
    label: 'Projects',
    href: 'projects'
  }, {
    label: 'Contact',
    href: 'contact'
  }];
  const skillCategories = [{
    title: 'Technical Skills',
    skills: ['React', 'Firebase', 'Android Studio', 'IT Support', 'Troubleshooting', 'Python', 'Java', 'Node.js'],
    icon: <Code className="w-6 h-6 text-white" />,
    gradient: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Design Skills',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'Logo Design'],
    icon: <Palette className="w-6 h-6 text-white" />,
    gradient: 'from-purple-500 to-pink-500'
  }, {
    title: 'Other Skills',
    skills: ['SEO', 'Social Media Marketing', 'Cloud Computing', 'Cybersecurity', 'Data Science'],
    icon: <Settings className="w-6 h-6 text-white" />,
    gradient: 'from-green-500 to-teal-500'
  }];
  const projects = [{
    title: 'Tour Explorer App',
    description: 'A comprehensive mobile application built with Flutter and Firebase for discovering and booking travel experiences with real-time updates.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop',
    tags: ['Flutter', 'Firebase', 'Android Studio', 'Real-time'],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    title: 'AI-Powered Web Solutions',
    description: 'Modern web applications featuring AI integration, responsive design, and cloud-based architecture for enhanced user experiences.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
    tags: ['React', 'AI/ML', 'Cloud', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#'
  }];
  const stats = [{
    number: '50+',
    label: 'Projects Completed',
    icon: <Award className="w-8 h-8" />
  }, {
    number: '25+',
    label: 'Happy Clients',
    icon: <Users className="w-8 h-8" />
  }, {
    number: '3+',
    label: 'Years Experience',
    icon: <Clock className="w-8 h-8" />
  }];
  if (!mounted) return null;
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }
  return <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <FloatingElements />
      
      {/* Enhanced Header */}
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} onScrollToSection={scrollToSection} />

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-16">
          <AnimatedSection animation="fade-up">
            <div className="relative mb-12">
              <img alt="Naveed Alam" className="w-32 h-32 rounded-full mx-auto shadow-xl ring-4 ring-white dark:ring-gray-800 object-cover" src="/lovable-uploads/18eb7fc7-d117-4a2f-ac6d-396fbd8c5e76.jpg" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Naveed Alam</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4 font-medium">
              Software Engineer & Designer
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences through innovative software solutions, 
              intuitive design, and comprehensive IT support services.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Download className="mr-2" size={18} />
                Download CV
              </Button>
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="mr-2" size={18} />
                Contact Me
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3 transition-all duration-300">
                <a href="https://www.linkedin.com/in/naveed-alam9/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={18} />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {stats.map((stat, index) => <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Software Engineer with expertise in mobile app development, 
                  web technologies, and creative design. My journey blends technical proficiency 
                  with aesthetic sensibility to craft digital solutions that are both functional and visually engaging.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Having completed my BS in Software Engineering from the University of Lahore, 
                  I've built a diverse skill set ranging from React development to 
                  graphic design and IT support services.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                    <p className="text-gray-600 dark:text-gray-300">BS Software Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">University of Lahore</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">I-8, ISLAMABAD, Pakistan</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pakistan</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" alt="Coding workspace" className="rounded-lg shadow-lg" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Expertise
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => <AnimatedSection key={category.title} animation="fade-up" delay={index * 200}>
                <SkillCard {...category} />
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Experience
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="p-8 bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Founder and Developer</h3>
                      <p className="text-blue-600 dark:text-blue-400">BugSolution</p>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2023 - Present</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Founded and developed BugSolution, a comprehensive platform for bug tracking and software development solutions. 
                    Leading the technical vision and implementation of innovative debugging tools and development workflows.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="p-8 bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Freelance Developer & Designer</h3>
                      <p className="text-blue-600 dark:text-blue-400">Fiverr Platform</p>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2021 - Present</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Providing comprehensive digital solutions including mobile app development, 
                    graphic design, and IT support services to clients worldwide. Specialized in 
                    React development and Adobe Creative Suite.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <Card className="p-8 bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Engineering Student</h3>
                      <p className="text-blue-600 dark:text-blue-400">University of Lahore</p>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">2016 - 2021</div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Completed Bachelor's degree in Software Engineering with focus on modern 
                    development practices, algorithms, and software architecture principles.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <AnimatedSection key={project.title} animation="fade-up" delay={index * 200}>
                <ProjectCard {...project} />
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                Ready to work together? Let's discuss your next project and bring your ideas to life.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-right">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  <a href="mailto:contact@naveedalam.pro" className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">contact@naveedalam.pro</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">I-8, ISLAMABAD, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left">
              <Card className="p-8 bg-white dark:bg-gray-700 shadow-sm">
                <CardContent className="p-0">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name
                        </label>
                        <Input id="name" required className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <Input id="email" type="email" required className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input id="subject" required className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea id="message" rows={5} required className="border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with corrected LinkedIn URL */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Naveed Alam
            </div>
            <p className="text-gray-400 mb-8">
              © 2025 Naveed Alam. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              {[{
              name: 'Facebook',
              href: '#'
            }, {
              name: 'Instagram',
              href: '#'
            }, {
              name: 'Fiverr',
              href: 'https://fiverr.com/g_designer6'
            }, {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/naveed-alam9/'
            }].map(social => <a key={social.name} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {social.name}
                </a>)}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40" aria-label="Back to top">
          <ArrowUp size={20} />
        </button>}
    </div>;
};
export default Index;
