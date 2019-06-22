const axios = require("axios");

export class MirkoskopApiClient {
  constructor() {
    this.baseUrl = "";
    this.client = axios.create({
      baseURL: "https://mirkoskop.blob.core.windows.net/mirko/",
      timeout: 1000
    });
  }

  async getReport(selectedTag, selectedTimeframe) {
    let path = `${selectedTag ? selectedTag : "_"}_${selectedTimeframe}.json`;
    try {
      let report = await this.client.get(path);
      return report.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
