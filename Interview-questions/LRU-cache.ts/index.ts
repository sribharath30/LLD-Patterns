import { LRUCache } from "./lru-cache";

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.linkedList);
console.log(lRUCache.get(1));
lRUCache.put(3, 3);
console.log(lRUCache.get(2));
lRUCache.put(4, 4);
console.log(lRUCache.get(1));
console.log(lRUCache.get(3));
console.log(lRUCache.get(4));