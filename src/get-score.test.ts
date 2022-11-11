import { getScore, } from './get-score';
import { Stamp, Score, } from './types';

let gameStamps: Stamp[] = [];
let offset = 0;
let score: Score;

beforeEach(() => {
    gameStamps = [
        { offset: 1, score: { home: 0, away: 0, }, },
        { offset: 3, score: { home: 0, away: 0, }, },
        { offset: 4, score: { home: 0, away: 0, }, },
        { offset: 7, score: { home: 1, away: 0, }, },
        { offset: 9, score: { home: 0, away: 0, }, },
        { offset: 12, score: { home: 0, away: 0, }, },
        { offset: 13, score: { home: 0, away: 0, }, },
        { offset: 14, score: { home: 0, away: 0, }, },
        { offset: 17, score: { home: 0, away: 0, }, },
        { offset: 18, score: { home: 0, away: 0, }, },
        { offset: 21, score: { home: 0, away: 0, }, },
        { offset: 24, score: { home: 0, away: 0, }, },
        { offset: 26, score: { home: 0, away: 1, }, },
        { offset: 56915, score: { home: 1, away: 2, }, },
        { offset: 88037, score: { home: 4, away: 4, }, },
        { offset: 88391, score: { home: 3, away: 3, }, },
        { offset: 99938, score: { home: 4, away: 6, }, },
        { offset: 100322, score: { home: 4, away: 5, }, }
    ];
});

describe('Function getScore defined:', () => {
    test('should be defined', () => {
        offset = 9;
        expect(getScore(gameStamps, offset)).toBeDefined();
        expect(getScore(gameStamps, offset)).not.toBeUndefined();
    });
});

describe('Function getScore return null if the offset is not contained in the data:', () => {
    test('should return null', () => {
        offset = 30;
        expect(getScore(gameStamps, offset)).toBeNull();
    });
});

describe('Function getScore return null if the offset less than zero:', () => {
    test('should return null', () => {
        offset = -3;
        expect(getScore(gameStamps, offset)).toBeNull();
    });
});

describe('Function getScore return null if the offset equal to zero:', () => {
    test('should return null', () => {
        offset = 0;
        expect(getScore(gameStamps, offset)).toBeNull();
    });
});

describe('Function getScore return null if the offset not integer:', () => {
    test('should return null', () => {
        offset = 1.34;
        expect(getScore(gameStamps, offset)).toBeNull();
    });
});

describe('Function getScore defined return correct score:', () => {
    test('should return correct score', () => {
        offset = 9;
        score = { home: 0, away: 0, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });

    test('should return correct score', () => {
        offset = 7;
        score = { home: 1, away: 0, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });

    test('should return correct score', () => {
        offset = 56915;
        score = { home: 1, away: 2, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });

    test('should return correct score', () => {
        offset = 88037;
        score = { home: 4, away: 4, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });

    test('should return correct score', () => {
        offset = 88391;
        score = { home: 3, away: 3, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });

    test('should return correct score', () => {
        offset = 99938;
        score = { home: 4, away: 6, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });

    test('should return correct score', () => {
        offset = 100322;
        score = { home: 4, away: 5, };
        expect(getScore(gameStamps, offset)).toEqual(score);
    });
});
