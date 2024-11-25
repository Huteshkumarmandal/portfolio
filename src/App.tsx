import  'react';
import { Github, Mail, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hutesh Mandal</h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
            <div className="flex gap-4">
              <a href="mailto:hutesh77@gmail.com" className="flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://github.com/Huteshkumarmandal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-800 transition">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/hutesh-mandal-472882219" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-800 transition">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-gray-600 mb-6">
              I am a passionate Full Stack Developer with expertise in modern web technologies. 
              I specialize in building scalable web applications using React, Node.js, and related technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCard title="Frontend Development" skills={['React', 'XML', 'Tailwind CSS']} />
              <SkillCard title="Backend Development" skills={['Node.js','PHP', 'JAVA']} />
              <SkillCard title="Tools & Others" skills={['Git', 'Docker']} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Online Food Ordering System"
                description="A full-stack e-commerce platform built with React, Node.js, and MongoDB."
                image="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=600"
              />
              <ProjectCard 
                title="Task Management App"
                description="A real-time task management application using React and MySQL."
                image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=600"
              />
               <ProjectCard 
                title="Pharmacy Management System"
                description="A real-time task management application using HTML, CSS and MYSQL."
                image="/public/images/pgarmacy.jpeg"
              />

               <ProjectCard 
                title="Restaurant Management System"
                description="A real-time task management application using React, Node,js and MySQL."
                image="/public/images/restaurant.jpg"
              />

<ProjectCard 
                title="College Information App"
                description="A real-time task management application using XML, JAVA, End API PHP and Firebase and MySQL Database."
                image="/public/images/admin_slide nav.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p>--</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-600">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;