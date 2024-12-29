export class ListNode {
    val: number;
    key: number;
    next: ListNode | null;
    prev: ListNode | null;

    constructor(val: number, key: number) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}