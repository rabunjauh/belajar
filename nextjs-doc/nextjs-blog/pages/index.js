// import Head from "next/head";
// import Layout, { siteTitle } from "../components/layout";
// import utilStyles from "../styles/utils.module.css";

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this in{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }

// import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData();
  // return {
  //   props: {
  //     allPostsData,
  //   },
  // };
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetch("http://localhost:3000/position");
  const data = await res.json();
  return { props: { data } };
}

export default function Home({ data }) {
  console.log(data.positions);
  const positions = data.positions;
  console.log(positions);
  return (
    <ul>
      {positions.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
  // return (
  // <Layout home>
  //   {/* Keep the existing code here */}

  //   {/* Add this <section> tag below the existing <section> tag */}
  //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  //     <h2 className={utilStyles.headingLg}>Blog</h2>
  //     <ul className={utilStyles.list}>
  //       {allPostsData.map(({ id, title, completed }) => (
  //         <li className={utilStyles.listItem} key={id}>
  //           {title}
  //           <br />
  //           {id}
  //           <br />
  //           {completed}
  //         </li>
  //       ))}
  //     </ul>
  //   </section>
  // </Layout>
  // );
}
