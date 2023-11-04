'use strict';

const ads = document.querySelector('.ads');
ads.remove();

const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
itemFive.before(itemFour);

const itemTitle = document.querySelectorAll('h2');
const propsList = document.querySelectorAll('.props__list');
const propsItemFour = document.querySelectorAll('.props__item_four');


const itemTwoPropsFour = document.querySelector('.item_two .content .props__list .props__item_four');
propsItemFour[2].after(itemTwoPropsFour);


propsList[1].before(itemTitle[4]);
propsList[5].before(itemTitle[1]);
propsList[4].before(itemTitle[5]);

const itemTwoPropsSix = document.querySelectorAll('.item_six .content .props__list .props__item_two');
propsList[1].append(itemTwoPropsSix[0], itemTwoPropsSix[1]);


const propsListThree = document.querySelector('.item_three .content .props__list');
const propsListFive = document.querySelector('.item_five .content .props__list');

console.log(propsListThree);

itemTitle[5].after(propsListThree);
itemTitle[2].after(propsListFive);