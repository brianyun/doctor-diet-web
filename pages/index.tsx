import styled from 'styled-components';
import { useRouter } from 'next/router';
import palette from 'common/palette';
import { useRecoilState } from 'recoil';
import { isLoginState } from 'recoil/atoms';
import { Background, Wrapper, BottomButton } from 'common/styles';

export default function Home() {
	const router = useRouter();
	const [isLogin, setIsLogin] = useRecoilState(isLoginState);

	const gotoApply = () => {
		if (!isLogin) {
			router.push('/auth');
		}
		router.push('/apply');
	};

	return (
		<Background>
			<Wrapper>
				<EmptySpace />
				<BottomButton onClick={() => gotoApply()}>
					비대면 진료 받기
				</BottomButton>
			</Wrapper>
		</Background>
	);
}

const EmptySpace = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2rem);
	height: 500px;
	background-color: #f5f5f5;
	margin: 1rem 1rem;
`;
