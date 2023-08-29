import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ServiceItemProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
  return (
      <div className="text-center pt-3 overflow-hidden bg-white p-10 m-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
       <div className="mx-auto">
          <FontAwesomeIcon icon={icon} className={`text-sky-500 text-5xl mb-4`} />
          <h5 className="mb-2 text-lg font-semibold">{title}</h5>
          <p className="text-lg text-center text-gray-700">{description}</p>
        </div>
      </div>
  );
};

export default ServiceItem;
