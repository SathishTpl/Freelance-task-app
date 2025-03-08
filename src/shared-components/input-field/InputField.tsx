import { useFormContext, Controller } from 'react-hook-form';
import { InputFieldInterface } from '../../interfaces/common.interface';

function InputField({ name, label, id, type, placeholder }: InputFieldInterface) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="sm:col-span-3">
          <label htmlFor={id} className="block tracking-wide text-md font-medium text-gray-900">
            {label}
          </label>
          <div className="mt-2">
            <input
              {...field}
              type={type}
              name={name}
              id={id}
              onChange={(e) => {
                field.onChange(e);
              }}
              placeholder={placeholder}
              className={`w-full rounded-lg border bg-white px-3 py-3 text-gray-900 outline-none focus:ring-2 focus:shadow-md
                ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
          </div>
        </div>
      )}
    />
  );
}

export default InputField;
