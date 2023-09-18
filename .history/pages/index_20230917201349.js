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
        <WorkExperience id="1" profile="Jack Dreams">
          <Company name="Microsoft" from_date="Jan 2019" to_date="Dec 2020" />
          <Company name="Netflix" from_date="Jan 2021" to_date="May 2022" />
          <Company name="Google" from_date="Jun 2021" to_date="Present" />
        </WorkExperience>
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

function WorkExperience(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      <ul className="work">{props.children}</ul>
    </div>
  );
}