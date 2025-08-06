import React, { useState } from 'react';
import { Sun, Moon, Shield, Users, Calculator, Leaf, MapPin, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Safety: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('day');
  const [footprintData, setFootprintData] = useState({
    locations: 1,
    transportMode: 'walking',
    duration: 4
  });

  const calculateFootprint = () => {
    const baseScore = 10;
    const locationPenalty = (footprintData.locations - 1) * 2;
    const transportPenalty = {
      walking: 0,
      bicycle: 1,
      bus: 3,
      taxi: 5,
      car: 7
    }[footprintData.transportMode] || 0;
    const durationBonus = Math.max(0, (8 - footprintData.duration)) * 0.5;
    
    return Math.max(1, baseScore - locationPenalty - transportPenalty + durationBonus);
  };

  const safetyTips = {
    day: [
      {
        icon: Sun,
        title: 'Stay Hydrated',
        description: 'Carry water bottles and take regular breaks in shade',
        priority: 'high'
      },
      {
        icon: Users,
        title: 'Travel in Groups',
        description: 'Always move with friends or family, especially in crowded areas',
        priority: 'high'
      },
      {
        icon: MapPin,
        title: 'Know Your Location',
        description: 'Keep track of your location and share it with trusted contacts',
        priority: 'medium'
      },
      {
        icon: Shield,
        title: 'Secure Belongings',
        description: 'Keep valuables secure and avoid displaying expensive items',
        priority: 'medium'
      }
    ],
    night: [
      {
        icon: Moon,
        title: 'Well-lit Paths',
        description: 'Stick to well-illuminated routes and avoid dark alleys',
        priority: 'high'
      },
      {
        icon: AlertTriangle,
        title: 'Emergency Contacts',
        description: 'Keep emergency numbers saved and phone charged',
        priority: 'high'
      },
      {
        icon: Users,
        title: 'Trusted Transportation',
        description: 'Use reliable transport and share trip details with family',
        priority: 'high'
      },
      {
        icon: Shield,
        title: 'Stay Alert',
        description: 'Be aware of surroundings and trust your instincts',
        priority: 'medium'
      }
    ],
    women: [
      {
        icon: Shield,
        title: 'Women Safety Zone',
        description: 'Look for designated women safety zones at pandals',
        priority: 'high'
      },
      {
        icon: Users,
        title: 'Support Network',
        description: 'Connect with other women and families for mutual safety',
        priority: 'high'
      },
      {
        icon: AlertTriangle,
        title: 'Quick Help Access',
        description: 'Know location of help desks and security personnel',
        priority: 'medium'
      }
    ]
  };

  const emergencyNumbers = [
    { service: 'Police Emergency', number: '100', available: '24/7' },
    { service: 'Women Helpline', number: '1091', available: '24/7' },
    { service: 'Child Helpline', number: '1098', available: '24/7' },
    { service: 'Fire Service', number: '101', available: '24/7' },
    { service: 'Ambulance', number: '108', available: '24/7' },
    { service: 'Disaster Management', number: '1078', available: '24/7' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-orange-500 bg-orange-50';
      default: return 'border-green-500 bg-green-50';
    }
  };

  const footprintScore = calculateFootprint();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('safety.title')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Comprehensive safety guidelines to ensure everyone enjoys Durga Puja celebrations safely and responsibly.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Safety Tips Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'day', label: t('safety.day_safety'), icon: Sun },
                { key: 'night', label: t('safety.night_safety'), icon: Moon },
                { key: 'women', label: t('safety.women_child'), icon: Users }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                    activeTab === tab.key
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {safetyTips[activeTab as keyof typeof safetyTips]?.map((tip, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-l-4 transition-all hover:shadow-md ${getPriorityColor(tip.priority)}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <tip.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {tip.description}
                      </p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-3 ${
                        tip.priority === 'high' 
                          ? 'bg-red-100 text-red-800' 
                          : tip.priority === 'medium'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {tip.priority} priority
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Numbers */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
              Emergency Numbers
            </h2>
            <div className="space-y-4">
              {emergencyNumbers.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">{contact.service}</h3>
                    <p className="text-sm text-gray-600">{contact.available}</p>
                  </div>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Environmental Footprint Calculator */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calculator className="h-6 w-6 text-green-600 mr-3" />
              {t('safety.footprint')}
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Pandals to Visit
                </label>
                <select
                  value={footprintData.locations}
                  onChange={(e) => setFootprintData({ ...footprintData, locations: parseInt(e.target.value) })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} pandal{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Mode of Transport
                </label>
                <select
                  value={footprintData.transportMode}
                  onChange={(e) => setFootprintData({ ...footprintData, transportMode: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="walking">Walking</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="bus">Bus/Metro</option>
                  <option value="taxi">Taxi/Rideshare</option>
                  <option value="car">Private Car</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Hours Outside
                </label>
                <select
                  value={footprintData.duration}
                  onChange={(e) => setFootprintData({ ...footprintData, duration: parseInt(e.target.value) })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map(hour => (
                    <option key={hour} value={hour}>{hour} hours</option>
                  ))}
                </select>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">
                      {footprintScore.toFixed(1)}/10
                    </div>
                    <div className="text-sm text-gray-600">Eco Score</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  {footprintScore >= 8 
                    ? "Excellent! Your celebration plan is very eco-friendly." 
                    : footprintScore >= 6 
                    ? "Good! Consider walking more or using public transport." 
                    : "Consider reducing locations or using greener transport options."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;