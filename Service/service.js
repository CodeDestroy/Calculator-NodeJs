exports.calculate = function (firsNumber, secondNumber, operation){
    try {
        switch (operation) {
            case '+':
                result = firsNumber + secondNumber;
                break;
            case '-':
                result = firsNumber - secondNumber;
                break;
            case '*':
                result = firsNumber * secondNumber;
                break;
            case '/':
                result = firsNumber / secondNumber;
                break;
        }
        return result;
        
      } catch (e) {
            return "Error";
      }
}