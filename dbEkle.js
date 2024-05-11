const Deprem = require("./deprem");
const prisma = require("./prisma/client");


const deprem = new Deprem({
    // parametreler girildi
    url: 'https://deprem.afad.gov.tr/last-earthquakes.html',
    secici: 'tbody tr',
    tarih: 'td:nth-child(1)',
    enlem: 'td:nth-child(2)',
    boylam: 'td:nth-child(3)',
    derinlik: 'td:nth-child(4)',
    tip: 'td:nth-child(5)',
    buyukluk: 'td:nth-child(6)',
    il: 'td:nth-child(7)',
});

const dbEkle = async () => {  //
    // deprem verileri çekildi
    let data = await deprem.depremCek();
    
    // String tarih DateTime formatına çevrildi
    data = data.map(eleman => {
        let date = new Date(eleman.tarih)
        date.setHours(date.getHours() + 3) 

        return {
            ...eleman,
            tarih: date
        }
    });

    if (data) {
        // data varsa sil
        await prisma.deprem.deleteMany();//deleteMany çoklu silme, prisma veriy tabınıdaki verileri siler
    }
    
    // alınan veriler veritabanına kaydedildi
    await prisma.deprem.createMany({
        data
    });    

    
}

dbEkle();