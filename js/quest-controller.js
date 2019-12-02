'use strict';

$(document).ready(init);

function init() {
    loadData();
}

function onStartGuessing() {
    $("button.btn-lg").hide();
    toggleQuest()
    renderQuest();

    // TODO: show the quest section
}

function renderQuest() {
    console.log(gCurrQuest);
    $(".quest h2").html(getCurrentQuest().txt);


    // TODO: select the <h2> inside quest and update its text by the currQuest text
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(getCurrentQuest())) {
        if (res === 'yes') {
            alert('Yes, I knew it!');
            // TODO: improve UX
        } else {
            alert('I dont know...teach me!')
            // TODO: hide and show new-quest section
            setLastRes(res)
            toggleQuest()
            toggleNewQuest()
            toggleNewGame()

        }
    } else if (res === 'no' && getCurrentQuest()["no"] === null ) {
        alert('I dont know...teach me!')
        setLastRes(res)
        toggleQuest()
        toggleNewQuest()
        toggleNewGame()
    }

    else {
        setLastRes(res)
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess() {
    var newGuessTxt = $("input#newGuess").val();
    var newQuestTxt = $("input#newQuest").val();
    addGuess(newQuestTxt, newGuessTxt);

    onRestartGame();
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    $('.btn-lg').show();
    updateQuestTree();
    //TODO: reset the lastRes to null

}

