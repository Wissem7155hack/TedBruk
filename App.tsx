import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  ArrowRight, Leaf, PencilRuler, Shovel, CheckCircle, Play, Loader2, Send, Phone, ArrowDown,
  Maximize2, MapPin, Clock, Quote, Star
} from 'lucide-react';
import { NavigationLinks, ProjectImage, BlogPost } from './types';

// Import blog images
import img1 from './images/1.jpg';

import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';
import img7 from './images/7.jpg';

import img8 from './images/8.jpg';

import img9 from './images/moroccan-flower.png';
import img10 from './images/9.jpg';
import img11 from './images/10.jpg';
import img12 from './images/11.jpg';
import img13 from './images/arrows.png';
import img14 from './images/pattern.png';
import img15 from './images/12.jpg';
import img20 from './images/back.jpeg';






// BeforeAfterSlider Component
const BeforeAfterSlider: React.FC<{ beforeImage: string | Record<string, unknown>; afterImage: string | Record<string, unknown>; }> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={String(afterImage)}
          alt="Nach der Transformation"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          After
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={String(beforeImage)}
          alt="Before Transformation"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0.5 h-6 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Blog Data ---
const blogPosts: BlogPost[] = [

  {
    id: '1',
    slug: 'professional-lawn-care-garden-maintenance',
    title: '',
    image: img1,
    excerpt: 'At TedBruk, we understand that a flawless lawn is the foundation of your beautiful outdoor area. Our comprehensive weekly lawn care and garden maintenance program ensures your lawn and garden remain lush, healthy, and perfectly maintained throughout the year.',
    story: [
      'At TedBruk, we recognize the importance of a flawless lawn as the foundation of your beautiful outdoor area. Our comprehensive weekly lawn care and garden maintenance program includes our proven fertilization and weed control strategy to ensure your lawn and garden remain lush, healthy, and perfectly maintained all year round.',
      'This program also offers a choice of seasonal services – choose between winter pruning, spring jumpstart, mulch installation, summer refresh, or fall cleanup – to further enhance and maintain the beauty and health of your garden with sustainable practices.',

      '## Lawn Mowing – The Foundation of Lawn Care',
      'A well-mowed lawn goes beyond simple aesthetics; it is crucial for the health and vitality of your grass. At TedBruk, we follow optimal mowing practices and keep our cutting heights between 3 and 5 cm to promote a dense, robust lawn.',
      'We use sharp blades for clean, precise cuts that prevent damage to the grass blades and reduce the risk of disease. Our mowing patterns are strategically varied to avoid soil compaction and promote the natural decomposition of grass clippings, enriching your lawn with essential nutrients.',
      'Additionally, our edging technique ensures a polished, well-groomed appearance that defines your planting beds and highlights the overall beauty of your garden.',

      '## Lawn Care – Fertilization and Weed Control',
      'Our comprehensive program ensures your lawn receives the nutrients it needs for robust growth. Including preventive crabgrass control and winter fertilizer application, this program is designed to keep your lawn healthy and weed-free all year round.',
      'We emphasize the importance of proper watering techniques to maximize the effectiveness of our treatments. Our program includes seasonal fertilization and weed control steps tailored to the local climate.',

      '## Garden Maintenance – More Than Just Lawn',
      'Our weekly lawn care service goes beyond just lawn care to comprehensively maintain your garden. We carefully weed by hand and apply herbicides to control unwanted plants, and we precisely cut tree rings for a tidy look.',
      'Our team prunes roses and removes faded perennials to promote healthy growth and abundant flowering. Additionally, we prune spring ephemerals at the right time to ensure your garden remains vibrant and beautifully maintained throughout the year.',
      'We also take care of hedge trimming, shrub care, bed maintenance, and the removal of leaves and garden waste. Every aspect of your garden receives the attention it deserves.',

      '## Seasonal Service Options',
      'In our comprehensive weekly maintenance package, you have the flexibility to select specialized services included throughout the year to ensure your outdoor space not only maintains its beauty but thrives in every season.',
      '• **Winter Pruning**: Ideal for the health and shape of your plants during the colder months.',
      '• **Spring Jumpstart**: Get your garden going with essential care at the start of the season.',
      '• **Mulch Installation**: Improve the look and health of your garden with professional mulch application.',
      '• **Summer Refresh**: Mid-season attention to detail that keeps your landscape looking its best.',
      '• **Fall Cleanup**: Prepare your garden for winter with a thorough cleaning.',
      'This customizable approach allows you to tailor our services to the specific needs of your garden ensuring optimal care and beauty year-round.',

      '## Why Choose TedBruk?',
      'When you choose TedBruk for your weekly lawn care, you are not just getting a service; you are investing in the health and beauty of your outdoor space. Our dedicated team is committed to providing you with the highest level of care.',
      'Partner with us and choose a company that values the beauty and health of your property as much as you do. Contact us today to learn more about our services.'
    ],
    tips: [
      { title: 'Optimal Cutting Height', description: 'We maintain a cutting height between 3 and 5 cm to promote a dense, robust lawn. This prevents weed growth and reduces water needs.' },
      { title: 'Sharp Blades', description: 'We use only sharp mowing blades for clean, precise cuts. Dull blades tear the grass blades, leading to brown tips and increased disease risk.' },
      { title: 'Varying Mowing Patterns', description: 'We strategically change our mowing patterns with each cut to avoid soil compaction and promote even growth.' },
      { title: 'Grass Clippings as Fertilizer', description: 'We leave grass clippings on the lawn (mulch mowing) where appropriate, to return essential nutrients back to the soil.' },
      { title: 'Professional Edging', description: 'Our precise edging technique clearly defines your planting beds, walkways, and driveways for a polished look.' },
      { title: 'Fertilization Program', description: 'Our scientifically developed program supplies your lawn with the right nutrients at the right time throughout the year.' },
      { title: 'Proper Watering', description: 'We advise on optimal watering: deep watering 2-3 times a week is better than daily shallow watering.' },
      { title: 'Seasonal Services', description: 'Choose from our seasonal options like winter pruning, spring jumpstart, or mulch installation for all-around care.' }
    ],
    qa: [
      { question: 'How often should the lawn be mowed?', answer: 'Ideally once a week in spring and summer, every 10-14 days in autumn. We adjust intervals to growth conditions.' },
      { question: 'What does your program include?', answer: 'Our program covers fertilization, weed control, and seasonal maintenance adapted to the specific needs of your lawn.' },
      { question: 'What seasonal services can I choose?', answer: 'You can choose from services like winter pruning, spring jumpstart, mulch installation, summer refresh, or fall cleanup.' },
      { question: 'What makes your service special?', answer: 'We go beyond basic mowing: hand weeding, precise edging, professional pruning, and comprehensive garden care.' },
      { question: 'How does the weekly package work?', answer: 'Our package combines regular mowing with our fertilization program and comprehensive garden maintenance, plus your choice of seasonal services.' },
      { question: 'Why is professional care important?', answer: 'A professionally maintained lawn is healthier, more resistant to disease, and looks perfect all year round.' },
      { question: 'Are your methods eco-friendly?', answer: 'Yes! We use mulch mowing, sustainable practices, and optimize watering for conservation.' },
      { question: 'What does the complete program cost?', answer: 'Costs depend on the size of your lawn and scope of services. We are happy to provide a free, individual quote.' }
    ]
  },

  {
    id: '2',
    slug: 'professional-fence-installation',
    title: '',
    image: img7,
    excerpt: 'Discover how we created a safe family garden with a modern chain-link fence, perfect lawn, and natural planting.',
    story: [
      'Hello, I am Przemysław from TedBruk – your expert contractor with regional expertise.',
      'Today I want to show you a project that combines family friendliness, safety, and natural beauty in perfect harmony. This garden is not a coincidence – it is the result of careful planning tailored exactly to the needs of a young family.',
      'A few months ago, a client approached me concerned about the safety of his garden. His child loved playing outside, and he wanted to ensure the area was enclosed – but without losing the garden\'s charm. Together we decided to install a modern, robust chain-link fence that is not only stable and durable but also fits harmoniously into the environment.',
      'The installation was a challenge, but that is exactly what makes my work so exciting. We aligned the posts precisely, mounted the fence panels carefully, and ensured every screw was tight. The result? A fence that not only delivers on its promise but also looks good.',
      'But a fence alone does not make a garden. So we relaid the lawn – with a slight slope for drainage and a clean natural stone edge. The stones serve not only as a decorative border but also as a pathway – ideal for walking barefoot or watering.'
    ],
    tips: [
      { title: 'Choose the Right Fence', description: 'A chain-link fence like this is modern, elegant, and very durable – especially when weather-proofed. Alternatives: Metal, vinyl, or wood.' },
      { title: 'Combine Hard and Soft Elements', description: 'A pure fence looks cold. Place plants in front of or next to it – roses, lavender, or small shrubs make the privacy screen lively and natural.' },
      { title: 'Plan the Lawn from the Start', description: 'A perfect lawn needs good preparation: soil exchange, drainage, and high-quality seed.' },
      { title: 'Set Accents', description: 'A single stone, a small sculpture, or a flower pot on a terrace can visually enhance the garden – without much effort.' },
      { title: 'Think About the Future', description: 'Plan enough space for potential extensions or changes in the garden. A good fence should be flexible and adapt to your needs.' }
    ],
    qa: [
      { question: 'How long does such a chain-link fence last?', answer: 'With proper care and maintenance, a high-quality chain-link fence can last 20 years or longer. The powder coating protects against corrosion.' },
      { question: 'Can I install the fence myself?', answer: 'Theoretically yes, but I advise against it. Professional installation ensures the fence is stable and safe. I also provide a warranty on the work.' },
      { question: 'What costs should I expect?', answer: 'Costs vary depending on size, material, and complexity. I am happy to provide a free quote tailored to your needs.' },
      { question: 'What if the fence is damaged?', answer: 'For minor damage, we can often help directly on-site. For larger damage, we replace the affected parts – under our warranty.' },
      { question: 'Do I need a permit for the fence?', answer: 'In most cases not – but I am happy to advise you on local building regulations and boundary distances.' }
    ]
  },

  {
    id: '3',
    slug: 'privacy-and-screening',
    title: '',
    image: img9,
    excerpt: 'Discover how we transformed a modern garden with black privacy screens, a perfect lawn, and ambient lighting into a private oasis.',
    story: [
      'Hello, I am Przemysław from TedBruk – your expert contractor.',
      'Today I want to show you a project that combines privacy, aesthetics, functionality, and atmosphere. This garden is the result of careful planning, tailored to the client\'s wishes.',
      'A client wanted peace and privacy. His garden bordered neighbors, and he wanted a place to relax without constant outside views.',
      'Together we chose a combined solution of a privacy fence and planting. The fence consists of black, vertically arranged wooden panels that are visually appealing and offer high privacy. Young roses and low hedges soften the look.',
      'The lawn was laid to measure, with drainage and a natural stone edge. And the lighting: classic white garden lamps that create a warm, inviting atmosphere at night.'
    ],
    tips: [
      { title: 'Choose the Right Screen', description: 'Black wood panels are modern and durable. Alternatives: Metal, vinyl, or living hedges.' },
      { title: 'Combine Elements', description: 'Use plants to soften the look of hard fences.' },
      { title: 'Plan Lighting', description: 'Garden spotlights or path lights create safety and mood.' },
      { title: 'Think About the Lawn', description: 'Good preparation is key for a perfect lawn.' },
      { title: 'Set Accents', description: 'Small details can visually enhance the garden.' }
    ],
    qa: [
      { question: 'How long does a wooden screen last?', answer: 'With professional treatment and care, 10–15 years.' },
      { question: 'Can the fence be extended?', answer: 'Yes, our systems are modular.' },
      { question: 'What does a project like this cost?', answer: 'It depends on size and materials. Contact us for a quote.' },
      { question: 'Do I need a permit?', answer: 'Usually not, but we advise on local regulations.' },
      { question: 'How do I maintain the lawn?', answer: 'Regular mowing, fertilizing, and watering.' }
    ]
  },

  {
    id: '4',
    slug: 'color-form-functionality',
    title: '',
    image: img10,
    excerpt: 'Discover how a perfectly designed bed with mulch, blooming azaleas, and structured hedges transforms a garden into a glowing oasis of calm.',
    story: [
      'Hello, I am Przemysław from TedBruk.',
      'Today I want to show you a project that unites color, form, and functionality.',
      'A client wanted to create a place of relaxation. We chose a combined solution of privacy fencing and planting. Black wooden panels provide privacy, softened by roses and hedges.',
      'The lawn is a dream, laid to measure with drainage and stone edging.',
      'Lighting creates a warm atmosphere at night.',
      'At TedBruk, we understand landscaping as the holistic design of your outdoor space.'
    ],
    tips: [
      { title: 'Choose the Right Mulch', description: 'Wood mulch holds moisture and suppresses weeds.' },
      { title: 'Combine Colors', description: 'Contrasting flowers like azaleas draw the eye.' },
      { title: 'Plan Planting', description: 'Ensure plants have enough space to grow.' },
      { title: 'Set Visual Accents', description: 'Stones or sculptures add interest.' },
      { title: 'Future Proofing', description: 'Plan for future growth and changes.' }
    ],
    qa: [
      { question: 'How long does mulch last?', answer: 'High-quality mulch lasts 2-3 years.' },
      { question: 'Can I apply mulch myself?', answer: 'Yes, but professional application ensures even coverage.' },
      { question: 'What are the costs?', answer: 'Varies by area. Contact us for a quote.' },
      { question: 'Damage repair?', answer: 'We can easily repair or top up mulch.' },
      { question: 'Permits?', answer: 'Generally not required for landscaping.' }
    ]
  },


  {
    id: '5',
    slug: 'stadium-fence-project',
    title: '',
    image: img1,
    excerpt: 'Discover how we make public spaces like sports grounds safe and inviting. A green chain-link fence that harmoniously combines safety and nature.',
    story: [
      'Hello, I am Przemysław from TedBruk.',
      'Today I want to show you a project that makes public spaces safe: a fence around a sports ground. We build fences not just for private gardens but for schools, clubs, and sports facilities too.',
      'This fence is functional, robust, and harmoniously embedded in the environment. The green powder coating fits perfectly with the surroundings.',
      'We chose a green chain-link fence with stable posts, high enough to stop balls but maintaining a view. The installation was done with precision, ensuring longevity and safety.'
    ],
    tips: [
      { title: 'Choose the Right Fence', description: 'Chain-link is durable and functional.' },
      { title: 'Combine Hard and Soft Elements', description: 'Integrate the fence with nature.' },
      { title: 'Plan Ahead', description: 'Consider usage and safety requirements.' },
      { title: 'Professional Installation', description: 'Ensures stability and safety.' },
      { title: 'Maintenance', description: 'Low maintenance but regular checks recommended.' }
    ],
    qa: [
      { question: 'How long does it last?', answer: '20+ years with proper care.' },
      { question: 'Can I install it myself?', answer: 'Professional installation recommended for safety.' },
      { question: 'Costs?', answer: 'Varies by length and height.' },
      { question: 'Damage?', answer: 'Easy to repair sections.' },
      { question: 'Permits?', answer: 'We advise on local regulations.' }
    ]
  },
  {
    id: '6',
    slug: 'garden-transformation',
    title: '',
    image: img1,
    excerpt: 'Experience the dramatic transformation of bare, dusty ground into a vibrant, green retreat. This before-and-after story shows how we created a perfect lawn.',
    story: [
      'Hello! Przemysław from TedBruk here. Today I want to show you a project that demonstrates what true premium quality means: a metal fence that is not just functional, but makes a statement.',
      'A client wanted to secure their premises – but not with just any fence. They wanted something special that radiated quality and professionalism. We chose a high-quality custom metal fence.',
      'The challenge? Uneven terrain. We had to adapt the fence to the topography. We customized every post and aligned every panel perfectly.',
      'The result is a fence that is secure and impressive. The client was so satisfied they booked us for further projects.'
    ],
    tips: [
      { title: 'Invest in Quality', description: 'A premium fence costs more but lasts longer.' },
      { title: 'Custom Adaptation', description: 'We adapt the fence exactly to your needs and terrain.' },
      { title: 'Low Maintenance', description: 'Occasional cleaning is usually enough.' },
      { title: 'Safety First', description: 'High-quality fences offer privacy and security.' },
      { title: 'Aesthetics and Function', description: 'We combine both for the perfect result.' }
    ],
    qa: [
      { question: 'What defines a premium fence?', answer: 'High-quality materials, precise workmanship, and custom adaptation.' },
      { question: 'How long does a metal fence last?', answer: '30 years or more with proper care.' },
      { question: 'Can I customize the design?', answer: 'Absolutely! Color, height, design – all customizable.' },
      { question: 'Costs?', answer: 'Dependent on size and specifications.' },
      { question: 'Warranty?', answer: 'Yes, we offer a comprehensive warranty.' }
    ]
  },

];



