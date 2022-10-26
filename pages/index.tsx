import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DevKrishna</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DevKrishna</h1>
        <svg
          className="fingerprint hover"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 200 200"
        >
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M57.44 190.1c-.63 0-1.26-.15-1.86-.46-1.95-1.03-2.71-3.44-1.68-5.4 5.85-11.16 9.66-22.21 11.35-32.87 2.21-14 1.98-29.13-.69-44.96-.38-1.99-.56-4.05-.56-6.41 0-8.74 3.17-17.16 8.93-23.73 1.45-1.66 3.98-1.83 5.64-.37 1.66 1.46 1.83 3.98.37 5.65C74.46 86.65 72 93.21 72 100c0 1.88.13 3.42.43 5.01 2.83 16.75 3.07 32.75.72 47.61-1.82 11.52-5.91 23.4-12.17 35.33-.71 1.37-2.1 2.15-3.54 2.15"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M88.84 199.34c-.56 0-1.14-.12-1.69-.38-2-.93-2.87-3.31-1.93-5.31 1.94-4.17 3.74-8.55 5.35-13.02.75-2.08 3.04-3.16 5.12-2.41s3.16 3.05 2.41 5.12c-1.7 4.7-3.59 9.31-5.63 13.69-.68 1.45-2.12 2.31-3.63 2.31M99.03 170.63c-.33 0-.65-.04-.98-.12-2.14-.54-3.44-2.71-2.91-4.85 1.02-4.05 1.87-8.13 2.51-12.13 4.47-27.63-1.47-52.33-1.53-52.57-.53-2.15.78-4.31 2.92-4.84 2.14-.53 4.31.77 4.84 2.92.27 1.07 6.41 26.47 1.67 55.77-.68 4.22-1.57 8.53-2.65 12.8-.45 1.81-2.08 3.02-3.87 3.02M106.15 200c-.49 0-.99-.09-1.47-.28-2.06-.81-3.06-3.14-2.25-5.19 2.9-7.34 8.22-22.43 11.22-41 .28-1.72.53-3.49.73-5.27.25-2.2 2.23-3.77 4.43-3.52 2.19.25 3.77 2.23 3.52 4.42-.22 1.91-.48 3.82-.78 5.65-3.12 19.31-8.66 35.02-11.68 42.66-.62 1.57-2.13 2.53-3.72 2.53"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M72.34 195.93c-.61 0-1.23-.14-1.81-.43-1.97-1-2.76-3.41-1.76-5.38 4.18-8.21 9.72-21.22 12.38-36.54 2.65-15.33 2.37-32.63-.83-50.03-.21-1.18-.32-2.37-.32-3.55 0-11.03 8.97-20 20-20 9.36 0 17.37 6.36 19.48 15.46.16.68 3.83 16.87 3.77 37.3 0 2.21-1.79 3.99-4 3.99h-.01c-2.21-.01-3.99-1.8-3.99-4.01.06-19.52-3.53-35.32-3.57-35.48C110.42 91.81 105.61 88 100 88c-6.62 0-12 5.38-12 12 0 .71.06 1.43.19 2.12 3.36 18.3 3.66 36.58.84 52.82-2.83 16.31-8.7 30.1-13.13 38.81-.7 1.38-2.11 2.18-3.56 2.18M182.47 153.19c-.07 0-.15-.01-.22-.01-2.21-.12-3.9-2.01-3.78-4.22.37-6.54.49-13.32.36-20.14-.04-2.21 1.72-4.03 3.93-4.07h.07c2.18 0 3.96 1.74 4 3.93.13 7.01.01 13.99-.37 20.73-.12 2.13-1.88 3.78-3.99 3.78"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M19.7 156.63c-.48 0-.98-.09-1.46-.28-2.05-.8-3.07-3.13-2.26-5.18.94-2.39 1.69-4.82 2.25-7.2 2.15-9.27.26-22.72-1.06-29.92C16.39 109.4 16 104.69 16 100c0-27.66 13.62-53.54 36.43-69.25 1.82-1.25 4.31-.79 5.56 1.03 1.26 1.82.8 4.31-1.02 5.56C36.32 51.55 24 74.98 24 100c0 4.25.35 8.51 1.05 12.67 1.42 7.75 3.45 22.44.97 33.11-.64 2.76-1.51 5.56-2.59 8.31-.62 1.57-2.13 2.54-3.73 2.54"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M30.91 170.7c-.59 0-1.19-.13-1.75-.4-1.99-.97-2.81-3.37-1.84-5.35 3.04-6.24 5.18-12.64 6.35-19 1.89-10.31 1.61-21.91-.86-35.48l-.02-.11c-.52-3.41-.79-6.89-.79-10.36 0-37.5 30.51-68 68-68 5.73 0 11.42.71 16.92 2.12 2.13.55 3.43 2.73 2.88 4.87-.55 2.14-2.73 3.43-4.87 2.88C110.09 40.63 105.06 40 100 40c-33.08 0-60 26.92-60 60 0 3.04.23 6.1.69 9.1 2.64 14.51 2.92 27.04.85 38.29-1.31 7.09-3.67 14.17-7.03 21.07-.7 1.42-2.12 2.24-3.6 2.24"
          />
          <path
            fill="none"
            stroke="#50e3c2"
            strokeWidth="2"
            d="M163.81 175.69c-.22 0-.45-.02-.68-.06-2.17-.38-3.64-2.44-3.26-4.62.57-3.35 1.08-6.75 1.5-10.11 4.52-35.82-1.95-69.43-2.02-69.77l-.03-.17c-2.77-18.35-14.17-34.64-30.51-43.6-1.93-1.07-2.64-3.5-1.58-5.43 1.06-1.94 3.5-2.65 5.43-1.59 18.48 10.14 31.39 28.58 34.56 49.33.46 2.38 6.71 35.66 2.09 72.24-.44 3.47-.97 6.99-1.56 10.45-.33 1.95-2.02 3.33-3.94 3.33"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M8.9 134.37c-1.67 0-3.23-1.06-3.79-2.74C1.72 121.46 0 110.82 0 100c0-9.61 1.36-19.1 4.04-28.22.62-2.12 2.84-3.33 4.96-2.71 2.12.62 3.34 2.84 2.71 4.96C9.25 82.42 8 91.16 8 100c0 9.95 1.58 19.75 4.7 29.11.7 2.09-.44 4.36-2.53 5.06-.42.14-.85.2-1.27.2M13.64 62.02c-.59 0-1.19-.13-1.75-.41-1.99-.96-2.81-3.36-1.85-5.34C26.75 21.98 60.78.42 98.88 0h.04c2.19 0 3.98 1.76 4 3.96.03 2.2-1.75 4.01-3.95 4.04-35.05.39-66.37 20.22-81.73 51.77-.7 1.42-2.12 2.25-3.6 2.25"
          />
          <path
            fill="none"
            stroke="#50e3c2"
            strokeWidth="2"
            d="M196 101.26c-2.16 0-3.94-1.72-4-3.89-1.24-44.33-33.93-81.46-77.74-88.27-2.18-.34-3.67-2.39-3.33-4.57.34-2.18 2.37-3.68 4.56-3.34C163.11 8.6 198.65 48.96 200 97.14c.06 2.21-1.68 4.05-3.89 4.11-.04.01-.07.01-.11.01"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M144.14 189.25c-.33 0-.67-.04-1.01-.13-2.14-.55-3.42-2.74-2.86-4.88 2.91-11.15 4.94-22.41 6.01-33.47 2.3-23.51-.46-45.44-3.19-59.69-.34-1.68-.8-3.4-1.36-5.07-.71-2.1.42-4.37 2.52-5.07 2.09-.7 4.36.43 5.06 2.52.67 1.98 1.21 4.02 1.63 6.06 2.84 14.83 5.7 37.57 3.31 62.03-1.12 11.47-3.22 23.15-6.24 34.71-.47 1.8-2.09 2.99-3.87 2.99"
          />
          <path
            fill="none"
            stroke="#50e3c2"
            strokeWidth="2"
            d="M54.34 146.02c-.15 0-.29-.01-.44-.02-2.2-.24-3.78-2.22-3.54-4.41 1.88-17.38-1.3-31.15-1.34-31.29l-.03-.14c-.66-3.33-.99-6.75-.99-10.16 0-28.67 23.33-52 52-52 16.16 0 31.12 7.32 41.05 20.08 1.36 1.74 1.04 4.25-.7 5.61-1.74 1.36-4.26 1.04-5.61-.7C126.33 62.19 113.67 56 100 56c-24.26 0-44 19.74-44 44 0 2.87.28 5.74.83 8.54.3 1.32 3.45 15.68 1.48 33.91-.22 2.05-1.96 3.57-3.97 3.57"
          />
          <path
            fill="#50e3c2"
            fillRule="evenodd"
            d="M43.4 181.63c-.61 0-1.24-.15-1.82-.45-1.97-1.01-2.74-3.42-1.73-5.39 3.26-6.32 5.81-12.75 7.6-19.11.6-2.13 2.81-3.36 4.94-2.77 2.12.6 3.36 2.81 2.77 4.93-1.94 6.88-4.7 13.82-8.2 20.61-.71 1.38-2.11 2.18-3.56 2.18"
          />
          <path
            fill="none"
            stroke="#50e3c2"
            strokeWidth="2"
            d="M124.95 196.78c-.43 0-.86-.07-1.29-.22-2.09-.71-3.21-2.98-2.5-5.07 3.12-9.17 7.23-23.64 9.09-40.47 2.82-25.51-1.03-48.22-2.82-56.79C124.77 81.34 113.24 72 100 72c-3.31 0-6.55.57-9.64 1.7-2.07.76-4.37-.3-5.13-2.38-.76-2.07.31-4.37 2.38-5.13C91.58 64.74 95.75 64 100 64c17.01 0 31.84 12.03 35.26 28.6 1.87 8.95 5.89 32.64 2.94 59.3-1.94 17.55-6.22 32.61-9.46 42.16-.57 1.67-2.12 2.72-3.79 2.72"
          />
          <path
            fill="none"
            stroke="#50e3c2"
            strokeWidth="2"
            d="M182.1 116.74c-2.08 0-3.83-1.61-3.98-3.71-1.02-14.03-2.7-23.21-2.72-23.3l-.03-.18C170.15 52.18 137.75 24 100 24c-10.34 0-20.37 2.04-29.81 6.07-2.03.86-4.39-.08-5.25-2.12-.87-2.03.08-4.38 2.11-5.24C77.49 18.26 88.57 16 100 16c41.69 0 77.48 31.1 83.29 72.36.19 1.07 1.8 10.18 2.8 24.09.16 2.2-1.49 4.12-3.7 4.28-.09 0-.19.01-.29.01"
          />
        </svg>
      </main>
      <footer className={styles.footer}>
        <h3>Coming Soon</h3>
      </footer>
    </div>
  );
}
