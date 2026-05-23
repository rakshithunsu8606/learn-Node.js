// const pdfMake = require('pdfmake');
// const path = require('path');
// const fs = require('fs');
// const { UpdateCloudinary } = require('./Cloudinary');

// const fonts = {
//     Roboto: {
//         normal: './public/fonts/Roboto-Regular.ttf',
//         bold: './public/fonts/Roboto-Medium.ttf',
//         italics: './public/fonts/Roboto-Italic.ttf',
//         bolditalics: './public/fonts/Roboto-MediumItalic.ttf'
//     }
// };

// pdfMake.addFonts(fonts);

// const Certificate_Create = async (
//     user_id,
//     course_id,
//     grade,
//     date
// ) => {



//     const docDefinition = {

//         pageSize: 'A4',
//         pageOrientation: 'landscape',

//         pageMargins: [40, 40, 40, 40],

//         content: [

//             {
//                 canvas: [
//                     {
//                         type: 'rect',
//                         x: 0,
//                         y: 0,
//                         w: 760,
//                         h: 500,
//                         lineWidth: 8,
//                         lineColor: '#7c98a5'
//                     }
//                 ]
//             },

//             {
//                 canvas: [
//                     {
//                         type: 'rect',
//                         x: 20,
//                         y: -480,
//                         w: 720,
//                         h: 460,
//                         lineWidth: 2,
//                         lineColor: '#7c98a5'
//                     }
//                 ]
//             },

//             {
//                 text: 'CERTIFICATE',
//                 fontSize: 34,
//                 bold: true,
//                 alignment: 'center',
//                 margin: [0, -430, 0, 20]
//             },

//             {
//                 text: 'This Certificate is Proudly Presented to:',
//                 fontSize: 18,
//                 alignment: 'center',
//                 margin: [0, 20, 0, 25]
//             },

//             {
//                 text: user_id,
//                 fontSize: 30,
//                 bold: true,
//                 alignment: 'center',
//                 margin: [0, 0, 0, 25]
//             },


//             {
//                 text: 'Congratulations for completing:',
//                 fontSize: 18,
//                 alignment: 'center',
//                 margin: [0, 0, 0, 20]
//             },

//             {
//                 text: `Grade : ${grade}`,
//                 absolutePosition: { x: 120, y: 470 },
//                 fontSize: 18,
//                 bold: true,
//                 alignment: 'center',
//                 color: "#FFD700"
//             },

//             {
//                 text: `Date : ${date}`,
//                 alignment: 'center',
//                 // absolutePosition: { x: 120, y: 520 },
//                 fontSize: 16,
//                 color: "white"
//             },

//             {
//                 text: course_id,
//                 fontSize: 24,
//                 bold: true,
//                 alignment: 'center',
//                 margin: [0, 0, 0, 40]
//             },

//             {
//                 // image: './public/images/gold-seal.png',
//                 width: 80,
//                 alignment: 'center',
//                 margin: [0, 0, 0, 40]
//             },

//             {
//                 columns: [
//                     {
//                         text: `Date: ${new Date().toLocaleDateString()}`
//                     },
//                     {
//                         text: 'Rakshit Hinsu',
//                         alignment: 'right',
//                         italics: true
//                     }
//                 ]
//             }
//         ]
//     };

//     const pdfDoc = pdfMake.createPdf(docDefinition);

//     const filePath = path.join(
//         __dirname,
//         `../temp/${Date.now()}.pdf`
//     );

//     await pdf.write(filePath);

//     const result = await UpdateCloudinary(filePath, "certificates");


//     fs.unlinkSync(filePath);

//     return result.secure_url;

//     // return pdfDoc;
// };

// module.exports = {
//     Certificate_Create
// };

const pdfMake = require('pdfmake');
const path = require('path');
const fs = require('fs');
const { UpdateCloudinary } = require('./Cloudinary');


const fonts = {
    Roboto: {
        normal: path.join(__dirname, '../public/fonts/Roboto-Regular.ttf'),
        bold: path.join(__dirname, '../public/fonts/Roboto-Medium.ttf'),
        italics: path.join(__dirname, '../public/fonts/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, '../public/fonts/Roboto-MediumItalic.ttf')
    }
};

pdfMake.addFonts(fonts);

const Certificate_Create = async (user_id, course_id, grade, date) => {

    const docDefinition = {

        pageSize: 'A4',
        pageOrientation: 'landscape',

        pageMargins: [0, 0, 0, 0],

        background: [
            {
                image: path.resolve('public/images/Certificate.png'),
                width: 842,
                height: 595
            }
        ],

        content: [

            // Title
            {
                text: 'CERTIFICATE',
                fontSize: 34,
                bold: true,
                alignment: 'center',
                margin: [0, 90, 0, 20]
            },

            // Subtitle
            {
                text: 'This Certificate is Proudly Presented To',
                fontSize: 18,
                alignment: 'center',
                color: '#735c5c',
                bold: true,
                margin: [0, 10, 0, 25]
            },

            // User Name
            {
                text: user_id,
                fontSize: 30,
                bold: true,
                alignment: 'center',
                color: '#000',
                margin: [0, 0, 0, 20]
            },

            // Completion Text
            {
                text: 'For Successfully Completing',
                fontSize: 18,
                alignment: 'center',
                bold: true,
                margin: [0, 0, 0, 12]
            },

            // Course Name
            {
                text: course_id,
                fontSize: 24,
                bold: true,
                alignment: 'center',
                color: '#1e3a5f',
                margin: [0, 0, 0, 40]
            },

            // Bottom Row
            {
                columns: [

                    {
                        width: '*',
                        text: `Grade: ${grade}`,
                        margin: [132, 35, 0, 0],
                        fontSize: 14.5,
                        bold: true
                    },

                    {
                        width: '*',
                        text: `Date: ${date}`,
                        alignment: 'center',
                        fontSize: 14.5,
                        margin: [0, 35, 0, 0]
                    },

                    {
                        width: '*',
                        text: 'Signture:Rakshit Hinsu',
                        alignment: 'right',
                        // italics: true,
                        fontSize: 14.5,
                        margin: [0, 35, 132, 0]
                    }
                ]
            }
        ]
    };


    const pdfDoc = pdfMake.createPdf(docDefinition);

    const filePath = path.join(
        __dirname,
        `../temp/${Date.now()}.pdf`
    );

    await pdfDoc.write(filePath);

    const result = await UpdateCloudinary(filePath, "certificates");

    // fs.unlinkSync(filePath);

    return result.secure_url;
};

module.exports = { Certificate_Create };