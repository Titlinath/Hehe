import React, { useState } from 'react';
import { AlertTriangle, Camera, Mic, MapPin, Send, Shield, Phone, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Report: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    anonymous: false,
    incidentType: '',
    location: '',
    time: '',
    description: '',
    urgency: 'medium'
  });
  const [photo, setPhoto] = useState<File | null>(null);
  const [audio, setAudio] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const incidentTypes = [
    { value: 'safety', label: 'Safety Concern', icon: Shield },
    { value: 'medical', label: 'Medical Emergency', icon: AlertTriangle },
    { value: 'harassment', label: 'Harassment', icon: AlertTriangle },
    { value: 'theft', label: 'Theft/Lost Items', icon: AlertTriangle },
    { value: 'crowding', label: 'Overcrowding', icon: AlertTriangle },
    { value: 'infrastructure', label: 'Infrastructure Issue', icon: AlertTriangle },
    { value: 'other', label: 'Other', icon: AlertTriangle }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudio(e.target.files[0]);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Report Submitted</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your report. We have received your information and will take appropriate action.
            You will receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  anonymous: false,
                  incidentType: '',
                  location: '',
                  time: '',
                  description: '',
                  urgency: 'medium'
                });
                setPhoto(null);
                setAudio(null);
              }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Submit Another Report
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Report Incident
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Help us maintain a safe environment for everyone. Report any safety concerns or incidents quickly and securely.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-4">
                <a
                  href="tel:100"
                  className="flex items-center space-x-3 p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Emergency: 100</div>
                    <div className="text-sm opacity-90">Police Emergency</div>
                  </div>
                </a>

                <a
                  href="tel:108"
                  className="flex items-center space-x-3 p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Medical: 108</div>
                    <div className="text-sm opacity-90">Ambulance Service</div>
                  </div>
                </a>

                <a
                  href="https://citizenportal.ksp.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <div>
                    <div className="font-semibold">Kolkata Police</div>
                    <div className="text-sm opacity-90">Official Complaint</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Privacy Notice</h3>
                <p className="text-sm text-gray-600">
                  Your report will be handled confidentially. You can choose to remain anonymous.
                </p>
              </div>
            </div>
          </div>

          {/* Report Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Incident Report Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anonymous Option */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData.anonymous}
                    onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm font-medium text-gray-700">
                    Submit this report anonymously
                  </label>
                </div>

                {/* Name Field */}
                {!formData.anonymous && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your name"
                    />
                  </div>
                )}

                {/* Incident Type */}
                <div>
                  <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Incident *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {incidentTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, incidentType: type.value })}
                        className={`p-3 border rounded-lg text-left transition-colors ${
                          formData.incidentType === type.value
                            ? 'border-red-500 bg-red-50 text-red-700'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <type.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter location or nearby landmark"
                    />
                    <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Time of Incident *
                  </label>
                  <input
                    type="datetime-local"
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Urgency Level */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="low">Low - Non-urgent concern</option>
                    <option value="medium">Medium - Needs attention</option>
                    <option value="high">High - Urgent safety issue</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Provide detailed description of the incident..."
                  />
                </div>

                {/* File Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                      Photo Evidence (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="photo"
                        className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                      >
                        <div className="text-center">
                          <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <span className="text-sm text-gray-600">
                            {photo ? photo.name : 'Click to upload photo'}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="audio" className="block text-sm font-medium text-gray-700 mb-2">
                      Audio Recording (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="audio"
                        accept="audio/*"
                        onChange={handleAudioChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="audio"
                        className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
                      >
                        <div className="text-center">
                          <Mic className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <span className="text-sm text-gray-600">
                            {audio ? audio.name : 'Click to upload audio'}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {t('common.cancel')}
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>{t('common.submit')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;