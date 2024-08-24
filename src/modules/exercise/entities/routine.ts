import { Exercise } from './exercise';

export interface Routine {
  warmup: Exercise[];
  workout: Exercise[];
  cooldown: Exercise[];
}
