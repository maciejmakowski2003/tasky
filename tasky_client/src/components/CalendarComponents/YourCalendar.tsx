import { Calendar} from "../ui/calendar"

interface YourCalendarProps {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

function YourCalendar({ date, setDate }: YourCalendarProps) {
  return (
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
  )
}

export default YourCalendar