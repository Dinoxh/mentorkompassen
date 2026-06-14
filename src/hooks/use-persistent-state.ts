import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const raw = window.sessionStorage.getItem(key)
    return raw === null ? fallback : (JSON.parse(raw) as T)
  } catch {
    // Malformed JSON or sessionStorage being unavailable (private mode, etc.).
    return fallback
  }
}

/**
 * Drop-in replacement for `useState` that mirrors its value into `sessionStorage`,
 * so it survives page reloads within the same tab but is cleared when the tab closes.
 * Resetting the value to its default effectively clears the stored entry.
 */
export function usePersistentState<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => readStorage(key, defaultValue))

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ignore write failures (e.g. storage disabled or over quota).
    }
  }, [key, value])

  return [value, setValue]
}
