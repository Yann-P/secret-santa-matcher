# Secret Santa Matcher

## Installation

`npm install secret-santa-matcher` or `yarn add secret-santa-matcher`.

## API

```
import { match } from 'secret-santa-matcher'

```

### `match(people)`

- *people*: ` Array<string>`
- *returns*: ` Map<string=>string>`

Returns a map describing the flow of present giving.
Example: 

```
match(['john', 'jane', 'dave'])

// returns Map('john' => 'dave', 'dave' => 'jane', 'jane' => 'john') // or any random permutation
```



## Roadmap

Add support for exclusion groups, e.g. if you don't to prevent some specific persons being matched to some other specific persons ; can be useful to favor giving outside of small groups of people who know each other