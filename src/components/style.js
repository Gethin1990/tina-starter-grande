import React from "react"
import styled, { createGlobalStyle, css } from "styled-components"
import { mix, tint, shade, transparentize } from "polished"
import { Moon, Sun } from "styled-icons/boxicons-regular"
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

export const Reset = css`
  /*! minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`

export const PrismTheme = css`
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${props => transparentize(0.1, props.theme.color.foreground)};
    font-family: "Hack", Monaco, "Courier New", Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    hyphens: none;
    border-radius: 0 ${props => props.theme.radius.small}
      ${props => props.theme.radius.small} 0;
    background-color: ${props =>
      mix(0.975, props.theme.color.background, props.theme.color.foreground)};
  }

  code[class*="language-"] {
    padding: 0 0.25em;
    margin: 0 0.125em;
    font-size: 0.9em;
    display: inline-block;
    border-radius: ${props => props.theme.radius.small};
    border: 1px solid
      ${props => transparentize(0.95, props.theme.color.foreground)};
  }

  pre[class*="language-"] {
    position: relative;
    border-radius: 0 ${props => props.theme.radius.small}
      ${props => props.theme.radius.small} 0;
    padding: 1em 0 1em 1em;
    margin: 0.5em 0;

    border-radius: 0.3em;
    font-size: 0.8em;
    padding: 1.5rem;
    border-top: 1px solid
      ${props => transparentize(0.95, props.theme.color.foreground)};
    border-bottom: 1px solid
      ${props => transparentize(0.95, props.theme.color.foreground)};

    code {
      display: block;
      font-size: 1em;
      padding: 0 1rem 0 0;
      margin: 0;
      border-radius: 0;
      border: none;
      background-color: transparent;
      overflow: auto;
      max-width: 100vw;
    }
  }

  pre[class*="language-"].line-numbers {
    counter-reset: linenumber;
  }

  pre[class*="language-"].line-numbers > code {
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    top: 1.5rem;
    pointer-events: none;
    font-size: 100%;
    width: 3em;
    letter-spacing: -1px;
    user-select: none;
    padding-left: 0.75rem;

    @media (min-width: ${props => props.theme.breakpoints.small}) {
      padding-left: 1.5rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      padding-left: 2rem;
    }
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: ${props => props.theme.color.foreground};
    opacity: 0.25;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${props => props.theme.color.foreground};
    opacity: 0.5;
  }

  .token.punctuation {
    color: ${props => props.theme.color.foreground};
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${props => mix(0.85, "#F90B61", props.theme.color.foreground)};
  }

  .token.boolean,
  .token.number {
    color: ${props => mix(0.85, "#9458FF", props.theme.color.foreground)};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${props => mix(0.85, "#91CA1E", props.theme.color.foreground)};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: ${props => props.theme.color.foreground};
  }

  .token.atrule,
  .token.attr-value,
  .token.function {
    color: ${props => mix(0.85, "#C6BE00", props.theme.color.foreground)};
  }

  .token.keyword {
    color: ${props => mix(0.85, "#F90B61", props.theme.color.foreground)};
  }

  .token.regex,
  .token.important {
    color: ${props => mix(0.85, "#FD8F0D", props.theme.color.foreground)};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  html {
    font-size: 125%;
    font-family: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: ${props => props.theme.color.foreground};
    background-color: ${props =>
      mix(0.95, props.theme.color.background, props.theme.color.foreground)};

    /* Hide Scrollbar */
    ::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  ${PrismTheme}

  blockquote {
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    border-radius: 0 ${props => props.theme.radius.small} ${props =>
  props.theme.radius.small} 0;
    background-color: ${props =>
      transparentize(0.95, props.theme.color.foreground)};
    box-shadow: -6px 0 0 ${props => props.theme.color.primary};
    margin-left: 6px;
    &:not(:first-child) {
      margin-top: 1.6rem;
    }
    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }

  p:not([class]) {
    font-size: 1em;
    line-height: 1.7;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  p {
    &:not(:last-child):not([class]) {
      margin-bottom: 1.5rem;
    }
  }

  li:not(:last-child):not([class]) {
    margin-bottom: 0.5rem;
  }

  h2:not([class]) {
    font-size: 1.8em;
    line-height: 1.2;
    text-transform: uppercase;
    word-spacing: 1px;
    font-weight: 700;
  }

  h3:not([class]) {
    font-size: 1.4em;
    word-spacing: 1px;
    font-weight: 700;
  }

  ul:not([class]),
  ol:not([class]) {
    padding-left: 1em;
  }

  ol:not([class]) {
    counter-reset: counter;
    list-style: none;
    li:not([class]) {
      counter-increment: counter;
      &:before {
        content: counter(counter) " –";
        color: ${props => props.theme.color.secondary};
        font-weight: 700;
        margin-right: 0.25rem;
      }
    }
  }

  ul:not([class]) {
    list-style-type: none;
    li:not([class]) {
      &:before {
        content: "–";
        color: ${props => props.theme.color.secondary};
        font-weight: 700;
        margin-right: 0.25rem;
      }
    }
  }

  a:not([class]),
  a:not([class]):visited {
    color: ${props => props.theme.color.link};
    text-decoration-color: ${props =>
      transparentize(0.75, props.theme.color.link)};
    transition: all 150ms ${props => props.theme.easing};
    &:hover {
      color: ${props => shade(0.1, props.theme.color.link)};
      text-decoration-color: ${props =>
        transparentize(0.5, props.theme.color.link)};
    }
    &:focus {
      color: ${props => shade(0.1, props.theme.color.link)};
      text-decoration-color: ${props => props.theme.color.link};
      outline: none;
      background-color: ${props =>
        transparentize(0.95, props.theme.color.foreground)};
    }
    &:active {
      color: ${props => shade(0.1, props.theme.color.link)};
      text-decoration-color: ${props => props.theme.color.link};
    }
  }

  hr:not([class]) {
    width: 35%;
    min-width: 10rem;
    max-width: 100%;
    border: none;
    margin: 1.6rem 0;
    border-top: 2px solid ${props => props.theme.color.secondary};
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1em;

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    padding: 0 2rem;
  }
`

