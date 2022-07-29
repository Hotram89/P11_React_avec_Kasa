import logements from "./logements.json";

class ApiProvider {
  static async getLogementsById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = logements.find((element) => element.id === id);
        if (result === undefined) {
          reject("Not found");
        }
        resolve(result);
      }, 1000);
    });
  }
}

export default ApiProvider;
