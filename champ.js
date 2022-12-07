//   ___________________________________________________________________
//  | This is the main javascript file for use with the CHAMP CRM       |
//  |                                                                   |
//  |                                                                   |
//  | Date: 10/13/2022                                                  |
//  | Author(s): Jeffrey Robinson II                                    |
//  |___________________________________________________________________|

// | Global Variables
let SIDEBAR_OPPORTUNITIES_BUTTON_SELECTOR = "#sb_opportunities > span";
let NAVMENU_TITLE_SELECTOR = "#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > div:nth-child(2) > header > div.flex.flex-row.justify-start.items-center.topmenu-nav > div";

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(target) {
    if (document.location.href.indexOf(target) > -1) {
    // Your code goes here
    }
}

function main() {
            
    // | Initialize variables
    const elements = [];
    var e;

    // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
    if (document.querySelector(SIDEBAR_OPPORTUNITIES_BUTTON_SELECTOR)) {
        e = document.querySelector(SIDEBAR_OPPORTUNITIES_BUTTON_SELECTOR);
        e.innerText = 'Dashboards';
    }

    // | Find and replace the text for the navbar title from 'Opportunities' to 'Dashboards'
    if (SIDEBAR_OPPORTUNITIES_BUTTON_SELECTOR.aria-current == "page" && document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > div:nth-child(2) > header > div.flex.flex-row.justify-start.items-center.topmenu-nav > div") {
        e = document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > div:nth-child(2) > header > div.flex.flex-row.justify-start.items-center.topmenu-nav > div");
        e.innerText = 'Dashboards';
    }

    // | Find and replace the text in the 'new pipeline' button
    if (document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > section > div > div > div > div.hl_controls > div.hl_controls--right > button")) {
        e = document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > section > div > div > div > div.hl_controls > div.hl_controls--right > button");
        e.innerText = 'Create New Dashboard';
    }

    let p = document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > section > div > div > div > div.hl_controls > div.hl_controls--right > button");
    p.innerText = 'Create New Dashboard';

    // | Set the name of the Status dropdown
    let s = document.querySelector("div.bootstrap-select:nth-child(5) > button:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)");
    s.innerText = 'Status'; 
}

main();
