import React from 'react'
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import FloatingButtons from '../components/FloatingButtons'
import logo from '../components/OurTeam/Icon2.png'
import CanvaImg from '../components/OurTeam/Service/Canva.png'
import InstagramImg from '../components/OurTeam/Service/Instagram Feed Design.png'
import DesignImg from '../components/OurTeam/Service/Thubnail YTB.png'
import CVPortfolioImg from '../components/OurTeam/Service/CV  Portofolio.png'
import FigmaImg from '../components/OurTeam/Service/Figma Design.png'
import CompanyProfileImg from '../components/OurTeam/Service/Company Profile.png'
import LandingPageImg from '../components/OurTeam/Service/Landing Page Web.png'
import PortfolioSiteImg from '../components/OurTeam/Service/Portofolio Site Web.png'
import EventWebImg from '../components/OurTeam/Service/Event Web.png'
import InvitationWebImg from '../components/OurTeam/Service/Invitation Web.png'
import WebScrapImg from '../components/OurTeam/Service/Web Scrap.png'
import ECommerceImg from '../components/OurTeam/Service/E-Commers Data Scrap.png'
import ScrapingCleaningImg from '../components/OurTeam/Service/Scraping + Cleaning Data.png'
import SurveyImg from '../components/OurTeam/Service/Survei Automation - G Form.png'
import BannerEventImg from '../components/OurTeam/Service/Banner-Event.png'

