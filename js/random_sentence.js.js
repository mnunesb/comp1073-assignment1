/* Global variables
-------------------------------------------------- */

// Word Buttons
let button1 = document.getElementById('noun1');
let button2 = document.getElementById('verb');
let button3 = document.getElementById('adjective');
let button4 = document.getElementById('noun2');
let button5 = document.getElementById('setting');

//Word buttons indexes
let btn1Indx = 0;
let btn2Indx = 0;
let btn3Indx = 0;
let btn4Indx = 0;
let btn5Indx = 0;


// Paragraphs for output
let noun1P = document.getElementById('selectedNoun1');
let verbP = document.getElementById('selectedVerb');
let adjectiveP = document.getElementById('selectedAdjective');
let noun2P = document.getElementById('selectedNoun2');
let settingP = document.getElementById('selectedSetting');

//Page buttons functions and listeners
let manualPhrase = document.getElementById('viewSentence');
let display = document.getElementById('yourPhrase');
let randomPhrase = document.getElementById('randomSentence');
let resetText = document.getElementById('resetBtn');

// Word lists
let noun1 =["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let verb = ["sat on", "ate", "danced with", "saw", "doesn't like","kissed"];
let adjective = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let noun2 =["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


/* Functions
-------------------------------------------------- */
//selectWord takes the number of times the user has clicked on one of the words buttons and cycles through the elements of that array and displays the selection to the user
function selectWord (id) {
    let buttonId = id;
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

//createStory displays all the elements selected by the user as a continuous phrase
function createStory() {
    yourPhrase =[noun1[btn1Indx-1],verb[btn2Indx-1], adjective[btn3Indx-1], noun2[btn4Indx-1], setting[btn5Indx-1]];
    display.textContent = yourPhrase.join(' ');
}

//randomStory generates a random phrase by randomly selecting a word from each word arrray
function randomStory() {

    yourPhrase =[noun1[Math.floor(Math.random() * noun1.length)],verb[Math.floor(Math.random() * verb.length)], adjective[Math.floor(Math.random() * adjective.length)], noun2[Math.floor(Math.random() * noun2.length)], setting[Math.floor(Math.random() * setting.length)]];
    display.textContent = yourPhrase.join(' ');
}

//resetPhrase resets all arrays so the user can start over
function resetPhrase (){
    noun1P.textContent ='';
    verbP.textContent ='';
    adjectiveP.textContent ='';
    noun2P.textContent ='';
    settingP.textContent ='';
    display.textContent = '';
}


/* Event handlers
-------------------------------------------------- */
manualPhrase.addEventListener('click', createStory);
randomPhrase.addEventListener('click',randomStory);
resetText.addEventListener('click',resetPhrase);

