"use client"

import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="flex items-center">
          <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="space-y-4 text-center lg:text-right">
                <h1 className="text-4xl font-medium text-white leading-tight text-balance lg:text-5xl">
                  <span className="text-primary block text-5xl lg:text-6xl mb-3">مدينة مصر</span>
                  للإسكان والتعمير
                </h1>
                <p className="text-lg lg:text-xl font-normal text-white/90 mb-3">
                  شقق وفيلات فاخرة بالتقسيط في القاهرة الجديدة
                </p>
                <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  اكتشف مشاريع مدينة مصر المتميزة - وحدات سكنية وفيلات فاخرة بأسعار تبدأ من 3.9 مليون جنيه مع أنظمة سداد مرنة في القاهرة الجديدة ومدينة المستقبل
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 max-w-2xl mx-auto lg:mx-0">
                {[
                  { value: "683+", label: "وحدة متاحة" },
                  { value: "5%", label: "مقدم" },
                  { value: "10", label: "سنوات تقسيط" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center lg:text-right space-y-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="text-3xl lg:text-4xl font-semibold text-primary">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-full max-w-lg mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
