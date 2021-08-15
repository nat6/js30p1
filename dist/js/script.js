// content variables
const headerText = 'Hey! This is a simple version of a dj console. Press the keys with the desired letters or virtual buttons. Enjoy your creativity!';
const footerText = 'Training project ';
const letters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const sounds = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];

// link variables
const authorLink = 'https://github.com/nat6';
const authorLinkText = 'nat6';
const authorLinkTitle = 'go to the author`s github';
const courseLink = 'https://javascript30.com/';
const courseLinkText = '#JavaScript30';
const courseLinkTitle = 'go to the course website';

// class variables
const headerClass = 'header';
const headerBlockClass = 'header__block';
const mainClass = 'main';
const mainBlockClass = 'main__block';
const noteBlockClass = 'note__block';
const noteLetterClass = 'note__letter';
const noteSoundClass = 'note__sound';
const footerClass = 'footer';
const footerBlockClass = 'footer__block';
const footerItemClass = 'footer__item';

// basic html structure
const header = document.createElement('header');
header.className = headerClass;

const headerBlock = document.createElement('div');
headerBlock.textContent = headerText;
headerBlock.className = headerBlockClass;

const main = document.createElement('main');
main.className = mainClass;

const mainBlock = document.createElement('div');
mainBlock.className = mainBlockClass;

for (i = 0; i < letters.length; i++) {
	const noteBlock = document.createElement('div');
	noteBlock.className = noteBlockClass;

	const letter = document.createElement('p');
	letter.textContent = letters[i];
	letter.className = noteLetterClass;

	const description = document.createElement('p');
	description.textContent = sounds[i];
	description.className = noteSoundClass; 

	noteBlock.append(letter, description);
	mainBlock.append(noteBlock);
}

const footer = document.createElement('footer');
footer.className = footerClass;

const footerBlock = document.createElement('div');
footerBlock.className = footerBlockClass;

const footerAbout = document.createElement('div');
footerAbout.className = footerItemClass;
const footerAboutText = document.createElement('p');
footerAboutText.textContent = footerText;
const footerAboutLink = document.createElement('a');
footerAboutLink.textContent = courseLinkText;
footerAboutLink.href = courseLink;
footerAboutLink.title = courseLinkTitle;

const footerAuthor = document.createElement('div');
footerAuthor.className = footerItemClass;
const footerLink = document.createElement('a');
footerLink.textContent = authorLinkText;
footerLink.href = authorLink;
footerLink.title = authorLinkTitle;

header.append(headerBlock);
main.append(mainBlock);

footer.append(footerBlock);
footerBlock.append(footerAbout, footerAuthor);
footerAbout.append(footerAboutText, footerAboutLink);
footerAuthor.append(footerLink);

document.body.prepend(header, main, footer);