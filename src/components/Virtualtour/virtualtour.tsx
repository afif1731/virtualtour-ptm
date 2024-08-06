'use client';

export default function virtualtour() {
    return (
        <div>
            {/* virtual tour sample */}
            <iframe src={process.env.VT_URI}
                    className='w-full h-full absolute'
                    name='virtualtour sample'
                    width='100%'
                    height='100%'
                    allow='fullscreen; accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; autoplay; camera; microphone'
                    allowFullScreen
            >
            </iframe>
        </div>
    )
}