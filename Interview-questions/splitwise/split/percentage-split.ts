import { User } from '../user';
import { Split } from './split';

export class PercentageSplit extends Split {
  protected percentage: number;
  constructor(user: User, percentage: number, amount: number) {
    super(user);
    this.percentage = percentage;
  }
  getPercentage() {
    return this.percentage;
  }
}
