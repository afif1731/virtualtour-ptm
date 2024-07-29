export default function VideoProfile() {
    return (
        <div className=" w-auto">
            <iframe
                className=" w-full lg:min-w-[560px] aspect-video h-auto rounded-2xl"
                src="https://www.youtube.com/embed/JT6jslPyuII?si=EBrZkeo-zWbTIZgN"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>

            </iframe>
        </div>
    )
}