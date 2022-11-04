import { Stamp, } from './types';
import { getScore, } from './get-score';

const TIMESTAMPS_COUNT = 50000;
// const TIMESTAMPS_COUNT = 10;

const PROBABILITY_SCORE_CHANGED = 0.0001;

const PROBABILITY_HOME_SCORE = 0.45;

const OFFSET_MAX_STEP = 3;

const emptyScoreStamp: Stamp = {
    offset: 0,
    score: {
        home: 0,
        away: 0,
    },
};

export const generateStamps = (): Stamp[] => {
    const scoreStamps = Array(TIMESTAMPS_COUNT)
        .fill(emptyScoreStamp)
        .map(
            ((acc) => () => {
                const scoreChanged =
                    Math.random() > 1 - PROBABILITY_SCORE_CHANGED;
                const homeScoreChange =
                    scoreChanged && Math.random() < PROBABILITY_HOME_SCORE
                        ? 1
                        : 0;
                const awayScoreChange =
                    scoreChanged && !homeScoreChange ? 1 : 0;
                return {
                    offset: (acc.offset +=
                        Math.floor(Math.random() * OFFSET_MAX_STEP) + 1),
                    score: {
                        home: (acc.score.home += homeScoreChange),
                        away: (acc.score.away += awayScoreChange),
                    },
                };
            })(emptyScoreStamp)
        );

    return scoreStamps;
};

const scores = generateStamps();
const offset = 44564;
const result = getScore(scores, offset);
console.log(scores);
console.log(result);

// Бинарный поиск по офсет проверить 0, перестал появлятся)))
// не там смотрел не может быть ноль смотри код
// Судя по коду самые вероятные 0, 1, 2 появляются от 20000
// проверить плюсовать схожие значения
// офсет может не существовать учесть
// офсет меньше нуля проверить ноль учесть
// смещение целое число учесть
