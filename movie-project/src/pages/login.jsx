import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (login.isValid) {

            console.log("Form submitted with:", login.values);
            // 로그인 API 호출 등을 처리할 수 있습니다.
            try {
                const response = await axios.post("http://localhost:3000/auth/register", {
                    email: login.values.email,
                    password: login.values.password,
                  });
                  //토큰 저장
                  const refreshToken = response.data.refreshToken;
                  const accessToken = response.data.accessToken;
                  localStorage.setItem("refreshToken", refreshToken); 
                  localStorage.setItem("accessToken", accessToken);

                  alert("로그인에 성공했습니다!");
                  navigate("/");
            } catch(error) {
                console.error('네트워크 오류:', error);
                alert("로그인에 실패했습니다.");
            }
            
        } else {
            console.log("Validation errors:", login.errors);
        }
    };

    return (
        <Container onSubmit={handleSubmit}>
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