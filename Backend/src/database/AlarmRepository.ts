import { AlarmProps } from 'Shared-Types/AlarmProps';
import { SequelizeAlarmModel } from '../../models/alarms';

export class AlarmRepository {

    private readonly alarmsList: AlarmProps[] = [
        {
            id: 0,
            title: "Acordar",
            description: "Isso e um teste de descricao"
        },
        {
            id: 1,
            title: "Almocar",
            description: "Teste descricao 2" 
        }
    ]

    
    public getAlarmsList(): AlarmProps[] {
        return this.alarmsList;
    }

    public saveAlarm(form: Record<string, any>) {
        const jane = SequelizeAlarmModel.build({title: form['title'], description: form['description']});
        jane.save();
    }

}
