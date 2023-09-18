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

function Company(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.name}</span>
        <span className="from">{props.from_date}</span>
        <span className="to">{props.to_date}</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </li>
  );
}