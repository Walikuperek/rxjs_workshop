import { Events } from '../events.enum';

export interface IEvent {
  type: Events;
  data: any;
  createdAt: Date;
}
