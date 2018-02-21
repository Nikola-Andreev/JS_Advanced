function getModel() {
    let model = (function() {
        function init (num1Sel, num2Sel, resultSel) {
            model.num1 = $(num1Sel);
            model.num2 = $(num2Sel);
            model.result = $(resultSel);
        }
        function add () {model.action((a, b) => a + b)}
        function subtract () {model.action((a, b) => a - b)}
        function action (operation) {
            let val1 = Number(model.num1.val());
            let val2 = Number(model.num2.val());
            model.result.val(operation(val1, val2));
        }
        return {init,add,subtract}
    }())
    model.init('num1', 'num2', 'result')
}


