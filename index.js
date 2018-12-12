/**
 * @author Yann Pellegrini
 * @license MIT
 */

/**
 * @param {Array<string> people} - The list of people taking part in the secret santa
 * @returns {Map<string, string>} Return a Map associating the givers to the receivers
 */
exports.match = function match(people) {

    if(people.length < 3) {
        throw new Error('Only works with three or more persons');
    }

    if(people.length !== new Set(people).size) {
        throw new Error('Duplicate person(s) in the input.');
    }

    const res = new Map;

    people.sort(_ => Math.random() - .5);

    for (let i = 0; i < people.length; i++) {
        res.set(people[i], people[(i + 1) % people.length]);
    }

    return res;
};