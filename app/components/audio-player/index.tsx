'use client'

import Image from 'next/image'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

export function AudioPlayer({ url }: { url: string }) {
  const [isLoop, setIsLoop] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio

    const updateCurrentTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration || 0)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnd = () => {
      if (isLoop) audio.play()
    }
    const handleError = () => {
      setError('The audio URL is not supported.')
      audio.pause()
    }

    // Attach event listeners
    audio.addEventListener('timeupdate', updateCurrentTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnd)
    audio.addEventListener('error', handleError)

    // Cleanup on unmount
    return () => {
      audio.pause()
      audioRef.current = null
      audio.removeEventListener('timeupdate', updateCurrentTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnd)
      audio.removeEventListener('error', handleError)
    }
  }, [isLoop])

  const validateAndPlay = async () => {
    if (!audioRef.current) return
    const audio = audioRef.current
    try {
      const response = await fetch(url, { method: 'HEAD' })
      if (
        !response.ok ||
        !response.headers.get('Content-Type')?.startsWith('audio')
      ) {
        throw new Error('Invalid audio URL or unsupported format.')
      }
      audio.src = url
      audio.play()
    } catch (err) {
      console.log(err)
      setError('Invalid Audio URL.')
    }
  }

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      if (!audio.src) {
        validateAndPlay()
      } else {
        audio.play()
      }
    }
  }

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) audioRef.current.currentTime = newTime
  }

  return (
    <div className="flex items-center gap-3">
      <button className="size-11" onClick={togglePlayPause}>
        <Image
          alt="audio-btn"
          src={isPlaying ? '/pause.svg' : '/audiobtn.svg'}
          width={44}
          height={44}
        />
      </button>
      {isPlaying && (
        <>
          <input
            type="range"
            value={currentTime}
            min={0}
            max={duration}
            onChange={handleSeek}
          />
          <p>{Math.ceil(duration - currentTime)}s</p>
        </>
      )}
      {isPlaying && (
        <button
          onClick={() => setIsLoop((prev) => !prev)}
          className={`size-8 ${isLoop ? 'opacity-100' : 'opacity-50'}`}
        >
          <Image
            className="size-full"
            alt="loop-btn"
            src="/suffle.svg"
            width={44}
            height={44}
          />
        </button>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}
