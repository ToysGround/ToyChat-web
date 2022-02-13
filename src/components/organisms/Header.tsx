import React from 'react';
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
    Navigator,
} from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { LogoutIcon } from '../../constant/Icons';
import DefaultText from '../atoms/DefaultText';

const LoginHeader = () => {
    return (
        <LoginWrapper>
            <DefaultText text="Toy-Chat" color={'white'} bold size="large" />
        </LoginWrapper>
    );
};
const MainHeader = () => {
    const params = useParams();
    const { menu } = params;
    const navagation = useNavigate();
    const location = useLocation();

    function getMenuName(menu: string | undefined) {
        switch (true) {
            case menu === 'chat':
                return '채팅';
            case menu === 'search':
                return '검색';
            case menu === 'mypage':
                return '설정';
            default:
                return '친구목록';
        }
    }
    const handleLogout = () => {
        if (window.confirm('logout하시겠습니까?')) {
            // navagation('/');
            // navagation('/', { replace: true });
            window.history.pushState('', '', '/');
        } else {
        }
    };

    return (
        <MainWrapper>
            <DefaultText
                text={getMenuName(menu)}
                color={'white'}
                bold
                size="large"
            />
            <LogoutBox children={<LogoutIcon />} onClick={handleLogout} />
        </MainWrapper>
    );
};

const Header = () => {
    const location = useLocation();
    const { pathname } = location;

    return pathname.includes('/main') ? <MainHeader /> : <LoginHeader />;
};

export default Header;

const LoginWrapper = styled.div`
    background-color: ${colors.violet};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 100%;
`;

const MainWrapper = styled.div`
    display: flex;
    background-color: ${colors.violet};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
`;

const LogoutBox = styled.div<React.FC<{ children: React.ReactElement }>>`
    width: max-content;
    height: max-content;
    cursor: pointer;
`;
