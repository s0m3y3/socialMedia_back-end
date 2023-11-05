const names = [
    'john@aol2.com',
    'smith@aol2.com',
    'ally@aol2.com',
    'jeanie@aol2.com',
    ``,
  ];
  const users = [];
  const getNamePart = () => names[Math.floor(Math.random() * names.length)];
  const getRandomName = () => `${getNamePart()} ${getNamePart()}`;
  
  module.exports = getRandomName;
  