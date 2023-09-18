import Head from 'next/head'

const news01 = {
  "title": "Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming",
  "link": "https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/",
  "keywords": [
    "Electric Cars",
    "Uncategorized",
    "BYD",
    "BYD Blade Battery",
    "Tesla",
    "Tesla batteries",
    "Tesla factories",
    "Tesla Giga Shanghai",
    "Tesla Gigafactories"
  ],
  "creator": [
    "Steve Hanley"
  ],
  "video_url": null,
  "description": "Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year.",
  "content": null,
  "pubDate": "2022-02-14 05:28:46",
  "full_description": "According to reports from CnEVPost , the manufacturing capacity of the Tesla Gigafactory in Shanghai is expected to increase to more than 1 million cars a year in the near future. In addition, it reports that BYD will supply about 10 GWh of its LFP Blade batteries a year to Tesla — enough to power more than 200,000 cars. Tesla Giga Shanghai Growth Tesla began a major expansion of its Gigafactory in Shanghai late last year. Currently, it is capable of building 450,000 cars a year . That number is expected to rise to more than 1 million cars a year once the expansion in complete. The enlarged facility is scheduled to begin production in April of this year, according to sources. Tesla said when the expansion project began it would achieve capacity increases by increasing work hours, increasing the number of employees, and increasing the frequency of material turnover. It expects to add 4,000 employees to its payroll, bringing the total workforce at the Shanghai factory to 19,000. This month, on the first day of the Chinese New Year, Tesla posted openings for 1,523 new positions in 11 categories including sales and delivery, service, R&D, manufacturing, infrastructure, and supply chain. The production line optimization will focus on expanding the press shop, body shop, paint shop, final assembly shop, and logistics operation center. BYD Blade Battery Order Rumors have been circulating for some time that Tesla China has placed a large order for BYD Blade batteries . Recently, a source within China posted on social media that BYD will begin mass production of its C112F LFP batteries in March and that Teslas fitted with the new batteries are scheduled to begin shipping from Giga Shanghai in the second quarter. Later, the post was deleted, apparently not because the information was inaccurate but because BYD wished to make the official announcement itself. If Tesla does indeed expand its Giga Shanghai capacity to 1 million cars, BYD could be the battery supplier for about 20% of them. Cars built in China won’t be reserved exclusively for in-country sales but will be shipped to other markets in Asia. The standard range versions of the Model 3 and Model Y currently produced at Tesla’s Shanghai use LFP batteries manufactured by CATL at its factory located just a few blocks away from Giga Shanghai . Tesla has indicated that LFP batteries will be used in both the standard and long range versions of its Model 3 and Model Y cars manufactured in the US and in Europe. BYD already has a US battery factory that manufactures LFP batteries. We leave it to our readers to connect the dots. Appreciate CleanTechnica’s originality? Consider becoming a CleanTechnica Member, Supporter, Technician, or Ambassador — or a patron on Patreon . Advertisement Have a tip for CleanTechnica, want to advertise, or want to suggest a guest for our CleanTech Talk podcast? Contact us here . Twitter LinkedIn Facebook",
  "image_url": null,
  "source_id": "cleantechnica",
  "country": [
    "united states of america"
  ],
  "category": [
    "business"
  ],
  "language": "english"
}

export default function News() {
  return (
    <>
      <Head>
        <title>Lab 01</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {news01.title}
        </div>
        {/* imagem */}
        {/* link */}
        {/* author */}
        {/* desc */}

      </main>
    </>
  )
}

