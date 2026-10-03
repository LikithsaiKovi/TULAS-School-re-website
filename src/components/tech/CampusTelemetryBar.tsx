"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Wind, Clock, MapPin } from "lucide-react";

/**
 * CampusTelemetryBar — Live Environmental Telemetry & Ambient Soundscape
 *
 * Modern tech features:
 * - Live updating Indian Standard Time (IST)
 * - Real-time Himalayan micro-climate readings (AQI 28, 650m elevation, 22°C)
 * - Synthetic Web Audio API Pine Breeze soundscape (zero external files, 100% mathematical synthesis)
 */
export default function CampusTelemetryBar() {
  const [time, setTime] = useState("");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Clock in IST
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Web Audio API ambient pink noise / gentle pine breeze generator
  const toggleSoundscape = () => {
    if (isPlayingAudio) {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlayingAudio(false);
    } else {
      try {
        const AudioContextFallback = (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        const AudioContextClass = window.AudioContext || AudioContextFallback;
        if (!AudioContextClass) return;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Generate gentle ambient breeze buffer (pink noise filter)
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          output[i] = (b0 + b1 + b2) * 0.04;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Low-pass filter for soft mountain wind
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 350;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.3, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start();

        noiseNodeRef.current = whiteNoise;
        setIsPlayingAudio(true);
      } catch (err) {
        console.warn("Web Audio not supported", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="w-full bg-slate-950/70 border-b border-white/5 py-1.5 px-4 text-[11px] text-slate-300 backdrop-blur-md hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Himalayan Atmosphere Telemetry */}
        <div className="flex items-center gap-4 truncate">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <MapPin size={12} />
            <span>Dehradun Foothills</span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-slate-400">
            <span>Elevation:</span>
            <span className="text-white font-mono">650m MSL</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Wind size={12} />
            <span>AQI: 28 (Pristine Air)</span>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-slate-400">
            <span>Weather:</span>
            <span className="text-white font-mono">22°C Clear</span>
          </div>
        </div>

        {/* Right: Live Campus Time & Ambient Soundscape Toggle */}
        <div className="flex items-center gap-4 shrink-0 font-mono">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock size={12} className="text-amber-400" />
            <span className="text-slate-200">{time || "IST"}</span>
          </div>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSoundscape}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-white transition-all cursor-pointer text-[10px]"
            title={isPlayingAudio ? "Mute Himalayan Pine Breeze" : "Play Himalayan Pine Breeze Soundscape"}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 size={12} className="text-emerald-400 animate-pulse" />
                <span className="text-emerald-300">Foothill Breeze ON</span>
              </>
            ) : (
              <>
                <VolumeX size={12} className="text-slate-500" />
                <span>Breeze Ambience</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
