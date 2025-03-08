import { ButtonInterface } from '../../interfaces/common.interface';

function Button({ onClickFunction = () => {}, disabled, title, type = 'submit' }: ButtonInterface) {
  console.log(disabled);
  return (
    <div className="flex py-2">
      <button
        onClick={onClickFunction}
        disabled={disabled}
        type={type}
        className={`w-full text-white font-medium rounded-full text-md px-5 py-3.5 me-2 mb-2
          ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300'} 
          dark:${disabled ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700'}`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
