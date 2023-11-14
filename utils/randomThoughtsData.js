//This generate a random thought for seed. 
const { format } = require('date-fns');
const currentTimestamp = new Date();
const formattedDate = format(currentTimestamp, 'yyyy-MM-dd HH:mm:ss');

const thought = [
'That is a cool thing!',
'I like it!',
'What is this?',
'I am the better person',
'This should be different, idk..',
'I am offended.',
'I cannot explain it...',
'That is very good!',
'I am flying, in the clouds!',
'My brain hurts.',
'LAMO!',
'Yolo!',
'Let me take a selfie of this...',
'Very nice~',
'Mondays are tough!',
'Spreading love and positivity today.',
'This book is a real page-turner!',
'Wishing for some good luck today.',
'Need coffee!',
'Tea is the best!',
'I woke up on the wrong side of bed today.',
'It is raining cats and dawgs.',
'surviving hump day',
'Embrace the journey, not just the destination.',
'Happiness is found in the smallest moments.',
'Kindness is never wasted.',
'Create the life you love.',
'Your vibe attracts your tribe.',
'Be a voice, not an echo.',
'Dream big, work hard, stay focused.',
'Smile often, laugh much, love more.',
'Positivity is a choice. Make it daily.',
'In a world where you can be anything, be kind.',
'Chase your dreams, not perfection.',
'Every day is a fresh start.',
'Life is short, make it sweet.',
'Do more things that make you forget to check your phone.',
'Stay true to you.',
'Good things come to those who hustle.',
'Find joy in the ordinary.',
'Your potential is endless.',
'Choose joy, spread love.',
'Be the reason someone smiles today.',
'>=D',
'' // One thought is left blank, intentionally. 
]

const randomThought = () => thought[Math.floor(Math.random() * thought.length)];

const getThought = () => {
    const thought = randomThought();
    return [thought, formattedDate];
  };

module.exports = getThought;