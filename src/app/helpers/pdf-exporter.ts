import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as moment from 'moment';


export class Exporter {

    /**
     * Function to export a html element to PDF
     * @param htmlElement
     * @param fileName
     * @param title
     * @param topMargin
     * @param zoom
     * @returns
     */
    static exportHtmlElementToPDF(htmlElement: HTMLElement | null, fileName: string, options?: { title?: string, subtitle?: string, topMargin?: number, zoom?: number }): Promise<void> {

        const doc = new jsPDF('p', 'px', 'a4');
        let y = 5;
        let x = 20
        let title = options?.title || '';
        let subtitle = options?.subtitle || '';
        let topMargin = options?.topMargin || 50;
        let zoom = options?.zoom || 1;

        const optionsPdf = {
            background: 'white',
            scale: 3
        };

        if (!htmlElement)
            return Promise.resolve();

        return new Promise<void>(resolve => {
            html2canvas(htmlElement, optionsPdf).then((canvas) => {

                // Add title to PDF in center
                doc.setFont("helvetica", "bold");
                doc.setTextColor(143, 161, 75)

                y += 20;
                x = (doc.internal.pageSize.width - (doc.getStringUnitWidth(title) * doc.getFontSize() / doc.internal.scaleFactor)) / 2;
                doc.text(title, x, y);
                x = x < 20 ? 20 : x;

                y += 20;
                x = (doc.internal.pageSize.width - (doc.getStringUnitWidth(subtitle) * doc.getFontSize() / doc.internal.scaleFactor)) / 2;
                doc.setFont("helvetica", "normal");
                doc.setTextColor(0, 0, 0)
                doc.text(subtitle, x, y);
                x = x < 20 ? 20 : x;

                y += 20;
                // Dimensions of the image and the PDF
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;

                const pdfWidth = doc.internal.pageSize.width / zoom;
                const pdfHeight = doc.internal.pageSize.height * zoom;

                const pdfRatio = pdfWidth / (pdfHeight - y - topMargin) * zoom;

                let position = 0;

                while (position < imgHeight) {

                    // Create a canvas element for each page
                    const canvasTemp = document.createElement('canvas');
                    const ctxTemp = canvasTemp.getContext('2d') as CanvasRenderingContext2D;

                    // Set the canvas size to the size of the image
                    canvasTemp.width = imgWidth;
                    canvasTemp.height = imgWidth / pdfRatio;

                    // Draw the image on the canvas
                    ctxTemp.drawImage(canvas, 0, position, imgWidth, canvasTemp.height, 0, 0, imgWidth, canvasTemp.height);

                    // Convert the canvas to a data URL
                    const imgData = canvasTemp.toDataURL('image/PNG');

                    // Determine the position x of the image on the page
                    const xPosition = (doc.internal.pageSize.width - pdfWidth) / 2;

                    // Add the image to the PDF and validate if it is the first page
                    if (position === 0) {
                        // Add top margin to the first page
                        doc.addImage(imgData, 'PNG', xPosition, y, pdfWidth, 0, undefined, 'FAST');
                    } else {
                        doc.addPage();
                        // Add top margin to subsequent pages
                        doc.addImage(imgData, 'PNG', xPosition, y / 2, pdfWidth, 0, undefined, 'FAST');
                    }

                    position += canvasTemp.height;
                }

                return doc;

            }).then((docResult) => {
                docResult.save(`${fileName}-${moment(new Date()).format('yyyy-MM-dd HH:mm:ss')}.pdf`);
                // docResult.output('dataurlnewwindow', { filename: `${fileName}-${moment(new Date()).format('yyyy-MM-dd HH:mm:ss')}.pdf` });
                resolve();
            });
        });
    }

}