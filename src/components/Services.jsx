import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import DesignImg from './OurTeam/Service/Design.png'
import WebDevImg from './OurTeam/Service/WebDev.png'
import ScrapImg from './OurTeam/Service/Scrap.png'

const services = [
  {
    title:'Design Services',
    description:'Desain visual untuk kebutuhan digital dan cetak dengan pendekatan brand-ready dan modern.',
    image: DesignImg,
    items:['Poster Canva', 'Banner Instagram / event', 'Thumbnail YouTube', 'CV / portofolio', 'Figma product design']
  },
  {
    title:'Web Development',
    description:'Pembuatan website sederhana untuk portfolio, company profile, event, undangan, dan landing page.',
    image: WebDevImg,
    items:['Company Profile', 'Landing Page', 'Portfolio Site', 'Event Website', 'Invitation Website']
  },
  {
    title:'Data & Scraping',
    description:'Pengumpulan dan pengolahan data otomatis untuk riset, analisis, dan laporan bisnis.',
    image: ScrapImg,
    items:['Website scraping', 'E-commerce data', 'Export CSV / Excel / JSON', 'Survey automation']
  }
]

export default function Services({ theme }){
  return (
    <section id="services" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="text-slate-400 max-w-2xl">Layanan Digisolve Studio mencakup desain, web development, dan data scraping untuk mendukung UMKM, mahasiswa, dan pelaku usaha kecil.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service,idx)=> (
            <motion.div key={service.title} whileHover={{y:-8}} whileInView={{opacity:1,y:0}} initial={{opacity:0,y:20}} viewport={{once:true}} transition={{duration:0.5,delay:idx*0.1}} data-aos="fade-up" data-aos-delay={idx*100} className="glass p-8 rounded-3xl border border-white/10 shadow-glass relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/5 blur-2xl" />
              <div className="mb-6 h-48 w-full rounded-2xl overflow-hidden bg-white/5">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-300 text-sm">{service.description}</p>
              <ul className="mt-5 space-y-3 text-slate-300 text-sm">
                {service.items.map(item => <li key={item} className="flex items-center gap-3"><span className="text-white">•</span>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} data-aos="fade-up" className="mt-12 p-8 md:p-12 rounded-3xl border border-white/10 shadow-glass glass text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Siap untuk order?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">Pilih layanan yang Anda butuhkan dan mulai proses order sekarang. Tim kami siap membantu mewujudkan visi digital Anda.</p>
          <Link to="/order" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition">
            <span>Pesan Sekarang</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
