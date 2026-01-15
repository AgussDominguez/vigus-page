'use client';

import { COLORS } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import React from 'react';

interface CategoryTabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ id, label, isActive, onClick }) => {
  return (
    <motion.button
      key={id}
      onClick={onClick}
      whileHover={!isActive ? { scale: 1.02, backgroundColor: 'rgba(0,0,0,0.02)' } : {}}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border relative',
        isActive
          ? 'text-white shadow-lg border-transparent'
          : 'bg-transparent text-gray-500 border-gray-200 hover:text-gray-700 hover:border-gray-300',
      )}
      style={{
        color: isActive ? COLORS.textOnPrimary : undefined,
        backgroundColor: !isActive ? 'transparent' : undefined,
      }}
    >
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.div
          layoutId="activeCategoryBackground"
          className="absolute inset-0 rounded-full z-0"
          style={{ backgroundColor: COLORS.primary }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
};

export default CategoryTab;
