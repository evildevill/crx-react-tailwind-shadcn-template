import Logo from '@/assets/crx.svg'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function App() {
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {show && (
        <Card className={`mb-4 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold">HELLO CRXJS</h1>
          </CardContent>
        </Card>
      )}
      <Button 
        onClick={toggle}
        size="icon"
        className="rounded-full h-14 w-14 shadow-lg"
      >
        <img src={Logo} alt="CRXJS logo" className="h-8 w-8" />
      </Button>
    </div>
  )
}

export default App
