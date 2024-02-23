import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { CardFooter } from "../ui/card"

interface TasksPaginationProps {
    size: number
    pageId: number
    url: string
}

const getPageNumbers = (size: number, pageId: number) => {
    const pages: number[] = []

    if(size < 4) {
        for (let i = 1; i <= size; i++) {
            pages.push(i)
        }
    } else{
        if(pageId === 1){
            pages.push(1, 2, 0, size)
        }
        else if(pageId === size){
            pages.push(1, 0, size-1, size)
        }
        else{
            if(pageId === 2){
                pages.push(1, 2, 0, size)
            }
            else if(pageId === size-1){
                pages.push(1, 0, size-1, size)
            }
            else{
                pages.push(1, 0, pageId, 0, size)
            }
        }
    }
    return pages
}



function TasksPagination({ size, pageId, url }: TasksPaginationProps) {
    const previousPage = pageId>1 ? url + "/" + (pageId - 1) : url + "/1"
    const nextPage = pageId<size ? url + "/" + (pageId + 1) : url + "/" + size

    return (
        <CardFooter className="mt-10">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href={`${previousPage} `} />
                    </PaginationItem>
                    {getPageNumbers(size, pageId).map((page) => 
                        <PaginationItem key={page}>
                            {page === 0 ? <PaginationEllipsis /> : <PaginationLink href={`${url}/${page}`} isActive={page === pageId} >{page}</PaginationLink>}
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        <PaginationNext href={`${nextPage} `} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </CardFooter>
  )
}

export default TasksPagination