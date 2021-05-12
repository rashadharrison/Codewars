/**A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you.The bricks width and height are equal, forming a square. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function and return volume of ice brick that magician managed to put into a bottle. */

const iceBrickVolume = (r, b, rl) => Math.pow(r, 2) * (b - rl) * 2;

