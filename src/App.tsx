import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { incremented, amountAdded } from './redux/features/somefeature/somefeature-slice';
import { useFetchSomeOtherFeatureCategoryQuery } from './redux/features/someotherfeature/someotherfeature-api-slice'

function App() {
  const count = useAppSelector((state) => state.somefeature.value);
  const dispatch = useAppDispatch();

  const [numItems, setNumItems] = useState(10);
  const { data = [], isFetching } = useFetchSomeOtherFeatureCategoryQuery(numItems);

  function handleClick() {
    // increment by 1
    // dispatch(incremented());

    // increment by a fixed amount
    dispatch(amountAdded(3));
  }

  return (
    <div>

        <p>
          <button onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        
        <div>
          <p>Items to fetch:</p>
          <select value={numItems} onChange={(e) => setNumItems(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        
        <div>
          <p>Number of items fetched: {data.length}</p>
        </div>
    </div>
  )
}

export default App
