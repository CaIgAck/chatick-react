import Registration from "./components/AuthComponents/Registration/Registration";
import SignIn from "./components/AuthComponents/SignIn/signIn";
import MessagesLayout from "./components/MessagesLayout/MessagesLayout";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import RequireAuth from "./components/AuthComponents/RequireAuth/RequireAuth";
function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={
                    <RequireAuth>
                        <SignIn />
                    </RequireAuth>
                } />
                <Route path="/registration" element={
                    <RequireAuth>
                        <Registration />
                    </RequireAuth>
                } />
                <Route path="/messages" element={
                    <RequireAuth>
                        <MessagesLayout />
                    </RequireAuth>
                } />
            </Routes>
        </Router>
    </div>
  )
}

export default App
