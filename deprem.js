const axios = require("axios");
const cheerio = require("cheerio");

class Deprem {
  constructor(SECENEKLER) {
    this.secenekler = SECENEKLER;
  }

  async depremCek() {
    const URL = this.secenekler.url;
    const cevap = await axios.get(URL);
    const $ = cheerio.load(cevap.data);
    const data = this.dataDuzenle($, this.secenekler.secici);
    return data;
  }

  dataDuzenle($, secici) {
    const sonuclar = [];

    $(secici).each((_, el) => { // el her bir tr 
      const sonuc = {};

      this.dep
      //
      Object.keys(this.secenekler).forEach((key) => { // [ "url", "secici", "title"].forEach()
        if (key !== "url" && key !== "secici") {
          sonuc[key] = $(el).find(this.secenekler[key]).text().trim();
        }
      });
      sonuclar.push(sonuc);
    });

    return sonuclar;
  }
}

module.exports = Deprem;
