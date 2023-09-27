import { Router } from 'express'
import AlarmService from './services/AlarmService';

const routes = Router();

const alarmService = new AlarmService();
routes.get('/alarmlist', function(req, res) {
    res.send(alarmService.getAlarms());
});

routes.post('/teste', function(req, res) {
  const result = alarmService.postAlarm(req.body);
  res.status(200).send(result);
});
export default routes;
