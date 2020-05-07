import { observable, action, decorate } from "mobx";

class SessionStore {
  authUser = null;

  setAuthUser = authUser => {
    this.authUser = authUser;
  };
}

decorate(SessionStore, {
  authUser: observable,
  setAuthUser: action
});

export default SessionStore;
