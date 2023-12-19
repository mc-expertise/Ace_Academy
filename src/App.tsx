import AllCoursesPage from './Pages/AllCoursesPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import PasswordResetPage from './Pages/PasswordResetPage';
import PasswordPages from './Pages/PasswordPages';
import NewPasswordPage from './Pages/NewPasswordPage';
import EmailSentPage from './Pages/EmailSentPage';
import Welcome from './Pages/Popups/Welcome';
import CreatePassword from './Pages/Popups/CreatePassword';
import Terms from './Pages/Popups/Terms';
import AboutYourself from './Pages/Popups/AboutYourself';
import Scale from './Pages/Popups/Scale';
import Successfuly from './Pages/Popups/Successfuly';
import { NextUIProvider } from '@nextui-org/react';
import RequestsPage from './Pages/Admin/RequestsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <NextUIProvider>
          <div className="h-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/allcourses" element={<AllCoursesPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/resetpassword" element={<PasswordPages />} />
              <Route path="/emailsent" element={<EmailSentPage />} />
              <Route path="/newpassword" element={<NewPasswordPage />} />
              <Route path="/passwordreset" element={<PasswordResetPage />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/createpassword" element={<CreatePassword />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/aboutyourself" element={<AboutYourself />} />
              <Route path="/scale" element={<Scale />} />
              <Route path="/successfully" element={<Successfuly />} />
              <Route path="/requests" element={<RequestsPage />} />
            </Routes>
          </div>
        </NextUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
