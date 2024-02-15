import { Card, CardTitle, CardHeader } from "@/components/ui/card"

function SiteDoesNotExist() {
  return (
    <Card className="h-[100px]">
        <CardHeader>
            <CardTitle>Site does not exist</CardTitle>
        </CardHeader>
    </Card>
  )
}

export default SiteDoesNotExist