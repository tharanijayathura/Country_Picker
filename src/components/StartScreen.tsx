import React from 'react';
import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import SafeImage from './SafeImage';

interface StartScreenProps {
  onStart: () => void;
}

// Use a single background image placed at public/hero.jpg (or change this path)
const HERO_SRC = '/hero.jpg';
// Fallback gradient background if image fails
const FALLBACK_GRADIENT = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: '#667eea',
      }}
    >
      {/* Background media */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {!imageError ? (
          <SafeImage
            src={HERO_SRC}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              background: FALLBACK_GRADIENT,
            }}
          />
        )}

        {/* Gradient overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </Box>

      {/* Center card */}
      <Paper
        elevation={6}
        sx={{
          zIndex: 1,
          p: { xs: 3, sm: 4 },
          width: 'min(92vw, 720px)',
          textAlign: 'center',
          borderRadius: 4,
          color: '#fff',
          bgcolor: 'rgba(15, 18, 22, 0.55)',
          border: '1px solid rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h2" sx={{ fontSize: { xs: 28, sm: 36 }, fontWeight: 900 }}>
            Find Your Perfect Country
          </Typography>

          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Choose what you love—weather, roads, landscapes, culture & activities—and we’ll match
            you with a destination you’ll adore.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={onStart}
            sx={{ mt: 1, px: 4, py: 1.25, borderRadius: 999, fontWeight: 700 }}
          >
            Start your journey
          </Button>

        </Stack>
      </Paper>
    </Box>
  );
};

export default StartScreen;
