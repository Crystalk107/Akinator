var gQuestsTree = null;
var gCurrQuest;
var gPrevQuest = null;
var gLastRes = null;


function createQuestsTree() {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;


}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function getCurrentQuest(){
  
    var currQuest = gCurrQuest;
    return currQuest;
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
   gPrevQuest = gCurrQuest;
   gCurrQuest = gCurrQuest[res];
}
function setLastRes(res) {
    gLastRes = res;
}

function addGuess(newQuestTxt, newGuessTxt) { 
gCurrQuest[gLastRes] = createQuest(newQuestTxt); //set last answered question to new created question (txt) entered by user.
gCurrQuest = gCurrQuest[gLastRes]; //set global current question to the new question (set line before)
gCurrQuest["yes"] = createQuest(newGuessTxt); //add the "yes" answer to the new question as entered by user.
saveQuestsTree();
    // TODO: Create and Connect the 2 Quests to the quetsions tree using the gLastRes

}

function toggleQuest(){
    $('.quest').toggle();
}

function toggleNewQuest(){
    $('.new-quest').toggle();
}

function toggleNewGame(){
    $('.game-start').toggle();
}

function updateQuestTree(){
    gCurrQuest = gQuestsTree;
}




function loadData() {
   
    gQuestsTree = loadFromStorage('QuestsTree', gQuestsTree);
    gCurrQuest = gQuestsTree;
    if (gQuestsTree === null) createQuestsTree() 
    
}


function saveQuestsTree() {
    saveToStorage('QuestsTree', gQuestsTree);
}
