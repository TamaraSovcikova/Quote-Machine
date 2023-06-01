import { createStore } from 'redux';

export const CHANGE_QUOTE = 'CHANGE_QUOTE';

const initialState = {
    quotes: [
       { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The only person you should try to be better than is the person you were yesterday.", author: "Matty Mullins" },
  { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
  { text: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.", author: "Chantal Sutherland" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Do not wait for opportunities to come your way. Create them yourself.", author: "Roy T. Bennett" },
  { text: "The only way to discover the limits of the possible is to go beyond them into the impossible.", author: "Arthur C. Clarke" },
  { text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
{ text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
{ text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
{ text: "The only person you should try to be better than is the person you were yesterday.", author: "Matty Mullins" },
{ text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
{ text: "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.", author: "Chantal Sutherland" },
{ text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
{ text: "Do not wait for opportunities to come your way. Create them yourself.", author: "Roy T. Bennett" },
{ text: "The only way to discover the limits of the possible is to go beyond them into the impossible.", author: "Arthur C. Clarke" },
{ text: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
{ text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
{ text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
{ text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    ],
};

const quoteReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case CHANGE_QUOTE: 
        const randomIndex = Math.floor(Math.random() * (state.quotes.length));
        const randomQuote = state.quotes[randomIndex];
      return {
        ...state,
        currentQuote: randomQuote,
      };
        default: return state;
    }
};

export const changeQuote = () => {
  return {
    type: CHANGE_QUOTE,
  };
};

const store = createStore(quoteReducer);

export default store;
