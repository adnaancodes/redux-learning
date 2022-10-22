import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { count, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCounter = (typ) => {
    switch (typ) {
      case "increase":
        dispatch({
          type: "INCREMENT",
        });
        return;
      case "decrease":
        dispatch({
          type: "DECREMENT",
        });
        return;
      case "reset":
        dispatch({
          type: "RESET",
        });
        return;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eve = e.target;
    const userData = {
      fullName: eve.fullname.value,
      email: eve.email.value,
      phone: eve.phone.value,
    };
    console.log(userData);
    dispatch(userController(userData));
    eve.reset();
  };
  const userController = (data) => {
    return {
      type: "ADDUSER",
      payload: {
        userData: {},
      },
    };
  };

  return (
    <div>
      <div>
        <h1>Hello Redux</h1>
        <span>count:{count}</span>
        <div
          style={{
            display: "flex",
          }}
        >
          <button onClick={() => handleCounter("increase")}>Increase</button>
          <button onClick={() => handleCounter("reset")}>Reset</button>
          <button onClick={() => handleCounter("decrease")}>Decrease</button>
        </div>
        <div style={{ marginTop: "2rem" }}>the count is {count}</div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
            rowGap: "1em",
            marginTop: "2em",
          }}
        >
          <label>
            <span>FullName: </span>
            <input name="fullname" type="text" required />
          </label>

          <label>
            <span>Email: </span>
            <input name="email" type="email" required />
          </label>

          <label>
            <span>Phone Number: </span>
            <input name="phone" required />
          </label>
          <button type="submit" style={{ width: "30%" }}>
            Submit
          </button>
        </form>
        <div>
          <h2>USER</h2>
          {/* {users.map((user) => { */}
          <div>{JSON.stringify(users, null, 2)}</div>
          {/* })}  */}
        </div>
      </div>
    </div>
  );
}

export default App;
