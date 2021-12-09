/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//time O(n)
//space O(1)
var removeNthFromEnd = function(head, n) {
    //temp head for exception cases
    let tempHead = {next: head};
    let slow = tempHead;
    let fast = tempHead;
    
    //move fast var n times ahead of slow var
    for(let i = 1; i <=n; i++){
        fast = fast.next;
    }
    
    //move both vars one ahead until fast reaches the end
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    
    //skip the nth node
    slow.next = slow.next.next;
    return tempHead.next;
};
