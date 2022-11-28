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

function main() {
    
    // | This interval is used to change details about the CRM as they load
    // | let intervalID  = setInterval((event) => {
        
        // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
        let o = document.getElementById('sb_opportunities').children[1];
        o.innerHTML= 'Dashboards';
        
        // | Find and replace the text for the navbar title from 'Opportunities' to 'Dashboards'
        // | let o2 = document.querySelector("#app > div.flex.v2-open.sidebar-v2-location.iy3DiTzRf9NBlWxVqWyi.flex.v2-open.sidebar-v2-location > div:nth-child(2) > header > div.flex.flex-row.justify-start.items-center.topmenu-nav > div");
        // | o2.innerHTML = 'Dashboards';
                
    // |}, 10);
}

main();
