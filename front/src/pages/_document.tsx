import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

        return (
            <Html>
                <Head>
                    {googleMapsApiKey && (
                        <>
                            <script
                                src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&v=beta&libraries=marker`}
                            />
                            <script
                                async
                                src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`}
                                id="google-maps"
                            ></script>
                        </>
                    )}
                </Head>
                <body>
                    <div id="modal-root"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
