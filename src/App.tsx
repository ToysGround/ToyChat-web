import ContentBox from './components/atoms/ContentBox';
import Router from './routes';
// *이메일(중복확인- 백엔드), * 비밀번호, * 비밀번호 확인(유효성 검사-프론트),
//     이름, 성별, 핸드폰번호, 생년월일
function App() {
    return (
        <ContentBox>
            <Router />
        </ContentBox>
    );
}

export default App;
