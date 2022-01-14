import Head from "next/head";

const Metadata = () => {
  return (
    <Head>
      <meta charSet={"utf-8"} />
      <meta
        name={"viewport"}
        content={"width=device-width, initial-scale=1, shrink-to-fit=no"}
      />
      <meta
        name={"description"}
        content={"Jay Critch's Personal Website. Brooklyn Rap Artist"}
      />
      <meta
        name={"keywords"}
        content={
          "Jay, Critch, Jay Critch, Hood Fav, Hood Favorite, Talk Money, TME, 730, Talk Money Entertainment"
        }
      />
      <meta name={"author"} content={"Deyby Rodriguez"} />
      <meta name={"robots"} content={"index, follow"} />
      <title>Jay Critch's Personal Website</title>
    </Head>
  );
};

export default Metadata;
