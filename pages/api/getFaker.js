import { faker } from '@faker-js/faker'


export default async function handler(req, res) {

  try {

    const randomName = faker.name.fullName(); // Rowan Nikolaus
    const randomEmail = faker.internet.domainName(); // Kassandra.Haley@erich.biz
  
    res.status(200).json({ data: {name: randomName, email: randomEmail } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve WHOIS data." });
  }

  console.timeEnd(timetaken);
}
