import { Stamp, Score, } from './types';

/* export const getScore = (gameStamps: Stamp[], offset: number): Score => {
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
 */

export const getScore = (gameStamps: Stamp[], offset: number): Score => {
    if (offset <= 0) {
        return null;
    }
    if (!Number.isInteger(offset)) {
        return null;
    }
    let start = 0;
    let end = gameStamps.length - 1;
    while (start <= end) {
        const middle = start + Math.round((end - start) / 2);
        if (offset === gameStamps[middle].offset) {
            return gameStamps[middle].score;
        }

        if (gameStamps[middle].offset < offset) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return null;
};
