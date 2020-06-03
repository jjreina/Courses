let budgetController = (() => {

})();

let uiController = (() => {

})();

let controller = ((budgetCtrl, uiCtrl) => {

    const ENTER_KEYCODE = 13;

    let ctrlAddItem = () => {
        console.log('It´s work');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {

        if (event.keyCode === ENTER_KEYCODE || event.which === ENTER_KEYCODE) {
            ctrlAddItem();
        }
    });

})(budgetController, uiController);