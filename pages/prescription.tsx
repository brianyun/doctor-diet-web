import React from 'react';
import styled from 'styled-components';
import palette from 'common/palette';
import {
	Background,
	Wrapper,
	Header,
	BottomButton,
	ContentButton,
} from 'common/styles';
import { useRecoilState } from 'recoil';
import { userState, isLoginState } from 'recoil/atoms';

export default function Prescription() {
	const [user, setUser] = useRecoilState(userState);

	return (
		<Background>
			<Wrapper>
				<Header>진료 완료</Header>
				<Card>
					<Title>처방전</Title>
					{prescription.map((p) => (
						<Row key={p.name}>
							<Text>{p.name}</Text>
							<Gray>
								<Text>{p.number}</Text>
							</Gray>
						</Row>
					))}
				</Card>
				<Card>
					<Title>배송지</Title>
					{user.address ? (
						<Text>{user.address}</Text>
					) : (
						<>
							<Text>등록된 배송지가 없습니다.</Text>
							<ContentButton>배송지 등록하러 가기</ContentButton>
						</>
					)}
				</Card>
				<Card>
					<Title>진료 후기 남기기</Title>
					<Textarea />
				</Card>
				<BottomButton disabled={true}>다음</BottomButton>
			</Wrapper>
		</Background>
	);
}

const prescription = [
	{
		name: '삭센다 (리라글루타이드정)',
		number: '2',
	},
];

const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(100% - 4rem);
	margin: 0 1rem 1rem 1rem;
	padding: 1rem;
	border-radius: 1rem;
	background-color: ${palette.grey[100]};
`;
const Title = styled.p`
	font-size: 1rem;
	font-weight: 600;
`;
const Text = styled.p`
	font-size: 0.75rem;
	font-weight: 400;
`;
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin: 0.5rem 0;
`;
const Gray = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4rem;
	height: 2rem;
	border-radius: 0.5rem;
	background-color: ${palette.grey[370]};
`;
const Textarea = styled.textarea`
	display: flex;
	width: 100%;
	word-break: break-word;
	resize: none;
	outline: none;
	border-radius: 0.5rem;
	border: 1px solid ${palette.grey[370]};
	cursor: pointer;
	position: relative;
`;
