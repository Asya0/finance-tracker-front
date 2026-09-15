import LoginPage from './pages/LoginPage'; // Путь к вашей форме логина
// import RegisterPage from './pages/RegisterPage'; // Путь к вашей форме регистрации

function App() {
   return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
         <LoginPage />

         {/* <RegisterPage /> */}
      </div>
   );
}

export default App;
