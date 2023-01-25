# Across the Universe

### Description

A game where you create a universe, with galaxies, solar systems, planets and possibly even life!

### Installation

Navigate to where you want to install the repo and type

`git clone https://github.com/codegregcode/across-the-universe`

You will need to install Jest using NPM if you'd like to make any changes (if you want to make changes fork this repo, and copy that url instead of cloning this one)

`npm install jest`

### Roadmap

There's no real timeline with this project, I'm just going to work on it in the downtime of my CommandShift studies.

At the moment, functionality is very limited...the universe will create a random number of galaxies, but no solarsystems and planets etc.

Also, instead of totally random number of galaxies being created, I'd like that number to be influenced by the user interacting with 'something' (e.g. clicks of a button during a timed event). The interaction will determine how many galaxies, solar systems and planets are made, as well as increasing posibilty for life. Life is 'created' by a solar system having a seed of life and planet a chance of life

25/1 - update -

atm a universe contains galaxies, galaxies contains solar systems, solar systems contain planets, planets should contain lifeforms. but how can i represent a lifeform in js?...atm my class constructer for lifeforms has has name, type and sentience keys, but i think type needs to be thought about. as everything should start off as a single celled organism, but how should evolution be represented/how much control should user have over?

idea 1 - everything starts off as single celled organism, as time moves on life evolves into distinct types of lifeforms (with varying intelligence)

idea 2 - user doesn't see what types of lifeforms there are, but knows if i planet contains life. user can protect life from 'space events' e,g astroid strike, solar flares. successful avoidance of space-event can level up life and even planet (ie could make a better atmosphere for protection against solar flares) after certain number of space-events/level up then sentience reached and game completes

### Authors and acknowledgement

@codegregcode
