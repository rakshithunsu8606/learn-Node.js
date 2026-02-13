const { text } = require('express');
const pdfmake = require('pdfmake');
const Content = require('twilio/lib/rest/Content');

const PDFMake = () => {
    try {
        const fonts = {
            Roboto: {
                normal: './public/fonts/Roboto-Regular.ttf',
                bold: './public/fonts/Roboto-Medium.ttf',
                italics: './public/fonts/Roboto-Italic.ttf',
                bolditalics: './public/fonts/Roboto-MediumItalic.ttf'
            }
        };


        pdfmake.addFonts(fonts);


        // const docDefinition = {

        //     content: [
        //         {
        //             columns: [
        //                 {
        //                     image: './public/images/img.png',
        //                     width: 180,
        //                     height: 50,
        //                 },
        //                 {
        //                     text: 'Tax Invoice/Bill of Supply/Cash Memo\n(Original for Recipient)',
        //                     bold: true,
        //                     alignment: 'right',
        //                     margin: [0, 11, 0, 0] // vertical center feel mate
        //                 }
        //             ],
        //             margin: [0, 0, 0, 30]
        //         },

        //         {
        //             columns: [
        //                 {
        //                     width: '50%',
        //                     stack: [
        //                         { text: 'Sold By:', bold: true },
        //                         { text: "SUPER MARKETING " },
        //                         { text: "Super Marketinrg Agency, Plot No. 613, Sumer" },
        //                         { text: "Nagar Main, Nea, r Gagan Bharti School," },
        //                         { text: 'Mansarovar Jaipur - 302020', margin: [0, 5, 0, 0] },
        //                         { text: 'AIPUR, RAJASTHAN, 302020\nIN' }
        //                     ]
        //                 },
        //                 {
        //                     width: '50%',
        //                     alignment: 'right',
        //                     stack: [
        //                         { text: 'Billing Address :', bold: true },
        //                         { text: "Rakshit Hasmukhbhai Hinsu" },
        //                         { text: "A1 1002 Om Regency" },
        //                         { text: "Surat,Gujarat,395006" },
        //                         { text: 'IN' },
        //                         { text: 'State/UT Code: 24', bold: true }
        //                     ]
        //                 }
        //             ],
        //             margin: [0, 0, 0, 20]
        //         },

        //         {
        //             columns: [
        //                 {
        //                     width: '50%',
        //                     stack: [
        //                         { text: 'PAN No:EPSPK8990C', bold: true },
        //                         { text: "GST Registration No: 08EPSPK8990C1Z5", bold: true },
        //                     ]
        //                 },
        //                 {
        //                     width: '50%',
        //                     alignment: 'right',
        //                     stack: [
        //                         { text: 'Shipping Address :', bold: true },
        //                         { text: "Rakshit Hasmukhbhai Hinsu" },
        //                         { text: "A1 1002 Om Regency" },
        //                         { text: "Surat,Gujarat,395006" },
        //                         { text: 'IN' },
        //                         { text: 'State/UT Code: 24', bold: true }
        //                     ]
        //                 }
        //             ]
        //         },

        //         {
        //             columns: [
        //                 {
        //                     width: '50%',
        //                     stack: [
        //                         { text: 'Order Number: 405-0419869-0333924', bold: true },
        //                         { text: "Order Date: 28.01.2025", bold: true },
        //                     ]
        //                 },
        //                 {
        //                     width: '50%',
        //                     alignment: 'right',
        //                     stack: [
        //                         { text: 'Place of supply: GUJARAT ', bold: true },
        //                         { text: "Place of delivery: GUJARAT", bold: true },
        //                         { text: "Invoice Number : IN-803", bold: true },
        //                         { text: "Invoice Details : RJ-315637153-2425", bold: true },
        //                         { text: 'Invoice Date : 28.01.2025', bold: true },
        //                         { text: 'State/UT Code: 24', bold: true }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             table: {
        //                 body: [
        //                     [
        //                         { text: 'Sl.No', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Description', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Unit Price', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Qty', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Tax Rate', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Tax Type', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Tax Amount', bold: true, fillColor: '#D9D9D9' },
        //                         { text: 'Total Amount', bold: true, fillColor: '#D9D9D9' }
        //                     ],
        //                     [
        //                         { text: '1' },
        //                         { text: 'Google Review NFC Card Along with QR Code | Tap or Scan for\nReviews/Feedback | PVC Card with UV Print | Pre-Printed Multicolored\n| B0CYD64SY3 ( GRC1001 )\nHSN:5201\n\nShipping Charges' },
        //                         { text: '₹117.80\n\n\n\n\n\n\n\n₹33.90' },
        //                         { text: '\n\n\n\n2' },
        //                         { text: '18%' },
        //                         { text: 'IGST\n\n\n\n\n\n\n\nIGST', bold: true },
        //                         { text: '₹42.40\n\n\n\n\n\n\n\n₹12.40', bold: true },
        //                         { text: '₹278.00\n\n\n\n\n\n\n\n₹80.00', bold: true }
        //                     ],
        //                     // [{ text: "Total", colSpan: 7, verticalAlignment: "middle" }, '', '', '', '', '', '',
        //                     // { text: "₹54.60", verticalAlignment: "middle", bold: true, fillColor: '#D9D9D9' },
        //                     // { text: "₹358.00", verticalAlignment: "middle", bold: true, fillColor: '#D9D9D9' },
        //                     // ],
        //                     // [
        //                     //     { text: "Amount in Words:\nThree Hundred Fifty-eight only", bold: true, fillColor: '#D9D9D9' },
        //                     // ],
        //                     // [
        //                     //     { text: 'For SUPER MARKETING:', bold: true },
        //                     //     { image: './public/images/sign.png' },
        //                     //     { text: 'Authorized Signatory:', bold: true }
        //                     // ]
        //                 ]
        //             },
        //             margin: [0, 20, 0, 0]
        //         },

        //         { text: 'Whether tax is payable under reverse charge - No' },
        //     ]
        // }




        // const now = new Date();


        const docDefinition = {

            content: [
                {
                    columns: [
                        {
                            image: './public/images/img.png',
                            width: 180,
                            height: 50,
                        },
                        {
                            stack: [
                                { text: 'Tax Invoice/Bill of Supply/Cash Memo', bold: true, alignment: 'right' },
                                { text: '(Original for Recipient)', bold: true, alignment: 'right' }
                            ]
                        }
                    ],
                    margin: [0, 0, 0, 20]
                },
                {
                    columns: [
                        {
                            stack: [
                                { text: 'Sold By :', bold: true },
                                { text: 'SUPER MARKETING' },
                                { text: '* Super Marketinrg Agency, Plot No. 613, Sumer' },
                                { text: 'Nagar Main, Nea, r Gagan Bharti School,' },
                                { text: 'Mansarovar Jaipur - 302020' },
                                { text: 'JAIPUR, RAJASTHAN, 302020' },
                                { text: 'IN' }
                            ]
                        },
                        {
                            stack: [
                                { text: 'Billing Address :', bold: true, alignment: 'right' },
                                { text: 'Rakshit Hasmukhbhai Hinsu', alignment: 'right' },
                                { text: 'A1 Om Rengency', alignment: 'right' },
                                { text: 'Rakshit Hasmukhbhai Hinsu', alignment: 'right' },
                                { text: 'SURAT, GUJARAT, 395006', alignment: 'right' },
                                { text: 'IN', alignment: 'right' },
                                {
                                    text: [
                                        { text: 'State/UT Code:', bold: true, alignment: 'right' },
                                        { text: '24', alignment: 'right' }
                                    ]
                                }
                            ]
                        }
                    ],
                    margin: [0, 0, 0, 20]
                },
                {
                    columns: [
                        {
                            stack: [
                                {
                                    text: [
                                        { text: 'PAN No:', bold: true },
                                        { text: 'EPSPK8990C' },
                                        { text: "GST Registration No:", bold: true },
                                        { text: '08EPSPK8990C1Z5' }
                                    ]
                                }
                            ]
                        },
                        {
                            stack: [
                                { text: 'Shipping Address :', bold: true, alignment: 'right' },
                                { text: "Rakshit Hasmukhbhai Hinsu", alignment: 'right' },
                                { text: "A1 1002 Om Regency", alignment: 'right' },
                                { text: "Surat,Gujarat,395006", alignment: 'right' },
                                { text: 'IN', alignment: 'right' },
                                {
                                    text: [
                                        { text: 'State/UT Code:', bold: true, alignment: 'right' },
                                        { text: '24', alignment: 'right' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    columns: [
                        {
                            stack: [
                                {
                                    text: [
                                        { text: 'Order Number:', bold: true },
                                        { text: '405-0419869-0333924' },
                                        { text: "Order Date:", bold: true },
                                        { text: '28.01.2025' }
                                    ]
                                }
                            ]
                        },
                        {
                            stack: [
                                {
                                    text: [
                                        { text: 'Shipping Address :', bold: true, alignment: 'right' },
                                        { text: 'GUJARAT' }
                                    ]
                                },
                                {
                                    text: [
                                        { text: 'Place of delivery:', bold: true, alignment: 'right' },
                                        { text: 'GUJARAT' }
                                    ]
                                },
                                {
                                    text: [
                                        { text: 'Invoice Number :', bold: true, alignment: 'right' },
                                        { text: 'IN-803' }
                                    ]
                                },
                                {
                                    text: [
                                        { text: 'Invoice Details :', bold: true, alignment: 'right' },
                                        { text: 'RJ-315637153-2425' }
                                    ]
                                },
                                {
                                    text: [
                                        { text: 'Invoice Date : ', bold: true, alignment: 'right' },
                                        { text: '28.01.2025' }
                                    ]
                                },
                            ]
                        }
                    ],
                    margin: [0, 0, 0, 20]
                },
                {
                    style: 'Bill',
                    table: {
                        body: [
                            [
                                { text: 'Sl\n.No1', fillColor: '#D9D9D9' },
                                { text: 'Description', fillColor: '#D9D9D9', width: '50%' },
                                { text: 'UnitPrice', fillColor: '#D9D9D9' },
                                { text: 'Qty', fillColor: '#D9D9D9' },
                                { text: 'Net\nAmount', fillColor: '#D9D9D9' },
                                { text: 'Tax\nRate', fillColor: '#D9D9D9' },
                                { text: 'Tax\nType', fillColor: '#D9D9D9' },
                                { text: 'Tax\nAmount', fillColor: '#D9D9D9' },
                                { text: 'Total\nAmount', fillColor: '#D9D9D9' }
                            ],
                            [
                                { text: "1", border: [true, true, true, false] },
                                { text: "Google Review NFC Card Along with QR Code | Tap or Scan for \n Reviews/Feedback | PVC Card with UV Print | Pre-Printed Multicolored \n | B0CYD64SY3 ( GRC1001 ) \n HSN:5201", border: [true, true, true, false] },
                                { text: "₹117.80", border: [true, true, true, false] },
                                { text: "2", border: [true, true, true, false] },
                                { text: "₹235.60", border: [true, true, true, false] },
                                { text: "18%", border: [true, true, true, false] },
                                { text: "IGST", border: [true, true, true, false] },
                                { text: "₹42.40", border: [true, true, true, false] },
                                { text: "₹278.00", border: [true, true, true, false] }
                            ],
                            [
                                { text: "", border: [true, false, true, true] },
                                { text: "Shipping Charges", border: [true, false, true, true] },
                                { text: "₹33.90", border: [true, false, true, true] },
                                { text: "", border: [true, false, true, true] },
                                { text: "₹67.80", border: [true, false, true, true] },
                                { text: "18%", border: [true, false, true, true] },
                                { text: "IGST", border: [true, false, true, true] },
                                { text: "₹12.20", border: [true, false, true, true] },
                                { text: "₹80.00", border: [true, false, true, true] }
                            ],
                            [
                                { text: "Total", colSpan: 7, },
                                '', '', '', '', '', '',
                                { text: "₹54.60", bold: true, fillColor: '#D9D9D9' },
                                { text: "₹358.00", bold: true, fillColor: '#D9D9D9' }
                            ],
                            [
                                { text: "Amount in Words:", colSpan: 9, bold: true, border: [true, true, true, false] },
                                '', '', '', '', '', '', '', '',
                            ],
                            [
                                { text: "Three Hundred Fifty-eight only", colSpan: 9, bold: true, border: [true, false, true, true] },
                                '', '', '', '', '', '', '', ''
                            ],
                            [
                                { text: "For SUPER MARKETING:", colSpan: 9, bold: true, verticalAlignment: "middle", alignment: 'right', border: [true, true, true, false] },
                                '', '', '', '', '', '', '', '',
                            ],
                            [
                                {
                                    image: './public/images/sign.png',
                                    width: 75,
                                    height: 45,

                                    colSpan: 9, bold: true, alignment: 'right', border: [true, false, true, false]
                                },
                                '', '', '', '', '', '', '', '',
                            ],
                            [
                                { text: "Authorized Signatory", colSpan: 9, bold: true, alignment: 'right', border: [true, false, true, true] },
                                '', '', '', '', '', '', '', '',
                            ],
                            [
                                { text: 'Whether tax is payable under reverse charge No', colSpan: 9, bold: true, border: [false, true, false, false] },
                                '', '', '', '', '', '', '', ''
                            ]
                        ]
                    }
                },
                {
                    style: "payment-InfoTable",
                    table: {
                        body: [
                            [
                                {
                                    text: [
                                        { text: "Payment Transaction ID: ", bold: true },
                                        { text: "1112wwZD1UzLIjSf7OFM9Vqkv" }
                                    ]
                                },
                                {
                                    text: [
                                        { text: "Date & Time:  ", bold: true },
                                        { text: "28/01/2025, 19:09:00 hrs" }
                                    ]
                                },
                                {
                                    text: [
                                        { text: "Invoice Value:", bold: true, colSpan: 2, border: [true, true, true, false] },
                                        { text: "₹358.00", border: [true, true, true, false] }
                                    ]
                                },
                                {
                                    text: [
                                        { text: "Mode of Payment: ", bold: true },
                                        { text: "AmazonPay" }
                                    ]
                                }
                            ],
                            [
                                {
                                    text: [
                                        { text: "Payment Transaction ID: ", bold: true },
                                        { text: "1112wwZD1UzLIjSf7OFM9Vqkv" }
                                    ]
                                },
                                {
                                    text: [
                                        { text: "Date & Time:  ", bold: true },
                                        { text: "28/01/2025, 19:09:00 hrs" }
                                    ]
                                },
                                {
                                    text: '', border: [true, false, true, true]
                                },
                                {
                                    text: [
                                        { text: "Mode of Payment:", bold: true },
                                        { text: "GiftCard" }
                                    ]
                                }
                            ]
                        ]
                    }
                },
                {
                    text: "*ASSPL-Amazon Seller Services Pvt. Ltd., ARIPL-Amazon Retail India Pvt. Ltd. (only where Amazon Retail India Pvt. Ltd. fulfillment center is co-located)", color: 'gray', fontSize: 6, alignment: 'center', margin: [0, 6, 0, 0]
                },
                {
                    text: "Customers desirous of availing input GST credit are requested to create a Business account and purchase on Amazon.in/business from Business eligible offers ", color: 'gray', fontSize: 6, alignment: 'center', margin: [0, 6, 0, 0]
                },
                {
                    text: "Please note that this invoice is not a demand for payment", color: 'gray', fontSize: 6, alignment: 'center', margin: [0, 6, 0, 0]
                },
                {
                    text: "Page 1 of 1", color: 'gray', fontSize: 6, alignment: 'right'
                }
            ],
        }

        const pdf = pdfmake.createPdf(docDefinition);
        pdf.write('amazon.pdf').then(() => {
            // success event
        }, err => {
            // error event
            console.error(err);
        });

    } catch (error) {
        console.log(error);

    }
}

module.exports = PDFMake