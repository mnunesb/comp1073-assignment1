/* Global variables
-------------------------------------------------- */

// Buttons
var button1 = document.getElementById('noun1');
var button2 = document.getElementById('verb');
var button3 = document.getElementById('adjective');
var button4 = document.getElementById('noun2');
var button5 = document.getElementById('setting');
var btn1Indx = 0;
var btn2Indx = 0;
var btn3Indx = 0;
var btn4Indx = 0;
var btn5Indx = 0;


// Paragraphs for output
var noun1P = document.getElementById('selectedNoun1');
var verbP = document.getElementById('selectedVerb');
var adjectiveP = document.getElementById('selectedAdjective');
var noun2P = document.getElementById('selectedNoun2');
var settingP = document.getElementById('selectedSetting');
let manualPhrase = document.getElementById('viewSentence');
let display = document.getElementById('yourPhrase');
let randomPhrase = document.getElementById('randomSentence');

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
    var buttonId = id;
    switch (buttonId) {
        case 'noun1':
            if(btn1Indx > noun1.length-1){
                btn1Indx = 0;
            }
            noun1P.textContent = noun1[btn1Indx];
            btn1Indx++;
            break;
        case 'verb':
            if(btn2Indx > verb.length-1){
                btn2Indx = 0;
            }
            verbP.textContent = verb[btn2Indx];
            btn2Indx++;
            break;
        case 'adjective':
            if(btn3Indx > adjective.length-1){
                btn3Indx = 0;
            }
            adjectiveP.textContent = adjective[btn3Indx];
            btn3Indx++;
            break;
            case 'noun2':
                if(btn4Indx > noun2.length-1){
                    btn4Indx = 0;
                }
                noun2P.textContent = noun2[btn4Indx];
                btn4Indx++;
                break;
            case 'setting':
                if(btn5Indx > setting.length-1){
                    btn5Indx = 0;
                }
                settingP.textContent = setting[btn5Indx];
                btn5Indx++;
                break
        default:
            return false;
    }
}

function createStory() {
    yourPhrase =[noun1[btn1Indx-1],verb[btn2Indx-1], adjective[btn3Indx-1], noun2[btn4Indx-1], setting[btn5Indx-1]];
    display.textContent = yourPhrase.join(' ');
}

function randomStory() {

    yourPhrase =[noun1[Math.floor(Math.random() * noun1.length)],verb[Math.floor(Math.random() * verb.length)], adjective[Math.floor(Math.random() * adjective.length)], noun2[Math.floor(Math.random() * noun2.length)], setting[Math.floor(Math.random() * setting.length)]];
    display.textContent = yourPhrase.join(' ');
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
manualPhrase.addEventListener('click', createStory);
randomPhrase.addEventListener('click',randomStory);
// Buttons to pick words/phrases
