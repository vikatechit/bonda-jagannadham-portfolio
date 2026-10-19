"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";

const START_AT = 35;

export function AudioPlayer() {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [time, setTime] = useState(START_AT);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const seek = () => {
      if (Number.isFinite(audio.duration) && audio.duration > START_AT && audio.currentTime < START_AT) {
        audio.currentTime = START_AT;
      }
    };

    const start = async () => {
      seek();
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setPlaying(false);
        setBlocked(true);
      }
    };

    const onEnded = () => {
      audio.currentTime = Math.min(START_AT, Math.max(0, (audio.duration || START_AT) - 0.1));
      void audio.play().then(() => setPlaying(true)).catch(() => setBlocked(true));
    };
    const onTime = () => setTime(audio.currentTime);

    audio.addEventListener("loadedmetadata", start, { once: true });
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("timeupdate", onTime);
    if (audio.readyState >= 1) void start();

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      if (audio.currentTime < START_AT && audio.duration > START_AT) audio.currentTime = START_AT;
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const label = playing ? t.audio.pause : blocked ? t.audio.play : t.audio.resume;
  const clock = `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, "0")}`;

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[min(92vw,28rem)] -translate-x-1/2">
      <audio ref={audioRef} src="/audio/yellow-singam.mp3" preload="auto" />
      <div className="flex items-center gap-3 rounded-full border border-leaf/30 bg-cream/95 px-3 py-2 shadow-lg backdrop-blur">
        <button
          type="button"
          onClick={() => void toggle()}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-leaf text-cream"
          aria-label={label}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{t.audio.title}</p>
          <p className="text-xs text-ink/70">
            {t.audio.from} · {clock}
          </p>
        </div>
      </div>
    </div>
  );
}
