// ==ORIGINAL==
namespace NS {
    function M1() { }
    function M2() {
        return 1;
    }
    function M3() { }
}
// ==SCOPE::inner function in function 'M2'==
namespace NS {
    function M1() { }
    function M2() {
        return newFunction();

        function newFunction() {
            return 1;
        }
    }
    function M3() { }
}
// ==SCOPE::function in namespace 'NS'==
namespace NS {
    function M1() { }
    function M2() {
        return newFunction();
    }
    function newFunction() {
        return 1;
    }

    function M3() { }
}
// ==SCOPE::function in global scope==
namespace NS {
    function M1() { }
    function M2() {
        return newFunction();
    }
    function M3() { }
}
function newFunction() {
    return 1;
}
