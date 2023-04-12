// 자바스크립트는 배열에 push와 pop이 구현되어 있기 때문에 편리하다.
// stack을 사용하고 싶다면 그냥 배열을 선언해서 사용하면 된다.

// 스택_올바른 괄호 실습
function checkBracket( str ) {
    let stack = [];

    for(const bracket of str) {
        if(bracket === "(") stack.push("(");
        else if(bracket === ")") {
            if(stack.length === 0) return false;
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(checkBracket("()()"));
console.log(checkBracket("(())()"));
console.log(checkBracket(")()("));
console.log(checkBracket("(()("))