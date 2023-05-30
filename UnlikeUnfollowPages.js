/**
 * SCRIPT FOR REMOVE PAGES LIKED OR FOLLOWING ON FACEBOOK.
 * you should be in https://www.facebook.com/pages/?category=liked&ref=bookmarks and then execute it.
 */

const pagesLikedElement = document.querySelector(".x78zum5.x1q0g3np.x1a02dak.x1qughib.xyamay9.x1pi30zi.x1l90r2v.x1swvt13");
const pages = pagesLikedElement.querySelectorAll('[aria-label="More actions"]');

var stopLoop = false; 
var i = 0;
const timeBeteween = 10 * 1000;
const lengthOfList = pages.length;

bodyLoop();

function bodyLoop(){
    if(i<lengthOfList && !stopLoop){
        removePage(i)
        console.log("we are in: " + i);
        i++;
        setTimeout(bodyLoop, timeBeteween);
    }
}

function removePage(item){
    pages[item].click();
    wait(2).then(()=> {
            Unfollow();
    })
}

function Unfollow(){
    getElementByText("Follow settings").click();
    wait(3).then(() => {
        getElementByText("Unfollow this Page").click();
        wait(2).then(()=> getElementByText("Update").click());
    })
}

function wait(s) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, s * 1000);
    });
}

function getElementByText(text){
    var p = "//*[text()='"+text+"']";
    return document.evaluate(p, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotItem(0);
}