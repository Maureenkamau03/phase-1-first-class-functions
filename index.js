function receivesAFunction(spy) {
  spy();
}
// function returnsANamedFunction() {
//   return receivesAFunction();
// }
const returnsANamedFunction = () => {
  return function receivesAFunction() {};
};
const returnsAnAnonymousFunction = () => {
  return function () {};
};
