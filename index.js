window.onload = function(){
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}
window.onpageshow = function (event){
    if(event.persisted){
        window.location.reload();
    }
};