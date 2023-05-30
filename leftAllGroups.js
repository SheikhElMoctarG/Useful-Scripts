/**
 * Notes:
 *  - start with 1 everytime
 *  - facebook language should be on English
 *  - u should be in https://www.facebook.com/groups/feed/ and excute it.
 *  THIS SCRIPT FOR REMOVE ALL GROUPS FROM FACEBOOK ACCOUNT.
 */

var xpath = '//*[@aria-label="More"]';
var groups = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
var stopLoop = false; 
var i = 1;
const timeBeteween = 8 * 1000;
const lengthOfList = groups.snapshotLength;

function bodyLoop(){
    if(i<lengthOfList && !stopLoop){
        removeGroup(i);
        console.log("we are in: " + i);
        i++;
        setTimeout(bodyLoop, timeBeteween);
    }
}

bodyLoop();

function wait(s) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, s * 1000);
    });
}


function removeGroup(item){
    // click on button
    var iconMore = groups.snapshotItem(item);
    iconMore.click();
    wait(3).then(()=> {
        // click on button left group
        getElementByText("Leave group").click();
        wait(2).then(()=> {
            if(getElementByText("Leave Group"))
                getElementByText("Leave Group").click();
        })
    })
    
}

function getElementByText(text){
    var p = "//*[text()='"+text+"']";
    return document.evaluate(p, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
}

