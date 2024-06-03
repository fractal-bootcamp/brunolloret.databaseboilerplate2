import Card from "~/components/Card"

const projectsList = [

    {
        name: "Mapping the Rabbis of Palestine and Babylon",
        description: "App for understanding who is who in discussions held by the rabbis as depicted at the Talmud of Babylon",
        image: "/images/BabylonianTalmud/Rabbi_Ashi.jpg",
        href: "/BabylonianTalmud/"

    },

    {
        name: "=0: an interactive online fiction",
        description: "=0 is an interactive fictional experience.Here, you follow a shapeshifter as it enters into a valley under military occupation. ='s journey will transform the valley's dynamics forever.",
        image: "/images/EqualZeroImages/DALL·E 2024-01-25 12.19.01 - In this scene, the young girl is depicted with an iron ring around her neck, emphasizing her character's circumstances. She is also wearing a tank cap copy.png",
        href: "/EqualZero/"

    },

    {
        name: "Learning to learn what I do not know what I do not know",
        description: "personal journal of a Bootcamp",
        image: "/images/JournalBootcamp/r001-001 copia copy 2.jpg",
        href: "/LearningToLearn/"

    }
]




export function Projects(props: {name: string, image: string, description: string, href: string}) {
    return (
        <>
            <div className= ''>
                <p className= ''> {props.name}</p>
                <img className= 'max-w-xs max-h-xs' src={props.image}/> 
                <p className='text-lg'> {props.description}</p>
                <a href={props.href} className= 'font-extrabold italic'> Know more</a>
            </div>
        </>
    )
}
export default function ProjectsDeployment() {
    const deployedData = projectsList.map(
        item => {
            return (
                <Projects name={item.name}
                    image={item.image}
                    description={item.description}
                    href={item.href}
                />
            )
        }
    )

    return (

        <>
        <Card title="This season's projects!" />
            {deployedData}
        </>
    )


}




