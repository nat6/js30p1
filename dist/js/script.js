// content variables
const headerText = 'Hey! This is a simple version of a dj console. Press the keys with the desired letters or virtual buttons. Enjoy your creativity!';

//class variables
const headerClass = 'header';
const headerBlockClass = 'header__block';

// basic html structure
const header = document.createElement('header');
header.className = headerClass;

const headerBlock = document.createElement('div');
headerBlock.innerHTML = headerText;
headerBlock.className = headerBlockClass;

header.append(headerBlock);
document.body.append(header);