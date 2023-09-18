import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const news = [{
  "title": "Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares",
  "link": "https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares",
  "keywords": null,
  "creator": [
    "Milenio Digital"
  ],
  "video_url": null,
  "description": "El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de los Estados Unidos. Algo tiene que ceder.?, señaló el multimillonario a través de su cuenta de Twitter.True national debt, including unfunded entitlements, is at least $60 trillion ? roughly three times the size of the entire US economy. Something has got to give.? Elon Musk (@elonmusk) February 11, 2022 Esto como parte de los comentarios en respuesta a una publicación del medio satírico The Babylon Bee, en donde señaló que supuestamente el presidente estadunidense, Joe Biden, planeaba pagar la deuda pública apostando ?doble o nada? en el equipo de futbol de los Cincinnati Bengals en el Super Bowl. Según el Departamento del Tesoro de Estados Unidos el total de la deuda de dicho país ya supera los 30 billones de dólares, dio a conocer el martes pasado.El endeudamiento del gobierno se aceleró durante la pandemia de covid-19, como parte del gasto del gobierno estadunidense para amortiguar el golpe económico de la crisis. La deuda pública se ha disparado en alrededor 7 billones desde finales de 2019.m{1861862}RM?",
  "content": null,
  "pubDate": "2022-02-14 05:05:43",
  "full_description": null,
  "image_url": "http://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg",
  "source_id": "milenio",
  "country": [
    "mexico"
  ],
  "category": [
    "top"
  ],
  "language": "spanish"
}]

const lista = [
  'Giovana',
  'Thomaz,'
]

const pessoa = {
  name: 'Thomaz',
  age: 29,
}

console.log()

function News(props) {
  return (
    <>
       <div className={styles.card_news}>
          <div className={styles.card_img_title}>
            <Image
              src={props.image_url}
              width={200}
              height={125}
              alt="alt"
              className={styles.card_img}
            />
            <div className={styles.card_img_creator}>
              <h1 className={styles.h1}>{props.title}</h1>
              <p>{props.creator}</p>
            </div>
          </div>
          <p>{props.description}</p>
          <p>{props.link}</p>
        </div>
    </>
  )
}

function NewsList(props) {
  return (
    <>
      {props.newsArray.map((news) => {
        return (
          <News
            title={news.title}
            image_url={news.image_url}
            creator={news.creator}
            description={news.description}
            link={news.link}
          />
        )
      })}
    </>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Lab 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NewsList
          title={news[0].title}
          image_url={news[0].image_url}
          creator={news[0].creator}
          description={news[0].description}
          link={news[0].link}
        />
      </main>
    </>
  )
}

