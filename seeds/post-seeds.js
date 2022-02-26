const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem. Ut fermentum tellus et nunc interdum, at efficitur arcu sodales. ',
    username: 'alesmonde0'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. ',
    username: 'dstanmer3'
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    body: 'Nunc iaculis odio nisi, et consequat ipsum porttitor a. Sed interdum leo ut vehicula bibendum. Vivamus volutpat erat mollis urna mollis tempor. ',
    username: 'jmacarthur9'
  },
  {
    title: 'Nunc purus.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem.  ',
    username: 'alesmonde0'
  },
  {
    title: 'Pellentesque eget nunc.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    username: 'dstanmer3'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    body: 'Nunc iaculis odio nisi, et consequat ipsum porttitor a. Sed interdum leo ut vehicula bibendum. Vivamus volutpat erat mollis urna mollis tempor. ',
    username: 'jmacarthur9'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem.  ',
    username: 'alesmonde0'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    username: 'jmacarthur9'
  },
  {
    title: 'Duis ac nibh.',
    body: 'Nunc iaculis odio nisi, et consequat ipsum porttitor a. Sed interdum leo ut vehicula bibendum. Vivamus volutpat erat mollis urna mollis tempor. ',
    username: 'dstanmer3'
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem. ',
    username: 'jmacarthur9'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    username: 'alesmonde0'
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem. Ut fermentum tellus et nunc interdum, at efficitur arcu sodales. ',
    username: 'dstanmer3'
  },
  {
    title: 'Donec dapibus.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    username: 'djiri4'
  },
  {
    title: 'Nulla tellus.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem. Ut fermentum tellus et nunc interdum, at efficitur arcu sodales. ',
    username: 'dstanmer3'
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    username: 'jmacarthur9'
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    body: 'Nunc iaculis odio nisi, et consequat ipsum porttitor a. Sed interdum leo ut vehicula bibendum. Vivamus volutpat erat mollis urna mollis tempor. ',
    username: 'djiri4'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem. Ut fermentum tellus et nunc interdum, at efficitur arcu sodales. ',
    username: 'alesmonde0'
  },
  {
    title: 'Etiam justo.',
    body: 'Nunc iaculis odio nisi, et consequat ipsum porttitor a. Sed interdum leo ut vehicula bibendum. Vivamus volutpat erat mollis urna mollis tempor. ',
    username: 'dstanmer3'
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    username: 'djiri4'
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    body: 'Fusce in maximus purus. Mauris condimentum, sapien eu luctus ullamcorper, lorem est tristique nulla, vel porta arcu enim sed lorem. Ut fermentum tellus et nunc interdum, at efficitur arcu sodales. ',
    username: 'dstanmer3'
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
