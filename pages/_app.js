import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

// import App from 'next/app';
// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <>
//         <div>app</div>
//         <Component {...pageProps} />;
//       </>
//     );
//   }
// }
