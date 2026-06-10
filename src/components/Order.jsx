import React, { useState } from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import CanvaImg from './OurTeam/Service/Canva.png'
import InstagramImg from './OurTeam/Service/Instagram Feed Design.png'
import DesignImg from './OurTeam/Service/Thubnail YTB.png'
import CVPortfolioImg from './OurTeam/Service/CV  Portofolio.png'
import FigmaImg from './OurTeam/Service/Figma Design.png'
import BannerEventImg from './OurTeam/Service/Banner-Event.png'
import CompanyProfileImg from './OurTeam/Service/Company Profile.png'
import LandingPageImg from './OurTeam/Service/Landing Page Web.png'
import PortfolioSiteImg from './OurTeam/Service/Portofolio Site Web.png'
import EventWebImg from './OurTeam/Service/Event Web.png'
import InvitationWebImg from './OurTeam/Service/Invitation Web.png'
import WebScrapImg from './OurTeam/Service/Web Scrap.png'
import ECommerceImg from './OurTeam/Service/E-Commers Data Scrap.png'
import ScrapingCleaningImg from './OurTeam/Service/Scraping + Cleaning Data.png'
import SurveyImg from './OurTeam/Service/Survei Automation - G Form.png'

export default function Order({ theme }) {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    detail: ''
  })

  const [selectedServices, setSelectedServices] = useState({})
  const [loading, setLoading] = useState(false)

  const services = {
    'Design Services': [
      { name: 'Poster Canva', image: CanvaImg, oldPrice: 'Rp140.000/desain', price: 'Rp30.000 - Rp100.000/desain' },
      { name: 'Instagram Feed Design', image: InstagramImg, oldPrice: 'Rp100.000/post', price: 'Rp25.000 - Rp75.000/post' },
      { name: 'Banner Event', image: BannerEventImg, oldPrice: 'Rp200.000/desain', price: 'Rp50.000 - Rp150.000/desain' },
      { name: 'Thumbnail YouTube', image: DesignImg, oldPrice: 'Rp100.000/desain', price: 'Rp20.000 - Rp75.000/desain' },
      { name: 'CV / Portfolio', image: CVPortfolioImg, oldPrice: 'Rp200.000/file', price: 'Rp50.000 - Rp150.000/file' },
      { name: 'Figma Design', image: FigmaImg, oldPrice: 'Rp700.000/page', price: 'Rp150.000 - Rp500.000/page' }
    ],
    'Web Development': [
      { name: 'Company Profile', image: CompanyProfileImg, oldPrice: 'Rp6.000.000/website', price: 'Rp1.000.000 - Rp5.000.000/website' },
      { name: 'Landing Page', image: LandingPageImg, oldPrice: 'Rp3.000.000/website', price: 'Rp500.000 - Rp2.000.000/website' },
      { name: 'Portfolio Website', image: PortfolioSiteImg, oldPrice: 'Rp3.500.000/website', price: 'Rp750.000 - Rp2.500.000/website' },
      { name: 'Website UMKM', image: EventWebImg, oldPrice: 'Rp6.000.000/website', price: 'Rp1.500.000 - Rp5.000.000/website' },
      { name: 'Web Undangan', image: InvitationWebImg, oldPrice: 'Rp1.000.000/website', price: 'Rp200.000 - Rp750.000/website' }
    ],
    'Data & Scraping': [
      { name: 'Scraping Website Sederhana', image: WebScrapImg, oldPrice: 'Rp600.000/project', price: 'Rp100.000 - Rp500.000' },
      { name: 'Scraping E-Commerce', image: ECommerceImg, oldPrice: 'Rp1.600.000/project', price: 'Rp300.000 - Rp1.500.000' },
      { name: 'Scraping + Cleaning Data', image: ScrapingCleaningImg, oldPrice: 'Rp2.200.000/project', price: 'Rp500.000 - Rp2.000.000' },
      { name: 'Automation Survey', image: SurveyImg, oldPrice: 'Rp1.600.000/project', price: 'Rp300.000 - Rp1.500.000' }
    ]
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleService = (category, serviceName) => {
    const key = `${category}::${serviceName}`
    setSelectedServices(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.nama || !formData.email || !formData.whatsapp) {
      alert('Mohon isi nama, email, dan nomor WhatsApp')
      return
    }

    if (Object.values(selectedServices).every(v => !v)) {
      alert('Mohon pilih minimal 1 layanan')
      return
    }

    setLoading(true)

    // Generate selected services text
    const selectedList = Object.entries(selectedServices)
      .filter(([_, selected]) => selected)
      .map(([key, _]) => {
        const [category, service] = key.split('::')
        return `• ${service} (${category})`
      })
      .join('\n')

    // Prepare form data for Getform
    const formDataForGetform = new FormData()
    formDataForGetform.append('fi-sender-fullName', formData.nama)
    formDataForGetform.append('fi-sender-email', formData.email)
    formDataForGetform.append('fi-text-whatsapp', formData.whatsapp)
    formDataForGetform.append('fi-text-services', selectedList)
    formDataForGetform.append('fi-text-detail', formData.detail || '-')
    formDataForGetform.append('fi-text-form-type', 'order')

    // Submit to Getform
    fetch('https://getform.io/f/lb4s0n3vzd5', {
      method: 'POST',
      body: formDataForGetform
    })
      .then(() => {
        // Reset form
        setFormData({ nama: '', email: '', whatsapp: '', detail: '' })
        setSelectedServices({})
        setLoading(false)

        alert('Pesan berhasil dikirim. Form ini akan diproses oleh Formini dan admin akan menghubungi Anda.')
      })
      .catch(err => {
        console.error('Error:', err)
        alert('Terjadi kesalahan. Silakan coba lagi.')
        setLoading(false)
      })
  }

  return (
    <section id="order" className="relative overflow-hidden py-20">
      <BackgroundParticles />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12" data-aos="fade-down">
          <div>
            <h2 className="text-3xl font-bold">Order Jasa</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-2xl">Pilih layanan yang Anda butuhkan dan isi formulir untuk memulai. Admin akan menghubungi Anda setelah formulir dikirim.</p>
          </div>
        </div>

        {/* Services Selection - Card Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Pilih Layanan</h3>
          {Object.entries(services).map(([category, items]) => (
            <div key={category} className="mb-10">
              <h4 className="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">{category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((serviceItem) => {
                  const service = serviceItem.name
                  const serviceKey = `${category}::${service}`
                  const isSelected = selectedServices[serviceKey]
                  return (
                    <motion.div
                      key={serviceKey}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleService(category, service)}
                      className={`relative overflow-hidden rounded-2xl cursor-pointer border-2 transition-all duration-300 group ${
                        isSelected
                          ? 'glass border-white/30 bg-white/10 shadow-lg'
                          : 'glass border-white/10 hover:border-white/20 hover:shadow-md'
                      }`}
                    >
                      {/* Image Section */}
                      <div className="relative h-58 overflow-hidden bg-slate-900">
                        {serviceItem.image ? (
                          <img
                            src={serviceItem.image}
                            alt={service}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-3xl">image</span>
                          </div>
                        )}

                        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                          Layanan
                        </div>

                        {serviceItem.price && (
                          <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
                            {serviceItem.oldPrice && (
                              <span className="rounded-full bg-red-500 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white line-through shadow-sm">
                                {serviceItem.oldPrice}
                              </span>
                            )}
                            <span className="rounded-full bg-emerald-500 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
                              {serviceItem.price}
                            </span>
                          </div>
                        )}
                        {isSelected && (
                          <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h5 className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">{service}</h5>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            isSelected
                              ? 'bg-white/80 border-white/80'
                              : 'border-white/40'
                          }`}>
                            {isSelected && (
                              <span className="material-symbols-outlined text-xs text-slate-900">check</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Summary and Form */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Selected Services Summary */}
          {Object.values(selectedServices).some(v => v) && (
            <div className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass" data-aos="fade-right">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Layanan Terpilih</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {Object.entries(selectedServices)
                  .filter(([_, selected]) => selected)
                  .map(([key, _]) => {
                    const [category, service] = key.split('::')
                    return (
                      <div key={key} className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50">
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">{service}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{category}</p>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          onClick={() => toggleService(category, service)}
                          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        >
                          <span className="material-symbols-outlined text-sm">close</span>
                        </motion.button>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass grid gap-4" data-aos="fade-left">
            <div className="relative">
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                placeholder="Nama Lengkap"
                className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500"
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="Nomor WhatsApp"
                className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500"
              />
            </div>

            <div className="relative">
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleInputChange}
                placeholder="Detail Proyek (opsional)"
                className="w-full min-h-[120px] rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500 resize-none"
                rows={4}
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl bg-black text-white px-6 py-3 font-semibold shadow-lg shadow-black/20 transition-all duration-300 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">hourglass_top</span>
                  Mengirim...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">send</span>
                  Kirim Pesan
                </>
              )}
            </motion.button>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              ℹ️ File dan detail lebih lanjut dapat dikirim via WhatsApp setelah konfirmasi admin.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
