import React from 'react';
import { Box, Typography, Button, Paper, Stack, Divider } from '@mui/material';
import SafeImage from './SafeImage';
import { getCountryImage } from '../utils/imageUtils';
import type { ResultData } from '../types'; // <-- type-only


interface ResultProps {
  result: ResultData;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onRestart }) => {
  // Get fallback images for the country
  const countryImageSources = getCountryImage(result.name);
  const imageSources = [result.image, ...countryImageSources];

  return (
  <Paper
    sx={{
      p: { xs: 3, md: 4 },
      animation: 'fadeInUp 0.6s ease-out',
      '@keyframes fadeInUp': {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
      },
    }}
    elevation={3}
  >
    <Stack spacing={3} alignItems="center">
      <Box textAlign="center">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 800, color: 'primary.main', mb: 1 }}
        >
          🎉 Your Perfect Country
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {result.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          mb: 2,
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3,
            border: '3px solid',
            borderColor: 'primary.main',
          }}
        >
          <SafeImage
            src={result.flag}
            alt={`${result.name} flag`}
            style={{
              width: 140,
              height: 84,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 4,
            maxWidth: '100%',
          }}
        >
          <SafeImage
            src={imageSources}
            alt={result.name}
            style={{
              width: '100%',
              maxWidth: 500,
              height: 300,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ width: '100%', my: 1 }} />

      <Typography
        variant="body1"
        sx={{
          fontStyle: 'italic',
          fontSize: '1.1rem',
          color: 'text.secondary',
          textAlign: 'center',
          px: 2,
        }}
      >
        {result.message}
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={onRestart}
        sx={{
          mt: 2,
          px: 4,
          py: 1.5,
          borderRadius: 2,
          fontWeight: 600,
          fontSize: '1rem',
        }}
      >
        Take Quiz Again
      </Button>
    </Stack>
  </Paper>
  );
};

export default Result;
