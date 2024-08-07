export default function virtualtour({src}: {src: string}) {
    return (
        <div>
            {/* virtual tour sample */}
            <iframe src={src}
                    className='w-full h-full absolute'
                    title='PTM Virtual Tour'
                    name='virtualtour iframe'
                    width='100%'
                    height='100%'
                    allow='fullscreen; accelerometer; gyroscope; magnetometer; xr-spatial-tracking; autoplay; camera; microphone'
            >
            </iframe>
        </div>
    )
}