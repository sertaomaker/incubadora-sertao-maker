import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
} from "lucide-react";

type VideoPlayerProps = {
  src: string;
  title?: string;
  poster?: string;
  type?: "local" | "youtube";
};

export default function VideoPlayer({
  src,
  title,
  poster,
  type = "local",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const updateTime = () => setCurrent(video.currentTime);
    const setMeta = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setMeta);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const changeSpeed = () => {
    if (!videoRef.current) return;
    const speeds = [1, 1.25, 1.5, 2];
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    videoRef.current.playbackRate = next;
    setSpeed(next);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const time = Number(e.target.value);
    videoRef.current.currentTime = time;
    setCurrent(time);
  };

  const fullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto rounded-xl p-[3px]
                bg-gradient-to-br
                from-blue-900/90
                to-indigo-950/90
                via-slate-900/80
                shadow-lg shadow-black/40"
    >
      <div className="bg-black rounded-xl overflow-hidden">
        {title && (
          <div
            className="px-3 py-2 text-white font-semibold
                        border-b border-white/10 text-center"
          >
            {title}
          </div>
        )}

        <div className="w-full aspect-video bg-black">
          {type === "youtube" ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${src}?controls=1&rel=0`}
              allowFullScreen
            />
          ) : (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              className="w-full h-full"
              onEnded={() => setPlaying(false)}
            />
          )}
        </div>

        {type === "local" && (
          <>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={current}
              onChange={seek}
              className="w-full accent-primary h-1 cursor-pointer"
            />

            <div
              className="flex items-center gap-4 px-3 py-2
                          bg-black/90 text-white text-sm"
            >
              <button onClick={togglePlay}>
                {playing ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button onClick={toggleMute}>
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>

              <span className="text-xs">
                {formatTime(current)} / {formatTime(duration)}
              </span>

              <div className="flex-1" />

              <button onClick={changeSpeed} className="flex items-center gap-1">
                <Settings size={16} />
                {speed}x
              </button>

              <button onClick={fullscreen}>
                <Maximize size={18} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* Exemplo de importação

Youtube: <VideoPlayer src="hE8J_Dg6TBk" type="youtube" /> 

Local: <VideoPlayer
  title="Episódio 1: A verdadeira luz do mundo"
  src="/videos/episodio1.mp4"
  poster="/thumbs/episodio1.jpg"
/>


*/
