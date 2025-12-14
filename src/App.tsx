import React, { useState } from 'react';
import { Box, Container, Paper } from '@mui/material';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { countries, questions, funMessages } from './data';
import type { AnswerMap, Country, ResultData } from './types';
import './App.css';

type Step = 'start' | 'quiz' | 'result';
type MatchKey = 'weather' | 'roads' | 'landscape' | 'culture' | 'activities';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('start');
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [result, setResult] = useState<ResultData | null>(null);

  const startQuiz = () => setStep('quiz');

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const calculateResult = () => {
    const weights: Record<MatchKey, number> = {
      weather: 3,
      landscape: 3,
      culture: 2,
      roads: 1,
      activities: 1,
    };
    const total = Object.values(weights).reduce((s, w) => s + w, 0);

    const scored = countries.map((c: Country) => {
      let score = 0;
      (Object.keys(weights) as MatchKey[]).forEach((k) => {
        const a = answers[k];
        if (a && c[k] === a) score += weights[k];
      });
      return { ...c, score: score / total };
    });

    scored.sort((a, b) => (b.score! - a.score!));
    const best = scored[0].score!;
    const top = scored.filter((c) => c.score === best);
    const pick = top[Math.floor(Math.random() * top.length)];
    const msg = funMessages[Math.floor(Math.random() * funMessages.length)];
    setResult({ ...pick, message: msg });
    setStep('result');
  };

  const restart = () => {
    setStep('start');
    setAnswers({});
    setResult(null);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {step === 'start' ? (
        <StartScreen onStart={startQuiz} />
      ) : (
        <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', py: 4 }}>
          <Container maxWidth="md">
            <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }} elevation={4}>
              {step === 'quiz' && (
                <Quiz
                  questions={questions}
                  onAnswer={handleAnswer}
                  onFinish={calculateResult}
                  answers={answers}
                />
              )}
              {step === 'result' && result && <Result result={result} onRestart={restart} />}
            </Paper>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default App;
