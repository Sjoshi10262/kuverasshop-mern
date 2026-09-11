import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { Accordion } from '../components/common/Accordion';
import { StarRating } from '../components/common/StarRating';
import { formatINR, generateWhatsAppLink } from '../utils/pricing';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useUI } from '../context/UIContext';
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Truck,
  ChevronRight,
  Plus,
  Minus,
  CheckCircle2,
  Share2,
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast, openCart } = useUI();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImageIndex(0);
    setQuantity(1);
  }, [slug]);

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`Added ${quantity} x '${product.name}' to Bag`);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    openCart();
  };

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    showToast(
      isWishlisted
        ? `Removed '${product.name}' from Wishlist`
        : `Added '${product.name}' to Wishlist`
    );
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  const whatsappUrl = generateWhatsAppLink(
    product.name,
    product.salePrice,
    product.rentalPrice,
    'rental'
  );

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const accordionItems = [
    {
      id: 'specifications',
      title: 'Jewellery Specifications & Craftsmanship',
      content: (
        <div className="space-y-2">
          <p className="mb-3">{product.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#FAF8F5] p-3 border border-[#E8E2D9]">
            {Object.entries(product.specifications).map(([key, val]) => (
              <div key={key} className="text-xs">
                <strong className="text-[#111111]">{key}:</strong>{' '}
                <span className="text-[#7A736E]">{val}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Insured Shipping & Delivery Timelines',
      content: (
        <p>
          All orders above ₹3,000 qualify for <strong>FREE Insured Express Shipping</strong> across India via Bluedart/Delhivery. Standard dispatch within 24-48 hours with live tracking code. International shipping is calculated at checkout.
        </p>
      ),
    },
    {
      id: 'care',
      title: 'Jewellery Care Guidelines',
      content: (
        <p>
          To maintain the brilliant gold luster and uncut Kundan stone setting, store in the provided soft microfiber pouch away from direct humidity, perfumes, hairsprays, and harsh chemicals. Clean gently with a soft dry cotton cloth after wearing.
        </p>
      ),
    },
    {
      id: 'rental',
      title: 'WhatsApp Rental Terms',
      content: (
        <p>
          Rental period spans 3 full calendar days. A refundable security deposit is collected prior to dispatch. Jewellery is sanitized with UV-C technology before every shipment. Return pickup is arranged automatically by Kuveras.
        </p>
      ),
    },
  ];

  return (
    <div className="py-8 bg-[#FAF8F5] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-[#7A736E] mb-8">
          <Link to="/" className="hover:text-[#111111]">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-[#111111]">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[#111111]">
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#111111] font-semibold truncate">{product.name}</span>
        </div>

        {/* Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#FFFDF9] border border-[#E8E2D9] p-6 sm:p-10 shadow-luxury mb-16">
          {/* Left: Gallery (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-4/5 w-full bg-[#FAF8F5] border border-[#E8E2D9] overflow-hidden relative">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.discount > 0 && (
                <span className="absolute top-4 left-4 bg-[#8B0000] text-white text-xs font-bold uppercase px-3 py-1 tracking-wider">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-20 h-24 border overflow-hidden shrink-0 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50'
                        : 'border-[#E8E2D9] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Buying Actions (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                  {product.category} • {product.occasion}
                </span>
                <button
                  onClick={handleShare}
                  className="text-xs text-[#7A736E] hover:text-[#111111] flex items-center gap-1"
                  title="Share product"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#111111] font-bold mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4 border-b border-[#F5F0EB] pb-4">
                <StarRating rating={product.rating} count={product.reviewCount} size="md" />
                <span className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock ({product.stock} sets left)
                </span>
              </div>

              {/* Price Block */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-sans text-3xl font-bold text-[#111111]">
                  {formatINR(product.salePrice)}
                </span>
                {product.price > product.salePrice && (
                  <span className="font-sans text-base text-[#7A736E] line-through">
                    {formatINR(product.price)}
                  </span>
                )}
                <span className="text-xs font-semibold text-[#8B0000] uppercase tracking-wider">
                  Save {formatINR(product.price - product.salePrice)}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#7A736E] leading-relaxed mb-6 font-sans">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A]">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#E8E2D9] bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-[#1A1A1A] hover:bg-[#FAF8F5]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-5 text-sm font-bold text-[#111111]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-2 text-[#1A1A1A] hover:bg-[#FAF8F5]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons Stack */}
            <div className="space-y-3 pt-4 border-t border-[#E8E2D9]">
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 bg-[#111111] hover:bg-[#C5A059] text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add To Bag
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`p-3.5 border transition-colors ${
                    isWishlisted
                      ? 'border-[#8B0000] bg-[#8B0000]/10 text-[#8B0000]'
                      : 'border-[#E8E2D9] hover:border-[#111111] text-[#1A1A1A]'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#8B0000]' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#C5A059] text-[#111111] text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
              >
                Buy Now (Instant Checkout)
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Rent Via WhatsApp ({formatINR(product.rentalPrice)}/3 Days)
              </a>

              {/* Insured Delivery Banner */}
              <div className="mt-4 p-3 bg-[#FAF8F5] border border-[#E8E2D9] text-xs text-[#7A736E] space-y-1.5 font-sans">
                <div className="flex items-center gap-2 text-[#111111] font-semibold">
                  <Truck className="w-4 h-4 text-[#D4AF37]" />
                  <span>Insured Express Courier Dispatch</span>
                </div>
                <p className="text-[11px] text-[#7A736E]">
                  Delivered in tamper-proof jewelry box with authenticity certificate.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Accordion Disclosures */}
        <div className="bg-[#FFFDF9] border border-[#E8E2D9] p-6 sm:p-10 shadow-sm mb-16">
          <h2 className="font-serif text-2xl font-bold text-[#111111] mb-6 border-b border-[#E8E2D9] pb-3">
            Product & Rental Disclosures
          </h2>
          <Accordion items={accordionItems} defaultOpenId="specifications" />
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#111111] font-bold mb-6">
              Related Jewellery Sets
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
