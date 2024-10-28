// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    const images = [
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
      "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
      "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
      "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
      "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
      "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
      "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
      "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
      "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
      "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
      "https://utfs.io/f/3bcf33fc-988a-462b-8b98-b811ee2bbd71-17k.png",
      "https://utfs.io/f/5788be0e-2307-4bb4-b603-d9dd237950a2-17l.png",
      "https://utfs.io/f/6b0888f8-b69f-4be7-a13b-52d1c0c9cab2-17m.png",
      "https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png",
      "https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png",
      "https://utfs.io/f/a55f0f39-31a0-4819-8796-538d68cc2a0f-17o.png",
      "https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png",
      "https://utfs.io/f/23d9c4f7-8bdb-40e1-99a5-f42271b7404a-17q.png",
      "https://utfs.io/f/9f0847c2-d0b8-4738-a673-34ac2b9506ec-17r.png",
      "https://utfs.io/f/07842cfb-7b30-4fdc-accc-719618dfa1f2-17s.png",
      "https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png",
    ]
    const barberNames = [
      "Brooklyn Barbearia Fortaleza",
      "Santa Barbearia | Varjota",
      "Sullivan Barber Shop",
      "Barbearia 23 de Julho",
      "Zé Barbeiro - Aldeota",
      "Barbearia Dom Falcão",
      "Salvatore Barbearias",
      "Old Men Barbershop",
      "Barber Shop Old Cut",
      "Barbearia Don Peluquero",
    ]

    const addresses = [
      "R. Canuto de Aguiar, 1428",
      "Av. Dom Luís, 300 - 119",
      "Av. dos Expedicionários, 3130",
      "R. Rodrigues Júnior, 1190",
      "R. Osvaldo Cruz, 1266",
      "Rua Desembargador Otacílio Peixoto, 100",
      "Av. Desembargador Gonzaga, 1377",
      "Av. Farias Brito, 120",
      "Av. Barão de Studart, 2500",
      "R. Chico França, 404",
    ]

    const services = [
      {
        name: "Corte de Cabelo",
        description: "Estilo personalizado com as últimas tendências.",
        price: 60.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Barba",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: 40.0,
        imageUrl:
          "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
      },
      {
        name: "Pézinho",
        description: "Acabamento perfeito para um visual renovado.",
        price: 35.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
      {
        name: "Alisamento",
        description: " Alisamento que proporciona fios lisos e bem modelados.",
        price: 20.0,
        imageUrl:
          "https://utfs.io/f/KFchLKb0unUfaagnYEcGDtFe1xIHk2nXK9iyw6gPhzoNUM84",
      },
      {
        name: "Coloração",
        description:
          "Realce sua beleza com uma coloração vibrante e profissional!",
        price: 50.0,
        imageUrl:
          "https://utfs.io/f/KFchLKb0unUfjSvHbYmWzwUs9iQRHLhqEDMbaVxBtr4STyN3",
      },
      {
        name: "Hidratação",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl:
          "https://utfs.io/f/KFchLKb0unUf2WRInE7ZgJf0zSXjvE2RViIU9aZp16NbFmon",
      },
    ]

    const barbershops = []
    for (let i = 0; i < 10; i++) {
      const name = barberNames[i]
      const address = addresses[i]
      const imageUrl = images[i]

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
        },
      })

      for (const service of services) {
        await prisma.service.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        })
      }

      barbershops.push(barbershop)
    }

    await prisma.$disconnect()
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error)
  }
}

seedDatabase()