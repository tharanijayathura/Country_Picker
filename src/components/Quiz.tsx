import React, { useState } from 'react';
import { Box, Typography, LinearProgress, Chip, Button, Stack } from '@mui/material';
import Question from './Question';
import type { Question as QuestionType } from '../types'; // <-- type-only


interface QuizProps {
  questions: QuestionType[];
  onAnswer: (questionKey: string, value: string) => void;
  onFinish: () => void;
  answers: Record<string, string>;
}

const Quiz: React.FC<QuizProps> = ({ questions, onAnswer, onFinish, answers }) => {
  const [current, setCurrent] = useState(0);

  const handleSelect = (value: string) => {
    onAnswer(questions[current].key, value);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      onFinish();
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }
  };

  const canGoBack = current > 0;

  const progress = Math.round(((current + 1) / questions.length) * 100);

  return (
    <Box
      sx={{
        animation: 'fadeIn 0.4s ease-in',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Chip
          label={`Question ${current + 1} of ${questions.length}`}
          color="primary"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
          {progress}% Complete
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          mb: 4,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(0,0,0,0.08)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 5,
            transition: 'transform 0.4s ease',
          },
        }}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
        {canGoBack && (
          <Button
            onClick={handleBack}
            variant="outlined"
            sx={{ minWidth: 120 }}
          >
            ← Back
          </Button>
        )}
        {!canGoBack && <Box sx={{ minWidth: 120 }} />}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '1.875rem', md: '2.25rem' },
            textAlign: 'center',
            color: 'text.primary',
            lineHeight: 1.2,
            flex: 1,
            mx: 2,
          }}
        >
          {questions[current].question}
        </Typography>
        <Box sx={{ minWidth: 120 }} />
      </Stack>
      <Question
        options={questions[current].options}
        onSelect={handleSelect}
        questionKey={questions[current].key}
        selectedValue={answers[questions[current].key]}
      />
    </Box>
  );
};

export default Quiz;
