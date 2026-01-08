import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import logo from '../../assets/devbhoomi.png';

export default function BookCabsPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="flex flex-col items-center mb-8">
                 <img src="/devbhoomi.png" alt="Devbhoomi Wings Logo" className="h-16 mb-2" style={{filter: 'drop-shadow(0 2px 8px #14b8a6)'}} />
            <h1 className="text-4xl font-bold text-[#0f172a] mb-2 text-center">Book Cabs</h1>
            <div className="text-[#14b8a6] text-lg font-semibold">Delhi to Pithoragarh & Back</div>
          </div>
          <Card className="p-8 bg-white/95 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Delhi ⇄ Pithoragarh Cab Service</h2>
            <ul className="mb-4 text-[#64748b] list-disc pl-6">
              <li>AC Sedan, SUV, and Tempo Traveller options</li>
              <li>Experienced hill drivers</li>
              <li>Doorstep pickup & drop</li>
              <li>24/7 support</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Delhi to Pithoragarh" target="_blank" rel="noopener noreferrer">
                      Book Delhi → Pithoragarh
                    </a>
                  </Button>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Pithoragarh to Delhi" target="_blank" rel="noopener noreferrer">
                      Book Pithoragarh → Delhi
                    </a>
                  </Button>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Delhi ⇄ Rishikesh Cab Service</h2>
            <ul className="mb-4 text-[#64748b] list-disc pl-6">
              <li>AC Sedan, SUV, and Tempo Traveller options</li>
              <li>Experienced drivers for mountain routes</li>
              <li>Doorstep pickup & drop</li>
              <li>24/7 support</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Delhi to Rishikesh" target="_blank" rel="noopener noreferrer">
                      Book Delhi → Rishikesh
                    </a>
                  </Button>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Rishikesh to Delhi" target="_blank" rel="noopener noreferrer">
                      Book Rishikesh → Delhi
                    </a>
                  </Button>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Delhi ⇄ Mussoorie Cab Service</h2>
            <ul className="mb-4 text-[#64748b] list-disc pl-6">
              <li>AC Sedan, SUV, and Tempo Traveller options</li>
              <li>Experienced hill drivers</li>
              <li>Doorstep pickup & drop</li>
              <li>24/7 support</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Delhi to Mussoorie" target="_blank" rel="noopener noreferrer">
                      Book Delhi → Mussoorie
                    </a>
                  </Button>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Mussoorie to Delhi" target="_blank" rel="noopener noreferrer">
                      Book Mussoorie → Delhi
                    </a>
                  </Button>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Delhi ⇄ Jim Corbett Cab Service</h2>
            <ul className="mb-4 text-[#64748b] list-disc pl-6">
              <li>AC Sedan, SUV, and Tempo Traveller options</li>
              <li>Experienced wildlife route drivers</li>
              <li>Doorstep pickup & drop</li>
              <li>24/7 support</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Delhi to Jim Corbett" target="_blank" rel="noopener noreferrer">
                      Book Delhi → Jim Corbett
                    </a>
                  </Button>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Jim Corbett to Delhi" target="_blank" rel="noopener noreferrer">
                      Book Jim Corbett → Delhi
                    </a>
                  </Button>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Delhi ⇄ Auli Cab Service</h2>
            <ul className="mb-4 text-[#64748b] list-disc pl-6">
              <li>AC Sedan, SUV, and Tempo Traveller options</li>
              <li>Experienced mountain drivers</li>
              <li>Doorstep pickup & drop</li>
              <li>24/7 support</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Delhi to Auli" target="_blank" rel="noopener noreferrer">
                      Book Delhi → Auli
                    </a>
                  </Button>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Auli to Delhi" target="_blank" rel="noopener noreferrer">
                      Book Auli → Delhi
                    </a>
                  </Button>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 shadow-xl border-0">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Delhi ⇄ Chopta Cab Service</h2>
            <ul className="mb-4 text-[#64748b] list-disc pl-6">
              <li>AC Sedan, SUV, and Tempo Traveller options</li>
              <li>Experienced trekking route drivers</li>
              <li>Doorstep pickup & drop</li>
              <li>24/7 support</li>
              <li>Transparent pricing</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Delhi to Chopta" target="_blank" rel="noopener noreferrer">
                      Book Delhi → Chopta
                    </a>
                  </Button>
                  <Button size="lg" className="bg-[#14b8a6] hover:bg-[#14b8a6]/90 text-white w-full md:w-auto" asChild>
                    <a href="https://wa.me/919311344461?text=Hi, I want to book a cab from Chopta to Delhi" target="_blank" rel="noopener noreferrer">
                      Book Chopta → Delhi
                    </a>
                  </Button>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
