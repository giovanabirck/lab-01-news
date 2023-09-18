import Head from 'next/head'


export default function News() {
  return (
    <>
      <Head>
        <title>Lab 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
        <Avatar
          image="https://randomuser.me/api/portraits/women/23.jpg"
          name="Jane Dreams"
          tagLine="I design and build awesome web applications"
        />
        </div>
       
      </main>
    </>
  )
}

function Avatar(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={props.image} alt="" />
      </div>
      <div>
        <p className="profile">Hello, I'm {props.name}</p>
        <p className="profile-tagline">{props.tagLine}</p>
      </div>
    </div>
  );
}
