import crxLogo from '@/assets/crx.svg'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import HelloWorld from '@/components/HelloWorld'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
          <img src={reactLogo} className="h-24 w-24" alt="React logo" />
        </a>
        <a href="https://crxjs.dev/vite-plugin" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
          <img src={crxLogo} className="h-24 w-24" alt="crx logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + React + CRXJS" />
    </div>
  )
}
