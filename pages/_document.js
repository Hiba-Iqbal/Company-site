import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<title>Company</title>

					<link lazyload rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						lazyload
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossorigin
					/>
					<link
						lazyload
						href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" type="image/png" href="/favicon.png" />
					<script
						defer
						src="https://www.googletagmanager.com/gtag/js?id=AW-10795784072"
					></script>
					<script
						defer
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10795784072');
`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/*Below we add the modal wrapper*/}
					<div id="modal"></div>
				</body>
			</Html>
		);
	}
}

export default MainDocument;
