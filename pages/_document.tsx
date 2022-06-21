import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="id">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Kami adalah organisasi nirlaba yang bertujuan untuk fokus pada pemberdayaan anak-anak dan remaja Indonesia yang hidup dalam kemiskinan melalui upaya kolektif untuk meminimalkan faktor sistemik yang menyebabkan kemiskinan."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
