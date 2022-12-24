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
