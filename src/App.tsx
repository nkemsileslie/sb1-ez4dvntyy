import React, { useState } from 'react';
import { Instagram, ShoppingBag, ChevronLeft, ChevronRight, Menu, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Pink Tulle Dream Gown',
    price: '£80',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572468/launch_auhf4l.jpg'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'A stunning pink tulle gown with dramatic ruffles and elegant draping.',
    
    sizes: [],
  },
  {
    id: 2,
    name: 'Brown Velvet Dress',
    price: '£170',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572496/IMG_3974_yoy5ri.jpg',
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572497/IMG_3976_amtbh2.jpg'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'Luxurious velvet blazer perfect for evening occasions.',
    
    sizes: [],
  },
  {
    id: 3,
    name: 'Gold Evening Gown',
    price: '£180',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572442/IMG_4173_jwr22o.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dqpfmefo8/image/upload/v1745323752/cream_back_bxqvld.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dqpfmefo8/image/upload/v1745323747/cream_pose_m8ask4.jpg?auto=format&fit=crop&q=80&w=720'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'Elegant evening gown with crystal embellishments.',
    
    sizes: [],
  },
  {
    id: 4,
    name: 'Purple Satin Dress',
    price: '£180',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572464/IMG_4129_krvwxa.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572441/IMG_4153_zkwkay.jpg?auto=format&fit=crop&q=80&w=720'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'Luxurious satin two-piece set for special occasions.',
    
    sizes: [],
  },
  {
    id: 5,
    name: 'Green Silk Dress',
    price: '£170',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572485/IMG_4096_tce1ig.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572449/IMG_4111_wzofvw.jpg?auto=format&fit=crop&q=80&w=720'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'Flowing silk dress with delicate details.',
    
    sizes: [],
  },
  {
    id: 6,
    name: 'Emerald Evening Gown',
    price: '£180',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572471/IMG_3997_lzl3qq.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dqpfmefo8/image/upload/v1745326808/deep_green_backk_w6bwtt.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dqpfmefo8/image/upload/v1745325724/deep_green_closing_mafn6e.jpg?auto=format&fit=crop&q=80&w=720'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'Stunning two-piece evening set with intricate beading.',
    sizes: [],
  },
  {
    id: 7,
    name: 'Orange Velvet Gown',
    price: '£170',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572533/IMG_4019_auw0rv.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572432/IMG_4016_za5ay8.jpg?auto=format&fit=crop&q=80&w=720'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'Stunning two-piece evening set with intricate beading.',
    sizes: [],
  },
  {
    id: 8,
    name: 'Mint Silk Dress',
    price: '£165',
    images: [
      'https://res.cloudinary.com/dennnhuvl/image/upload/v1744572520/IMG_4067_q4ygcv.jpg?auto=format&fit=crop&q=80&w=720',
      'https://res.cloudinary.com/dqpfmefo8/image/upload/v1745325200/baby_green_front_1_aehjzc.jpg'
    ],
    instagram: 'https://www.instagram.com/saintsuzzysignature',
    description: 'A stunning pink tulle gown with dramatic ruffles and elegant draping.',
    sizes: [],
  }
];

function ProductImageGallery({ images }: { images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
        <img
          src={images[currentImageIndex]}
          alt="Product view"
          className="w-full h-full object-cover object-center transition-transform duration-500"
        />
        
        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={previousImage}
            className="p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="p-2 bg-white/80 rounded-full text-gray-800 hover:bg-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-light tracking-widest text-gray-800">
            SAINTSUZZY
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/shop" className="text-gray-800 hover:text-gray-600">Shop</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/saintsuzzysignature"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800"
            >
              <Instagram size={24} />
            </a>
            
            {/* Hamburger menu button */}
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 md:hidden z-40"
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl md:hidden z-50"
            >
              <div className="p-4">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="mt-8 flex flex-col space-y-4">
                  <Link 
                    to="/" 
                    className="text-lg text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/shop" 
                    className="text-lg text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-lg text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dennnhuvl/image/upload/v1744572468/launch_auhf4l.jpg"
            alt="Pink Tulle Dream Gown"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-wider mb-4">Pink Tulle Dream</h2>
            <p className="text-lg md:text-xl font-light tracking-wide mb-8">Elegance redefined for the modern woman</p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3 bg-white text-gray-900 text-base font-light tracking-wide hover:bg-gray-100 transition-colors duration-300"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Collection */}
      <section className="py-24 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light tracking-wide text-center mb-16"
          >
            Featured Collection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <ProductImageGallery images={product.images} />
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-light text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                  <a
                    href={product.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Buy</span>
                    <ShoppingBag size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Shop() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light tracking-wide text-center mb-16"
          >
            All Collections
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <ProductImageGallery images={product.images} />
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-light text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {product.sizes.map(size => (
                        <span key={size} className="text-xs border px-2 py-1 text-gray-600">
                          {size}
                        </span>
                      ))}
                    </div>
                    <a
                      href={product.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>Buy Now</span>
                      <ShoppingBag size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="pt-16">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://res.cloudinary.com/dennnhuvl/image/upload/v1744695234/Screenshot_from_2025-04-12_00-43-46_lhx11l.png?auto=format&fit=crop&q=80"
                alt="About"
                className="w-full h-[600px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-light tracking-wide">About Saintsuzzy</h2>
              <p className="text-gray-600 leading-relaxed">
              Saintsuzzy is more than just a brand — it's a lifestyle that celebrates elegance, confidence, and the multifaceted beauty of the modern woman. Founded by the visionary entrepreneur known as Saintsuzzy, the brand has grown into a dynamic empire encompassing several distinct but interwoven ventures:

              Saintsuzzy Signature – our flagship fashion line known for its luxurious, contemporary pieces designed to elevate every woman’s wardrobe.

              Saintsuzzy Beauty – A makeup brand that enhances natural beauty with bold, high-quality cosmetics.

              Saintsuzzy Wigs – high-quality, stylish wig installations crafted to suit every look and mood.

              Saintsuzzy Shots – a creative visual arm that captures the essence of the brand through photography and media.

              At the heart of it all is Saintsuzzy, the CEO and creative force behind the movement. With a deep passion for empowering women through fashion and self-expression, she blends timeless sophistication with modern flair in every product and campaign. Her leadership, authenticity, and attention to detail have built a brand that not only sets trends but also inspires confidence in women everywhere.

              Saintsuzzy continues to redefine what it means to be stylish, powerful, and unapologetically yourself.. 
                
              </p>
              <a
                href="https://www.instagram.com/saintsuzzysignature"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700"
              >
                <span>Follow us on Instagram</span>
                <Instagram size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8f5f2]">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-light tracking-wide text-gray-900">Saintsuzzy</h2>
                <p className="text-sm text-gray-500 mt-1">Elegance in every detail</p>
              </div>

              {/* Contact */}
              <div className="text-center space-y-2">
                <a 
                  href="mailto:thesaintsuzzybrand@gmail.com" 
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  thesaintsuzzybrand@gmail.com
                </a>
                <a 
                  href="tel:+447881846017" 
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +44 7881 846017
                </a>
              </div>

              {/* Social */}
              <div className="text-center md:text-right">
                <a
                  href="https://www.instagram.com/saintsuzzysignature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span className="text-sm">Follow us</span>
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;