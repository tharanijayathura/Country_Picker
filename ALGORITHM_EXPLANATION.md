# Algorithm Explanation Guide

This document explains how all the algorithms in the Country Picker quiz work.

## 📊 1. Country Matching Algorithm (The Main Algorithm)

**Location:** `src/App.tsx` - `calculateResult()` function

This is the **core algorithm** that matches user answers to countries.

### How It Works:

```typescript
const calculateResult = () => {
  // Step 1: Define weights for each question category
  const weights: Record<MatchKey, number> = {
    weather: 3,      // Most important (30% weight)
    landscape: 3,    // Most important (30% weight)
    culture: 2,      // Medium importance (20% weight)
    roads: 1,        // Less important (10% weight)
    activities: 1,   // Less important (10% weight)
  };
  
  // Step 2: Calculate total weight (3+3+2+1+1 = 10)
  const total = Object.values(weights).reduce((s, w) => s + w, 0);
  
  // Step 3: Score each country
  const scored = countries.map((c: Country) => {
    let score = 0;
    // Check each category
    (Object.keys(weights) as MatchKey[]).forEach((k) => {
      const a = answers[k];  // User's answer for this category
      if (a && c[k] === a) { // If answer matches country's attribute
        score += weights[k]; // Add the weight to score
      }
    });
    // Normalize score (convert to percentage: 0.0 to 1.0)
    return { ...c, score: score / total };
  });
  
  // Step 4: Sort countries by score (highest first)
  scored.sort((a, b) => (b.score! - a.score!));
  
  // Step 5: Find the best score
  const best = scored[0].score!;
  
  // Step 6: Get all countries with the best score
  const top = scored.filter((c) => c.score === best);
  
  // Step 7: Randomly pick one from the top matches
  const pick = top[Math.floor(Math.random() * top.length)];
  
  // Step 8: Add a random fun message
  const msg = funMessages[Math.floor(Math.random() * funMessages.length)];
  setResult({ ...pick, message: msg });
};
```

### Example Walkthrough:

**User Answers:**
- Weather: `sunny`
- Landscape: `beaches`
- Culture: `relaxed`
- Roads: `beachside`
- Activities: `outdoor`

**Country: Australia**
- Weather: `sunny` ✅ Match! (+3 points)
- Landscape: `beaches` ✅ Match! (+3 points)
- Culture: `relaxed` ✅ Match! (+2 points)
- Roads: `beachside` ✅ Match! (+1 point)
- Activities: `outdoor` ✅ Match! (+1 point)
- **Total Score: 10/10 = 1.0 (100% match!)**

**Country: Brazil**
- Weather: `tropical` ❌ No match (0 points)
- Landscape: `jungles` ❌ No match (0 points)
- Culture: `vibrant` ❌ No match (0 points)
- Roads: `curved` ❌ No match (0 points)
- Activities: `festivals` ❌ No match (0 points)
- **Total Score: 0/10 = 0.0 (0% match)**

### Key Concepts:

1. **Weighted Scoring**: Not all questions are equal. Weather and landscape are more important (weight 3) than roads (weight 1).

2. **Normalization**: Scores are divided by total weight (10) to get a percentage (0.0 to 1.0).

3. **Tie-Breaking**: If multiple countries have the same score, one is randomly selected.

---

## 🎯 2. Quiz Navigation Algorithm

**Location:** `src/components/Quiz.tsx`

### How It Works:

```typescript
const Quiz = ({ questions, onAnswer, onFinish, answers }) => {
  const [current, setCurrent] = useState(0); // Track current question index
  
  const handleSelect = (value: string) => {
    // Save the answer
    onAnswer(questions[current].key, value);
    
    // Move to next question or finish
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1); // Next question
    } else {
      onFinish(); // Last question - calculate result
    }
  };
  
  const handleBack = () => {
    if (current > 0) {
      setCurrent((c) => c - 1); // Previous question
    }
  };
  
  // Calculate progress percentage
  const progress = Math.round(((current + 1) / questions.length) * 100);
};
```

