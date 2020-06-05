import React from 'react';
import './App.css';
import Header from './Header/Header'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Header/globalStyles";
import { lightTheme, darkTheme } from "./Header/Themes"
import { useDarkMode } from '../components/Header/UseDarkMode'
import HomePage from '../views/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogPage from '../views/BlogPage';
import SinglePost from '../views/SinglePost';

function App() {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode} >
      <BrowserRouter>
        <GlobalStyles />
        <div className="App">
          <Header click={themeToggler} />

        </div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path='/posts/:postId' component={SinglePost} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