export const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  background-color: ${props => transparentize(0.95, props.theme.color.black)};
  border-top: 6px solid ${props => props.theme.color.primary};
  box-shadow: inset 0 -1px 0 ${props => transparentize(0.9, props.theme.color.white)},
    0 1px 0 ${props => transparentize(0.9, props.theme.color.black)};
`

export const Navbar = styled.ul`
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate3d(0, 100%, 0);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    opacity: 0;
    z-index: 1000;
    background-color: ${props =>
      mix(0.95, props.theme.color.black, props.theme.color.white)};
    box-shadow: 0 1rem 2rem -0.5rem ${props => transparentize(0.5, props.theme.color.black)};
    transition: all 150ms ${p => p.theme.easing};
    pointer-events: none;
    ${props =>
      props.navOpen &&
      css`
        opacity: 1;
        pointer-events: all;
      `};
  }

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-end;
    flex: 1 0 auto;
    margin: 0;
    opacity: 1;
    pointer-events: all;
  }
`

export const NavItem = styled.li`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.small}) {
    &:not(:last-child) {
      border-bottom: 1px solid
        ${props => transparentize(0.85, props.theme.color.white)};
    }
  }
`

export const NavLink = styled(props => (
  <Link activeClassName="active" {...props} isCurrent />
))`
  flex: 1 0 auto;
  line-height: 3rem;
  padding: 0 0.75rem;
  display: block;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: ${p => p.theme.color.white} !important;
  opacity: 0.5;
  overflow: visible;
  transition: all 150ms ${p => p.theme.easing};

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: ${props => transparentize(0.85, props.theme.color.white)};
    transform: translate3d(0, -100%, 0);
    transition: all 150ms ${props => props.theme.easing};
  }

  &:hover:not(.active) {
    &:after {
      background-color: ${props =>
        transparentize(0.85, props.theme.color.black)};
    }
  }

  &:hover,
  &:active,
  &.active {
    opacity: 1;

    &:after {
      transform: translate3d(0, 0, 0);
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.small}) {
    &:after {
      display: none;
    }
  }
