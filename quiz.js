import topic from './elf.js';

let names = ['waterfalls', 'docks', 'glade', 'redwoods', 'nenya', 'vilya', 'narya', 'lasgalen', 'orcrist', 'barahir', 'glamdring', 'phial', 'albatross', 'squirrel', 'otter', 'elk', 'thranduil', 'elrond', 'gil-galad', 'galadriel'];



/*The following array contains the ids to all images in the html document saved
as strings.*/

let ids = [];

names.forEach(element => {
  ids.push(document.getElementById(element));
});

/*The variables below contain a count of the number of times an image related
 to a result has been clicked and the number of questions remaining. The counts
 determine which result will be displayed. The questionsRemaining variable
 is used to determine when the quiz is finished.*/
let lorienCount = 0;
let rivendellCount = 0;
let greyHavensCount = 0;
let mirkwoodCount = 0;
let questionsRemaining = 5;

const classOne = document.getElementsByClassName('one');
const classTwo = document.getElementsByClassName('two');
const classThree = document.getElementsByClassName('three');
const classFour = document.getElementsByClassName('four');
const classFive = document.getElementsByClassName('five');
const classNums = [classOne, classTwo, classThree, classFour, classFive];

let oneClick = false;
let twoClick = false;
let threeClick = false;
let fourClick = false;
let fiveClick = false;

const isOne = event => {
  let is;
  for (let i = 0; i < classOne.length; i++)
    if (classOne[i] === event.target) {
      is = true;
    };
  return is;
};

const isFive = event => {
  let is;
  for (let i = 0; i < classFive.length; i++)
    if (classFive[i] === event.target) {
      is = true;
    };
  return is;
};

const isTwo = event => {
  let is;
  for (let i = 0; i < classTwo.length; i++)
    if (classTwo[i] === event.target) {
      is = true;
    };
  return is;
};

const isThree = event => {
  let is;
  for (let i = 0; i < classThree.length; i++)
    if (classThree[i] === event.target) {
      is = true;
    };
  return is;
};

const isFour = event => {
  let is;
  for (let i = 0; i < classOne.length; i++)
    if (classFour[i] === event.target) {
      is = true;
    };
  return is;
};

const shader = event => {
    classNums.forEach(array => {
      for (let i = 0; i < array.length; i++) {
        if(array[i] === event.target) {
          for (let j = 0; j < array.length; j++) {
            array[j].style.opacity = 0.5;
          };
        };
      };
  });
  event.target.style.backgroundColor = 'black';
  event.target.style.opacity = '1.0';
};

const classLorien = document.getElementsByClassName('lorien');
const classRivendell = document.getElementsByClassName('rivendell');
const classGreyHavens = document.getElementsByClassName('grey-havens');
const classMirkwood = document.getElementsByClassName('mirkwood');

const isLorien = event => {
  let is;
  for (let i = 0; i < classLorien.length; i++) {
    if (event.target === classLorien[i]) {
      is = true;
    };
  };
  return is;
};

const isRivendell = event => {
  let is;
  for (let i = 0; i < classRivendell.length; i++) {
    if (event.target === classRivendell[i]) {
      is = true;
    };
  };
  return is;
}

const isGreyHavens = event => {
  let is = false;
  for (let i = 0; i < classGreyHavens.length; i++) {
    if (event.target === classGreyHavens[i]) {
      is = true;
    };
  };
  return is;
}

const isMirkwood = event => {
  let is = false;
  for (let i = 0; i < classMirkwood.length; i++) {
    if (event.target === classMirkwood[i]) {
      is = true;
    };
  };
  return is;
}

const counter = event => {
  if (isLorien(event)) {
    lorienCount++;
  } else if (isRivendell(event)) {
    rivendellCount++;
  } else if (isGreyHavens(event)) {
    greyHavensCount++;
  } else if (isMirkwood(event)) {
    mirkwoodCount++;
  };
  questionsRemaining--;
};

const lorienWinPath = document.querySelector('#lorien-win');
const rivendellWinPath = document.querySelector('#rivendell-win');
const greyHavensWinPath = document.querySelector('#grey-havens-win')
const mirkwoodWinPath = document.querySelector('#mirkwood-win');

const results = () => {
  let randomNum = Math.floor(Math.random() * 2);
  if (lorienCount > rivendellCount && lorienCount > greyHavensCount && lorienCount > mirkwoodCount) {
    lorienWinPath.style.display = 'block';
  } else if (rivendellCount > lorienCount && rivendellCount > greyHavensCount && rivendellCount > mirkwoodCount) {
    rivendellWinPath.style.display = 'block';
  } else if (greyHavensCount > lorienCount && greyHavensCount > rivendellCount && greyHavensCount > mirkwoodCount) {
    greyHavensWinPath.style.display = 'block';
  } else if (mirkwoodCount > rivendellCount && mirkwoodCount > greyHavensCount && mirkwoodCount > lorienCount) {
    mirkwoodWinPath.style.display = 'block';
  } else if (lorienCount === rivendellCount) {
    if (randomNum === 0) {
      lorienWinPath.style.display = 'block';
    } else {
      rivendellWinPath.style.display = 'block';
    };
  } else if (lorienCount === greyHavensCount) {
    if (randomNum === 0) {
      lorienWinPath.style.display = 'block';
    } else {
      greyHavensWinPath.style.display = 'block';
    };
  } else if (lorienCount === mirkwoodCount) {
    if (randomNum === 0) {
      lorienWinPath.style.display = 'block';
    } else {
      mirkwoodWinPath.style.display = 'block';
    };
  } else if (rivendellCount === greyHavensCount) {
    if (randomNum === 0) {
      rivendellWinPath.style.display = 'block';
    } else {
      greyHavensWinPath.style.display = 'block';
    };
  } else if (rivendellCount === mirkwoodCount) {
    if (randomNum === 0) {
      rivendellWinPath.style.display = 'block';
    } else {
      mirkwoodWinPath.style.display = 'block';
    };
  } else if (mirkwoodCount === greyHavensCount) {
    if (randomNum === 0) {
      mirkwoodWinPath.style.display = 'block';
    } else {
      greyHavensWinPath.style.display = 'block';
    };
  };
};

const cli = event => {
  if (isOne(event) === true && oneClick === false) {
    shader(event);
    counter(event);
    oneClick = true;
  } else if (isTwo(event) === true && twoClick === false) {
    shader(event);
    counter(event);
    twoClick = true;
  } else if (isThree(event) === true && threeClick === false) {
    shader(event);
    counter(event);
    threeClick = true;
  } else if (isFour(event) === true && fourClick === false) {
    shader(event);
    counter(event);
    fourClick = true;
  } else if (isFive(event) === true && fiveClick === false) {
    shader(event);
    counter(event);
    fiveClick = true;
  };
  if (questionsRemaining === 0) {
    results();
  };
};

const clear = () => {
  classNums.forEach(array => {
    for (let i = 0; i < array.length; i++) {
      array[i].style.backgroundColor = '';
      array[i].style.opacity = '';
    };
  });
};

const reset = () => {
  lorienCount = 0;
  rivendellCount = 0;
  greyHavensCount = 0;
  mirkwoodCount = 0;
  questionsRemaining = 5;
  lorienWinPath.style.display = '';
  rivendellWinPath.style.display = '';
  greyHavensWinPath.style.display = '';
  mirkwoodWinPath.style.display = '';
  oneClick = false;
  twoClick = false;
  threeClick = false;
  fourClick = false;
  fiveClick = false;
  clear();
};

document.querySelector('#reset').addEventListener('click', reset);

ids.forEach(name => {
  name.addEventListener('click', cli);
});
