import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateSignup } from "../utils/validate";

const SignUp = () => {
    const signUp = useForm({
        initialValues: {
            email: '',
            password: '',
            passwordCheck: '',
        },
        validate: validateSignup
    });

    return (
        <Container>
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
            <Submit type={'submit'} value="회원가입" />
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
    background-color: #f92f63;
    color: white;
    font-size: 15px;
    cursor: pointer;
    :&hover{
        background-color: #004caa;
    }
    &:disabled{
        background-color: gray;
    }
`;
