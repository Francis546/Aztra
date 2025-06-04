import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Zap, Users, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Team members data
  const teamMembers = [
    {
      name: 'Jean-Louis van der Velde',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Giancarlo Devasini',
      role: 'CFO',
      image: 'https://images.pexels.com/photos/5875899/pexels-photo-5875899.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Stuart Hoegner',
      role: 'General Counsel',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Paolo Ardoino',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/8357169/pexels-photo-8357169.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  
  // Values with icons
  const values = [
    { name: t('about.valuesItems.0'), icon: <Shield className="h-6 w-6" /> },
    { name: t('about.valuesItems.1'), icon: <Clock className="h-6 w-6" /> },
    { name: t('about.valuesItems.2'), icon: <Zap className="h-6 w-6" /> },
    { name: t('about.valuesItems.3'), icon: <Users className="h-6 w-6" /> },
    { name: t('about.valuesItems.4'), icon: <Globe className="h-6 w-6" /> },
  ];
  
  return (
    <div className="bg-bitfinex-dark min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16 animation-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <div className="w-20 h-1 bg-bitfinex-blue mx-auto mb-6"></div>
        </div>
        
        {/* Mission Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('about.mission')}</h2>
              <p className="text-lg text-gray-300 mb-6">
                {t('about.missionText')}
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We are working to create a more efficient and accessible financial system. Our suite of products provides access to digital asset exchange services, margin funding, and more.
              </p>
              <div className="bg-bitfinex-blue/20 border-l-4 border-bitfinex-blue p-4 rounded">
                <p className="italic text-gray-300">
                  "Our vision is to create the most innovative, advanced, and secure digital asset exchange in the industry."
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-80 lg:h-96 relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Bitfinex Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bitfinex-darker/80 to-transparent"></div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('about.team')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-bitfinex-gray rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-bitfinex-blue">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">{t('about.values')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-bitfinex-gray p-6 rounded-lg text-center">
                <div className="bg-bitfinex-blue/20 p-4 rounded-full inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.name}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 w-0.5 h-full bg-bitfinex-gray"></div>
            
            {/* Timeline items */}
            <div className="relative space-y-12">
              {/* 2012 */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
                  <h3 className="text-2xl font-bold mb-2">2012</h3>
                  <p className="text-gray-300">Bitfinex was founded in Hong Kong as one of the earliest cryptocurrency exchanges.</p>
                </div>
                <div className="bg-bitfinex-blue rounded-full h-8 w-8 absolute left-0 md:left-1/2 md:-ml-4 ml-0 mt-1 border-4 border-bitfinex-dark"></div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:mt-0"></div>
              </div>
              
              {/* 2016 */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0 md:text-right order-1 md:order-1 mb-4 md:mb-0"></div>
                <div className="bg-bitfinex-blue rounded-full h-8 w-8 absolute left-0 md:left-1/2 md:-ml-4 ml-0 mt-1 border-4 border-bitfinex-dark"></div>
                <div className="md:w-1/2 md:pl-12 pl-12 order-2 md:order-2">
                  <h3 className="text-2xl font-bold mb-2">2016</h3>
                  <p className="text-gray-300">Expanded services to include margin trading and lending. Overcame significant challenges to become stronger.</p>
                </div>
              </div>
              
              {/* 2019 */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
                  <h3 className="text-2xl font-bold mb-2">2019</h3>
                  <p className="text-gray-300">Launched Bitfinex Derivatives, providing leveraged products and expanded trading options.</p>
                </div>
                <div className="bg-bitfinex-blue rounded-full h-8 w-8 absolute left-0 md:left-1/2 md:-ml-4 ml-0 mt-1 border-4 border-bitfinex-dark"></div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:mt-0"></div>
              </div>
              
              {/* 2023 */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 pl-12 md:pl-0 md:text-right order-1 md:order-1 mb-4 md:mb-0"></div>
                <div className="bg-bitfinex-blue rounded-full h-8 w-8 absolute left-0 md:left-1/2 md:-ml-4 ml-0 mt-1 border-4 border-bitfinex-dark"></div>
                <div className="md:w-1/2 md:pl-12 pl-12 order-2 md:order-2">
                  <h3 className="text-2xl font-bold mb-2">2023</h3>
                  <p className="text-gray-300">Expanded global presence and introduced advanced trading features, serving users in over 180 countries.</p>
                </div>
              </div>
              
              {/* Present */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 pl-12 md:pl-0">
                  <h3 className="text-2xl font-bold mb-2">Present</h3>
                  <p className="text-gray-300">Continuing to innovate with cutting-edge features and services for cryptocurrency traders and investors.</p>
                </div>
                <div className="bg-bitfinex-blue rounded-full h-8 w-8 absolute left-0 md:left-1/2 md:-ml-4 ml-0 mt-1 border-4 border-bitfinex-dark"></div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:mt-0"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;