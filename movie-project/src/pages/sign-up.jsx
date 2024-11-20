import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateSignup } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import {useMutation} from '@tanstack/react-query'
import axios from "axios";

const postSignUp = async({email, password, passwordCheck}) => {
    const {data} = await axios.post("http://localhost:3000/auth/register", {
        email,
        password,
        passwordCheck,
    });

    return data;
}

const SignUp = () => {
    const signUp = useForm({
        initialValues: {
            email: '',
            password: '',
            passwordCheck: '',
        },
        validate: validateSignup
    });

    const navigate = useNavigate();
    const {mutate: signUpMutation} = useMutation({
        mutationFn: postSignUp,
        onSuccess: () => {
            navigate("/login");
        },
        onError: (error) => {console.log('로그인 실패', error)},
        onSettled: () => {},
    })


    const handleSubmit = async (event) => {
        event.preventDefault();
        signUpMutation({
            email: signUp.values.email,
            password: signUp.values.password,
            passwordCheck: signUp.values.passwordCheck,
        })
    };

    return (
        <Container onSubmit={handleSubmit}>
            <h2>회원가입</h2>
            <InputWrapper>
                <Input 
                    error={signUp.errors.email}
                    touched={signUp.touched.email}
                    type="email"
                    placeholder="이메일을 입력해주세요!" 
                    {...signUp.getTextInputProps('email')}
                />
                {signUp.touched.email && signUp.errors.email && <ErrorMsg>{signUp.errors.email}</ErrorMsg>}
            </InputWrapper>
            <InputWrapper>
                <Input 
                    error={signUp.errors.password}
                    touched={signUp.touched.password}
                    type="password"
                    placeholder="비밀번호를 입력해주세요!" 
                    {...signUp.getTextInputProps('password')}
                />
                {signUp.touched.password && signUp.errors.password && <ErrorMsg>{signUp.errors.password}</ErrorMsg>}
            </InputWrapper>
            <InputWrapper>
                <Input 
                    error={signUp.errors.passwordCheck}
                    touched={signUp.touched.passwordCheck}
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요!" 
                    {...signUp.getTextInputProps('passwordCheck')}
                />
                {signUp.touched.passwordCheck && signUp.errors.passwordCheck && <ErrorMsg>{signUp.errors.passwordCheck}</ErrorMsg>}
            </InputWrapper>
            <Submit 
                type="submit" 
                disabled = {!signUp.isValid}
                value="회원가입" 
            />
        </Container>
    );
};

export default SignUp;

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
