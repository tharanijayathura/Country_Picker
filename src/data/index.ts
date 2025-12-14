import type { Country, Question } from '../types'; // <-- type-only
import { getCountryImage, getQuestionImage } from '../utils/imageUtils';


export const countries: Country[] = [
  { name: 'Australia', flag: 'https://flagcdn.com/au.svg', image: getCountryImage('Australia')[0], weather: 'sunny', roads: 'beachside', landscape: 'beaches', culture: 'relaxed', activities: 'outdoor' },
  { name: 'Brazil', flag: 'https://flagcdn.com/br.svg', image: getCountryImage('Brazil')[0], weather: 'tropical', roads: 'curved', landscape: 'jungles', culture: 'vibrant', activities: 'festivals' },
  { name: 'Canada', flag: 'https://flagcdn.com/ca.svg', image: getCountryImage('Canada')[0], weather: 'cold', roads: 'straight', landscape: 'mountains', culture: 'diverse', activities: 'outdoor' },
  { name: 'Italy', flag: 'https://flagcdn.com/it.svg', image: getCountryImage('Italy')[0], weather: 'temperate', roads: 'curved', landscape: 'cities', culture: 'historical', activities: 'cultural' },
  { name: 'Japan', flag: 'https://flagcdn.com/jp.svg', image: getCountryImage('Japan')[0], weather: 'temperate', roads: 'urban', landscape: 'cities', culture: 'traditional', activities: 'cultural' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg', image: getCountryImage('New Zealand')[0], weather: 'temperate', roads: 'curved', landscape: 'mountains', culture: 'relaxed', activities: 'outdoor' },
  { name: 'Thailand', flag: 'https://flagcdn.com/th.svg', image: getCountryImage('Thailand')[0], weather: 'tropical', roads: 'beachside', landscape: 'beaches', culture: 'vibrant', activities: 'festivals' },
  { name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg', image: getCountryImage('Switzerland')[0], weather: 'cold', roads: 'curved', landscape: 'mountains', culture: 'historical', activities: 'outdoor' },
  { name: 'India', flag: 'https://flagcdn.com/in.svg', image: getCountryImage('India')[0], weather: 'tropical', roads: 'urban', landscape: 'cities', culture: 'vibrant', activities: 'cultural' },
  { name: 'South Africa', flag: 'https://flagcdn.com/za.svg', image: getCountryImage('South Africa')[0], weather: 'sunny', roads: 'straight', landscape: 'savanna', culture: 'diverse', activities: 'outdoor' },
  { name: 'Greece', flag: 'https://flagcdn.com/gr.svg', image: getCountryImage('Greece')[0], weather: 'sunny', roads: 'beachside', landscape: 'beaches', culture: 'historical', activities: 'cultural' },
  { name: 'Norway', flag: 'https://flagcdn.com/no.svg', image: getCountryImage('Norway')[0], weather: 'cold', roads: 'curved', landscape: 'mountains', culture: 'relaxed', activities: 'outdoor' },
  { name: 'Mexico', flag: 'https://flagcdn.com/mx.svg', image: getCountryImage('Mexico')[0], weather: 'tropical', roads: 'urban', landscape: 'beaches', culture: 'vibrant', activities: 'festivals' },
  { name: 'France', flag: 'https://flagcdn.com/fr.svg', image: getCountryImage('France')[0], weather: 'temperate', roads: 'curved', landscape: 'cities', culture: 'historical', activities: 'cultural' },
  { name: 'Argentina', flag: 'https://flagcdn.com/ar.svg', image: getCountryImage('Argentina')[0], weather: 'temperate', roads: 'straight', landscape: 'plains', culture: 'vibrant', activities: 'festivals' },
  { name: 'Spain', flag: 'https://flagcdn.com/es.svg', image: getCountryImage('Spain')[0], weather: 'sunny', roads: 'beachside', landscape: 'beaches', culture: 'vibrant', activities: 'festivals' },
  { name: 'Peru', flag: 'https://flagcdn.com/pe.svg', image: getCountryImage('Peru')[0], weather: 'tropical', roads: 'curved', landscape: 'mountains', culture: 'historical', activities: 'cultural' },
  { name: 'Indonesia', flag: 'https://flagcdn.com/id.svg', image: getCountryImage('Indonesia')[0], weather: 'tropical', roads: 'beachside', landscape: 'beaches', culture: 'diverse', activities: 'outdoor' },
  { name: 'Iceland', flag: 'https://flagcdn.com/is.svg', image: getCountryImage('Iceland')[0], weather: 'cold', roads: 'curved', landscape: 'mountains', culture: 'relaxed', activities: 'outdoor' },
  { name: 'Egypt', flag: 'https://flagcdn.com/eg.svg', image: getCountryImage('Egypt')[0], weather: 'sunny', roads: 'straight', landscape: 'deserts', culture: 'historical', activities: 'cultural' },
  { name: 'Vietnam', flag: 'https://flagcdn.com/vn.svg', image: getCountryImage('Vietnam')[0], weather: 'tropical', roads: 'urban', landscape: 'jungles', culture: 'vibrant', activities: 'cultural' },
  { name: 'Chile', flag: 'https://flagcdn.com/cl.svg', image: getCountryImage('Chile')[0], weather: 'temperate', roads: 'curved', landscape: 'mountains', culture: 'diverse', activities: 'outdoor' },
  { name: 'Morocco', flag: 'https://flagcdn.com/ma.svg', image: getCountryImage('Morocco')[0], weather: 'sunny', roads: 'urban', landscape: 'deserts', culture: 'historical', activities: 'cultural' },
  { name: 'Sweden', flag: 'https://flagcdn.com/se.svg', image: getCountryImage('Sweden')[0], weather: 'cold', roads: 'straight', landscape: 'forests', culture: 'relaxed', activities: 'outdoor' },
  { name: 'Portugal', flag: 'https://flagcdn.com/pt.svg', image: getCountryImage('Portugal')[0], weather: 'sunny', roads: 'beachside', landscape: 'beaches', culture: 'historical', activities: 'festivals' }
];

export const questions: Question[] = [
  {
    key: 'weather',
    question: 'What weather do you prefer?',
    options: [
      { text: 'Sunny', value: 'sunny', image: getQuestionImage('weather', 'sunny')[0] },
      { text: 'Tropical', value: 'tropical', image: getQuestionImage('weather', 'tropical')[0] },
      { text: 'Cold', value: 'cold', image: getQuestionImage('weather', 'cold')[0] },
      { text: 'Temperate', value: 'temperate', image: getQuestionImage('weather', 'temperate')[0] },
      { text: 'Rainy', value: 'rainy', image: getQuestionImage('weather', 'rainy')[0] },
      { text: 'Windy', value: 'windy', image: getQuestionImage('weather', 'windy')[0] }
    ]
  },
  {
    key: 'roads',
    question: 'What kind of roads do you like?',
    options: [
      { text: 'Straight Roads', value: 'straight', image: getQuestionImage('roads', 'straight')[0] },
      { text: 'Curved Roads', value: 'curved', image: getQuestionImage('roads', 'curved')[0] },
      { text: 'Beachside', value: 'beachside', image: getQuestionImage('roads', 'beachside')[0] },
      { text: 'Urban', value: 'urban', image: getQuestionImage('roads', 'urban')[0] },
      { text: 'Mountain Roads', value: 'mountain', image: getQuestionImage('roads', 'mountain')[0] },
      { text: 'Countryside', value: 'countryside', image: getQuestionImage('roads', 'countryside')[0] }
    ]
  },
  {
    key: 'landscape',
    question: 'What landscape do you love?',
    options: [
      { text: 'Beaches', value: 'beaches', image: getQuestionImage('landscape', 'beaches')[0] },
      { text: 'Mountains', value: 'mountains', image: getQuestionImage('landscape', 'mountains')[0] },
      { text: 'Jungles', value: 'jungles', image: getQuestionImage('landscape', 'jungles')[0] },
      { text: 'Cities', value: 'cities', image: getQuestionImage('landscape', 'cities')[0] },
      { text: 'Deserts', value: 'deserts', image: getQuestionImage('landscape', 'deserts')[0] },
      { text: 'Savanna', value: 'savanna', image: getQuestionImage('landscape', 'savanna')[0] },
      { text: 'Plains', value: 'plains', image: getQuestionImage('landscape', 'plains')[0] },
      { text: 'Forests', value: 'forests', image: getQuestionImage('landscape', 'forests')[0] },
      { text: 'Islands', value: 'islands', image: getQuestionImage('landscape', 'islands')[0] },
      { text: 'Lakes', value: 'lakes', image: getQuestionImage('landscape', 'lakes')[0] }
    ]
  },
  {
    key: 'culture',
    question: 'What cultural vibe do you prefer?',
    options: [
      { text: 'Vibrant', value: 'vibrant', image: getQuestionImage('culture', 'vibrant')[0] },
      { text: 'Historical', value: 'historical', image: getQuestionImage('culture', 'historical')[0] },
      { text: 'Relaxed', value: 'relaxed', image: getQuestionImage('culture', 'relaxed')[0] },
      { text: 'Diverse', value: 'diverse', image: getQuestionImage('culture', 'diverse')[0] },
      { text: 'Traditional', value: 'traditional', image: getQuestionImage('culture', 'traditional')[0] },
      { text: 'Modern', value: 'modern', image: getQuestionImage('culture', 'modern')[0] }
    ]
  },
  {
    key: 'activities',
    question: 'What activities do you enjoy?',
    options: [
      { text: 'Outdoor', value: 'outdoor', image: getQuestionImage('activities', 'outdoor')[0] },
      { text: 'Cultural', value: 'cultural', image: getQuestionImage('activities', 'cultural')[0] },
      { text: 'Festivals', value: 'festivals', image: getQuestionImage('activities', 'festivals')[0] },
      { text: 'Relaxation', value: 'relaxation', image: getQuestionImage('activities', 'relaxation')[0] },
      { text: 'Adventure', value: 'adventure', image: getQuestionImage('activities', 'adventure')[0] },
      { text: 'Nightlife', value: 'nightlife', image: getQuestionImage('activities', 'nightlife')[0] }
    ]
  }
];

export const funMessages: string[] = [
  'Pack your bags, adventurer! Your dream destination awaits!',
  'Book your tickets now, or your suitcase will start packing itself!',
  'This country is calling your name—better answer before it leaves a voicemail!',
  'Your perfect escape is ready. Grab your passport and go wild!',
  'Time to jet-set! This country is your vibe—don’t keep it waiting!',
  'Your adventure starts here—don’t let this country wait too long!'
];
