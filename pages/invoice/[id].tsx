import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { InvoiceLayout } from '../../layouts/InvoiceLayout';
const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS
});

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params;
    var invoiceObj;

    try {
        invoiceObj = await client.getEntry(id);
    } 
    catch (error) {
        return {
            notFound: true
        }
    }

    var invoice = {
        invoiceAmount: invoiceObj.fields.amountDue,
        invoicePdf: invoiceObj.fields.invoicePdf.fields.file.url,
        notification: invoiceObj.fields.notification || "",
        status: invoiceObj.fields.status
    }

    return {
        props: {
            invoice
        }
    }
}

interface Props {
    invoice: any
}

export const Invoice: React.FC<Props> = ({ invoice }) => {
    return (
        <InvoiceLayout invoiceAmount={invoice.invoiceAmount} invoicePdf={invoice.invoicePdf} notification={invoice.notification} status={invoice.status}>
            
        </InvoiceLayout>
    )
}

export default Invoice;
