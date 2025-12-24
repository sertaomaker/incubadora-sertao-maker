import { useRef, useState, useEffect } from "react";
import { Play, Pause, RotateCcw, RotateCw } from "lucide-react";

import { FastForward } from "lucide-react";
type Props = {
  src: string;
  title?: string;
};

const speeds = [1, 1.25, 1.5, 2];

export default function AudioPlayer({ src, title }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [open, setOpen] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  const skip = (s: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += s;
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
  };

  const format = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setCurrent(audio.currentTime);
      setDuration(audio.duration || 0);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  return (
    <div
      className="
        w-full max-w-2xl mx-auto
        bg-white/80
        backdrop-blur-md
        border border-border
        rounded-xl
        p-3
        shadow-lg
        mb-10
        mt--10
      "
    >
      {title && (
        <p className="text-primary text-center font-semibold text-sm mb-2">
          {title}
        </p>
      )}

      {/* PROGRESS */}
      <div>
        <div onClick={seek} className="h-2 rounded bg-muted/100 cursor-pointer">
          <div
            className="h-2 rounded bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
          <span>{format(current)}</span>
          <span>{format(duration)}</span>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="mt-2 flex items-center gap-2">
        {/* PLAY */}
        <button
          onClick={togglePlay}
          className="
      w-10 h-10
      rounded-full
      bg-primary
      text-primary-foreground
      flex items-center justify-center
      flex-shrink-0
    "
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {/* BACK 5 */}
        <button
          onClick={() => skip(-5)}
          className="
     w-8 h-8
      flex items-center justify-center
      text-muted-foreground
      hover:text-primary
      transition-colors
    "
        >
          <RotateCcw size={18} />
        </button>

        {/* FORWARD 15 */}
        <button
          onClick={() => skip(15)}
          className="
      w-8 h-8
      flex items-center justify-center
      text-muted-foreground
      hover:text-primary
      transition-colors
    "
        >
          <RotateCw size={18} />
        </button>

        {/* SPEED */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="
        w-8 h-8
        flex items-center justify-center
        text-muted-foreground
        hover:text-primary
        transition-colors
      "
          >
            <FastForward size={18} />
          </button>

          {open && (
            <div
              className="
          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
          bg-background
          border border-border
          rounded-md
          shadow-lg
          overflow-hidden
          z-20
        "
            >
              {" "}
              <p className="text-primary text-sm font-semibold px-3">
                Velocidade
              </p>
              {speeds.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSpeed(s);
                    setOpen(false);
                  }}
                  className={`
              block w-full px-3 py-1.5 text-xs text-left
              ${
                speed === s
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }
            `}
                >
                  {s}x
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}


/* <AudioPlayer
          src="src\assets\audios\incubacao-gratuita-e-equity-free-em-pernambuco.m4a"
          title="Desenvolvendo Inovação no Sertão: Conheça o Sertão Inovador"
        />
*/