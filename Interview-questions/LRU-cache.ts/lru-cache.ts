import { DoublyLinkedList } from "./doubly-linked-list";
import { ListNode } from "./list-node";

export class LRUCache {
    maxCapacity: number;
    capacity: number;
    linkedList: DoublyLinkedList;
    keyListNodeMap: Map<number, ListNode>;

    constructor(capacity: number) {
        this.maxCapacity = capacity;
        this.capacity = 0;
        this.keyListNodeMap = new Map();
        this.linkedList = new DoublyLinkedList();
    }

    get(key: number): number {
        const mapValue = this.keyListNodeMap.get(key);
        if (mapValue) {
            this.deleteReference(mapValue);
            this.insertAfterHead(this.linkedList.head, mapValue);
            return mapValue.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (!this.keyListNodeMap.has(key)) {
            const newNode = new ListNode(value, key);
            if (this.capacity === this.maxCapacity) {
                //delete the node previous to tail
                const nodeToDelete = this.linkedList.tail.prev!;
                this.deleteReference(nodeToDelete);
                this.keyListNodeMap.delete(nodeToDelete.key);
                this.capacity--;
                //add the newNode after head
            }
            this.insertAfterHead(this.linkedList.head, newNode);

            this.keyListNodeMap.set(key, newNode);
            this.capacity++;
        } else {
            const nodeToUpdate = this.keyListNodeMap.get(key)!;
            this.deleteReference(nodeToUpdate);
            nodeToUpdate.val = value;
            this.insertAfterHead(this.linkedList.head, nodeToUpdate);
        }
    }

    deleteReference(node: ListNode | null) {
        if (node && node.prev && node.next) {
            let prev = node.prev;
            let next = node.next;
            node.prev = null;
            node.next = null;
            prev.next = next;
            next.prev = prev;
        }
    }

    insertAfterHead(head: ListNode, nodeToInsert: ListNode) {
        if (head.next) {
            head.next.prev = nodeToInsert;
            nodeToInsert.next = head.next;
        }
        head.next = nodeToInsert;
        nodeToInsert.prev = head;
    }
}