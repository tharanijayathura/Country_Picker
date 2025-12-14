import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import SafeImage from './SafeImage';
import { getQuestionImage } from '../utils/imageUtils';
import type { Option } from '../types'; // <-- type-only


interface QuestionProps {
  options: Option[];
  onSelect: (value: string) => void;
  questionKey?: string;
  selectedValue?: string;
}

const Question: React.FC<QuestionProps> = ({ options, onSelect, questionKey, selectedValue }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gap: 2,
      justifyContent: 'center',
    }}
  >
    {options.map((option) => {
      // Get fallback images if questionKey is provided
      const fallbackImages = questionKey ? getQuestionImage(questionKey, option.value) : [];
      const imageSources = [option.image, ...fallbackImages];

      return (
        <Card
          key={option.value}
          sx={{
            width: '100%',
            maxWidth: 280,
            margin: '0 auto',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: 8,
            },
            '&:active': {
              transform: 'translateY(-4px) scale(0.98)',
            },
            overflow: 'hidden',
            border: '2px solid',
            borderColor: selectedValue === option.value ? 'primary.main' : 'divider',
            boxShadow: selectedValue === option.value ? 4 : 1,
            bgcolor: selectedValue === option.value ? 'action.selected' : 'background.paper',
          }}
          onClick={() => onSelect(option.value)}
          aria-label={option.text}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(option.value);
            }
          }}
        >
          <SafeImage
            src={imageSources}
            alt={option.text}
            style={{
              width: '100%',
              height: 160,
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ fontWeight: 600, fontSize: '1rem' }}
            >
              {option.text}
            </Typography>
          </CardContent>
        </Card>
      );
    })}
  </Box>
);

export default Question;
