import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormContainer, StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled, StyledBtn, Styledlabel2 } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from 'Redux/Auth/operation';
import { useState } from 'react';
import  iconeye from "./iconeye.png"
import hidepas from "./hidepas.png"


const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Required')
  .min(5, 'Too Short!')
    .max(50, 'Too Long!'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[a-zA-Z]/, 'Must contain at least one letter')
    .required('Required'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <FormContainer>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, action) => {
            action.resetForm();
            dispatch(logIn({
              username: values.username,
              password: values.password,
            }));
          }}
        >
          <StyledForm>
            <Styledlabel htmlFor="username">Username</Styledlabel>
            <StyledField
              id="username"
              name="username"
              placeholder="username"
            />
            <ErMsg component="span" name="username" />

            <Styledlabel2 htmlFor="password">Password
            <StyledField
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'} 
              placeholder="password"
              style={{position: 'relative'}}
            />
            <StyledBtn
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? (
                     <img src={hidepas}  width={18} height={18}alt="Hide Password" />
                  ) : (
                    <img src={iconeye} IconEye width={18} height={18}alt="Show Password" />
                  )}
            </StyledBtn></Styledlabel2>
            <ErMsg component="span" name="password" />
            <FormBtnStyled type="submit">Submit</FormBtnStyled>
          </StyledForm>
        </Formik>
      </FormContainer>
      <ToastContainer />
    </>
  );
};