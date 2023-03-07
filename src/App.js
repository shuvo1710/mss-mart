import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import SearchModal from './Components/Navbar/SearchModal';
import { router } from './Router/Router';

function App() {
  return (
    <>
      <Toaster 
      position="top-right"
      reverseOrder={false}
      />
      <SearchModal/>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
