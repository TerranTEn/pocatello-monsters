import React, { useState } from "react";
import { Button } from "@material-ui/core";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        increment
      </Button>
    </div>
  );
}

export default Counter;

// https://reactjs.org/docs/hooks-state.html
