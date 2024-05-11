const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client");

router.get("/", (req, res) => {
    res.send("Anasayfa")
})

router.get("/depremler", async (req, res) => {
    const { buyuk, sehir } = req.query;

    let data = await prisma.deprem.findMany();//findMany çoklu veri alıyor.prisma verilerin hepsini getir

    if (buyuk) {
        data = data.filter(eleman => parseFloat(eleman.buyukluk) >= parseFloat(buyuk));
    }

    if (sehir) {
        data = data.filter(eleman => eleman.il.includes(sehir))
    }

    res.json(data);
});

router.get("/haber", async (req, res) => {
    //const data = await prisma.deprem.findMany();

    const { buyuk } = req.query;

    let data = await prisma.deprem.findMany();//findMany çoklu veri alıyor.prisma verilerin hepsini getir

    if (buyuk) {
        data = data.filter(eleman => parseFloat(eleman.buyukluk) >= parseFloat(buyuk));
    }


    const newData = data.map(eleman => {
        return {
            id: eleman.id,

            tile: eleman.il + "' de " + eleman.buyukluk + " büyüklüğünde deprem meydana geldi.",

            description: eleman.il + " ilçesinde " + eleman.buyukluk + " büyüklüğünde deprem meydana geldi.Can ve mal kaybı," + 
            " yıkılan bina olup olmadığı henüz bilinmiyor.",

            date: eleman.tarih,

            body: eleman.il + "' de bir deprem daha meydana geldi. AFAD tarafından açıklanan bilgiye göre; " +
                "sarsıntının büyüklüğü " + eleman.buyukluk + " olarak bildirildi." + eleman.il + " merkezli depremde " +
                "henüz yaralı ve can kaybı olup olmadığı bilinmiyor.Depremle ilgili saha çalışmaları sürdürülüyor."

        }
    });

    res.json(newData);
    //console.log(newData);
});

module.exports = router;