import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  const properties = [
    {
      id: 1,
      title: "Residential Plots",
      location: "Chamti Kheda Road",
      type: "Plot",
      area: "1000-2000 sq.ft",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Space",
      location: "Chittorgarh City",
      type: "Commercial",
      area: "2500 sq.ft",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Independent House",
      location: "Near Kheda Road",
      type: "House",
      area: "1500 sq.ft",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Agricultural Land",
      location: "Chittorgarh District",
      type: "Land",
      area: "1-5 Bigha",
      price: "Contact for Price",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop"
    }
  ]

  return (
    <>
      <Head>
        <title>Aditya Real Estate - Chittorgarh | Property Dealer</title>
        <meta name="description" content="Aditya Real Estate - Your trusted property dealer in Chamti Kheda Road, Chittorgarh. Contact Manish Goswami at 9828484565" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="logo">
              <h1>Aditya Real Estate</h1>
              <p className="tagline">Your Dream Property Partner</p>
            </div>
            <nav className="nav">
              <button
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => setActiveTab('home')}
              >
                Home
              </button>
              <button
                className={activeTab === 'properties' ? 'active' : ''}
                onClick={() => setActiveTab('properties')}
              >
                Properties
              </button>
              <button
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                className={activeTab === 'contact' ? 'active' : ''}
                onClick={() => setActiveTab('contact')}
              >
                Contact
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        {activeTab === 'home' && (
          <>
            <section className="hero">
              <div className="hero-content">
                <h2>Find Your Perfect Property in Chittorgarh</h2>
                <p>Residential, Commercial & Agricultural Properties</p>
                <div className="hero-buttons">
                  <button className="btn-primary" onClick={() => setActiveTab('properties')}>
                    View Properties
                  </button>
                  <a href="tel:9828484565" className="btn-secondary">
                    Call Now
                  </a>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="services">
              <div className="container">
                <h2>Our Services</h2>
                <div className="services-grid">
                  <div className="service-card">
                    <div className="service-icon">🏠</div>
                    <h3>Residential Properties</h3>
                    <p>Find your dream home with our wide selection of residential properties</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">🏢</div>
                    <h3>Commercial Spaces</h3>
                    <p>Prime commercial locations for your business growth</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">📐</div>
                    <h3>Plot & Land</h3>
                    <p>Residential and agricultural plots at competitive prices</p>
                  </div>
                  <div className="service-card">
                    <div className="service-icon">💼</div>
                    <h3>Property Consultation</h3>
                    <p>Expert guidance for all your real estate needs</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Properties Section */}
        {activeTab === 'properties' && (
          <section className="properties-section">
            <div className="container">
              <h2>Featured Properties</h2>
              <div className="properties-grid">
                {properties.map(property => (
                  <div key={property.id} className="property-card">
                    <img src={property.image} alt={property.title} />
                    <div className="property-info">
                      <span className="property-type">{property.type}</span>
                      <h3>{property.title}</h3>
                      <p className="location">📍 {property.location}</p>
                      <div className="property-details">
                        <span>📏 {property.area}</span>
                        <span className="price">{property.price}</span>
                      </div>
                      <a href="tel:9828484565" className="btn-contact">Contact Us</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeTab === 'about' && (
          <section className="about-section">
            <div className="container">
              <h2>About Aditya Real Estate</h2>
              <div className="about-content">
                <div className="about-text">
                  <h3>Your Trusted Property Partner in Chittorgarh</h3>
                  <p>
                    Aditya Real Estate is a leading property dealer based in Chamti Kheda Road, Chittorgarh.
                    We specialize in residential, commercial, and agricultural properties across the region.
                  </p>
                  <p>
                    With years of experience in the real estate industry, we are committed to helping our
                    clients find their perfect property. Whether you're looking to buy, sell, or invest,
                    our team is here to guide you through every step of the process.
                  </p>
                  <div className="why-choose">
                    <h4>Why Choose Us?</h4>
                    <ul>
                      <li>✓ Extensive property portfolio</li>
                      <li>✓ Transparent dealings</li>
                      <li>✓ Expert market knowledge</li>
                      <li>✓ Personalized service</li>
                      <li>✓ Legal assistance</li>
                      <li>✓ After-sales support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <section className="contact-section">
            <div className="container">
              <h2>Contact Us</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Get in Touch</h3>
                  <p>Have questions? We're here to help!</p>

                  <div className="contact-details">
                    <div className="contact-item">
                      <div className="contact-icon">👤</div>
                      <div>
                        <h4>Contact Person</h4>
                        <p>Manish Goswami</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">📞</div>
                      <div>
                        <h4>Phone</h4>
                        <p><a href="tel:9828484565">9828484565</a></p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">📍</div>
                      <div>
                        <h4>Address</h4>
                        <p>Chamti Kheda Road<br/>Chittorgarh, Rajasthan</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">🕒</div>
                      <div>
                        <h4>Business Hours</h4>
                        <p>Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>

                  <div className="cta-buttons">
                    <a href="tel:9828484565" className="btn-primary">Call Now</a>
                    <a href="https://wa.me/919828484565" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Aditya Real Estate</h3>
                <p>Your trusted property dealer in Chittorgarh</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><button onClick={() => setActiveTab('home')}>Home</button></li>
                  <li><button onClick={() => setActiveTab('properties')}>Properties</button></li>
                  <li><button onClick={() => setActiveTab('about')}>About</button></li>
                  <li><button onClick={() => setActiveTab('contact')}>Contact</button></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact</h4>
                <p>Manish Goswami</p>
                <p><a href="tel:9828484565">9828484565</a></p>
                <p>Chamti Kheda Road, Chittorgarh</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Aditya Real Estate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
