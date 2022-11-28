//   ___________________________________________________________________
//  | This is the main javascript file for use with the CHAMP CRM       |
//  |                                                                   |
//  |                                                                   |
//  | Date: 10/13/2022                                                  |
//  | Author(s): Jeffrey Robinson II                                    |
//  |___________________________________________________________________|

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains(String target) {
    if (document.location.href.indexOf(target) > -1){ 
    //Your code goes here
    }
}

function main() {
    let o;
    // | This interval is used to change details about the CRM as they load
    let intervalID  = setInterval((event) => {
        
        // | Find and replace the text for the sidebar shortcut for 'Opportunities' to 'Dashboards'
        document.getElementById('sb_opportunities').children[1].innerHTML = 'Dashboards';
        
        // | Find and replace the text for the navbar header from 'Opportunities' to 'Dashboards'
        let o = document.querySelector('.topmenu-navtitle');
        o = o[0];
        if (o.textContent.includes("Opportunities")){
            o.innerHTML = "Dashboard"
        }
        
    }, 10);
    
    let intervalID2 = setInterval((event) => {
        
        console.log("LOG");
        console.log(o.innerHTML);
        
    }, 1000);
}

main();
