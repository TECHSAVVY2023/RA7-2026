import { ref, onMounted } from 'vue'

interface GoogleAuthResponse {
  credential: string
}

export const useGoogleAuth = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const initGoogleAuth = () => {
    // Load Google Sign-In SDK
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }

  const handleGoogleLogin = () => {
    isLoading.value = true
    error.value = null

    try {
      // Get the backend URL from environment or construct it
      const apiBase = useRuntimeConfig().public.apiBase || window.location.origin
      const frontendUrl = window.location.origin
      
      // Redirect to backend Google OAuth endpoint
      const loginUrl = `${apiBase}/api/ra/auth/google/?origin=${encodeURIComponent(frontendUrl)}`
      window.location.href = loginUrl
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to initiate Google login'
      isLoading.value = false
    }
  }

  onMounted(() => {
    initGoogleAuth()
  })

  return {
    isLoading,
    error,
    handleGoogleLogin,
    initGoogleAuth
  }
}
