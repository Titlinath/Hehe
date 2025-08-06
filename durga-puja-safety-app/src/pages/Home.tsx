import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, MapPin, AlertCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [liveUpdate, setLiveUpdate] = useState(0);

  const festiveQuotes = [
    t('home.quote1'),
    t('home.quote2'),
    t('home.quote3'),
    'সবার মিলন এক আনন্দময় উৎসবে',
    'নিরাপত্তার সাথে উপভোগ করুন মায়ের আগমনী'
  ];

  const liveUpdates = [
    'Emergency Helpline: 100 | Available 24/7',
    'Weather Alert: Light rain expected today evening',
    'Traffic Update: Main roads moderately crowded',
    'Safety Reminder: Stay hydrated and take breaks',
    'Volunteer Alert: 150+ volunteers active today'
  ];

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % festiveQuotes.length);
    }, 4000);

    const updateTimer = setInterval(() => {
      setLiveUpdate((prev) => (prev + 1) % liveUpdates.length);
    }, 6000);

    return () => {
      clearInterval(quoteTimer);
      clearInterval(updateTimer);
    };
  }, [festiveQuotes.length, liveUpdates.length]);

  const heroImages = [
    'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8847509/pexels-photo-8847509.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/9166748/pexels-photo-9166748.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety guidelines for day and night celebrations',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join our volunteer network and help make Puja safer for everyone',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: MapPin,
      title: 'Pandal Locator',
      description: 'Find nearby pandals with safety ratings and facility information',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: AlertCircle,
      title: 'Quick Reporting',
      description: 'Report incidents quickly and anonymously to help others',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-yellow-200">{t('home.welcome')}</span>
                  <span className="block">অন্তরঙ্গ পূজো</span>
                  <span className="block text-xl sm:text-2xl font-normal opacity-90 mt-2">
                    {t('home.subtitle')}
                  </span>
                </h1>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-300" />
                    <span className="font-medium">Festive Quote</span>
                  </div>
                  <p className="text-lg font-medium transition-all duration-500">
                    {festiveQuotes[currentQuoteIndex]}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/safety"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t('home.learn_more')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/emergency"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 border-2 border-white shadow-lg"
                >
                  Emergency Help
                  <AlertCircle className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {heroImages.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Durga Puja celebration ${index + 1}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Updates Ticker */}
      <section className="bg-yellow-400 text-red-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm">LIVE UPDATE:</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm animate-pulse font-medium">
                {liveUpdates[liveUpdate]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Safety, Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources to ensure everyone enjoys a safe and memorable Durga Puja celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Our Community Mission
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the movement to make Durga Puja celebrations safer and more enjoyable for everyone in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Link>
            <Link
              to="/report"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Report an Incident
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Active Volunteers' },
              { number: '1000+', label: 'Pandals Monitored' },
              { number: '50K+', label: 'People Helped' },
              { number: '24/7', label: 'Emergency Support' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-red-600">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;