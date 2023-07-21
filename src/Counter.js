import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isHigh, setIsHigh] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count > 10) {
      setIsHigh(true);
    } else {
      setIsHigh(false);
    }
  }, [count]);

  return (
    <>        
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Simple React App Counter</h5>
                <p className="card-text">Count: {count}</p>
                <button className="btn btn-primary" onClick={increment}>Increment</button>
                <button className="btn btn-danger" onClick={decrement}>Decrement</button>

                {
                    isHigh && (
                        <div className="alert alert-danger mt-2">Count is too high!</div>
                    )
                }
            </div>
        </div>

        <div>

        
        </div>
    </>
  );
} 