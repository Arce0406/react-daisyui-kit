// Form 組件庫統一入口
export { default as FormItem } from './FormItem';
export { useFormContext, FormContext } from '@/contexts/FormContext';
export { pathToString, getNestedValue, setNestedValue } from './utils';

export type {
  FormValues,
  FormErrors,
  ValidationRule,
  FormItemInstance,
  FormContextType,
  FormProps as FormProps,
  FormItemProps
} from './types';

export {
  default as Input,
  type InputProps
} from './controls/Input';
export {
  default as Select,
  type SelectProps,
  type SelectOption
} from './controls/Select';
export {
  default as Checkbox,
  type CheckboxProps
} from '@/components/Checkbox';
export {
  default as RadioGroup,
  type RadioGroupProps,
  type RadioOption
} from '@/components/RadioGroup';
export {
  default as FormList,
  type FormListProps as FormListProps,
  type ListOperations,
  type ListField
} from './FormList';

// 默認導出複合組件
export { default as Form } from './Form';