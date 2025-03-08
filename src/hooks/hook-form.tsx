import { FieldValues, FormProvider as Form } from 'react-hook-form';
import { FormInterface } from '../interfaces/form.interface';

function FormProvider<T extends FieldValues>({ children, onSubmit, methods }: FormInterface<T>) {
  return (
    <Form {...methods}>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-6 md:space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </form>
      </div>
    </Form>
  );
}

export default FormProvider;
