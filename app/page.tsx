import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import AboutDeveloper from "@/components/about-developer"
import ContactForm from "@/components/contact-form"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <section 
        id="contact" 
        className="py-20 lg:py-32 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/projects/sarai.webp')" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">تواصل معنا</h2>
              <p className="text-lg text-white/90">
                املأ النموذج وسيتواصل معك فريقنا في أقرب وقت للإجابة على جميع استفساراتك حول مشاريع مدينة مصر
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <AboutDeveloper />
      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
