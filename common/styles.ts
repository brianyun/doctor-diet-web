import styled from 'styled-components';
import palette from 'common/palette';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	background-color: #f5f5f5;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	min-height: 100vh;
	margin: 0 auto;
	background-color: ${palette.white};
`;
export const Header = styled.p`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;

	font-size: 1.5rem;
	font-weight: 600;
`;
export const BottomButton = styled.button<{
	disabled?: boolean;
}>`
	display: flex;
	flex-direction: column;
	width: calc(100% - 2rem);
	margin: 0 1rem;
	height: 3rem;
	background-color: ${(props) =>
		props.disabled ? palette.grey[370] : palette.brand.main};
	color: ${(props) => (props.disabled ? palette.grey[500] : palette.black)};
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 600;
`;
export const ContentButton = styled.button`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 3rem;
	background-color: ${palette.brand.main};
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 400;
`;
