import { SequelizeAlarmModel } from "../../models/alarms";
import { AlarmRepository } from "../database/AlarmRepository";

class AlarmService {
    private readonly alarmRepository: AlarmRepository = new AlarmRepository();
    
    public getAlarms() {
        return this.alarmRepository.getAlarmsList();
    }

    public async postAlarm(form: Record<string, any>) {
        this.alarmRepository.saveAlarm(form);
        return {
            message: "Alarm created!!"
        }; 
    }
}

export default AlarmService;