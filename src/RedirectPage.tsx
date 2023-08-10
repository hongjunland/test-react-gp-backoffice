import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CallbackComponent() {
    const navigate = useNavigate();

    useEffect(() => {
        // URL에서 인증 정보 추출
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        
        const accessToken = urlParams.get('token');
        // const tokenType = urlParams.get('token_type');
        // const expiresIn = urlParams.get('expires_in');
        // const state = urlParams.get('state');

        // TODO: `state` 검증

        if (accessToken) {
            // 토큰 저장 (예: 로컬 스토리지)
            localStorage.setItem('accessToken', accessToken);

            // 메인 페이지로 리다이렉트
            navigate('/');
        } else {
            // 오류 처리
            const error = urlParams.get('error');
            const errorDescription = urlParams.get('error_description');
            console.error("OAuth2 error:", error, errorDescription);
            // 오류 페이지로 리다이렉트 또는 사용자에게 알림
            navigate('/error');
        }
    }, [navigate]);

    return (
        <div>
            Processing authentication...
        </div>
    );
}

export default CallbackComponent;
