import { Document, Page } from 'react-pdf';
import { useState } from "react";
import { SizeMe } from 'react-sizeme'

interface Props {
    invoicePdf: string;
}

const PDFViewer: React.FC<Props> = ({ invoicePdf }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <SizeMe
            monitorHeight
            refreshRate={128}
            refreshMode={"debounce"}
        >{({ size }) =>
            <Document
                file={invoicePdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page
                    width={size.width}
                    pageNumber={pageNumber}
                />
            </Document>}</SizeMe>
    )
}

export default PDFViewer;