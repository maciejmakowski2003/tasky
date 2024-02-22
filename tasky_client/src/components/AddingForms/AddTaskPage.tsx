import AddTask from "./AddTask"
import AddCategory from "./AddCategory"
import RemoveCategory from "./RemoveCategory"

function AddTaskPage() {
  return (
    <div className="flex flex-row gap-10">
        <AddTask />
        <div className="flex flex-col gap-10">
            <AddCategory />
            <RemoveCategory />
        </div>
    </div>
  )
}

export default AddTaskPage