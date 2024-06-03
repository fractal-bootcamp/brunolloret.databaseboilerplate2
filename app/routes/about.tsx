import React from "react"
import MiniCardAbout from "~/components/MiniCardAbout"




export default function About() {
    return (


        <div
        className="font-serif bg-white "
        >
            <div className='p-10'>
            <h2>
                More about me
            </h2>
            </div>

            <h3 className="font-semibold"> Writing — exploring the limits of fiction through weird novels</h3>
            <div className='p-10'>
                <p> I started writing as a teenager with the intention of becoming a professional writer. Since then, I’ve written more than 10 novels and published two — one of which, Nancy (2015), has had far-reaching impact within its readership and in academia. Nancy is a novel utilising a great deal of poetry and visual experimentation. It has inspired academic research on contemporary literary theory with four indexed articles, as well as two undergrad and one PhD dissertation. Translated and published in Australia and the US, Nancy has been reviewed by prestigious literary platforms such as the New Yorker and the Harvard Crimson Literature Review, among others. Since its initial publishing in 2015, along with Leña (2018), my published novels have created a pathway to dialogues with readers outside of academia. My work has had an impact in diverse communities of readers at the intersection between literature, human rights, memory, and some of the less glamorous consequences of globalisation.</p>
                <a href="/pressNancy/" className="italic">Featured work as seen in the press</a>
                </div>

            <h3 className="font-semibold"> Research — understanding the mechanisms of common sense in Western culture </h3>
            <div className='p-10'><p>Whenever you mention the ancient Greeks, people tends to nod and make a comment on how important their culture and legacy is for humanity. Taking this basic pillar of Western 'common sense', while looking to better understand how certain ideas become central in people’s imaginaries, my PhD dissertation analyses role ancient Greece plays in the essays and fiction work of some of the foundational artists and intellectuals of Latin America during the 20th century. By asking, ‘What is ancient Greece to you, and how is it related with Latin America?’, I re-evaluate the way scholars have studied this context thus far, and chart an intellectual map of the region.

                                        As an ambitious initial step into a long-term research, this dissertation will be published as a series of books and multiple indexed papers. It aims to open up a series of enchained questions with the purpose of re-visiting the relevance and real significance of Western and Latin American cultural canons for the 21st century.</p> </div>
            <h3 className="font-semibold"> Teaching — creative writing and a method for methods </h3>
            <div className='p-10'>
            <p> As a creative writing teacher, I've developed my own, unique methodology integrating research from different fields. My method combines approaches from cognitive studies, psychotherapy, organisational theory, as well as traditional creative writing.
            
                I've held tens of creative writing workshops over the course of six years — training hundreds of writers to develop better ways of working and effective approaches to their individual projects. My students have won prizes in literature as a result of attending my workshops. I am currently compiling these principles into a manual for fostering a self-taught approach to writing — regardless of the nature of the project.</p>
            </div>
            <div className='p-10 relative justify-center'>
                <img src="/public/images/r001-001 copia copy.jpg" alt="photo of Bruno reading under the sun" style={{height: 220, width: 330}}/>
            </div>


        </div>
    )
}


