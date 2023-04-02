import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice'

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() =>
    {
      dispatch(fetchGreetings())
    }, [dispatch]
  );
  const message = useSelector((state) => state.greeting)
  return (
    <div>
      <h1>Greetings</h1>
      {
        message.loading ? (<p>loading...</p>) : (
          <h1>{message.greet.message}</h1>
        )
      }
    </div>
  );
}
export default Greeting;
