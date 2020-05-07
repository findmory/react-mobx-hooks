import { observable, action, decorate } from "mobx";

class UserStore {
  user = null;

  setUser = user => {
    this.user = user;
  };
}

decorate(UserStore, {
  user: observable,
  setUser: action
});

export default UserStore;
