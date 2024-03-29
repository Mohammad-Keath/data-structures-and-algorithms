# Data Structures and Algorithms

## Language: `JavaScript`

|topics       |                                          link|
|-------------|----------------------------------------------|
|array-reverse|[Click here](./CodeChallenge/array-reverse.md)|
|array-insert-shift|[Click here](./CodeChallenge/array-insert-shift.md)|
|Singly Linked Lists|[Click here](./CodeChallenge/Singly%20Linked%20Lists.md)|
|Doubly Linked list|[Click here](./CodeChallenge/doubly%20Linked%20list.md)|
|array-binary-search|[Click here](./CodeChallenge/array-binary-search.md)|
|linked-list-insertion|[Click here](./CodeChallenge/linked-list-insertion.md)|
|linked-list-kth|[Click here](./CodeChallenge/linked-list-kth.md)|
|linked-list-zip|[Click here](./CodeChallenge/linked-list-zip.md)|
|stack-queue-pseudo|[Click here](./CodeChallenge/challengesCode/stack-and-queue)|
|stack-and-queue|[Click here](./CodeChallenge/challengesCode/stack-and-queue/stack-and-queue.md)|
|stack-queue-animal-shelter|[Click here](./CodeChallenge/challengesCode/stack-queue-animal-shelter/stack-queue-animal-shelter.md)|
|stack-queue-brackets|[Click here](./CodeChallenge/challengesCode/stack-queue-brackets/stack-queue-brackets.md)|
|trees|[Click here](./CodeChallenge/challengesCode/Trees/tree.md)|
|tree max|[Click here](./CodeChallenge/tree%20max.md)|
|tree-breadth-first|[Click here](./CodeChallenge/tree-breadth-first.md)|
|tree-fizz-buzz|[Click here](./CodeChallenge/tree-fizz-buzz.md)|
|Insortion Sort|[Click here](./CodeChallenge/challengesCode/Insertion-Sort/Insertion%20Sort.md)|
|Merge Sort|[Click here](./CodeChallenge/challengesCode/Merge%20Sort/Merge%20Sort.md)|
|Comparisons|[Click here](./CodeChallenge/challengesCode/Comparisons/comparisons.md)|
|hashtable|[Click here](./CodeChallenge/challengesCode/hashtable/hash%20map.md)|
|first repeated|[Click here](./CodeChallenge/challengesCode/first%20repeated//first%20repeated.md)|
|tree-intersection|[Click here](./CodeChallenge/challengesCode/tree-intersection/tree-intersection.md)|
|hashmap-left-join|[Click here](./CodeChallenge/challengesCode/hashmap-left-join/hashmap-left-join.md)|
|graph|[Click here](./CodeChallenge/challengesCode/graph/graph/graph.md)|
|graph-breadth-first|[Click here](./CodeChallenge/challengesCode/graph/graph-breadth-first//graph-breadth-first.md)|
|graph-business-trip|[Click here](./CodeChallenge/challengesCode/graph/graph-business-trip/graph-business-trip.md)|
|graph-depth-first|[Click here](./CodeChallenge/challengesCode/graph/graph-depth-first//graph-depth-first.md)|





### Folder and Challenge Setup

Each type of code challenge has slightly different instructions. Please refer to the notes and examples below for instructions for each DS&A assignment type.

### Data Structure: New Implementation

- Create a new folder under the `javascript` level, with the name of the data structure and complete your implementation there
  - i.e. `linked-list`
- Implementation (the data structure "class")
  - The implementation of the data structure must be named `index.js`
  - Your implementation must be completed as a proper ES6 Class, and exported as a node module
    - Class Name must be `ProperCase`
    - Class Methods must be `camelCase`

    ```javascript
    class LinkedList {
      constructor() {
        // code
      }

      methodName() {
        // code
      }

    }
    module.exports = LinkedList;
    ```

- Tests
  - Create folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linked-list.test.js`
    - Your tests will then need to require the data structure you're testing
      - i.e. `const LinkedList = require('../index');

### Data Structure: Extending an implementation

- Work within the data structure implementation
- Create a new method within the class that solves the code challenge
  - Remember, you'll have access to `this` within your class methods
- Tests
  - You will have folder named `__tests__` and within it, a test file called `[data-structure].test.js`
    - i.e. `__tests__/linked-list.test.js`
    - Add to the tests written for this data structure to cover your new method(s)

### Code Challenge / Algorithm

Code challenges should be completed within a folder named `code-challenges` under the `javascript` level

- Daily Setup:
  - Create a new folder under the `javascript` level, with the name of the code challenge
    - Each code challenge assignment identifies the branch name to use, for example 'find-maximum-value'
    - For clarity, create your folder with the same name, ensuring that it's `kebab-cased`
    - i.e. For a challenge named 'find-maximum-value', create the folder:`code-challenges/find-maximum-value`
  - Code Challenge Implementation
    - Each code challenge requires a function be written, for example "find maximum value"
    - Name the actual challenge file with the name of the challenge, in `kebab-case`
      - i.e. `find-maximum-value.js`
    - Reminder: Your challenge file will then need to require the data structure you're using to implement
      - i.e. `const LinkedList = require('../linked-list');
    - Your challenge function name is up to you, but it's recommended that you use camel case
      - i.e. `function findMaximumValue(list) { ... }`
    - Be sure to export your function so that you can write tests
  - Tests
    - Create folder named `__tests__` and within it, a test file called `[challenge].test.js`
      - i.e. `__tests__/find-maximum-value.test.js`
      - Your test file would require the challenge file found in the directory above, which has your exported function
        - i.e. `const reverse = require('../find-maximum-value.js');

## Running Tests

If you setup your folders according to the above guidelines, running tests becomes a matter of deciding which tests you want to execute.  Jest does a good job at finding the test files that match what you specify in the test command

From the `data-structures-and-algorithms/javascript` folder, execute the following commands:

- **Run every possible test** - `npm test`
- **Run a test for a data structure** - `npm test linked-list`
- **Run a test for a specific challenge** - `npm test reverse-ll`

#### Live Tests

Note that when you check your code into GitHub, all of your tests will automatically execute. These results should match your own, and will be found on the  **Actions** tab
