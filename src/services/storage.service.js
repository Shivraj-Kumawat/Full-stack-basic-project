const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey:"private_fgcWKaKJViVZ20srbp3Orfd9i/o="
})


async function uploadFile(buffer){
    const result = await imagekit.files.upload({
        file:buffer,
        fileName: "image.jpg"
    }) 

    return result;
}