export interface ISubscriber {
  name;
  update(data: any): void;
}
