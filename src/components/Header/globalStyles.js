import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Segoe UI, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;  
  }
  a {
    color: ${({ theme }) => theme.Link};
  }
  a:hover {
    color: #007bff;
    text-decoration: none;
  }
  .logo { 
      color: ${({ theme }) => theme.logo};
      transition: all 0.50s linear; 
    }

  .search-form, .search-form:focus {
    background: ${({ theme }) => theme.SearchForm};
    color: ${({ theme }) => theme.SearchForm};
    border: ${({ theme }) => theme.SearchForm};
    transition: all 0.50s linear;  
  }
  .navbar {
    background: ${({ theme }) => theme.navbarBg};
    transition: all 0.50s linear; 
  }
.dark-bg {
  background: ${({ theme }) => theme.DarkBg};
}
  `

  export const CatButton=styled.button`
  padding: .25rem .5rem;
  margin-right: .5em;
  font-size: .875rem;
  line-height: 1.5;
  border-radius: 1rem;
  color: #007bff;
  background-color: #163865;
  border:none;
  `