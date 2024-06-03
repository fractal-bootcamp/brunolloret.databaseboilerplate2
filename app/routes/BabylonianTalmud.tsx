export function TannaimImage () {
    return (
        <>
        <img
                className="h-64 w-64 rounded-lg"
                src='/images/BabylonianTalmud/01 tanaim 001.jpg'
                alt='Map of the Tannaim'
                style={{ width: '400px', height: '300px' }}
                />
        </>
    )
}

export default function BabylonianTalmud () {
    return (
        <>
        <div className= "flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
            <h2>
                <p className= 'size-xl font-semibold text-center text-black-bold p-8 '>
                Here is a map of the first generation of scholars on Jewish Oral Law
                </p>
            </h2>
            <div  className= "object-center">
                <TannaimImage />
            </div>
            </div>
            
        </div>
        </>
    )
}