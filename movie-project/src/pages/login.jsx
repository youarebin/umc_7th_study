import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";

const Login = () => {
    // const schema = yup.object().shape({
    //     email: yup.string()
    //     .email("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!")
    //     .required("올바른 이메일 형식이 아닙니다. 다시 확인해주세요!"),
    //     password: yup.string()
    //     .min(8, "비밀번호를 8-16자 사이로 입력해주세요!")
    //     .max(16, "비밀번호를 8-16자 사이로 입력해주세요!")
    //     .required("비밀번호를 8-16자 사이로 입력해주세요!"),
    // })

    // const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    //     resolver: yupResolver(schema),
    //     mode: 'onChange',
    // });

    // const onSubmit = (data) => {
    //     console.log(data);
    // }

    const login = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validateLogin
    });

    return (
        <Container>
                <h2>로그인</h2> 
                {/* <Input 
                    type={'email'} 
                    placeholder="이메일을 입력해주세요!" 
                    onBlur={() => handleBlur('email')}
                    value={values.email}
                    onChange={(e)=> handleChangeInput('email', e.target.value)}
                    {...register("email")}/>
                <ErrorMsg>{errors.email?.message}</ErrorMsg>
                <Input 
                    type={'password'} 
                    placeholder="비밀번호를 입력해주세요!"
                    onBlur={() => handleBlur('password')}
                    value={values.password}
                    onChange={(e)=> handleChangeInput('password', e.target.value)}
                    {...register("password")}/>
                <ErrorMsg>{errors.password?.message}</ErrorMsg> */}
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

                <Submit type={'submit'} value="로그인" />

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