import blue50 from '../images/backgrounds/blue50.png';
import blue60 from '../images/backgrounds/blue60.png';
import red50 from '../images/backgrounds/red50.png';
import red70 from '../images/backgrounds/red70.png';
import yellow50 from '../images/backgrounds/yellow50.png';
import green60 from '../images/backgrounds/green60.png';

import hair_default from '../images/hair/default.png';
import bangs from '../images/hair/bang.png';
import curls from '../images/hair/curls.png';
import elegant from '../images/hair/elegant.png';
import fancy from '../images/hair/fancy.png';
import short from '../images/hair/short.png';

import ears_default from '../images/ears/default.png';
import tilt_backward from '../images/ears/tilt-backward.png';
import tilt_forward from '../images/ears/tilt-forward.png';

import eyes_default from '../images/eyes/default.png';
import angry from '../images/eyes/angry.png';
import naughty from '../images/eyes/naughty.png';
import panda from '../images/eyes/panda.png';
import smart from '../images/eyes/smart.png';

import leg_default from '../images/leg/default.png';
import bubble_tea from '../images/leg/bubble-tea.png';
import game_console from '../images/leg/game-console.png';
import cookie from '../images/leg/cookie.png';

import mouth_default from '../images/mouth/default.png';
import astonished from '../images/mouth/astonished.png';
import eating from '../images/mouth/eating.png';
import laugh from '../images/mouth/laugh.png';
import tongue from '../images/mouth/tongue.png';

import neck_default from '../images/neck/default.png';
import bend_backward from '../images/neck/bend-backward.png';
import bend_forward from '../images/neck/bend-forward.png';

import accessories_default from '../images/accessories/headphone.png';
import earings from '../images/accessories/earings.png';
import flower from '../images/accessories/flower.png';
import glasses from '../images/accessories/glasses.png';

import nose_default from '../images/nose/nose.png';

import mergeImages from 'merge-images';

const stylesDict = {
  Background: [
    {
      name: 'Light Blue',
      url: blue50,
    },
    {
      name: 'Dark Blue',
      url: blue60,
    },
    {
      name: 'Orange',
      url: red50,
    },
    {
      name: 'Red',
      url: red70,
    },
    {
      name: 'Yellow',
      url: yellow50,
    },
    {
      name: 'Green',
      url: green60,
    },
  ],
  Hair: [
    {
      name: 'Default',
      url: hair_default,
    },
    {
      name: 'Bangs',
      url: bangs,
    },
    {
      name: 'Curls',
      url: curls,
    },
    {
      name: 'Elegant',
      url: elegant,
    },
    {
      name: 'Fancy',
      url: fancy,
    },
    {
      name: 'Short',
      url: short,
    },
  ],
  Accessories: [
    {
      name: 'Headphones',
      url: accessories_default,
    },
    {
      name: 'Earings',
      url: earings,
    },
    {
      name: 'Flower',
      url: flower,
    },
    {
      name: 'Glasses',
      url: glasses,
    },
  ],
  Ears: [
    {
      name: 'Default',
      url: ears_default,
    },
    {
      name: 'Tilt-Backward',
      url: tilt_backward,
    },
    {
      name: 'Tilt-Forward',
      url: tilt_forward,
    },
  ],
  Eyes: [
    {
      name: 'Default',
      url: eyes_default,
    },
    {
      name: 'Angry',
      url: angry,
    },
    {
      name: 'Naughty',
      url: naughty,
    },
    {
      name: 'panda',
      url: panda,
    },
    {
      name: 'Smart',
      url: smart,
    },
  ],
  Leg: [
    {
      name: 'Default',
      url: leg_default,
    },
    {
      name: 'Bubble Tea',
      url: bubble_tea,
    },
    {
      name: 'Cookie',
      url: cookie,
    },
    {
      name: 'Game Console',
      url: game_console,
    },
  ],
  Mouth: [
    {
      name: 'Default',
      url: mouth_default,
    },
    {
      name: 'Astonished',
      url: astonished,
    },
    {
      name: 'Eating',
      url: eating,
    },
    {
      name: 'Laugh',
      url: laugh,
    },
    {
      name: 'Tongue',
      url: tongue,
    },
  ],
  Neck: [
    {
      name: 'Default',
      url: neck_default,
    },
    {
      name: 'Bend Backwards',
      url: bend_backward,
    },
    {
      name: 'Bend Forwards',
      url: bend_forward,
    },
  ],
  Nose: [
    {
      name: 'Default',
      url: nose_default,
    },
  ],
};

const randomize = setState => {
  setState({
    background:
      stylesDict.Background[
        Math.floor(Math.random() * stylesDict.Background.length)
      ].url,
    neck: stylesDict.Neck[Math.floor(Math.random() * stylesDict.Neck.length)]
      .url,
    ears: stylesDict.Ears[Math.floor(Math.random() * stylesDict.Ears.length)]
      .url,
    nose: stylesDict.Nose[Math.floor(Math.random() * stylesDict.Nose.length)]
      .url,
    mouth:
      stylesDict.Mouth[Math.floor(Math.random() * stylesDict.Mouth.length)].url,
    leg: stylesDict.Leg[Math.floor(Math.random() * stylesDict.Leg.length)].url,
    hair: stylesDict.Hair[Math.floor(Math.random() * stylesDict.Hair.length)]
      .url,
    accessories:
      stylesDict.Accessories[
        Math.floor(Math.random() * stylesDict.Accessories.length)
      ].url,
    eyes: stylesDict.Eyes[Math.floor(Math.random() * stylesDict.Eyes.length)]
      .url,
  });
};

function loadImage(allSrc) {
  mergeImages(allSrc)
    .then(b64 => {
      (document.querySelector('img.abc').src = b64)(
        (document.querySelector('a.abc').href = b64)
      );
    })
    .catch(e => console.log(e));
}

const updateStyles = (style, setStyles, layer) => {
  switch (layer) {
    case 'Background':
      setStyles(prevState => ({ ...prevState, background: style.url }));
      break;
    case 'Hair':
      setStyles(prevState => ({ ...prevState, hair: style.url }));
      break;
    case 'Ears':
      setStyles(prevState => ({ ...prevState, ears: style.url }));
      break;
    case 'Eyes':
      setStyles(prevState => ({ ...prevState, eyes: style.url }));
      break;
    case 'Mouth':
      setStyles(prevState => ({ ...prevState, mouth: style.url }));
      break;
    case 'Neck':
      setStyles(prevState => ({ ...prevState, neck: style.url }));
      break;
    case 'Leg':
      setStyles(prevState => ({ ...prevState, leg: style.url }));
      break;
    case 'Accessories':
      setStyles(prevState => ({ ...prevState, accessories: style.url }));
      break;
    default:
      break;
  }
};

export { stylesDict, randomize, loadImage, updateStyles };
