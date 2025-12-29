import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HelloWorld(props: { msg: string }) {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <h1 className="text-4xl font-bold">{props.msg}</h1>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Counter Demo</CardTitle>
          <CardDescription>Click the button to increment the counter</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button 
            type="button" 
            onClick={() => setCount(count + 1)}
            className="w-full"
          >
            Count is {count}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Edit <code className="bg-muted px-1 py-0.5 rounded">src/components/HelloWorld.tsx</code> to test HMR
          </p>
        </CardContent>
      </Card>

      <p className="text-sm text-center">
        Check out{' '}
        <a 
          href="https://github.com/crxjs/create-crxjs" 
          target="_blank" 
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          create-crxjs
        </a>
        , the official starter
      </p>

      <p className="text-xs text-muted-foreground text-center">
        Click on the Vite, React and CRXJS logos to learn more
      </p>
    </div>
  )
}
