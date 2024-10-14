import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ElementType;
  description: string;
  details: Record<string, string[]>;
  detailsIcons: React.ElementType[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, icon: Icon, description, details, detailsIcons }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const detailsKeys = Object.keys(details);
  const isMultiColumn = detailsKeys.length > 1;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-[#282828] p-8 rounded-lg shadow-lg ${isMultiColumn ? 'max-w-4xl' : 'max-w-lg'} w-full max-h-[90vh] overflow-y-auto relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex mb-4">
          <Icon className="w-12 h-12 text-spotify-green" />
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        <div className={`grid ${isMultiColumn ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-4`}>
          {detailsKeys.map((key, index) => (
            <div key={index} className="bg-[#3B3B3B] p-4 rounded-lg">
              <h3 className="font-bold text-white mb-3">{key}</h3>
              <ul className="flex flex-wrap gap-2">
                {details[key].map((value, subIndex) => (
                  <li key={subIndex} className="bg-[#1DB954] text-white px-3 py-1 rounded-full text-sm">
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {detailsIcons.map((DetailIcon, index) => (
            <DetailIcon key={index} className="w-6 h-6 text-spotify-green" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;