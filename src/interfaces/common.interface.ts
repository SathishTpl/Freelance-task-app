export interface InputFieldInterface {
  name: string;
  label: string;
  id: string;
  type: string;
  placeholder?: string;
}

export interface ButtonInterface {
  type?: 'submit' | 'reset' | 'button'; // Button type
  onClickFunction?: () => void; // Button click function
  title: string; // Button title
  disabled?: boolean; // Button disabled status
}
