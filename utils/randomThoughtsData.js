//This generate a random thought for seed. 

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
'' // One thought is left blank, intentionally. 
]

const randomThought = () => thought[Math.floor(Math.random() * thought.length)];
module.exports = randomThought;