/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (excludeValues, head) {
    const excludeSet = new Set(excludeValues);

    const dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr.next) {
        if (excludeSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return dummy.next;
};