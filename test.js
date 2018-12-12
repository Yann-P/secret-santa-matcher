import { match } from './'
import test from 'ava'

test('throw an error if less than three persons are given as input', t => {
    const error = t.throws(() => match(['forever', 'alone']));
    t.is(error.message, 'Only works with three or more persons');
});

test('throw an error if the same person is twice in the input', t => {
    const error = t.throws(() => match(['hey', 'test', 'test']));
    t.is(error.message, 'Duplicate person(s) in the input.');
});

test('should match three persons', t => {
    const res = match(['a', 'b', 'c']);
    t.is(res.size, 3);
    t.true(res.has('a'));
    t.true(res.has('b'));
    t.true(res.has('c'));
});

test('the distribution is even', t => {
    const people = ['a', 'b', 'c', 'd'];
    const count = new Array(6).fill(0);
    const n = 100000;

    const permutations = [
        map => map.get('a') === 'b' && map.get('b') === 'c' && map.get('c') === 'd' && map.get('d') === 'a',
        map => map.get('a') === 'b' && map.get('b') === 'd' && map.get('d') === 'c' && map.get('c') === 'a',
        map => map.get('a') === 'c' && map.get('c') === 'b' && map.get('b') === 'd' && map.get('d') === 'a',
        map => map.get('a') === 'c' && map.get('c') === 'd' && map.get('d') === 'b' && map.get('b') === 'a',
        map => map.get('a') === 'd' && map.get('d') === 'b' && map.get('b') === 'c' && map.get('c') === 'a',
        map => map.get('a') === 'd' && map.get('d') === 'c' && map.get('c') === 'b' && map.get('b') === 'a'
    ];

    for(let i = 0; i < n; i++) {
        const map = match(people);
        ++count[permutations.findIndex(checkFn => checkFn(map))];
    }

    t.is(count.reduce((a, v) => a + v, 0), n, 'every result is assigned to a permutation');

    for(const v of count) {
        t.true(v > (n / 6) - (n / 6) * .05, 'enough elements in permutation');
    }
})