// --- Utility Components ---

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionTitle: React.FC<{ subtitle: string; title: string; align?: 'left' | 'center' }> = ({ subtitle, title, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-earth-900 relative inline-block">
      {title}
      <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-gold-500"></span>
    </h2>
  </div>
);

// Kontaktformular Komponente
interface ContactFormProps {
  variant?: 'dark' | 'light';
  showLogo?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'dark', showLogo = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Ensure you have a valid key or keep existing logic if it was empty

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        form.reset();
      } else {
        console.error("Web3Forms Error:", data);
        alert("Error sending: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("A network error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const bgColor = variant === 'light' ? 'bg-white' : 'bg-black';
  const textColor = variant === 'light' ? 'text-earth-900' : 'text-white';
  const labelColor = variant === 'light' ? 'text-earth-900' : 'text-white';
  const inputBg = variant === 'light' ? 'bg-gray-50' : 'bg-white';
  const inputBorder = variant === 'light' ? 'border border-gray-200' : '';

  return (
    <>
      <div className={`${bgColor} p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 transition-colors duration-300`}>
        {showLogo && (
          <div className="flex justify-center mb-6">
            <img
              src={img12}
              alt="Our Team"
              className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        )}
        <h3 className={`text-2xl md:text-3xl font-black ${textColor} text-center mb-6 md:mb-8 uppercase font-sans`}>
          Kostenlose Beratung!
        </h3>


        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name Field */}
          <div>
            <label htmlFor="name" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ihr Name"
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base`}
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Telefon *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+48 123 456789"
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base`}
              required
            />
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Stadt *
            </label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Cottbus"
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base`}
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className={`block ${labelColor} font-bold text-sm mb-1`}>
              Projektbeschreibung *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht..."
              rows={3}
              className={`w-full p-3 rounded-md ${inputBg} ${inputBorder} text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none`}
              required
            />
          </div>

          {/* Checkbox for Terms */}
          <div className="flex items-start gap-2">
            <input
              id="agb"
              type="checkbox"
              className="mt-1"
              required
            />
            <label htmlFor="agb" className={`text-xs ${variant === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Ich stimme den{' '}
              <a
                href="/agb"
                className="text-green-500 underline hover:text-green-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                AGB
              </a>{' '}
              zu und erlaube die Kontaktaufnahme.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4a7c59] hover:bg-[#3d664a] text-white font-black uppercase py-4 rounded-md text-lg md:text-xl tracking-wide transition-colors duration-300 mt-2 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Wird gesendet...
              </>
            ) : (
              'Anfrage senden'
            )}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative transform transition-all scale-100">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Vielen Dank!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Wir haben Ihre Anfrage erhalten. Unser Team wird sich in Kürze bei Ihnen melden.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#4a7c59] text-white font-bold py-3 rounded-lg hover:bg-[#3d664a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Hauptabschnitte ---

const HeroText = () => (
  <div className="max-w-2xl text-center lg:text-left">
    <div className="overflow-hidden mb-2">
      <p className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm animate-[fadeInUp_1s_ease-out_forwards]">

      </p>
    </div>
    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] drop-shadow-2xl mb-6 md:mb-8 animate-[fadeInUp_1.2s_ease-out_forwards]">
      TedBruk
      <br />
      <span className="italic font-light text-gold-400">Pflasterarbeiten</span>
    </h1>

    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl border-l-2 border-gold-500 pl-4 md:pl-6 mb-8 md:mb-10 animate-[fadeInUp_1.4s_ease-out_forwards] mx-auto lg:mx-0">
      Professionelle Pflasterarbeiten aus Polen für Cottbus, Guben, Spremberg und Forst. Qualität, Zuverlässigkeit und faire Preise.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 md:gap-5 animate-[fadeInUp_1.6s_ease-out_forwards] justify-center lg:justify-start">
      <Link
        to={NavigationLinks.SERVICES}
        className="px-6 md:px-10 py-3 md:py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold tracking-widest uppercase transition-all duration-300 text-center shadow-xl hover:-translate-y-1 text-sm md:text-base"
      >
        Unsere Leistungen
      </Link>
      <Link
        to={NavigationLinks.PROJECTS}
        className="px-6 md:px-10 py-3 md:py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold tracking-widest uppercase transition-all duration-300 text-center backdrop-blur-sm hover:-translate-y-1 text-sm md:text-base"
      >
        Projekte ansehen
      </Link>
    </div>
  </div>
);

