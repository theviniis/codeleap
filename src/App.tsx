import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Main, NotFound } from "./pages";
import { UserStorage } from "./context";
import { themes } from "./themes";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./actions";
import { PostsStorage } from "./context/PostsContext";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
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
