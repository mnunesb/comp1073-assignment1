/* Global variables
-------------------------------------------------- */

// Buttons
var button1 = document.getElementById('noun1');
var button2 = document.getElementById('verb');
var button3 = document.getElementById('adjective');
var button4 = document.getElementById('noun2');
var button5 = document.getElementById('setting');

// Paragraphs for output


// Word lists
let noun1 =["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let verb = ["sat on", "ate", "danced with", "saw", "doesn't like","kissed"];
let adjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let noun2 =["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
// Variables to store selected word/phrase


/* Functions
-------------------------------------------------- */
function selectWord (id) {
    var x = id;
    switch (x) {
        case 'noun1':
            console.log('swith is working');
            break;
        case 'verb':
            console.log('swith is working');
            break;
        case 'adjective':
            console.log('swith is working');
            break;
            case 'noun2':
                console.log('swith is working');
                break;
            case 'setting':
                console.log('swith is working');
                break
        default:
            return false;
    }
}

function createStory() {
    console.log('it is working');
}
// Set the noun


// Set the verb


// Set the adjective


// Set the second noun


// Set the setting for the story


// Output the completed sentence to the display paragraph


// Output the completed random sentence to the display paragraph


// Random number function for 'Surprise Me' button



/* Event handlers
-------------------------------------------------- */

// Buttons to pick words/phrases