`

export const SiteLink = styled(Link)`
  line-height: 36px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.white} !important;
  text-decoration: none;
  margin: 0;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    fill: ${props => props.theme.color.white};
  }
`

export const SiteTitle = styled.h1`
  margin: 0;
  flex: 0 0 auto;
  font-size: 1rem;
`

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`

export const NavToggle = styled(({ menuOpen, ...styleProps }) => {
  return (
    <button {...styleProps}>
      <span className="closed">Open Menu</span>
      <span className="open">Close Menu</span>
    </button>
  )
})`
  position: relative;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 0.8rem;
  line-height: 1;
  align-self: stretch;
  text-transform: uppercase;
  color: ${props => props.theme.color.white};
  opacity: 0.5;
  overflow: visible;
  transition: all 150ms ${p => p.theme.easing};

  .open {
    display: none;
  }
  .closed {
    display: block;
  }

  &:focus {
    outline: none;
    opacity: 1;
    text-decoration: underline;
  }

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    display: none;
  }

  ${props =>
    props.navOpen &&
    css`
      .open {
        display: block;
      }
      .closed {
        display: none;
      }
    `};
`

export const DarkModeToggle = styled(({ ...styleProps }) => {
  return (
    <button {...styleProps}>
      <Sun />
      <Moon />
    </button>
  )
})`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  height: 2.75rem;
  align-self: stretch;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  color: ${props => props.theme.color.white};
  opacity: 0.5;
  overflow: hidden;
  transition: all 150ms ${p => p.theme.easing};

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    width: 1.5rem;
    height: 100%;
    margin-left: 1rem;
  }

  svg {
    position: absolute;
    top: calc(50% - 0.75rem);
    left: calc(50% - 0.75rem);
    width: 1.5rem;
    height: auto;
    fill: currentColor;
    transition: all 150ms ${props => props.theme.easing};
    transform-origin: 50% 50%;
    &:first-child {
      opacity: 0;
      transform: rotate(-90deg);
    }
    &:last-child {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.isDarkMode &&
    css`
      svg {
        &:first-child {
          opacity: 1;
          transform: rotate(0deg);
        }
        &:last-child {
          opacity: 0;
          transform: rotate(90deg);
        }
      }
    `};
`

export const HeroBackgroundImage = styled(BackgroundImage)`
  position: relative !important;
  width: 100%;
  height: 12rem;
  z-index: -1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    position: absolute !important;
    height: 18rem;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.black};
  opacity: 0.7;
`

export const StyledFooter = styled.footer`
  font-size: 0.8rem;
  line-height: 3rem;
  text-align: center;
  height: 3rem;
  background-color: ${props =>
    transparentize(0.97, props.theme.color.foreground)};
  box-shadow: inset 0 1px 0
    ${props => transparentize(0.95, props.theme.color.foreground)};
`

export const Page = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  ${StyledHeader} {
    flex: 0 0 auto;
  }
  main {
    flex: 1 0 auto;
  }
  footer {
    flex: 0 0 auto;
  }
