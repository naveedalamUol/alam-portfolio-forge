
import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Set font
  doc.setFont('helvetica');
  
  // Header
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text('Naveed Alam', 20, 20);
  
  // Contact Information
  doc.setFontSize(10);
  doc.text('Email: contact@naveedalam.pro | Phone: +92 306 2255 235', 20, 30);
  doc.text('Location: Islamabad, Pakistan | Portfolio: www.naveedalam.pro', 20, 35);
  
  // Profile Section
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('PROFILE', 20, 50);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const profileText = [
    'A versatile Software Engineer and IT professional with proven experience in full-stack web',
    'development, Android application design, and robust IT infrastructure management. Adept at',
    'troubleshooting complex systems, implementing advanced cybersecurity measures, and leading',
    'IT projects, alongside a strong portfolio in creating dynamic web solutions and optimizing',
    'digital presence. Seeking to leverage diverse technical expertise in an innovative and',
    'challenging environment.'
  ];
  
  let yPosition = 55;
  profileText.forEach(line => {
    doc.text(line, 20, yPosition);
    yPosition += 5;
  });
  
  // Education Section
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('EDUCATION', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('BS Software Engineering', 20, yPosition);
  yPosition += 5;
  doc.setFontSize(10);
  doc.text('The University of Lahore, Islamabad Campus | 2016 - 2021', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(12);
  doc.text('Faculty of Science (FSC in General Science)', 20, yPosition);
  yPosition += 5;
  doc.setFontSize(10);
  doc.text('BISE Malakand (KPK) | 2014 - 2016', 20, yPosition);
  
  // Certifications Section
  yPosition += 15;
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('CERTIFICATIONS', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  const certifications = [
    '• Introduction to IoT',
    '• Machine Learning',
    '• Data Science with Python',
    '• Advanced Social Media Certification Program',
    '• Introduction to Cyber Security',
    '• Introduction to Cloud Computing',
    '• Advanced SEO Certification Program'
  ];
  
  certifications.forEach(cert => {
    doc.text(cert, 20, yPosition);
    yPosition += 5;
  });
  
  // Professional Experience Section
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('PROFESSIONAL EXPERIENCE', 20, yPosition);
  
  // IT Support Officer
  yPosition += 10;
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('IT Support Officer | PUBGSTUFF (Virtual Company) | April 2023 - Present', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  const itSupportTasks = [
    '• Provided comprehensive system troubleshooting and software maintenance, ensuring',
    '  optimal computer performance and user productivity.',
    '• Administered and maintained various computer systems and software, contributing to',
    '  efficient operations.',
    '• Assisted users with technical issues, improving their workflow and reducing downtime.'
  ];
  
  itSupportTasks.forEach(task => {
    doc.text(task, 20, yPosition);
    yPosition += 4;
  });
  
  // IT Officer
  yPosition += 8;
  doc.setFontSize(12);
  doc.text('IT Officer | Bajaur Medical Complex | January 2022 - March 2023', 20, yPosition);
  
  yPosition += 8;
  doc.setFontSize(10);
  const itOfficerTasks = [
    '• Managed and maintained critical IT infrastructure for a medical complex, ensuring',
    '  seamless operation of computer systems, networks, and software applications.',
    '• Implemented advanced cybersecurity measures, safeguarding sensitive patient data',
    '  and hospital information against threats.',
    '• Led the planning and execution of IT projects, including the successful integration',
    '  of Electronic Health Record (EHR) systems.',
    '• Monitored network performance and resolved connectivity issues.',
    '• Managed user accounts and access permissions, maintaining data security.'
  ];
  
  itOfficerTasks.forEach(task => {
    doc.text(task, 20, yPosition);
    yPosition += 4;
  });
  
  // Add new page if needed
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }
  
  // Key Projects / Freelance Engagements
  yPosition += 15;
  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('KEY PROJECTS / FREELANCE ENGAGEMENTS', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  const projects = [
    '• E-commerce Development: Designed and developed elegant, modern, and sleek',
    '  e-commerce platforms using WordPress/WooCommerce.',
    '• AdSense Optimization: Optimized websites for Google AdSense approval.',
    '• Automated News Website Development: Developed automated news aggregation',
    '  websites with hourly updates.',
    '• Professional Portfolio Design: Crafted pixel-perfect portfolio websites using',
    '  Elementor.',
    '• Android Application Design: Designed and developed user-friendly Android',
    '  applications with intuitive interfaces.'
  ];
  
  projects.forEach(project => {
    doc.text(project, 20, yPosition);
    yPosition += 4;
  });
  
  // Technical Skills
  yPosition += 15;
  if (yPosition > 220) {
    doc.addPage();
    yPosition = 20;
  }
  
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('TECHNICAL SKILLS', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  
  const skills = [
    'Programming Languages: Python, JavaScript, TypeScript, Java.',
    'Web Technologies & Frameworks: HTML, CSS, Node.js, React, Angular, Elementor,',
    'WordPress, WooCommerce, BBPress, WPML',
    'Digital Marketing: Search Engine Optimization (SEO), Social Media Marketing (SMM),',
    'Social Media Optimization (SMO)',
    'Database Management: SQL Server, Database Backup and Recovery',
    'Operating Systems & Virtualization: Windows, VMware, Hyper-V, Azure Virtual Machines',
    'Software & Tools: Office 365, Veaam Backup, TeamViewer, AnyDesk, Ring Central,',
    'Themeforest, Envato, Remote Monitoring Tools (RMM), Microsoft Azure',
    'Design & Multimedia: Graphic Designing, Video Animations (3D animated explainer videos)'
  ];
  
  skills.forEach(skill => {
    doc.text(skill, 20, yPosition);
    yPosition += 5;
  });
  
  // Additional Information
  yPosition += 10;
  doc.setFontSize(14);
  doc.setTextColor(0, 102, 204);
  doc.text('ADDITIONAL INFORMATION', 20, yPosition);
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('• Valid Driving License', 20, yPosition);
  yPosition += 5;
  doc.text('• Fluent in English and Urdu', 20, yPosition);
  
  // Save the PDF
  doc.save('Naveed-Alam-CV.pdf');
};
