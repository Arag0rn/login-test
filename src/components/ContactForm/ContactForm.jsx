import { Formik } from 'formik';
import * as Yup from 'yup';
import { AddContContainer, StyledForm, ErMsg, StyledField, Styledlabel, FormBtnStyled} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTable } from 'Redux/Table/operations';



const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string()      
    .email("Invalid email format")
    .required("Mail is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Please enter a valid email address'),
    birthday_date: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Date must be in this format "YYYY-MM-DD"'
    )
    .required('Data Required'),
    phone_number: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^\+?\d{1,4}-?\d{4,14}$/, ) 
    .required('Required'),
    address: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});


export const ContactForm  = ( ) =>{
  const dispatch = useDispatch();

    return <>
        <AddContContainer>
        <Formik
      initialValues={{
        name: '',
        email: '',
        birthday_date: '',
        phone_number: '',
        address:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        const newContact = {
          id: nanoid(), 
          name: values.name,
          email: values.email,
          birthday_date: values.birthday_date,
          phone_number: values.phone_number,
          address: values.address,
        };
     
         dispatch(addTable(newContact));
        action.resetForm();
      }
    }
    >
      <StyledForm>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledField id="name" name="name" 
        placeholder="Jane" 
        />
        <ErMsg component="span" name="name" />

        <Styledlabel htmlFor="email">Email</Styledlabel>
        
        <StyledField id="email" 
            name="email"   
            email="email"
            placeholder="some@email.com"
    
         />
          <ErMsg component="span" name="email" />

          <Styledlabel htmlFor="birthday_date">Birthday Date</Styledlabel>

          <StyledField id="birthday_date" 
            name="birthday_date"   
            data="birthday_date"
            placeholder="1969-10-22"
    
         />
          <ErMsg component="span" name="birthday_date" />

          <Styledlabel htmlFor="phone_number">Number</Styledlabel>

          <StyledField id="phone_number" 
              name="phone_number"   
              type="tel"
              placeholder="555-55-55"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
            <ErMsg component="span" name="phone_number" />

            <Styledlabel htmlFor="phone_number">Address</Styledlabel>

            <StyledField id="address" 
                name="address"   
                type="tel"
                placeholder="132, My Street"
            />
              <ErMsg component="span" name="address" />
        <FormBtnStyled type="submit">Submit</FormBtnStyled>
      </StyledForm>
    </Formik>
         
        </AddContContainer>
       </>

  
}