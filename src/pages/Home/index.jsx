import {About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from '../../components'

export default function Home(){
    return (
        <main>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                {/* <Navbar /> */}
                <Hero />
            </div>
            <Tech />
            <Works />
            <About /> 
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </main>
    )
}