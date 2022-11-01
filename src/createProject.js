// Create Tabs
function onTabClick() {
    var tabList = document.getElementById("project-tab");
    tabList.addEventListener('click', active );

    function active(event) {
        if(event.target.tagName === 'A') {
            tabList.querySelectorAll('li').forEach( el => el.classList.remove('active'));
            event.target.parentNode.classList.add('active');
        }
        console.log("clicked.")
    }
}
const createProject =()=> {
    onTabClick();
};

export default createProject;