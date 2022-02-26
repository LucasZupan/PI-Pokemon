const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Tito' });
      });
    });
    describe('hp', () => {
      it('should throw an error if hp is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid hp')))
          .catch(() => done());
      });
      it('should work when its a valid hp', () => {
        Pokemon.create({ hp: 45 });
      });
    });
    describe('strength', () => {
      it('should throw an error if strength is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid strength')))
          .catch(() => done());
      });
      it('should work when its a valid strength', () => {
        Pokemon.create({ str: 67 });
      });
    });
    describe('defense', () => {
      it('should throw an error if defense is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid defense')))
          .catch(() => done());
      });
      it('should work when its a valid defense', () => {
        Pokemon.create({ def: 68 });
      });
    });
    describe('speed', () => {
      it('should throw an error if speed is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid speed')))
          .catch(() => done());
      });
      it('should work when its a valid speed', () => {
        Pokemon.create({ spd: 68 });
      });
    });
    describe('height', () => {
      it('should throw an error if height is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid height')))
          .catch(() => done());
      });
      it('should work when its a valid height', () => {
        Pokemon.create({ height: 87 });
      });
    });
    describe('weight', () => {
      it('should throw an error if weight is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid weight')))
          .catch(() => done());
      });
      it('should work when its a valid weight', () => {
        Pokemon.create({ weight: 65 });
      });
    });
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });
      it('should work when its a valid image', () => {
        Pokemon.create({ image: 'https://i.pinimg.com/564x/50/c0/5f/50c05f2225470ff6c2d84d5e5ea40a1e.jpg' });
      });
    });
  });
});  

