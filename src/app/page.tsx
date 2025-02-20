import { Suspense } from 'react'
import NavBar from '@/components/ui/NavBar'
import Hero from '@/components/sections/Hero'
import TechnicalExpertise from '@/components/sections/TechnicalExpertise'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import AchievementsAndTestimonials from '@/components/sections/AchievementsAndTestimonials'

export default function Home() {
  return (
    <main className="flex-grow min-h-screen">
      <NavBar />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <TechnicalExpertise />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Education />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AchievementsAndTestimonials />
      </Suspense>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </main>
  )
}