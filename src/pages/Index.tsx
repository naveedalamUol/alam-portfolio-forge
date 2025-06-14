
import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, ArrowUp, Mail, MapPin, ExternalLink, Download, Star, Code, Palette, Settings, Zap } from 'lucide-react';
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

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Experience', href: 'experience' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' }
  ];

  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: ['Flutter', 'Firebase', 'Android Studio', 'IT Support', 'Troubleshooting', 'Python', 'Java'],
      icon: <Code className="w-6 h-6 text-white" />,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Design Skills',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'Logo Design'],
      icon: <Palette className="w-6 h-6 text-white" />,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Other Skills',
      skills: ['SEO', 'Social Media Marketing', 'Cloud Computing', 'Cybersecurity', 'Data Science'],
      icon: <Settings className="w-6 h-6 text-white" />,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const projects = [
    {
      title: 'Tour Explorer App',
      description: 'A comprehensive mobile application built with Flutter and Firebase for discovering and booking travel experiences with real-time updates.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop',
      tags: ['Flutter', 'Firebase', 'Android Studio', 'Real-time'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Web Solutions',
      description: 'Modern web applications featuring AI integration, responsive design, and cloud-based architecture for enhanced user experiences.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=300&fit=crop',
      tags: ['React', 'AI/ML', 'Cloud', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  if (!mounted) return null;

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <FloatingElements />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Naveed Alam
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
          <AnimatedSection animation="fade-up">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-2xl transform scale-150 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Naveed Alam"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto shadow-2xl ring-4 ring-blue-500/30 dark:ring-blue-400/40 hover:scale-105 transition-all duration-500 hover:shadow-blue-500/25"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Naveed Alam
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 font-semibold">
              Software Engineer | Graphic Designer | IT Specialist
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building solutions that merge design, technology, and support seamlessly to create exceptional digital experiences.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2" size={20} />
                View Resume
              </Button>
              <Button size="lg" onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Zap className="mr-2" size={20} />
                Hire Me
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 rounded-xl backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-300">
                <a href="https://fiverr.com/g_designer6" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={20} />
                  Fiverr Profile
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection animation="fade-right">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Software Engineer with a unique blend of technical expertise, creative design skills, and comprehensive IT support experience. My journey spans from developing cutting-edge mobile applications to creating stunning visual designs and providing enterprise-level IT solutions.
                </p>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  With a strong foundation in software development and a keen eye for design aesthetics, I bridge the gap between functionality and visual appeal to deliver exceptional digital experiences that users love.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Education</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">BS Software Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">University of Lahore</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50">
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Bajaur, KPK</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pakistan</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Coding workspace"
                  className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold">3+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-purple-900/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Skills & Expertise
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={category.title} animation="fade-up" delay={index * 200}>
                <SkillCard {...category} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} animation="fade-up" delay={index * 200}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30 dark:from-green-900/10 dark:via-transparent dark:to-blue-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                Ready to work together? Let's discuss your next project and bring your ideas to life.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-right">
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">contact@naveedalam.pro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Bajaur, KPK, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left">
              <Card className="p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <CardContent className="p-0">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Name
                        </label>
                        <Input id="name" required className="border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl px-4 py-3" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Email
                        </label>
                        <Input id="email" type="email" required className="border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl px-4 py-3" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Subject
                      </label>
                      <Input id="subject" required className="border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl px-4 py-3" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Message
                      </label>
                      <Textarea id="message" rows={6} required className="border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl px-4 py-3" />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Naveed Alam
            </div>
            <p className="text-gray-400 mb-8 text-lg">
              Built with ❤️ by Naveed Alam – © 2025. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8">
              {[
                { name: 'Facebook', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'Fiverr', href: 'https://fiverr.com/g_designer6' },
                { name: 'LinkedIn', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25 z-40 group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default Index;
