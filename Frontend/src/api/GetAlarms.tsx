import axios from "axios";
import AlarmComponent from "../components/AlarmComponent";
import { AlarmProps } from "../../../Shared-Types/AlarmProps";

export const alarmList = await axios.get<AlarmProps[]>("http://127.0.0.1:3000/alarmlist")
  .then(function(response) {
    const data = response.data;
    const components = data.map((alarm) => (
      <AlarmComponent
        key={alarm.id}
        id={alarm.id}
        title={alarm.title}
        description={alarm.description}
      />
    ));
    console.log(data);
    return components;
  })
  .catch(function(error){
    console.error(error);
    return [<></>];
  });