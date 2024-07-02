import styled from 'styled-components';


export const NavMainSection = styled.section`
    display: block;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    
    unicode-bidi: isolate;
    background-color: #203936;    
`;

export const NavBar = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light py-lg-2 py-2'
})`
    
`;

export const Container = styled.div.attrs({
    className: 'container'
})`
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
	
	@media (min-width: 1400px) {
    ${{NavBar}}.navbar > .container {
        max-width: 1320px;
    }
	
	@media (min-width: 1200px) {
    ${{NavBar}}.navbar > .container {
        max-width: 1140px;
    }
	
	@media (min-width: 768px) {
    ${{NavBar}}.navbar > .container {
        max-width: 720px;
    }
	
	@media (min-width: 576px) {
    ${{NavBar}}.navbar > .container {
        max-width: 540px;
    }
`;

export const ContainerLogo = styled.a.attrs({
    className: 'navbar-brand'
})`
	color: var(--title-color);
    font-weight: bold;
    font-size: 36px;
    padding: 0;
	padding-top: var(--bs-navbar-brand-padding-y);
    padding-bottom: var(--bs-navbar-brand-padding-y);
    margin-right: var(--bs-navbar-brand-margin-end);
    font-size: var(--bs-navbar-brand-font-size);
    color: var(--bs-navbar-brand-color);
    text-decoration: none;
    white-space: nowrap;
   display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    margin-right: 2rem;

    &:hover {
        text-decoration: none;
    }
  
`;

export const NavToggle = styled.button.attrs({
    className: 'navbar-toggler'
})`
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
	padding: 0.25rem 0.6rem;
    font-size: 1rem;
    background-color: var(--opposite-color);
    border: none;
    outline: none;
	
	
    &:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
    cursor: pointer;
  }
  
  @media (min-width: 992px) {
    ${{NavBar}}.navbar-light > .navbar-toggler {
        display: none;
    }
	
	@media (prefers-reduced-motion: reduce) {
    ${{NavBar}}.navbar-toggler {
        transition: none;
    }
}
`;

export const ButtonSpan = styled.span.attrs({
    className: 'navbar-toggler-icon fa fa-bars'
})`
	display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: var(--bs-navbar-toggler-icon-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
	
	&.fa { 
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		display: var(--fa-display, inline-block);
		font-style: normal;
		font-variant: normal;
		line-height: 1;
		text-rendering: auto;
		font-family: var(--fa-style-family, "Font Awesome 6 Free");
		font-weight: var(--fa-style, 900);
		font: normal normal normal 14px / 1 FontAwesome;
	}
	&.fa-bars {
		
	}
`;

export const NavCollapse = styled.div.attrs({
    className: 'collapse navbar-collapse'
})`
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;

    &:not(.show) {
        display: none;
    }

    @media (min-width: 992px) {
    ${{NavBar}}.navbar-expand-lg > .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
  }
`;

export const NavUl = styled.ul.attrs ({
    className: 'navbar-nav ml-auto'
})`
    --bs-nav-link-padding-x: 0;
    --bs-nav-link-padding-y: 0.5rem;
    --bs-nav-link-font-weight: ;
    --bs-nav-link-color: var(--bs-navbar-color);
    --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
    --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
	
	&.ml-auto {
		margin-left: auto !important;
	}
	
	@media (min-width: 992px) {
    ${{NavBar}}.navbar-expand-lg > .navbar-nav {
        flex-direction: row;
    }
}
`;

export const NavListItem = styled.li.attrs({
    className: 'nav-item'
})`
    margin: 0px 10px;
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;
`;

export const NavListLink = styled.a.attrs({
    className: 'nav-link'
})`
	display: block;
    padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
    font-size: var(--bs-nav-link-font-size);
    font-weight: var(--bs-nav-link-font-weight);
    color: var(--bs-nav-link-color);
    text-decoration: none;
    background: 0 0;
    border: 0;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
    display: block;
    padding: 0.5rem 1rem;
    color: #B8E648;
    text-transform: uppercase;
    
    &.hover {
         text-decoration: none;
    }
`;

