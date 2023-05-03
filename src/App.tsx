import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TodoProvider } from "./contexts/TodosContext";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import useAuth from "./hooks/useAuth";

function App() {
  return (
    <Router>
      <AuthProvider>
        <TodoProvider>
          <Routes>
            <Route path="/">
              <Navigate to="/login" />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute>
          </Routes>
        </TodoProvider>
      </AuthProvider>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default App;
