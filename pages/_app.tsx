import type { AppProps } from 'next/app';
import { Background, Wrapper } from 'common/styles';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Background>
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
		</Background>
	);
}