### Flow Diagram:

```
Start → Question 1 → [User selects] → Save Answer
  ↓
Question 2 → [User selects] → Save Answer
  ↓
Question 3 → [User selects] → Save Answer
  ↓
... (continue for all questions)
  ↓
Last Question → [User selects] → Save Answer → Calculate Result
```

### Key Features:

1. **State Management**: Uses `current` index to track which question is shown
2. **Progress Calculation**: `(current + 1) / total * 100` gives percentage
3. **Back Navigation**: Decrements `current` index to go back
4. **Answer Persistence**: Answers are stored in parent component's state

---

## 🖼️ 3. Image Fallback Algorithm

**Location:** `src/components/SafeImage.tsx`

This algorithm ensures images always load, even if the primary source fails.

### How It Works:

```typescript
const SafeImage = ({ src, alt, fallbackSrc }) => {
  // Step 1: Combine all image sources into one array
  const sources = React.useMemo(() => {
    const srcArray = Array.isArray(src) ? src : [src];
    const fallbackArray = fallbackSrc ? (Array.isArray(fallbackSrc) ? fallbackSrc : [fallbackSrc]) : [];
    return [...srcArray, ...fallbackArray]; // [primary, fallback1, fallback2, ...]
  }, [src, fallbackSrc]);
  
  const [currentIndex, setCurrentIndex] = useState(0); // Track which image to try
  const currentSrc = sources[currentIndex] || '';
  
  const handleError = () => {
    // If current image fails, try the next one
    if (currentIndex < sources.length - 1) {
      setCurrentIndex(currentIndex + 1); // Try next image
      setLoading(true);
    } else {
      // All images failed - show placeholder
      setError(true);
    }
  };
};
```

### Example Flow:

**Image Sources Array:**
```javascript
[
  'https://i.pinimg.com/.../image1.jpg',  // Primary (index 0)
  'https://picsum.photos/.../image2.jpg', // Fallback 1 (index 1)
  'https://picsum.photos/.../image3.jpg'  // Fallback 2 (index 2)
]
```

**Loading Process:**
1. Try index 0 (Pinterest image) → ✅ Success! Display it
2. If index 0 fails → Try index 1 (Picsum) → ✅ Success! Display it
3. If index 1 fails → Try index 2 (Picsum) → ✅ Success! Display it
4. If all fail → Show placeholder "🖼️ Image unavailable"

### Key Concepts:

1. **Cascading Fallbacks**: Tries images in order until one works
2. **Error Handling**: Each failed image triggers trying the next
3. **Loading States**: Shows spinner while trying to load
4. **Graceful Degradation**: Always shows something, even if all images fail

---

## 📝 4. Data Structure Algorithm

**Location:** `src/data/index.ts`

### Country Data Structure:

```typescript
{
  name: 'Australia',
  flag: 'https://flagcdn.com/au.svg',
  image: 'https://...',
  weather: 'sunny',      // Must match question option value
  roads: 'beachside',    // Must match question option value
  landscape: 'beaches',  // Must match question option value
  culture: 'relaxed',    // Must match question option value
  activities: 'outdoor'  // Must match question option value
}
```

### Matching Logic:

The algorithm compares:
- User's answer: `answers['weather'] = 'sunny'`
- Country's attribute: `country.weather = 'sunny'`
- If they match: Add points!

### Question Structure:

```typescript
{
  key: 'weather',  // Used to store answer: answers['weather'] = 'sunny'
  question: 'What weather do you prefer?',
  options: [
    { 
      text: 'Sunny',           // Display text
      value: 'sunny',          // Value stored in answers (must match country attribute)
      image: 'https://...'     // Image to show
    }
  ]
}
```

---

## 🔄 5. State Management Flow

**Location:** `src/App.tsx`

### State Variables:

```typescript
const [step, setStep] = useState<Step>('start');  // 'start' | 'quiz' | 'result'
const [answers, setAnswers] = useState<AnswerMap>({});  // { weather: 'sunny', ... }
const [result, setResult] = useState<ResultData | null>(null);  // Final country
```

