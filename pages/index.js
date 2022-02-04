import Head from "next/head";

export default function Home() {
  const Ideias = () => {
    const Ideia = ({ title, subtitle, image, cta }) => {
      return (
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            backgroundColor: "#1E2029",
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <img
            src={image}
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              height: "auto",
              width: "100%",
            }}
          />
          <div style={{ padding: 25 }}>
            <div style={{ fontWeight: "bold", fontSize: 26, color: "#FFF" }}>
              {title}
            </div>
            <div style={{ color: "#AAA", fontSize: 16, marginTop: 10 }}>
              {subtitle}
            </div>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: 16,
                  textDecorationLine: "underline",
                  color: "#FFF",
                }}
              >
                {cta}
              </div>
              <img
                src="https://uploads-ssl.webflow.com/604f786dd522e221583bfa49/604f786ed522e2795c3bfaca_icon-chevron-right.svg"
                style={{ height: 20, width: 20 }}
              />
            </div>
          </div>
        </div>
      );
    };

    return (
      <div
        style={{
          paddingTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Ideia
          title="Development Jobs"
          subtitle={`All of the best VC jobs - every week. Find your way into the VC world.`}
          cta="See all Development Jobs"
          image="https://uploads-ssl.webflow.com/604f786dd522e221583bfa49/6056223b53114ae9d1c44186_venture-capital-jobs-p-800.jpeg"
        />
        <Ideia
          title="Startup and Tech Articles"
          subtitle={`We curate the best free startup & tech articles on the web.`}
          cta="See all Development Jobs"
          image="https://uploads-ssl.webflow.com/604f786dd522e221583bfa49/605620e2ef1630fb44568e37_venture-capital-reports-p-500.jpeg"
        />
      </div>
    );
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Dev</h1>
        <div className="row">
          <div className="button-border">
            <a>Don't have an account yet?</a>
          </div>
        </div>
      </header>

      <main>
        <div className="lead">
          <h1>Showcase everything you do in one place</h1>
          <p>
            Share highlights, projects, accomplishments, personal milestones &
            everything else you do - all in one place.
          </p>
          <form>
            <div className="button">
              <a>I'm searching for roles</a>
            </div>
            <div className="button-alt">
              <a className="black">I'm searching for developers</a>
            </div>
          </form>
          <h3>Learn about why we started Dev</h3>
        </div>
        <div className="news">
          <h1>Encontre ideias</h1>
          <p>
            Share highlights, projects, accomplishments, personal milestones &
            everything else you do - all in one place.
          </p>
          <Ideias />
        </div>
      </main>

      <footer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>{`Made with ♡ in NYC`}</div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header {
          background-color: #12141D;
          display: flex;
          padding-top: 10px;
          padding-bottom: 20px;
          padding-left: 20px;
          padding-right: 20px;
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        header h1 {
          color: #fff;
          font-weight: bold;
          font-size: 22px;
        }

        .row {
          display: flex;
          flex-direction: row;
        }

        .button {
          margin-bottom: 10px;
          cursor: pointer;
          height: 30px;
          width: 300px;
          border-radius: 5px;
          padding: 10px;
        }
        
        .button-alt {
          margin-left: 10px;
          margin-bottom: 10px;
          background-color: yellow;
          cursor: pointer;
          height: 50px;
          width: 300px;
          border-radius: 5px;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button-border {
          cursor: pointer;
          margin-left: 5px;
          height: 30;
          width: auto;
          border-radius: 5px;
          padding: 10px;
          border: 1px solid #fff;
        }

        main {
          width: 100%;
          flex: 1;
          flex-direction: column;
        }

        .lead {
          width: 100%;
          height: auto;
          padding: 20px;
          padding-bottom: 50px;
          background-color: #12141d;
          justify-content: center;
          align-items: center;
        }

        .lead h1 {
          margin-top: -5px;
          color: #fff;
          text-align: center;
          font-size: 40px;
          font-weight: bold;
        }

        .lead h3 {
          color: #fff;
          margin-top: 20px;
          text-decoration-line: underline;
          text-align: center;
          font-size: 16px;
        }

        .lead p {
          color: #eee;
          text-align: center;
          margin-top: -10px;
          font-
          size: 16px;
        }

        .lead form {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .black {
          color: black;
        }


        @media only screen and (max-width: 600px) {
          .lead form {
            margin-top: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .lead input {
            padding: 15px;
            height: 50px;
            border: 0px solid transparent;
            width: 300px;
            margin-right: 10px;
            margin-bottom: 10px;
            background-color: #fff;
            border-radius: 5px;
          }

          .button-alt {
            margin-left: 0px !important;
          }

        }
        .lead input {
          padding: 15px;
          height: 50px;
          border: 0px solid transparent;
          width: 300px;
          margin-right: 10px;
          background-color: #fff;
          border-radius: 5px;
        }

        .lead .button {
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #3CB17E;
          width: 300px;
          border-radius: 5px;
        }

        .lead input:focus {
          outline: none;
        }

        .news {
          width: 100%;
          height: auto;
          padding: 20px;
          padding-bottom: 50px;
          justify-content: center;
          align-items: center;
        }

        .news h1 {
          color: #333;
          text-align: center;
          font-size: 40px;
          font-weight: bold;
        }

        .news p {
          margin-top: -20px;
          color: #999;
          text-align: center;
          font-size: 16px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          font-weight: bold;
          color: #fff;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
