//  | This is the main javascript file for use with the Insurabook CRM
//  | 
//  | 
//  | Date: 10/13/2022
//  | Author(s): Jeffrey Robinson II

//  | This if statement can check for text within the current url
//  | The '-1' means 'not found'

function urlContains() {
    if (document.location.href.indexOf('Target') > -1){ 
    //Your code goes here
    }
}

function main() {
    let loading = true;
    let o;
    while (loading){
        setInterval((event) => {
            o = document.getElementById('sb_opportunities').children[1];
            o.innerHTML = 'Dashboards';
        }, 1000)
        if (o.innerHTML == 'Dashboards') {
            loading = false;
        }
    }
}

main();
