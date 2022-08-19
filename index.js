function receivesAFunction(spy) {
  return spy();
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
