// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
// @ts-ignore
import crudProvider from "@fusionworks/ra-data-nest-crud";
import { EmployeeCreate, EmployeeEdit } from "./Employee";

const dataProvider = crudProvider(
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5100"
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="employees"
      list={ListGuesser}
      edit={EmployeeEdit}
      create={EmployeeCreate}
    />
  </Admin>
);

export default App;
