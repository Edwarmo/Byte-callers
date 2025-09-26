import React, { useEffect } from 'react';
import { Platform } from 'react-native';

const CustomScrollbar: React.FC = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') return;

    const smartBar = document.createElement('div');
    smartBar.className = 'smart-scrollbar';
    document.body.appendChild(smartBar);

    let hideTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX >= window.innerWidth - 20) {
        smartBar.classList.add('active');
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          smartBar.classList.remove('active');
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
      if (smartBar.parentNode) {
        smartBar.parentNode.removeChild(smartBar);
      }
    };
  }, []);

  return null;
};

export default CustomScrollbar;