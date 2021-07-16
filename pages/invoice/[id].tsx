import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react';
import { InvoiceLayout } from '../../layouts/InvoiceLayout';
const contentful = require("contentful");

const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACCESS
});

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params;
    const invoiceObj = await client.getEntry(id);

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

export const getStaticPaths: GetStaticPaths = async () => {
    var paths = []

    var entries = await client.getEntries()

    entries.items.forEach(entry => {
        let invoiceId = entry.sys.id;
        paths.push({
            params: {
                id: invoiceId
            }

        });
    })

    return {
        paths,
        fallback: false,
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
