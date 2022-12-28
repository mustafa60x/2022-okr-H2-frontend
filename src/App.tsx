import { SiteProvider, AuthProvider } from "./context"

import PageRouter from "./components/PageRouters"

function App() {

  return (
    <div>
      <SiteProvider>
        <AuthProvider>
          <PageRouter></PageRouter>
        </AuthProvider>
      </SiteProvider>
    </div>
  );
}

export default App;
