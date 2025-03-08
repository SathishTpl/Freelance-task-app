import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import FormProvider from '../../hooks/hook-form';
import InputField from '../../shared-components/input-field/InputField';
import Button from '../../shared-components/button/button';
import { useBoolean } from '../../hooks/use-boolean';
import pokemonImage from '../../assets/images/pokemon-img.jpg';

interface LoginFormInputs  {
  userName: string;
  password: string;
};

function Login() {
  const submit = useBoolean();
  const navigate = useNavigate();
  const defaultValues = {
    userName: '',
    password: '',
  };
  const validationSchema = Yup.object({
    userName: Yup.string()
      .trim()
      .max(255, 'Username must be at most 255 characters')
      .required('Username is required'),

    password: Yup.string()
      .required('Password is required')
      .trim()
      .min(7, 'Password must be at least 7 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),
  });
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });
  const onSubmit = (data: LoginFormInputs) => {
    console.log('Form Data:', data);
    submit.onTrue();

    // Re-enable after 5 seconds
    setTimeout(() => {
      submit.onFalse();
      toast.success('Login Successful!');
      navigate('/pokemon');
    }, 2000);
  };
  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      <div
        style={{ backgroundImage: `url(${pokemonImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat
          before:absolute before:inset-0 before:bg-black/50 flex flex-col 
          items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="absolute inset-0 backdrop-blur-[3px]"></div>
        <div className="mt-10 relative sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="w-[450px] p-4 bg-white rounded-lg shadow border border-gray-200  dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-3xl text-center font-bold leading-tight tracking-wide text-gray-900 dark:text-white">
              Login
            </h1>
            <FormProvider<LoginFormInputs> methods={methods} onSubmit={onSubmit}>
              <InputField type="text" name="userName" label="Username" id="userName" placeholder="Enter your username" />
              <InputField
                type="password"
                name="password"
                label="Password"
                id="password"
                placeholder="6+ Characters"
              />
              <Button title="Submit" type="submit" disabled={submit?.value} />
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
