import { Stamp, Score, } from './types';

export const getScore = (gameStamps: Stamp[], offset: number): Score => {
    if (offset <= 0) {
        return null;
    }
    if (!Number.isInteger(offset)) {
        return null;
    }
    for (let i = 0; i < gameStamps.length; i += 1) {
        const el = gameStamps[i];
        if (el.offset === offset) {
            return el.score;
        }
    }
    return null;
};
