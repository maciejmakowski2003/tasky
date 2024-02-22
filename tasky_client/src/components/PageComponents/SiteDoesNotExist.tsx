import { Card, CardTitle, CardHeader } from "@/components/ui/card"

function SiteDoesNotExist() {
  return (
    <div className="mt-10 flex justify-center">
      <Card className="p-10 w-fit h-fit">
          <CardHeader>
              <CardTitle>Site does not exist</CardTitle>
          </CardHeader>
      </Card>
    </div>
  )
}

export default SiteDoesNotExist