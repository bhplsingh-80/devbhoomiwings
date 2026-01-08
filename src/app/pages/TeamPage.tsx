import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Users, Phone, Mail } from 'lucide-react';

export function TeamPage() {
  const teamMembers = [
    {
      name: 'Mr. Shivam Tiwari',
      role: 'Director',
      phone: '+91 93113 44463',
      email: 'director@devbhoomiwings.com'
    },
    {
      name: 'Bhupal Singh',
      role: 'CEO & Founder',
      phone: '+91 96907 07002',
      email: 'bhupalsingh@devbhoomiwings.com'
    },
    {
      name: 'Mr. Vaibhav Singh',
      role: 'Marketing Head',
      phone: '+91 93113 44462',
      email: 'devbhoomiwings@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0f172a] mb-12 text-center">Our Team</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-[#14b8a6] flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">{member.name}</h3>
                <p className="text-[#14b8a6] font-medium mb-4">{member.role}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}