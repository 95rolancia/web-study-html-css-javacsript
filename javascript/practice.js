function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class UserStorage {
  async loginUser(id, password) {
    await delay(1000);
    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "academy")
    ) {
      return id;
    } else {
      new Error("not found");
    }
  }

  async getRole(user) {
    await delay(1000);
    if (user === "ellie") {
      return { name: "ellie", role: "admin" };
    } else {
      new Error("no access");
    }
  }

  async login(id, password) {
    const user = await this.loginUser(id, password);
    return this.getRole(user);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your pwd");

userStorage.login(id, password).catch(alert).then(console.log);
