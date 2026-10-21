const fs = require("node:fs")


const dataLagu = [
    {
        artis: "Hindia",
        lagu: ["Rumah ke Rumah", "Cincin", "Everything You Are", "Evaluasi", "Secukupnya"]
    },
    {
        artis: "Bernadya",
        lagu: ["Kata Mereka Ini Berlebihan", "Kini Mereka Tahu", "Untungnya, Hidup Harus Tetap Berjalan", "Satu Bulan", "Rabun Jauh"]
    },
    {
        artis: "Billie Eilish",
        lagu: ["BIRDS OF A FEATHER", "lovely", "WILDFLOWER", "CHIHIRO", "ocean eyes"]
    }
]

dataLagu.forEach(item => {
    item.lagu.forEach(lagu => {
        const namaFile = `${item.artis} - ${lagu}.mp3`
        fs.writeFileSync(namaFile, '')
        console.log(`File telah dibuat dengan nama ${namaFile}`)
    })
})

