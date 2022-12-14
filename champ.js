//   ___________________________________________________________________
//  | This is the main javascript file for use with the CHAMP CRM       |
//  |                                                                   |
//  |                                                                   |
//  | Date: 10/13/2022                                                  |
//  | Author(s): Jeffrey Robinson II                                    |
//  |___________________________________________________________________|

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(target) {
    if (document.location.href.indexOf(target) > -1){
    //Your code goes here
    }
}
// | This interval is used to change details about the CRM as they load
let intervalID  = setInterval((event) => {

    // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
    let e = document.querySelector("#sb_opportunities > span:nth-child(2)");
    e.innerText = 'Dashboards';

    // | Find and replace the text for the navbar title from 'Opportunities' to 'Dashboards'
    e = document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > div:nth-child(2) > header > div.flex.flex-row.justify-start.items-center.topmenu-nav > div");
    e.innerText = 'Dashboards';
    
    // | Find and replace the text in the 'new pipeline' button
    //let e = document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > section > div > div > div > div.hl_controls > div.hl_controls--right > button");
    //e.innerText = 'Create New Dashboard';

    // | Find and replace the text in the 'Opportunities' navbar header
    //let e = document.querySelector("#tb_opportunities-tab > span:nth-child(1)");
    //e.innerText = 'View';

    // | Find and replace the text in the 'Pipelines' navbar header
    //let e = document.querySelector("#tb_pipeline > span:nth-child(1)");
    //e.innerText = 'Edit';

}, 50);

// | Kill the interval that is making the changes, after a reasonable amount of time has passed for the changes to be made: ***[10 SECONDS]***
setTimeout(() => {
    
    clearInterval(intervalID);
    
}, 10000);