const categories = [
  {
    title: 'Design Services',
    description: 'Desain visual untuk kebutuhan digital dan branding dengan pendekatan modern, profesional, dan siap digunakan untuk promosi bisnis maupun personal.',
    products: [
      {
        title: 'Poster Canva',
        image: CanvaImg,
        oldPrice: 'Rp140.000/desain',
        price: 'Rp30.000 - Rp100.000/desain',
        description: 'Desain poster promosi, informasi acara, atau kebutuhan pemasaran digital dengan tampilan menarik dan komunikatif.'
      },
      {
        title: 'Instagram Feed Design',
        image: InstagramImg,
        oldPrice: 'Rp100.000/post',
        price: 'Rp25.000 - Rp75.000/post',
        description: 'Desain konten Instagram berbentuk feed atau carousel untuk meningkatkan engagement dan memperkuat identitas brand.'
      },
      {
        title: 'Banner Event',
        image: BannerEventImg,
        oldPrice: 'Rp200.000/desain',
        price: 'Rp50.000 - Rp150.000/desain',
        description: 'Desain banner acara yang menarik perhatian untuk meningkatkan promosi dan engagement di berbagai media.'
      },
      {
        title: 'Thumbnail YouTube',
        image: DesignImg,
        oldPrice: 'Rp100.000/desain',
        price: 'Rp20.000 - Rp75.000/desain',
        description: 'Thumbnail profesional yang dirancang untuk menarik perhatian audiens dan meningkatkan click-through rate (CTR).'
      },
      {
        title: 'CV / Portfolio',
        image: CVPortfolioImg,
        oldPrice: 'Rp200.000/file',
        price: 'Rp50.000 - Rp150.000/file',
        description: 'Pembuatan CV ATS-friendly dan portofolio profesional yang rapi, modern, dan siap digunakan untuk melamar kerja atau magang.'
      },
      {
        title: 'Figma Design',
        image: FigmaImg,
        oldPrice: 'Rp700.000/page',
        price: 'Rp150.000 - Rp500.000/page',
        description: 'Desain antarmuka website atau aplikasi menggunakan Figma dengan fokus pada user experience dan tampilan modern.'
      }
    ],
    buttonLabel: 'Order Design',
    buttonLink: '/order'
  },
  {
    title: 'Web Development',
    description: 'Pembuatan website modern, responsif, dan sesuai kebutuhan bisnis, personal branding, maupun kegiatan organisasi.',
    products: [
      {
        title: 'Company Profile',
        image: CompanyProfileImg,
        oldPrice: 'Rp6.000.000/website',
        price: 'Rp1.000.000 - Rp5.000.000/website',
        description: 'Website profesional untuk memperkenalkan perusahaan, layanan, visi misi, dan informasi kontak.'
      },
      {
        title: 'Landing Page',
        image: LandingPageImg,
        oldPrice: 'Rp3.000.000/website',
        price: 'Rp500.000 - Rp2.000.000/website',
        description: 'Halaman promosi tunggal yang dirancang untuk meningkatkan konversi produk, jasa, atau kampanye tertentu.'
      },
      {
        title: 'Portfolio Website',
        image: PortfolioSiteImg,
        oldPrice: 'Rp3.500.000/website',
        price: 'Rp750.000 - Rp2.500.000/website',
        description: 'Website personal untuk menampilkan profil, pengalaman, proyek, dan karya profesional.'
      },
      {
        title: 'Website UMKM',
        image: EventWebImg,
        oldPrice: 'Rp6.000.000/website',
        price: 'Rp1.500.000 - Rp5.000.000/website',
        description: 'Website lengkap untuk UMKM yang mencakup showcase produk, informasi bisnis, dan saluran komunikasi dengan pelanggan.'
      },
      {
        title: 'Web Undangan',
        image: InvitationWebImg,
        oldPrice: 'Rp1.000.000/website',
        price: 'Rp200.000 - Rp750.000/website',
        description: 'Undangan digital interaktif untuk acara seperti pernikahan, ulang tahun, atau kegiatan lainnya.'
      }
    ],
    buttonLabel: 'Order Web Development',
    buttonLink: '/order'
  },
  {
    title: 'Data & Scraping',
    description: 'Layanan pengumpulan, pengolahan, dan otomatisasi data untuk kebutuhan riset, analisis, dan pengambilan keputusan.',
    products: [
      {
        title: 'Scraping Website Sederhana',
        image: WebScrapImg,
        oldPrice: 'Rp600.000/project',
        price: 'Rp100.000 - Rp500.000',
        description: 'Pengambilan data otomatis dari website tertentu dan diekspor ke format yang mudah digunakan.'
      },
      {
        title: 'Scraping E-Commerce',
        image: ECommerceImg,
        oldPrice: 'Rp1.600.000/project',
        price: 'Rp300.000 - Rp1.500.000',
        description: 'Pengumpulan data produk marketplace seperti nama produk, harga, rating, dan informasi pendukung lainnya.'
      },
      {
        title: 'Scraping + Cleaning Data',
        image: ScrapingCleaningImg,
        oldPrice: 'Rp2.200.000/project',
        price: 'Rp500.000 - Rp2.000.000',
        description: 'Pengumpulan dan pembersihan data agar output siap analisis dengan kualitas lebih baik dan lebih mudah diproses.'
      },
      {
        title: 'Automation Survey',
        image: SurveyImg,
        oldPrice: 'Rp1.600.000/project',
        price: 'Rp300.000 - Rp1.500.000',
        description: 'Pembuatan sistem survei berbasis Google Form yang terintegrasi dengan Google Sheets untuk pengumpulan dan pengelolaan data yang lebih efisien.'
      }
    ],
    buttonLabel: 'Order Data Scraping',
    buttonLink: '/order'
  }
]

export default function ProductsPage({ theme }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white">
      <div className="fixed w-full z-40 top-4 px-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl py-3 px-4 shadow-glass backdrop-blur">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <img src={logo} alt="Digisolve Studio" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold">Digisolve Studio</span>
          </Link>

          <Link to="/order" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-slate-100 transition">
            Order Sekarang
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </nav>
      </div>

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-glass glass">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Product Overview</p>
            <h1 className="mt-4 text-4xl font-bold">Daftar Produk Digisolve Studio</h1>
            <p className="mt-4 max-w-3xl text-slate-300 text-sm md:text-base">Jelajahi tiga kategori produk utama kami: Design Services untuk kebutuhan branding dan konten visual, Web Development untuk website bisnis ringan, dan Data & Scraping untuk automasi data dan laporan. Setiap kategori dirancang untuk mendukung UMKM, mahasiswa, dan pelaku usaha kecil.</p>
          </div>

          <div className="space-y-20">
            {categories.map((category) => (
              <section key={category.title} className="rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 md:p-12 shadow-glass glass">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                  <p className="mt-3 text-slate-300 max-w-2xl">{category.description}</p>
                </div>

                <ProductCarousel products={category.products} />
              </section>
            ))}
          </div>
        </div>
      </main>
      <FloatingButtons />
    </div>
  )
}
