const readline = require('readline');

const words = {
    "wholesale": "biriq",
    "affordable": "matcheli",
    "discounted": "zexjvac",
    "reasonable": "xelqin mot",
    "favourable": "jebi gyora",
    "exceptional": "bacarik",
    "one-of-a-kind": "chkrknvox",
    "eco-friendly": "ekologiapes maqur",
    "high-end": "bardzrorak",
    "tracking": "hetevel, check anel, nayel",
    "shipping": "araqum, poxadrum",
    "goods": "apranq",
    "impulse buys": "chnaxatesvac gnumner",
    "compared": "hamematel",
    "overpay": "gercaxs, avel vcharel",
    'get closer': 'motenal',
    'hundreds ': 'haryuravor',
    'through ': 'mijov',
    'looked after': 'xnamel',
    'As well as': 'nayev',
    'Although': 'chnayac',
    'quite ': 'bavakanin',
    'berries': 'hataptuxner',
    'I am not familiar with these dishes.': 'es canot chem ays ustestnerin',
    'We can share them with each other': 'menq karox enq ayn kisel amen mekis mej',
    'draft beer': 'lcnovi garejur',
    'semi-dry': 'kisachor',
    'I was joking': 'es katakum ei',
    'insisting': 'pndel, hamozel',
    'bitter': 'dary',
    'The double is going to be very strong.': 'doubley shat tund e linelu',
    'complimentary': 'hyurasirutyun',
    'It was very nice to try it.': 'shat urax ei pordzel ayn',
    "it's up to you": 'duq eq voroshum, ayn dzezanic e kaxvac',
    'invoice': 'hdm, check',
    'Yes, we will definately come back.': 'ayo menq hastat kganq het',
}

class Englesh {
    constructor(words) {
        this.words = words;
        this.outputs = [];
    };

    checkAnswer(translatedAnswer, correctAnswer) {
        translatedAnswer = translatedAnswer.toLowerCase();
        correctAnswer = correctAnswer.toLowerCase();
        if (translatedAnswer === correctAnswer) return false;
        if (
            translatedAnswer.length >= correctAnswer.length + 3 ||
            translatedAnswer.length <= correctAnswer.length - 3
        )
            return true;
        const spletedUserAnswer = [];

        for (let i = 0; i < translatedAnswer.length; i += 3) {
            spletedUserAnswer.push(translatedAnswer.slice(i, i + 3));
        }

        let correctCharesCount = spletedUserAnswer.length;

        for (let charGroup of spletedUserAnswer) {
            if (correctAnswer.indexOf(charGroup) === -1) {
                correctCharesCount -= 1;
            }
        }

        if (
            correctCharesCount >=
            (spletedUserAnswer.length - 2 > 1
                ? spletedUserAnswer.length - 2
                : spletedUserAnswer.length - 1)
        ) {
            return false;
        }

        return true;
    }

    run(start) {
        const acc = {};
        let keys = Object.keys(this.words);

        while (keys.length) {
            const randomIndex = Math.floor(Math.random() * keys.length);
            acc[keys[randomIndex]] = this.words[keys[randomIndex]];
            keys = keys.filter((key) => key !== keys[randomIndex]);
        }

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        const promptQuestion = (question) => {
            return new Promise((resolve) => {
                rl.question(question + ' --> ', (answer) => {
                    resolve(answer);
                });
            });
        };

        const startQuestionLoop = async () => {
            for (let engleshWord in acc) {
                const question =
                    start === 'Englesh'
                        ? engleshWord
                        : this.words[engleshWord];

                const translatedAnswer = await promptQuestion(question);
                const isWrongAnswer = this.checkAnswer(
                    translatedAnswer,
                    start === 'Englesh' ? this.words[engleshWord] : engleshWord
                );
                if(isWrongAnswer) {
                    console.log('isWrongAnswer --> ', {
                        isWrongAnswer,
                        translatedAnswer,
                        correct:
                            start === 'Englesh'
                                ? this.words[engleshWord]
                                : engleshWord,
                    });
                };
            }

            rl.close();
        };

        startQuestionLoop();
    }
}

new Englesh(words).run('Armenian')