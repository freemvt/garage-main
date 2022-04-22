import MyProvider from './config/MyProvider'
import MyRoutes from './MyRoutes'

function App() {
  return (
    <>
      <MyProvider>
        <MyRoutes />
      </MyProvider>
    </>
  );
}

export default App;
