import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import { Button } from "@components/ui/button"
import { UserCog } from 'lucide-react'

const Usercard: React.FC= () => {
  const [role, setRole] = useState<string | null>()

  return (
    <Card className="h-[200px] overflow-y-auto mx-2">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">User Role</CardTitle>
      <UserCog className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent className="space-y-2">
      <Input placeholder="Username" />
      <Select onValueChange={(value) => setRole(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="seller">Seller</SelectItem>
          <SelectItem value="consumer">Consumer</SelectItem>
          <SelectItem value="transporter">Transporter</SelectItem>
        </SelectContent>
      </Select>
      {role === "transporter" && (
        <>
          <Input placeholder="RFID" />
          <Input placeholder="SENSOR" />
        </>
      )}
      <Button className="w-full">Set</Button>
    </CardContent>
  </Card>
  )
}

export default Usercard;