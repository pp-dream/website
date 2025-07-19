import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'default', 
  className = '' 
}) => {
  const sizeClasses = {
    default: 'container-center',
    narrow: 'container-center-narrow', 
    wide: 'container-center-wide'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
