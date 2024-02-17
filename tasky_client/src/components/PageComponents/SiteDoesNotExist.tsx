import { Card, CardTitle, CardHeader } from "@/components/ui/card"

function SiteDoesNotExist() {
  return (
    <Card className="w-fit h-fit">
        <CardHeader>
            <CardTitle>Site does not exist</CardTitle>
        </CardHeader>
    </Card>
  )
}

export default SiteDoesNotExist