const Hero = () => (
  <div>
    {/* Desktop Layout */}
    <div className="hidden lg:block relative min-h-screen w-full overflow-visible pb-12">
      {/* Hintergrundbild mit langsamer Zoom-Effekt */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
        style={{ backgroundImage: `url(${img8})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-black/20"></div>
      </div>

      {/* Inhalt */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10 pt-32 md:pt-40 lg:pt-48">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <HeroText />
          {/* Kontaktformular rechts - für Desktop sichtbar */}
          <div className="animate-[fadeInUp_1.6s_ease-out_forwards]">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <div className="flex flex-col items-center">
          <span className="text-[10px] tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-px h-8 md:h-12 bg-white/50"></div>
        </div>
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="lg:hidden w-full bg-white">
      {/* Top Section: Image, Text, Arrows */}
      <div className="relative h-screen flex flex-col justify-center pb-40">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url(${img8})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 px-4 sm:px-6 flex flex-col items-center justify-center h-full pt-20">
          <HeroText />
        </div>

        {/* Downward Arrows */}
        <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center pointer-events-none">
          <img
            src={img13}
            alt="Scroll Down"
            className="w-36 h-auto object-contain drop-shadow-lg"
          />
        </div>







      </div>
      {/* Bottom Section: White Background Contact Form */}
      <div className="bg-white px-4 py-16" >


        <ContactForm variant="light" showLogo={true} />
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <PencilRuler className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Pflasterarbeiten",
      desc: "Professionelle Verlegung von Pflastersteinen für Einfahrten und Wege."
    },
    {
      icon: <Shovel className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Terrassenbau",
      desc: "Hochwertige Terrassen aus Stein und Pflaster."
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Hofbefestigung",
      desc: "Stabile und langlebige Befestigung von Höfen."
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Gartenwege",
      desc: "Gestaltung schöner und funktionaler Gartenwege."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Unsere Leistungen" title="Qualität & Handwerk" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="h-full p-6 md:p-8 bg-white hover:bg-earth-900 group transition-all duration-500 shadow-sm hover:shadow-xl border-b-2 border-transparent hover:border-gold-500">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-stone-100 group-hover:bg-white/10 rounded-full flex items-center justify-center text-earth-900 group-hover:text-gold-500 mb-4 md:mb-6 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-earth-900 group-hover:text-white mb-3 md:mb-4 transition-colors">{s.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="py-16 md:py-24 bg-earth-900 text-white overflow-hidden relative">


    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <RevealOnScroll>
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border border-gold-500/30 z-0"></div>
            <img
              src={img8}
              alt="TedBruk Pflasterarbeiten"
              className="relative z-10 w-full h-[400px] md:h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white text-earth-900 p-4 md:p-8 shadow-xl max-w-xs hidden lg:block z-20">
              <p className="font-serif text-lg md:text-2xl italic">"Professionell, zuverlässig und präzise Handwerkskunst."</p>
              <p className="text-right mt-2 md:mt-4 font-bold text-gold-600 text-xs md:text-sm tracking-widest">— TedBruk</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="lg:w-1/2 space-y-6 md:space-y-8 mt-8 lg:mt-0">
          <RevealOnScroll delay={200}>
            <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">Unsere Philosophie</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 leading-tight">Tradition des <span className="text-gold-500 italic">Handwerks</span></h2>

            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mt-4 md:mt-6">
              Wir sind Ihr zuverlässiger Partner für Pflasterarbeiten. Wir kümmern uns um Einfahrten, Terrassen, Hofbefestigungen und Gartenwege — sauber, pünktlich und professionell.
            </p>

            {/* Unternehmensteil */}
            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-sm mt-6 md:mt-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <img
                src={img14}
                alt="TedBruk Logo"
                className="w-32 h-24 md:w-35 md:h-24 object-cover border-2 border-gold-500 shadow-md"
              />
              <div>
                <h4 className="text-lg md:text-xl font-serif text-white">Przemysław Żeletko</h4>
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Geschäftsführer</p>
                <p className="text-gray-400 text-xs italic">"Zuverlässig, fachkundig und komplette Lösungen."</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              {[
                { title: "Professionelle Ausführung", desc: "Sorgfältige Arbeit mit langlebigen Materialien." },
                { title: "Schnelle Umsetzung", desc: "Zuverlässige Termine und saubere Baustellen." },
                { title: "Maßgeschneiderte Lösungen", desc: "Individuelle Konzepte für Ihr Projekt." }
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="mt-1 mr-3 md:mr-4 text-gold-500 shrink-0"><CheckCircle size={20} className="md:w-6 md:h-6" /></div>
                  <div>
                    <h4 className="text-white font-bold font-serif text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-8">
              <Link to={NavigationLinks.ABOUT} className="inline-flex items-center text-gold-500 hover:text-white uppercase tracking-widest font-bold text-sm transition-colors border-b border-gold-500 pb-1 hover:border-white">
                Mehr über uns <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsGallery = () => {
  const [images] = useState<ProjectImage[]>([
    { id: '1', url: img2, title: ' ' },
    { id: '2', url: img1, title: '' },
    { id: '3', url: img5, title: '' },
    { id: '4', url: img4, title: ' ' },
    { id: '5', url: img3, title: '' },
    { id: '6', url: img6, title: '' },


  ]);

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Our Projects" title="Current Projects & Concepts" />
        </RevealOnScroll>

        {/* Galerie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-1 mt-8 md:mt-12">
          {images.map((img, index) => (
            <RevealOnScroll key={img.id} delay={index * 50}>
              {/* <Link to={`/blog/${blogPosts[index].slug}`} className="block"> */}
              <div className="block">
                <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                  <img
                    src={String(img.url)}
                    alt={blogPosts[index].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-earth-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                    <span className="text-gold-500 text-xs tracking-widest uppercase mb-2">
                      Read Blog Post
                    </span>
                    <h4 className="text-lg md:text-2xl font-serif text-white mb-3 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-2">
                      {blogPosts[index].title}
                    </h4>
                    <button className="text-white border-b border-white pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors text-sm uppercase tracking-widest">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to={NavigationLinks.PROJECTS} className="inline-block px-6 md:px-10 py-3 md:py-4 border-2 border-earth-900 text-earth-900 font-bold uppercase tracking-widest hover:bg-earth-900 hover:text-white transition-colors text-sm md:text-base bg-white/50 backdrop-blur-sm">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Styles for Animations ---
const AnimationStyles = () => (
  <style>{`
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    .animate-wiggle {
      animation: wiggle 1s ease-in-out infinite;
    }
  `}</style>
);

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const googleMapsUrl = "https://www.google.com/maps?q=Datyń+44,+Żary,+Poland&z=19&output=embed";

  const allReviews = [
    { name: "Michael Bungenberg", time: "vor 3 Jahren", text: "Schnelle, saubere Arbeit. Freundlich. Spricht Deutsch und Englisch ausreichend." },
    { name: "Janusz Grudzień", time: "vor 6 Monaten", text: "Hervorragende Pflasterarbeiten! TedBruk hat unsere Einfahrt professionell verlegt. Pünktlich, sauber und zu einem fairen Preis. Sehr empfehlenswert!" },
    { name: "Mariusz Szydłowski", time: "vor 4 Jahren", text: "Sehr zufrieden mit der Terrassengestaltung. Qualität stimmt, Termine wurden eingehalten. Gerne wieder!" },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const displayedReviews = allReviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-16 md:py-24 bg-stone-100 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Google Bewertungen" title="Was unsere Kunden sagen" />
        </RevealOnScroll>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedReviews.map((review, i) => (
            <RevealOnScroll key={`${currentPage}-${i}`} delay={i * 100}>
              <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg h-full flex flex-col hover:shadow-xl transition-shadow">
                {/* Header with Avatar and Name */}
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-lg mr-3 shrink-0">
                    {review.name[0]}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-1 mb-1">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-earth-900 text-base md:text-lg hover:text-gold-500 transition-colors cursor-pointer"
                      >
                        {review.name}
                      </a>
                      <div className="relative group">
                        <img src="https://img.icons8.com/?size=100&id=SRJUuaAShjVD&format=png&color=000000" alt="Verified Badge" className="w-4 h-4" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          Verifizierter Kunde
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{review.time}</p>
                  </div>
                </div>

                {/* Google Logo */}
                <div className="mb-3 text-xs">
                  <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" fontSize="16" fontWeight="500">
                      <tspan fill="#4285F4">G</tspan>
                      <tspan fill="#EA4335">o</tspan>
                      <tspan fill="#FBBC04">o</tspan>
                      <tspan fill="#34A853">g</tspan>
                      <tspan fill="#EA4335">l</tspan>
                      <tspan fill="#4285F4">e</tspan>
                    </text>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex text-gold-500 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">{review.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-6 py-2 md:py-3 bg-earth-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-gold-500 hover:text-earth-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            ← Zurück
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-sm md:text-base transition-all ${i === currentPage
                  ? 'bg-gold-500 text-earth-900'
                  : 'bg-earth-900 text-white hover:bg-gold-500 hover:text-earth-900'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="px-6 py-2 md:py-3 bg-earth-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-gold-500 hover:text-earth-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            Weiter →
          </button>
        </div>

        {/* Google Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            <span className="font-bold">Google</span> Bewertungen – Durchschnitt: ⭐⭐⭐⭐⭐
          </p>
        </div>
      </div>
    </section>
  );
};

const InteractiveMap = () => (
  <div className="w-full h-[300px] md:h-[500px] relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8!2d15.166389!3d51.616111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f7e0e0e0e0e0f%3A0x0!2sDaty%C5%84%2044%2C%2068-200%20%C5%BBary%2C%20Poland!5e0!3m2!1sde!2spl!4v1735841137!5m2!1sde!2spl"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="TedBruk Standort - Datyń, Polen"
      className="transition-all duration-700"
    ></iframe>
  </div>
);

// --- Seitenzusammenfassungen ---

const PageHeader: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => (
  <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] w-full overflow-hidden flex items-center justify-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 text-center px-4">
      <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">{subtitle}</span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 md:mb-6 animate-[fadeInUp_1s_ease-out_forwards]">{title}</h1>
    </div>
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <ServicesSection />
    <AboutPreview />
    <ProjectsGallery />
    <Testimonials />
    <InteractiveMap />
  </>
);

const ServicesPage = () => (
  <>
    <PageHeader
      title="Our Services"
      subtitle="Craftsmanship & Quality"
      image={img8}
    />
    <ServicesSection />
    <section className="py-12 md:py-20 bg-earth-900 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">Need a personal consultation?</h2>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">We offer tailored solutions for residential and commercial clients.</p>
        <Link to={NavigationLinks.CONTACT} className="inline-block px-6 md:px-8 py-2 md:py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-earth-900 transition-colors uppercase tracking-widest font-bold text-sm md:text-base">
          Request Consultation
        </Link>
      </div>
    </section>
    <Testimonials />
  </>
);

const ProjectsPage = () => (
  <>
    <PageHeader
      title="Projects"
      subtitle="Inspirations & Realizations"
      image={img8}
    />
    <ProjectsGallery />
    <div className="bg-stone-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 italic text-sm md:text-base">Selected projects from 2020-2024</p>
      </div>
    </div>
  </>
);

const AboutPage = () => (
  <>
    <PageHeader
      title="Über uns"
      subtitle="Unsere Geschichte"
      image={img8}
    />
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">


      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="prose prose-sm md:prose-lg prose-stone mx-auto">
          {/* Unternehmen */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-earth-800 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={img12}
                alt="Our Team"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <h4 className="text-xl md:text-2xl font-serif text-earth-900">Your name here</h4>
              <p className="text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest">Geschäftsführer / Ansprechpartner</p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4 md:mb-6 text-center">Firmenprofil & Leistungen</h3>
          <p className="leading-loose text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            TedBruk ist Ihr professioneller Partner für hochwertige Pflasterarbeiten aus Polen. Wir sind spezialisiert auf die Verlegung von Pflastersteinen, Terrassenbau und Hofbefestigungen in Cottbus, Guben, Spremberg und Forst. Mit langjähriger Erfahrung und Fachkompetenz garantieren wir erstklassige Qualität zu fairen Preisen.
          </p>

          <h4 className="text-lg font-serif text-earth-900 mt-4">Unsere Kernleistungen</h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Pflasterarbeiten:</strong> Professionelle Verlegung von Pflastersteinen für Einfahrten, Wege und Plätze.</li>
            <li><strong>Terrassenbau:</strong> Gestaltung und Bau hochwertiger Terrassen aus Stein und Pflaster.</li>
            <li><strong>Hofbefestigung:</strong> Stabile und langlebige Befestigung von Höfen und Parkplätzen.</li>
            <li><strong>Gartenwege:</strong> Planung und Anlage schöner und funktionaler Gartenwege.</li>
            <li><strong>Außenanlagen:</strong> Komplette Gestaltung von Außenbereichen und Grundstücken.</li>
            <li><strong>Natursteinarbeiten:</strong> Verarbeitung von Natursteinen für exklusive Projekte.</li>
          </ul>

          <h4 className="text-lg font-serif text-earth-900 mt-2">Unsere Unternehmenswerte</h4>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li><strong>Zuverlässigkeit & Fachkompetenz:</strong> Termintreue und hochwertige, saubere Arbeit.</li>
            <li><strong>Qualität aus Polen:</strong> Erstklassige Handwerkskunst zu fairen Preisen.</li>
            <li><strong>Faire & transparente Preise:</strong> Detaillierte Angebote ohne versteckte Kosten.</li>
            <li><strong>Individuelle Beratung:</strong> Ausführliche Erstberatung und maßgeschneiderte Lösungen.</li>
            <li><strong>Flexibilität:</strong> Projekte jeder Größenordnung — von kleinen Wegen bis zu großen Anlagen.</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 md:py-12 text-center border-y border-gray-200 my-8 md:my-12">
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">10+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Jahre Erfahrung</span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">100+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Realisierte Projekte</span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Kundenzufriedenheit</span>
            </div>
          </div>

          {/* Kontaktbereich */}
          <div className="bg-stone-50 p-6 md:p-8 rounded-lg mt-8 md:mt-12">
            <h4 className="text-xl font-serif text-earth-900 mb-4 text-center">Kontakt</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <Phone className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <a href="tel:+48669631919" className="text-earth-900 hover:text-gold-500 transition-colors font-bold">+48 669 631 919</a>
              </div>
              <div>
                <Send className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <a href="mailto:przemekzeletko@wp.pl" className="text-earth-900 hover:text-gold-500 transition-colors">przemekzeletko@wp.pl</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <InteractiveMap />
  </>
);

const ContactPage = () => (
  <>
    <PageHeader
      title="Kontakt"
      subtitle="Beratung & Anfragen"
      image={img8}
    />

    {/* Detaillierter Kontaktbereich */}
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Kontaktinformationen */}
          <div>
            <RevealOnScroll>
              <SectionTitle subtitle="Kontaktieren Sie uns" title="Ihre Anfrage" align="left" />
            </RevealOnScroll>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">Unser Standort</h4>
                  <p className="text-gray-600">Datyń 44, Żary, Polen<br />Wir bedienen: Cottbus, Guben, Spremberg, Forst</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">Telefon</h4>
                  <a href="tel:+48669631919" className="text-earth-900 hover:text-gold-500 transition-colors font-bold text-lg">+48 669 631 919</a>
                  <div className="text-gray-600 text-sm mt-2 space-y-1">
                    <p><strong>Öffnungszeiten:</strong></p>
                    <p>Mo - Fr: 07:00 – 18:00</p>
                    <p>Sa: 08:00 – 14:00</p>
                    <p className="mt-2"><strong>Sonntag:</strong></p>
                    <p>Geschlossen</p>
                    <p className="mt-2 text-xs italic">Termine nach Vereinbarung möglich</p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Send className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">E-Mail</h4>
                  <a href="mailto:przemekzeletko@wp.pl" className="text-earth-900 hover:text-gold-500 transition-colors">przemekzeletko@wp.pl</a>
                </div>
              </div>

              {/* Soziale Medien */}
              <div className="pt-6">
                <h4 className="font-serif text-lg text-earth-900 mb-4">Folgen Sie uns</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61584302041280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-earth-900 text-white p-3 rounded-full hover:bg-gold-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div>
            <RevealOnScroll delay={200}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>

    <InteractiveMap />
  </>
);

// Blog List Page
const BlogListPage = () => (
  <>
    <PageHeader
      title="Blog & Guide"
      subtitle="Tips & Experiences"
      image="images/grass.jpg"
    />
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="From the Field" title="Our Project Stories" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 100}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="bg-white border border-stone-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-earth-900 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gold-500 font-bold text-sm uppercase tracking-widest">
                      Read More <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  </>
);

// Individual Blog Post Page
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-earth-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-gold-500 hover:text-gold-600 font-bold">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${post.image}")` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
              Blog & Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 animate-[fadeInUp_1s_ease-out_forwards] leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl animate-[fadeInUp_1.2s_ease-out_forwards]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Before/After Slider - Only for garden transformation post */}
      {post.slug === 'garden-transformation' && (
        <div className="py-12 md:py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <RevealOnScroll>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-4">
                  Comparison of the Transformation
                </h2>
                <p className="text-gray-600 text-lg">
                  Drag the slider to see the dramatic transformation
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <BeforeAfterSlider
                beforeImage={img1}
                afterImage={img3}
              />
            </RevealOnScroll>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Story Section */}
          <RevealOnScroll>
            <div className="prose prose-lg max-w-none mb-12">
              {post.story.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Tips Section */}
          <RevealOnScroll delay={200}>
            <div className="my-16 md:my-20">
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 flex items-center">
                <Leaf className="mr-4 text-gold-500" size={32} />
                Tips & Tricks
              </h2>
              <div className="space-y-6">
                {post.tips.map((tip, index) => (
                  <div key={index} className="bg-stone-50 p-6 md:p-8 border-l-4 border-gold-500 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-serif text-earth-900 mb-3 flex items-center">
                      <CheckCircle className="mr-3 text-gold-500" size={20} />
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-8">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Q&A Section */}
          <RevealOnScroll delay={400}>
            <div className="my-16 md:my-20">
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 flex items-center">
                <Quote className="mr-4 text-gold-500" size={32} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.qa.map((item, index) => {
                  const isOpen = openQuestions.includes(index);

                  return (
                    <div key={index} className="border border-stone-200 rounded-lg overflow-hidden hover:border-gold-500 transition-colors">
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left p-6 bg-white hover:bg-stone-50 transition-colors flex items-center justify-between group"
                      >
                        <h3 className="text-lg md:text-xl font-bold text-earth-900 pr-4 group-hover:text-gold-600 transition-colors">
                          Q: {item.question}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="p-6 pt-0 bg-stone-50">
                          <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gold-500">
                            <strong className="text-gold-600">A:</strong> {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Call to Action */}
          <RevealOnScroll delay={600}>
            <div className="mt-16 md:mt-20 p-8 md:p-12 bg-earth-900 text-white text-center rounded-lg">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Have questions or want to start a project?</h3>
              <p className="text-gray-300 mb-6 md:mb-8">
                Als Ihr lokaler Handwerker in Żary, Polen, stehe ich Ihnen mit Rat und Tat zur Seite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+48669631919" className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase tracking-widest transition-colors">
                  <Phone className="mr-2" size={20} />
                  +48 669 631 919
                </a>
                <Link to={NavigationLinks.CONTACT} className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-earth-900 font-bold uppercase tracking-widest transition-colors">
                  Contact Us
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                TedBruk<br />
                Datyń 44, Żary, Polen
              </p>
            </div>
          </RevealOnScroll>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center text-gold-500 hover:text-gold-600 font-bold uppercase tracking-widest text-sm transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const FullGalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const allGalleryImages: ProjectImage[] = [
    { id: '1', url: img1, title: '' },
    { id: '2', url: img2, title: '' },
    { id: '3', url: img3, title: '' },
    { id: '4', url: img4, title: '' },
    { id: '5', url: img5, title: ' ' },
    { id: '6', url: img6, title: '' },
    { id: '7', url: img7, title: '' },
    { id: '8', url: img8, title: '' },

  ];

  // Display only 16 images initially, or all if expanded
  const displayedImages = isExpanded ? allGalleryImages : allGalleryImages.slice(0, 16);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowLeft' && selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      } else if (e.key === 'ArrowRight' && selectedImageIndex < allGalleryImages.length - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, allGalleryImages.length]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (selectedImageIndex === null) return;

    if (isLeftSwipe && selectedImageIndex < allGalleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
    if (isRightSwipe && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <PageHeader
        title="Our Gallery"
        subtitle="Elegant Projects"
        image={img8}
      />

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url('./images/grid.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <SectionTitle subtitle="Complete Portfolio" title="20+ Premium Projects" align="center" />
          </RevealOnScroll>

          {/* Masonry-Style Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {displayedImages.map((img, index) => (
              <RevealOnScroll key={img.id} delay={index * 30}>
                <div
                  className="group relative overflow-hidden aspect-square cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={String(img.url)}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6">
                    <h4 className="text-white font-serif font-bold text-lg text-center mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                    <button className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase text-xs tracking-widest rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
                      View
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Show More Button */}
          {!isExpanded && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setIsExpanded(true)}
                className="px-8 md:px-12 py-4 md:py-5 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Show More
              </button>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-20 md:mt-28 p-8 md:p-12 bg-stone-50 border-l-4 border-gold-500 rounded-lg">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4">Be Inspired</h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Each project in this gallery is a masterpiece of custom design. From modern renovations to classic finishing work – discover the diverse possibilities for your dream project.
              </p>
              <Link to={NavigationLinks.CONTACT} className="inline-block px-8 py-3 bg-earth-900 text-white font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-earth-900 transition-colors rounded-lg">
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Image */}
            <img
              src={String(allGalleryImages[selectedImageIndex].url)}
              alt={allGalleryImages[selectedImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center z-10"
                aria-label="Previous Image"
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < allGalleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center z-10"
                aria-label="Next Image"
              >
                ›
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {allGalleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden font-sans text-earth-900 selection:bg-gold-500 selection:text-white bg-stone-50">
        <AnimationStyles />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={NavigationLinks.HOME} element={<HomePage />} />
            <Route path={NavigationLinks.SERVICES} element={<ServicesPage />} />
            <Route path={NavigationLinks.PROJECTS} element={<ProjectsPage />} />
            <Route path={NavigationLinks.GALLERY} element={<FullGalleryPage />} />
            <Route path={NavigationLinks.BLOG} element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path={NavigationLinks.ABOUT} element={<AboutPage />} />
            <Route path={NavigationLinks.CONTACT} element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />

        {/* Global WhatsApp Button & CTA */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end pointer-events-none">
          {/* CTA Text with Arrow - visible on all devices */}
          <div className="flex items-center mr-3 md:mr-4 pointer-events-auto animate-[fadeIn_0.5s_ease-out_2s_forwards] opacity-0">
            <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-xl relative">
              <span className="text-earth-900 font-bold text-xs md:text-sm whitespace-nowrap">Have questions? Text us!</span>
              {/* Arrow pointing to the button */}
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
            </div>
          </div>

          <a
            href="https://wa.me/+48669631919"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform pointer-events-auto relative group"
            aria-label="Chat on WhatsApp"
          >
            <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" className="w-10 h-10 relative z-10 animate-wiggle" />
            {/* Pulse Animation */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
