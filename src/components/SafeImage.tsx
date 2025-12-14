import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface SafeImageProps {
  src: string | string[];
  alt: string;
  fallbackSrc?: string | string[];
  style?: React.CSSProperties;
  className?: string;
  onError?: () => void;
}

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  style,
  className,
  onError,
}) => {
  // Convert to array of sources to try
  const sources = React.useMemo(() => {
    const srcArray = Array.isArray(src) ? src : [src];
    const fallbackArray = fallbackSrc ? (Array.isArray(fallbackSrc) ? fallbackSrc : [fallbackSrc]) : [];
    return [...srcArray, ...fallbackArray];
  }, [src, fallbackSrc]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSrc = sources[currentIndex] || '';

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    // Try next source in the array
    if (currentIndex < sources.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setLoading(true);
    } else {
      // All sources failed
      setLoading(false);
      setError(true);
      if (onError) onError();
    }
  };

  // Reset when src changes
  React.useEffect(() => {
    setCurrentIndex(0);
    setLoading(true);
    setError(false);
  }, [src, fallbackSrc]);

  if (error) {
    return (
      <Box
        sx={{
          ...style,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
          color: '#999',
          fontSize: '0.875rem',
          minHeight: style?.height || 160,
        }}
        className={className}
      >
        <Typography variant="body2" sx={{ mb: 0.5, fontSize: '2rem' }}>
          🖼️
        </Typography>
        <Typography variant="caption">Image unavailable</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ position: 'relative', ...style }} className={className}>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            zIndex: 1,
          }}
        >
          <CircularProgress size={40} />
        </Box>
      )}
      <img
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          ...style,
          display: loading ? 'none' : 'block',
        }}
      />
    </Box>
  );
};

export default SafeImage;

