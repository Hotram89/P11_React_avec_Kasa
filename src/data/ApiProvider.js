import logements from "./logements.json";

class ApiProvider {
  static async getLogementById(id) {
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

  static async getSlidesByLogementId(id) {
    let logement = this.getLogementById(id);
    return logement.pictures;
  }

  static async getAboutInfos() {
    let infos = logements;
    return infos;
  }
}

export default ApiProvider;
