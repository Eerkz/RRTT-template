// Counter.tsx

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { increment, decrement, incrementByAmount } from '../store/store';

export default function Counter() {
  // Use the useSelector hook to select the counter state from the store
  const counter = useSelector((state: RootState) => state.counter.value);
  // Use the useDispatch hook to get a reference to the dispatch function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
    </div>
  );
}
