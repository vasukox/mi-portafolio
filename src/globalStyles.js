
import { createGlobalStyle } from 'styled-components';

// Centralized CSS variables for colors and typography.
export const GlobalStyle = createGlobalStyle`
  :root{
    /* Enhanced Color palette */
    --bg-1: #050c18; /* deeper navy */
    --bg-2: #0a1929; /* rich dark blue */
    --bg-3: #0d2137; /* accent dark blue */
    --surface: #0a1420; /* surface card/bg */
    --text: #e8f4fd; /* brighter primary text */
    --heading: #ffffff; /* headings */
    --muted: #a0b3c8; /* lighter secondary text */
    --accent: #00d4ff; /* primary accent (cyan) */
    --accent-hover: #00e5ff; /* hover state for accent */
    --accent-2: #ff8a00; /* secondary accent (orange) */
    --accent-3: #7c3aed; /* tertiary accent (purple) */
    --glass: rgba(255,255,255,0.04);
    --glass-strong: rgba(255,255,255,0.08);
    --card: rgba(255,255,255,0.03);

    /* Typography scale */
    --font-family-sans: 'Inter', 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    --font-size-base: 16px;
    --font-size-lg: 20px;
    --font-size-xl: 36px;
    --font-size-xxl: 52px;
    --line-height-base: 1.6;
    /* Heading tokens */
    --fs-h1: var(--font-size-xxl);
    --fs-h2: var(--font-size-xl);
    --fs-body: var(--font-size-base);
    --fs-lead: var(--font-size-lg);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-family-sans);
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 50%, var(--bg-3) 100%);
    background-attachment: fixed;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: var(--line-height-base);
    scroll-behavior: smooth;
    font-size: var(--font-size-base);
    position: relative;
    overflow-x: hidden;

    /* Animated gradient overlay */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:
        radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%);
      pointer-events: none;
      z-index: 0;
    }
  }

  #root {
    position: relative;
    z-index: 1;
  }

  a {
    color: var(--accent);
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-hover);
    }
  }

  img { display: block; max-width: 100%; }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-1);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent) 0%, #0099cc 100%);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--accent-hover) 0%, var(--accent) 100%);
  }
`;
