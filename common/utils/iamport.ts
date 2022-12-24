type RequestCertificationParams = {
	merchant_uid: string;
	popup: boolean;
};

type RequestCertificationResponseCallback = (response: any) => void;

type RequestPaymentResponseCallback = (response: any) => void;

interface Iamport {
	init: (iamportKey: string) => void;
	certification: (
		data: RequestCertificationParams,
		certificationCallback?: RequestCertificationResponseCallback
	) => void;
	request_pay: (
		data: RequestIamportPayment,
		paymentCallback?: RequestPaymentResponseCallback
	) => void;
}

declare global {
	interface Window {
		IMP: Iamport;
	}
}

export const iamportInit = () => {
	window.IMP.init('imp19187312'); // 테스트 결제
	// window.IMP.init(process.env.NEXT_PUBLIC_IAMPORT_KEY ?? '');
};

export const certification = (
	data: RequestCertificationParams,
	certificationCallback: RequestCertificationResponseCallback
) => {
	window.IMP.certification(data, certificationCallback);
};

export const requestPayment = (
	data: RequestIamportPayment,
	paymentCallback?: RequestPaymentResponseCallback
) => {
	window.IMP.request_pay(data, paymentCallback);
};

export type RequestIamportPayment = {
	pay_method: string; //결제수단
	// html5_inicis(이니시스웹표준) 으로 시도 후 다른 결제타입 필요한지 검토
	merchant_uid: string; //가맹점에서 생성/관리하는 고유 주문번호, 스플 서버에서 관리하는 주문번호를 요청 후 전달받아 사용한다.
	amount: number; // 결제할 금액
	buyer_tel: string; // 주문자 전화번호
	m_redirect_url: string; // 리디렉션 방식으로 호출된 결제창에서 결제 후에 이동 될 주소, 스플 웹에 결제완료 페이지 경로 추가
	// 모바일웹 결제 시 m_redirect_url 필수
	name?: string; //주문명
	buyer_email?: string; // 주문자 이메일 -> user email 정보 사용
	buyer_name?: string; // 주문자명, 유저의 실명 이름이 없어, 어떻게 사용할지 검토 필요
	digital: boolean; //결제상품이 컨텐츠인지 여부(휴대폰 소액결제시 필수) ??
};
