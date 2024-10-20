import { useState } from 'react'
import { Eye, EyeOff, User, Lock, Send, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center space-y-2">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-green-600">Clube Delivery</h2>
          <p className="text-sm text-blue-600">WhatsApp AI Chatbot</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-green-600">Nome de usuário</Label>
            <div className="relative">
              <Input id="username" type="text" placeholder="Digite seu nome de usuário" className="pl-10" />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-green-600">Senha</Label>
            <div className="relative">
              <Input 
                id="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Digite sua senha" 
                className="pl-10 pr-10"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-green-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-green-500 hover:bg-blue-600 text-white">
            Cadastrar <Send className="ml-2" size={18} />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}