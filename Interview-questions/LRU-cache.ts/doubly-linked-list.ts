import { ListNode } from "./list-node";

export class DoublyLinkedList {
    head: ListNode;
    tail: ListNode;
    constructor() {
        const dummyHead = new ListNode(-1, -1);
        const dummyTail = new ListNode(0, 0);
        dummyHead.next = dummyTail;
        dummyTail.prev = dummyHead;

        this.head = dummyHead;
        this.tail = dummyTail;
    }
}