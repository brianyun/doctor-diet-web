import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import palette from 'common/palette';

export default function Home() {
	const router = useRouter();
	const gotoApply = () => {
		router.push('/apply');
	};

	return (
		<HomeSection>
			<EmptySpace />
			<BottomButton onClick={() => gotoApply()}>비대면 진료 받기</BottomButton>
		</HomeSection>
	);
}

const HomeSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 375px;
	margin: 0 auto;
`;

const EmptySpace = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 500px;
	background-color: #f5f5f5;
	margin-bottom: 2rem;
`;

const BottomButton = styled.button`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 3rem;
	padding: 1rem;
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
