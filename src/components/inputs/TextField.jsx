import { Label, Input } from 'reactstrap';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

/**
 * @param id string
 * @param name string
 * @param className string
 * @param rules react-hook-form (rules object)
 * @param defaultValue string
 * @param type string (text | password | date | textarea)
 * @param max maximum value: string | number
 * @param label string
 * @param control react-hook-form (useForm() property)
 * @param errors react-hook-form (useForm() property)
 * @param disabled boolean
 * @param placeholder html input attribute
 * @param Icon remixicon icon name
 *  */
const TextField = ({
  id,
  name,
  className = '',
  rules = {},
  defaultValue = '',
  type = 'text',
  max,
  label,
  control,
  errors ,
  disabled = false,
  placeholder = '',
  icon = null
}) => {
  return (
    <>
      { icon && <i className={icon}></i>} <Label for={id}>{label}</Label>
      <Controller
        name={name}
        control={control}
        className={className}
        defaultValue={defaultValue}
        rules={disabled ? {} : { ...rules }}
        render={({ field }) => {
          return (
            <Input
              {...field}
              id={id}
              type={type}
              autoComplete={type === 'password' ? 'current-password' : 'off'}
              max={max}
              disabled={disabled}
              placeholder={placeholder ?? ''}
            />
          );
        }}
      />

      {errors && (
        <ErrorMessage
          errors={errors}
          name={name}
          as={<small className='font-danger' />}
        />
      )}
    </>
  );
};

export default TextField;
