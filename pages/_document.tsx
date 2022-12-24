/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<script src="https://code.jquery.com/jquery-1.12.4.min.js" />
				<script src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js" />
			</Head>
			<body style={{ margin: 0, padding: 0 }}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
