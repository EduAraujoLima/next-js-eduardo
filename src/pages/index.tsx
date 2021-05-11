import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import styles from "../styles/index.module.scss";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <div className="container">
        <div>
          <h1 className={styles.TitleRed}>
            Oi, tua tia é minha,
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
        </div>
      </div>
    </Layout>
  );
}

//<SocialList />