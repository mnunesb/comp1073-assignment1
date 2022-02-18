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
function selectWord (button) {
    var x = button.id;
    switch (x) {
        case 'noun1':
            myFunction1(x);
            break;
        case 'verb':
            myFunction2(x);
            break;
        case 'adjective':
            myFunction3(x);
            break;
            case 'noun2':
                myFunction2(x);
                break;
            case 'setting':
                myFunction3(x);
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
button1.addEventListener('click',createStory);
button2.addEventListener('click',createStory);
button3.addEventListener('click',createStory);
button4.addEventListener('click',createStory);
button5.addEventListener('click',createStory);
// Buttons to pick words/phrases
