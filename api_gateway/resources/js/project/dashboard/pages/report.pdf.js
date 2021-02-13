/*
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../../../build/vfs_fonts";

const pdf = (report) => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    pdfMake.fonts = {
        KpmgCyrillic: {
            normal: 'KPMGCyrillic-Extralight-160705.woff',
        },
        UniverseKpmg: {
            normal: 'UniversforKPMG.woff',
        },
    }

    report.criteria

    const docDefinition = {
        content: [
            // Header
            {
                text: report.type,
                fontSize: 24,
                font: 'KpmgCyrillic'
            },
            // PieChart diagram
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 150,
                        h: 10,
                        r: 1,
                        color: '#cecece',
                        lineWidth: 0
                    },
                    {
                        type: 'rect',
                        x: 150, y: 0, w: (150 * report.score), h: 10,
                        color: 'red',
                        lineWidth: 0,
                        r: 1,
                    },
                ]
            }
        ],
        defaultStyle: {
            color: 'gray',
            font: 'UniverseKpmg'
        }
    };

    pdfMake.createPdf(docDefinition).open();

    /!*const docDefinition = {
        content: [
            {
                text: [
                    'This ',
                    { text: 'is', color: 'green' },
                    ' the first ',
                    { text: 'paragraph', color: 'red' }
                ]
            },
            {
                canvas: [
                    {
                        type: 'rect',
                        x: 0,
                        y: 0,
                        w: 310,
                        h: 260,
                        r: 5,
                        dash: { length: 5 },
                        // lineWidth: 10,
                        lineColor: 'blue',
                    },
                    {
                        type: 'rect',
                        x: 1,
                        y: 1,
                        w: 308,
                        h: 258,
                        r: 4,
                        lineColor: 'red',
                        color: '#ffffe0',
                    },
                    {
                        type: 'polyline',
                        lineWidth: 3,
                        closePath: true,
                        points: [{ x: 10, y: 10 }, { x: 35, y: 40 }, { x: 100, y: 40 }, { x: 125, y: 10 }]
                    },
                    {
                        type: 'polyline',
                        lineWidth: 2,
                        color: 'blue',
                        lineColor: 'red',
                        points: [{ x: 10, y: 110 }, { x: 35, y: 140 }, { x: 100, y: 140 }, { x: 125, y: 110 }, { x: 10, y: 110 }]
                    },
                    {
                        type: 'line',
                        x1: 40, y1: 60,
                        x2: 260, y2: 60,
                        lineWidth: 3
                    },
                    {
                        type: 'line',
                        x1: 40, y1: 80,
                        x2: 260, y2: 80,
                        lineWidth: 10,
                        lineCap: 'round'
                    },
                    {
                        type: 'line',
                        x1: 40, y1: 100,
                        x2: 260, y2: 100,
                        lineWidth: 10,
                        lineCap: 'square'
                    },
                    {
                        type: 'ellipse',
                        x: 150, y: 140,
                        color: 'red',
                        fillOpacity: 0.5,
                        r1: 80, r2: 60
                    },
                    {
                        type: 'rect',
                        x: 150,
                        y: 200,
                        w: 150,
                        h: 50,
                    },
                    {
                        type: 'rect',
                        x: 10, y: 200, w: 100, h: 10,
                        linearGradient: ['red', 'blue']
                    },
                    {
                        type: 'rect',
                        x: 10, y: 215, w: 100, h: 10,
                        linearGradient: ['red', 'green', 'blue']
                    },
                    {
                        type: 'rect',
                        x: 10, y: 230, w: 100, h: 10,
                        linearGradient: ['red', 'yellow', 'green', 'blue']
                    },
                    {
                        type: 'ellipse',
                        x: 260, y: 140,
                        r1: 30, r2: 20,
                        linearGradient: ['red', 'green', 'blue', 'red'],
                    }
                ]
            },
            'This text should be rendered under canvas',
            {
                color: 'black',

                text: [
                    'This should be black ',
                ]
            }
        ],
        defaultStyle: {
            color: 'gray',
            font: UniverseKpmg
        }
    };

    *!/
}

export default pdf;*/
