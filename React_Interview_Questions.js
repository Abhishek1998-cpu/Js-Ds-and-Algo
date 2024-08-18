// To update the state based on the previous state, you should use the callback version of setState, like this:
// jsx

// setFiveCounter(prevState => prevState + 5); setFiveCounter(prevState => prevState + 5);
// Using the functional form of setState ensures that you're always working with the latest state value, avoiding any potential issues with batching updates.

// Que.
// const incrementCounter = () => {
//     setCounter(counter + 1)
//     setCounter(counter + 1)
// }

// We have used setCounter two times but still incrementCounter function is increasing the state with 1
// As per the code it should be increasing the state with 2 as two times set function is used

// Reason -> // In React, when you call setState (or in the case of functional components, useState), it
// schedules an update to a component's state. These updates are batched together for performance reasons.
// When you call setCounter(counter + 5) twice in a row like that, React will batch those updates into a single update.
// As the counter state variable is already marked for update
// So, fiveCounter will only be updated once with the result of fiveCounter + 5 from the latest call.

// Solution -> Use Callback version of useState, Example ->
// const incrementCounter = () => {
//     setCounter(prevState => prevState + 1)
//     setCounter(prevState => prevState + 1)
// }

// In this in render phase it does not mark the counter state, as here we have passed a prevState whatever
// it is increase by one

// Que 2. Why we should update the State Directly and use useState instead?
// Ans. With this state will be updated but still it will not be reflected on the UI as React will not be performing
// The Reconcilliation process through which it determine whether and how to update the state's efficiently.
// Directly modifying the state voilate React principle of immutability.