import SignIn from "components/Auth/SignIn";
import { AccessEmail } from "components/clients/confirm";
import { AuthLayout } from "layouts";
import AdminLayout from "layouts/admin.layout";
import ClientLayout from "layouts/client.layout";

import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
 return (
  <Routes>
   <Route path='auth/sign-in' element={<SignIn />} />
   <Route path='auth/sign-up' element={<SignIn />} />
   <Route path='auth/confirm-account' element={<AccessEmail />} />
   <Route path='admin/*' element={<AdminLayout />} />
   <Route path='/*' element={<ClientLayout />} />
  </Routes>
 );
}

export default App;
