import dotenv from "dotenv"
import fastify from "fastify"
import cors from "@fastify/cors"

dotenv.config()

const server = fastify({logger: true})

server.register(cors, {
    origin: "*"
})


//create data

const teams = [{
    id: 1,
    name: "Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Red-Bull-logo.png"
},
{
    id: 2,
    name: "Ferrari",
    base: "Maranello, Italy",
    logo: "https://1000logos.net/wp-content/uploads/2018/04/Ferrari-logo.png"
},
{
    id: 3,
    name: "Mercedes",
    base: "Brackley, United Kingdom",
    logo: "https://1000logos.net/wp-content/uploads/2021/04/Mercedes-logo.png"
},
{
    id: 4,
    name: "McLaren",
    base: "Woking, United Kingdom",
    logo: "https://1000logos.net/wp-content/uploads/2020/10/McLaren-Logo.png"
},
{
    id: 5,
    name: "Aston Martin",
    base: "Silverstone, United Kingdom",
    logo: "https://1000logos.net/wp-content/uploads/2021/07/Aston-Martin-Logo.png"
},
{
    id: 6,
    name: "Alpine",
    base: "Enstone, United Kingdom",
    logo: "https://1000logos.net/wp-content/uploads/2021/08/Alpine-logo.png"
},
{
    id: 7,
    name: "Williams",
    base: "Grove, United Kingdom",
    logo: "https://1000logos.net/wp-content/uploads/2021/07/Williams-Logo.png"
},
{
    id: 8,
    name: "Alfa Romeo",
    base: "Hinwil, Switzerland",
    logo: "https://1000logos.net/wp-content/uploads/2021/07/Alfa-Romeo-Logo.png"
},
{
    id: 9,
    name: "Haas",
    base: "Kannapolis, United States",
    logo: "https://1000logos.net/wp-content/uploads/2022/03/Haas-logo.png"
},
{
    id: 10,
    name: "AlphaTauri",
    base: "Faenza, Italy",
    logo: "https://1000logos.net/wp-content/uploads/2021/07/AlphaTauri-Logo.png"
}]

server.get("/teams", async (request, response) => {
    
    response.type("application/json").code(200)

    return {teams}
})

//filter teams

//criando um contrato
interface TeamsParams {
    id: string
}

server.get<{Params: TeamsParams}>("/teams/:id", async (request, response) => {
    
    const id = parseInt(request.params.id)
    
    //find procura algo dentro de um vetor e se achar acresenta ele na variavel
    const team = teams.find( (d) => d.id === id)

    if(!team){
        response.type("application/json").code(404)
        return {message: "Team Not Found"}
    } else {
        response.type("application/json").code(200)
        return {team}
    }
})



server.listen({port: 3333}, () => {
    console.log("Server init")
})