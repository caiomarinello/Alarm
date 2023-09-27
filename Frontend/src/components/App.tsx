import { alarmList } from "../api/GetAlarms";
import { PostAlarmButton } from "./PostAlarmButton";

function App() {
  return (
    <>
    <div>
      <h1>
        Lista de alarmes
      </h1>
    </div>
    <div>
      {alarmList}
    </div>

    <div>
      <PostAlarmButton/>
    </div>
    </>
  )
}

export default App
