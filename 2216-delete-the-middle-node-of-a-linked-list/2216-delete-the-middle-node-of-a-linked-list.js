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
var deleteMiddle = function (head) {

    if (head === null || head.next === null) {
        return null;
    }

    let fast = head;
    let slow = head;
    let prev = null;

    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;

    return head
};