### State Flow:

```
1. START SCREEN
   step = 'start'
   answers = {}
   result = null
   
2. USER CLICKS "Start"
   → setStep('quiz')
   
3. QUIZ SCREEN
   step = 'quiz'
   answers = { weather: 'sunny', landscape: 'beaches', ... }
   result = null
   
4. USER COMPLETES QUIZ
   → calculateResult() runs
   → setResult({ name: 'Australia', ... })
   → setStep('result')
   
5. RESULT SCREEN
   step = 'result'
   answers = { weather: 'sunny', ... }
   result = { name: 'Australia', ... }
   
6. USER CLICKS "Try Again"
   → setStep('start')
   → setAnswers({})
   → setResult(null)
```

---

## 🎲 6. Random Selection Algorithm

**Location:** `src/App.tsx` - `calculateResult()`

When multiple countries have the same score:

```typescript
// Get all countries with the best score
const top = scored.filter((c) => c.score === best);

// Randomly pick one
const pick = top[Math.floor(Math.random() * top.length)];
```

### How `Math.random()` Works:

- `Math.random()` returns a number between 0 and 1 (e.g., 0.7)
- Multiply by array length (e.g., 3 countries → 0.7 * 3 = 2.1)
- `Math.floor()` rounds down (2.1 → 2)
- Result: Selects country at index 2

### Example:

```javascript
top = [Australia, Spain, Greece]  // All have score 0.8
Math.random() = 0.6
0.6 * 3 = 1.8
Math.floor(1.8) = 1
Result: top[1] = Spain ✅
```

---

## 📈 7. Progress Calculation

**Location:** `src/components/Quiz.tsx`

```typescript
const progress = Math.round(((current + 1) / questions.length) * 100);
```

### Examples:

- Question 1 of 5: `(1 + 1) / 5 * 100 = 40%`
- Question 2 of 5: `(2 + 1) / 5 * 100 = 60%`
- Question 3 of 5: `(3 + 1) / 5 * 100 = 80%`
- Question 5 of 5: `(5 + 1) / 5 * 100 = 120%` → Rounded to 100%

**Why `current + 1`?** Because `current` is 0-indexed (starts at 0), but we want to show "Question 1" not "Question 0".

---

## 🧮 Summary: Complete Algorithm Flow

```
1. USER STARTS QUIZ
   ↓
2. USER ANSWERS QUESTIONS
   → Each answer saved: answers[questionKey] = value
   ↓
3. USER COMPLETES QUIZ
   ↓
4. CALCULATE RESULT:
   a. For each country:
      - Check each answer category
      - If answer matches country attribute → add weight
      - Calculate final score (points / total weight)
   b. Sort countries by score (highest first)
   c. Find all countries with best score
   d. Randomly pick one
   e. Add random fun message
   ↓
5. DISPLAY RESULT
   → Show matched country with flag, image, and message
```

---

## 💡 Key Algorithm Concepts Used

1. **Weighted Scoring**: Different importance for different factors
2. **Normalization**: Converting scores to percentages (0-1)
3. **Sorting**: Ordering results by score
4. **Filtering**: Finding matches with same score
5. **Random Selection**: Picking from tied results
6. **State Management**: Tracking quiz progress
7. **Error Handling**: Image fallback system
8. **Array Operations**: map, filter, sort, reduce

---

## 🔧 How to Modify the Algorithm

### Change Question Weights:

```typescript
const weights: Record<MatchKey, number> = {
  weather: 5,      // Make weather more important
  landscape: 2,    // Make landscape less important
  // ...
};
```

### Change Scoring Formula:

Instead of simple matching, you could use:
- **Partial matches**: Give partial points for similar answers
- **Negative scoring**: Subtract points for mismatches
- **Multiplier system**: Multiply scores for certain combinations

### Add More Countries:

Just add to the `countries` array in `src/data/index.ts` with matching attributes.

---

I hope this helps you understand how everything works! 🚀

