import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  required,
  email,
  EditActionsProps,
  CreateActionsProps,
  DateInput,
} from "react-admin";
const validateEmail = [required(), email()];
const validateRequired = required();

export const EmployeeCreate = (props: CreateActionsProps) => (
  <Create title={<span>Create employee</span>} {...props}>
    <SimpleForm>
      <TextInput source="first_name" validate={validateRequired} />
      <TextInput source="surname" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
      <DateInput source="birth_date" validate={validateRequired} />
    </SimpleForm>
  </Create>
);
const GuestEditTitle = () => {
  return <span>Edit employee</span>;
};

export const EmployeeEdit = (props: EditActionsProps) => (
  <Edit title={<GuestEditTitle />} {...props}>
    <SimpleForm>
      <TextInput source="first_name" validate={validateRequired} />
      <TextInput source="surname" validate={validateRequired} />
      <TextInput source="email" validate={validateEmail} />
      <DateInput source="birth_date" validate={validateRequired} />
    </SimpleForm>
  </Edit>
);
