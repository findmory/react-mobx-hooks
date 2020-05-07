/*
the ides of this is to show how to use mobx stores
in a functional component
(or in a class component via passed props)
using hooks instead of mobx's inject
*/

import React from "react";
import "./styles.css";

import { useStores } from "./hooks/use-stores";
import { observer } from "mobx-react";

// he needs observer becuase 'sessionStore.authUser' is observable
const WrappedApp = observer(() => {
  const { sessionStore, userStore } = useStores();
  return (
    <div className="App">
      <h1>Mobx, React, Hooks</h1>
      <h2>
        Mobx session:{" "}
        {sessionStore.authUser ? "User authed" : "User NOT authed"}
      </h2>
      <App userStore={userStore} sessionStore={sessionStore} />
    </div>
  );
});

// he needs observer because 'userStore.user' is observable
const App = observer(
  class App extends React.Component {
    updateUserStore = () => {
      let mockGuid = Math.floor(Math.random() * 90000) + 10000;
      this.props.userStore.setUser(mockGuid);
    };

    updateSessionStore = () => {
      this.props.sessionStore.setAuthUser("We have a user");
    };
    render() {
      return (
        <div>
          <h3>This is the Class App</h3>
          <p>Props from wrapper: {this.props.userStore.user}</p>
          <button onClick={this.updateUserStore}>Update User Store</button>
          <button onClick={this.updateSessionStore}>
            Login (SessionStore)
          </button>
        </div>
      );
    }
  }
);

export default WrappedApp;
