// Components
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Login from "../components/Login";

// Next Auth
import Head from "next/head";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home({ session }) {
  if (!session) {
    return <Login />;
  }

  const backgroundColor = "#F0F3F4";

  return (
    <div>
      <body
        style={{
          background: `${backgroundColor}`,
        }}
      >
        <Head>
          <title>Facebook Clone</title>
        </Head>
        {/* Header */}
        <Header />

        <main>
          {session && (
            <>
              {/* <h1>Your logged in as {session.user.name}</h1> */}
              {/* <button onClick={signOut}>Signout</button> */}
            </>
          )}

          {/* Sidebar */}
          <Sidebar />

          {/* Feed */}
          <Feed />
          {/* Widgets */}
        </main>
      </body>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the users session state. Logged in or not.
  const session = await getSession(context);

  // prepares the page and parses the users infomation as a prop a pushes the request from the server and renders the users page if they are logged in or not.
  return {
    props: {
      session,
    },
  };
}
