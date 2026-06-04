import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductCarousel({ products }) {
  const [current, setCurrent] = useState(0)
  const [activeProduct, setActiveProduct] = useState(null)

  const next = () => setCurrent((current + 1) % products.length)
  const prev = () => setCurrent((current - 1 + products.length) % products.length)

  const itemsPerView = 3

  const visibleProducts = []
  for (let i = 0; i < itemsPerView; i++) {
    visibleProducts.push(products[(current + i) % products.length])
  }

  const closeModal = () => setActiveProduct(null)

  useEffect(() => {
    if (!activeProduct) {
      document.body.classList.remove('product-modal-open')
      document.body.style.overflow = ''
      return
    }

    document.body.classList.add('product-modal-open')
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.classList.remove('product-modal-open')
      document.body.style.overflow = ''
    }
  }, [activeProduct])

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleProducts.map((product, idx) => (
          <motion.div
            key={`${current}-${idx}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActiveProduct(product)}
            className="glass cursor-pointer rounded-[2.5rem] border border-white/10 shadow-glass overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="relative h-64 overflow-hidden bg-slate-1000">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-center text-slate-400 px-4">
                  <span className="text-sm">{product.title}</span>
                </div>
              )}

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">Layanan</span>
                {product.price && (
                  <div className="text-right">
                    {product.oldPrice && (
                      <span className="block rounded-full bg-red-500/90 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white line-through shadow-sm">
                        {product.oldPrice}
                      </span>
                    )}
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/95 px-3 py-1 text-[9px] font-semibold text-white shadow-sm">
                      {product.price}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-7 flex flex-col gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                {product.subtitle && <p className="mt-2 text-sm text-slate-400">{product.subtitle}</p>}
              </div>

              {product.description && (
                <p className="text-slate-300 text-sm leading-7">{product.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="p-3 rounded-full glass border border-white/10 hover:bg-white/10 transition"
          aria-label="Previous"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div className="flex gap-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition ${
                idx === current ? 'w-6 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to product ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="p-3 rounded-full glass border border-white/10 hover:bg-white/10 transition"
          aria-label="Next"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <style>{`
        body.product-modal-open main,
        body.product-modal-open main * {
          pointer-events: none !important;
          user-select: none !important;
        }

        body.product-modal-open .product-modal-overlay,
        body.product-modal-open .product-modal-overlay *,
        body.product-modal-open .product-modal-container,
        body.product-modal-open .product-modal-container * {
          pointer-events: auto !important;
        }
      `}</style>

      {createPortal(
        <AnimatePresence>
          {activeProduct && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="product-modal-overlay fixed inset-0 bg-black/50 z-40 pointer-events-auto"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="product-modal-container fixed inset-0 z-50 flex items-center justify-center px-4"
              >
                <div className="glass border border-white/10 rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-white/10"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>

                  {activeProduct.image && (
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.title}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  )}

                  <div className="mt-6 rounded-3xl bg-slate-1000 p-6 text-white">
                    <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-white">Detail Produk</p>
                    <h3 className="text-3xl font-bold">{activeProduct.title}</h3>
                    {activeProduct.price && (
                      <div className="mt-4 space-y-2">
                        {activeProduct.oldPrice && (
                          <p className="text-sm font-semibold text-slate-300 line-through">{activeProduct.oldPrice}</p>
                        )}
                        <p className="text-lg font-semibold text-emerald-300">{activeProduct.price}</p>
                      </div>
                    )}
                    {activeProduct.description && (
                      <p className="mt-6 leading-relaxed text-white/70">{activeProduct.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}
