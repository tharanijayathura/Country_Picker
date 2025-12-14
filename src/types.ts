export interface Option {
  text: string;
  value: string;
  image: string;
}

export interface Question {
  key: string;
  question: string;
  options: Option[];
}

export interface Country {
  name: string;
  flag: string;
  image: string;
  weather: string;
  roads: string;
  landscape: string;
  culture: string;
  activities: string;
  score?: number;
}

export interface AnswerMap { [key: string]: string; }

export interface ResultData extends Country {
  message: string;
}
