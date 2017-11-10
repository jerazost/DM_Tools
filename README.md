 
DM Tools
========
DM Tools is a cross-platform electron application that runs as a window locally on your machine and helps you the Dungeon Master, manage your role playing sessions by removing a lot of the encumberments that come with pen traditional pen and paper approaches. 

## Overview
 * <strong>Reference</strong> 
DM Tools has access to the 5e Systems Reference Document (SRD) data provided by Wizards of the Coast with the Open Game License (OGL). The app allows you to search through all the standard 5e monsters, spells, and magic items so you don't have to thumb through the rule books in the middle of a session.
[Imgur](https://i.imgur.com/AJ6ds6y.png)
 * <strong>Create</strong>
Dungeons and Dragons has a great active community that enjoys writing original content that is compatible with the base rules. We want you to be able to use your homebrew content in our application. DM Tools allows you to import your original content into the app with a built in creation feature. All of your content can be saved locally and used in the application alongside the standard 5e content.
[Imgur](https://i.imgur.com/xWsVXG7.png)
 * <strong>Play</strong>
A good fantasy setting should feel immersive and concrete. As a dungeon master often times it is hard to generate content on the spot if your players do something unexpected. Sometimes you need something generated for you so you can focus on telling the story and keeping your players immersed in the world. We hope to bring many features that assist you in making your worlds seem concrete and immersive such as: 
	* **Loot Generator** - For chests, furniture, dead bodies, you name it!
	* **Building Generator** - For when your party visits places you were not expecting. 
	* **Combat Tracker** - Keeps track of initiative, stats, and health points for whatever monsters you throw at your players.
	* **NPC Generator** - Randomly generated NPC's with backgrounds, character traits, appearance, quirks, and secrets so every social encounter feels deep.

## Features
1. Monster Search - [Working]
2. Spell Search - [Working]
3. Magic Item Search - [Working]
4. Create Monster - [In-Progress]
5. Create Spell - [In-Progress]
6. Create Magic Item - [In-Progress]
7. Create Playable Character - [In-Progress]
8. Loot Generator - [Not Started]
9. Building Generator - [Not Started]
10. Combat Tracker - [Not Started]
11. NPC Generator - [Not Started]

## Installation

DM Tools is currently in early development and has just been rewritten from vanilla JS and handlebars into and Electron app with React, Redux, and SCSS. To run DM Tools on your machine do the following. If you already have node and electron installed skip steps 2 & 3.

1. Run`git clone git@github.com:fersot100/DM_Tools.git`
2. Install `node` using instructions from [here](https://nodejs.org/en/download/package-manager/)
3. Install `electron` with `npm install electron --save-dev --save-exact`
4. In the root directory of the project run `npm install`
5. Run `npm start`