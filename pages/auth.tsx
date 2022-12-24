import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import palette from 'common/palette';
import { useRecoilState } from 'recoil';
import { userState, isLoginState } from 'recoil/atoms';
import { User } from 'common/models';
import { certification, iamportInit } from 'common/utils/iamport';
import { Background, Wrapper } from 'common/styles';

export default function Auth() {
	const router = useRouter();
	const [user, setUser] = useRecoilState(userState);
	const [isLogin, setIsLogin] = useRecoilState(isLoginState);

	const certificateAdult = () => {
		iamportInit();

		const info = {
			merchant_uid: `mid_${new Date().getTime()}`,
			m_redirect_url: '/apply',
			popup: false, // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
		};
		certification(info, certificationCallback);
	};

	const certificationCallback = (response: any) => {
		const { success, imp_uid, error_code, error_msg } = response;

		if (success) {
			console.log(response.imp_uid);
			// 인증 성공 시 로직,
			const data = {
				...user,
				imp_uid: imp_uid,
			} as User;
			setUser(data);
		} else {
			alert('인증에 실패하였습니다. 에러 내용: ' + error_code + error_msg);
		}
	};

	useEffect(() => {
		//로그인
		setUser({} as User);
		setIsLogin(true);
	}, []);

	return (
		<Background>
			<Wrapper>
				<button onClick={certificateAdult}>auth</button>
			</Wrapper>
		</Background>
	);
}
