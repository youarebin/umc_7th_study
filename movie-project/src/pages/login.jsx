import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/LoginContext";
import { useMutation } from "react-query";

const Login = () => {
    const login = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validateLogin
    });

    const { Login } = useAuth();
    const navigate = useNavigate();
    const mutation = useMutation(
        async (credentials) => {
        const response = await axios.post("http://localhost:3000/auth/login", credentials);
        return response.data;
    }, {
        onSuccess: (data) => {
            // 로그인 성공 시
            const { accessToken, refreshToken } = data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            Login();
            navigate("/"); // 로그인 후 홈으로 이동
        },
        onError: (error) => {
            // 로그인 실패 시
            console.error('로그인 오류:', error);
            alert("로그인에 실패했습니다.");
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (login.isValid) {
            // 로그인 API 호출
            mutation.mutate({
                email: login.values.email,
                password: login.values.password,
            });
        } else {
            console.log("Validation errors:", login.errors);
        }
    };

    return (
        <Container onSubmit={handleSubmit}>
                <h2>로그인</h2> 
                <InputWrapper>
                    <Input 
                    error={login.errors.email}
                    touched={login.touched.email}
                    type="email"
                    placeholder="이메일을 입력해주세요!" 
                    {...login.getTextInputProps('email')}
                    />
                    {login.touched.email && login.errors.email && <ErrorMsg>{login.errors.email}</ErrorMsg>}
                </InputWrapper>
                <InputWrapper>
                    <Input 
                    error = {login.touched.password && login.errors.password}
                    type="password"
                    placeholder="비밀번호를 입력해주세요!" 
                    {...login.getTextInputProps('password')}
                    />
                    {login.touched.password && login.errors.password && <ErrorMsg>{login.errors.password}</ErrorMsg>}            
                </InputWrapper>

                <Submit 
                type="submit" 
                disabled = {!login.isValid}
                value="로그인" 
            />

        </Container>
    );
};

export default Login;

const Container = styled.form`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
const InputWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 500px;
    height: 50px;
    border: none;
    border-radius: 10px;
    ::placeholder {
        color: gray;
    }
`;

const ErrorMsg = styled.span`
    color: red;
    margin-top: 20px;
    font-size: 12px;
`;

const Submit = styled.input`
    width: 500px;
    height: 50px;
    padding: 0;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => (props.disabled ? 'gray' : '#f92f63')};
    color: white;
    font-size: 15px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    &:hover {
        background-color: ${(props) => (props.disabled ? 'gray' : 'blue')};
    }
`;