`

export const Image = styled(Img)``

export const Paper = styled.div`
  background-color: ${props => props.theme.color.background};
  border-radius: ${props => props.theme.radius.small};
  box-shadow: 0 0.5rem 1rem -0.5rem ${props =>
    transparentize(0.9, props.theme.color.black)};
  padding: 2rem;
  margin: 0 -1rem;

  ${props =>
    props.article &&
    css`
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    `};

  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    padding: 2.5rem 3rem;
    margin: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.large}) {
    padding: 3.5rem 4rem;
  }

  pre[class*="language-"] {
    border-radius: 0;
    padding-left: 2rem;
    padding-right: 0rem;

    @media (min-width: ${props => props.theme.breakpoints.small}) {
      margin: 2.5rem -3rem !important;
      padding-left: 3rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      margin: 3.5rem -4rem !important;
      padding-left: 4rem;
    }
  }

  ${Image}, .gatsby-resp-image-wrapper, pre[class*="language-"] {
    margin: 2rem -2rem !important;
    overflow: hidden;

    @media (min-width: ${props => props.theme.breakpoints.small}) {
      margin: 2.5rem -3rem !important;
    }

    @media (min-width: ${props => props.theme.breakpoints.large}) {
      margin: 3.5rem -4rem !important;
    }
  }

  /* > *:first-child {
    ${Image}, .gatsby-resp-image-wrapper {
      margin-top: -1.5rem !important;
      border-radius: ${props => props.theme.radius.small}
        ${props => props.theme.radius.small} 0 0;

      @media (min-width: ${props => props.theme.breakpoints.small}) {
        margin-top: -2.5rem !important;
        border-radius: ${props => props.theme.radius.small}
          ${props => props.theme.radius.small} 0 0;
      }

      @media (min-width: ${props => props.theme.breakpoints.large}) {
        margin-top: -3.5rem !important;
        border-radius: ${props => props.theme.radius.small}
          ${props => props.theme.radius.small} 0 0;
      }
    }
  } */
`

export const Main = styled.main`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${Wrapper} {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  ${Paper} {
    flex: 1 0 auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.small}) {
    padding: 6rem 0 4rem 0;
  }
`

export const Button = styled.button`
  display: inline-block;
  position: relative;
  line-height: 2.25rem;
  font-size: 1rem;
  padding: 0 1rem;
  text-align: center;
  min-width: 8rem;
  border-radius: ${props => props.theme.radius.small};
  border: none;
  transition: all 150ms ${props => props.theme.easing};
  color: ${props => props.theme.color.white};
  background-color: ${props => transparentize(0.8, props.theme.color.black)};
  border-bottom: 3px solid
    ${props => transparentize(0.8, props.theme.color.black)};
  cursor: pointer;
  z-index: 1;
  box-shadow: 0 3px 4px ${props => transparentize(0.8, props.theme.color.black)};
  text-shadow: 0 1px 1px
    ${props => transparentize(0.5, props.theme.color.black)};

  &:after,
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: ${props => props.theme.radius.small}
      ${props => props.theme.radius.small} 0 0;
    transition: all 150ms ${props => props.theme.easing};
  }

  &:after {
    box-shadow: inset 0 0 3px
      ${props => transparentize(0.6, props.theme.color.black)};
  }

  &:before {
    background-color: ${props => props.theme.color.foreground};
    opacity: 0;
  }

  &:hover {
    &:before {
      opacity: 0.15;
    }
  }

  &:active {
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 0;
    }
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.color.secondary};
  }

  ${p =>
    p.primary &&
    css`
      background-color: ${props => props.theme.color.primary};
      color: ${props => props.theme.color.white};
    `};
`

export const Meta = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  span {
    opacity: 0.5;
  }
  a:not(:hover) {
    text-decoration: none;
  }
`

export const ArticleTitle = styled.h3`
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1rem !important;
  a:not(:hover) {
    text-decoration: none;
  }
  & + ${Meta} {
    margin-top: 0;
  }
  ${props =>
    props.big &&
    css`
      font-size: 2.4rem;
      margin-bottom: 2.4rem !important;
      & + hr {
        margin-bottom: 2.4rem !important;
      }
    `};
`

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  justify-items: stretch;

  @media (min-width: ${props => props.theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`

export const FormField = styled.div`
  input,
  textarea {
    position: relative;
    line-height: 2.25rem;
    font-size: 1rem;
    padding: 0 0.625rem;
    border-radius: ${props => props.theme.radius.small};
    border: none;
    width: 100%;
    transition: box-shadow 150ms ${props => props.theme.easing};
    color: ${props => props.theme.color.foreground};
    background-color: ${props =>
      mix(0.95, props.theme.color.background, props.theme.color.foreground)};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${props => props.theme.color.secondary};
    }
  }

  textarea {
    line-height: 1.5;
    padding: 0.5rem 0.625rem;
    resize: vertical;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  ${p =>
    p.wide &&
    css`
      @media (min-width: ${props => props.theme.breakpoints.medium}) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    `};
`
