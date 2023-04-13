import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Main, NotFound } from "./pages";
import { ThemeProvider, UserStorage } from "./context";
import GlobalStyles from "./styles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./actions";
import { PostsStorage } from "./context/PostsContext";

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <UserStorage>
          <PostsStorage>
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/main" element={<Main />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </PostsStorage>
        </UserStorage>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
