/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

    let curr = head;
    let occurance = new Map();

    
    while (curr) {
        occurance.set(curr.val, (occurance.get(curr.val) || 0) + 1);
        curr = curr.next;
    }

    curr = head;
    let prev = null;
    let newHead = null;

    while (curr) {
        if (occurance.get(curr.val) === 1) {  
            if (!newHead) {
                newHead = curr;  
            }
            if (prev) {
                prev.next = curr;  
            }
            prev = curr; 
        }
        curr = curr.next; 
    }

    if (prev) {
        prev.next = null; 
    }

    return newHead;
};
