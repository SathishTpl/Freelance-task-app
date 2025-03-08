import { ReactNode } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface FormInterface<T extends FieldValues> {
  children: ReactNode;
  onSubmit: (data: T) => void;
  methods: UseFormReturn<T>;
}
