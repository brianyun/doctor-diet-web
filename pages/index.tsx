import styled from 'styled-components';
import { useRouter } from 'next/router';
import palette from 'common/palette';
import { useRecoilState } from 'recoil';
import { isLoginState } from 'recoil/atoms';
import { Background, Wrapper } from 'common/styles';

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
				<button
					onClick={() => {
						router.push('/auth');
					}}
				>
					auth
				</button>
				<button
					onClick={() => {
						router.push('/apply');
					}}
				>
					apply
				</button>
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

const BottomButton = styled.button`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2rem);
	margin: 0 1rem;
	height: 3rem;
	background-color: ${palette.brand.main};
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 600;
`;
