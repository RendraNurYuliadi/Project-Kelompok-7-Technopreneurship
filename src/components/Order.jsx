import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

export default function Order({ theme }) {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    detail: ''
  })

  const [selectedServices, setSelectedServices] = useState({})
  const [loading, setLoading] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState(null)

  const services = {
    'Design Services': [
      'Poster Canva',
      'Banner Instagram / event',
      'Thumbnail YouTube',
      'CV / portofolio',
      'Figma product design'
    ],
    'Web Development': [
      'Website portfolio',
      'Website undangan',
      'Landing page event',
      'Profil usaha kecil / Company Profile'
    ],
    'Data & Scraping': [
      'Data scraping e-commerce',
      'Scraping website/katalog',
      'Pengumpulan data riset',
      'Survey respondent service'
    ]
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const toggleService = (category, service) => {
    const key = `${category}-${service}`
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
        const [category, service] = key.split('-')
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
        // Generate WhatsApp message
        const message = `*Pesanan Jasa Digisolve Studio*

Nama: ${formData.nama}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}

*Layanan yang Dipesan:*
${selectedList}

*Detail Proyek:*
${formData.detail || 'Tidak ada detail tambahan'}

_Terima kasih! Admin akan segera menghubungi Anda._`

        // Encode message and open WhatsApp
        const whatsappNumber = '6281292731092'
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        // Reset form
        setFormData({ nama: '', email: '', whatsapp: '', detail: '' })
        setSelectedServices({})
        setLoading(false)

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank')
      })
      .catch(err => {
        console.error('Error:', err)
        alert('Terjadi kesalahan. Silakan coba lagi.')
        setLoading(false)
      })
  }

  const categoryVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="order" className="relative overflow-hidden py-20">
      <BackgroundParticles />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between" data-aos="fade-down">
          <div>
            <h2 className="text-3xl font-bold">Order Jasa</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">Pesan layanan desain, web development, atau data scraping. Harga akan dikonfirmasi oleh admin via WhatsApp.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Services Selection */}
          <div className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass" data-aos="fade-right">
            <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Pilih Layanan</h3>
            <div className="space-y-3">
              {Object.entries(services).map(([category, items]) => (
                <div key={category}>
                  <motion.button
                    onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-medium text-slate-900 dark:text-white">{category}</span>
                    <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
                      {expandedCategory === category ? 'expand_less' : 'expand_more'}
                    </span>
                  </motion.button>

                  <AnimatePresence>
                    {expandedCategory === category && (
                      <motion.div
                        variants={categoryVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="mt-2 ml-2 space-y-2 border-l-2 border-slate-300 dark:border-slate-600 pl-3">
                          {items.map((service, idx) => (
                            <motion.label
                              key={service}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <input
                                type="checkbox"
                                checked={selectedServices[`${category}-${service}`] || false}
                                onChange={() => toggleService(category, service)}
                                className="w-4 h-4 rounded cursor-pointer"
                              />
                              <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                {service}
                              </span>
                            </motion.label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Selected Services Display */}
            {Object.values(selectedServices).some(v => v) && (
              <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-medium text-slate-900 dark:text-white mb-2">Layanan Terpilih:</p>
                <div className="space-y-1">
                  {Object.entries(selectedServices)
                    .filter(([_, selected]) => selected)
                    .map(([key, _]) => {
                      const [category, service] = key.split('-')
                      return (
                        <div key={key} className="text-sm text-slate-700 dark:text-slate-300">
                          • {service}
                        </div>
                      )
                    })}
                </div>
              </div>
            )}
          </div>

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
                  Membuka WhatsApp...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">send</span>
                  Pesan via WhatsApp
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
